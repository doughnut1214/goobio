import { NextPage } from "next";
import Head from "next/head";
import {  useEffect, useState } from "react";
import Profile from "../../components/Profile";
import createAccessToken, { token } from "../../auth/auth";
import Header from "../../components/Header";
export type goobIO = {
    totalScore: number,
    mythicScore: number,
    mountScore: number,
    characterName: string,
    //character banner
    characterBanner: string,
    petScore: number,
    //pass the goobIO color to the profile 
    scoreStyle?: string
}
const character: NextPage<goobIO> = ({ mountScore, mythicScore, totalScore, characterName, characterBanner, petScore }: goobIO) => {
    //scoreStyle is the string of classes to apply to the total score
    const [scoreStyle, setScoreStyle] = useState<string>('')

    //determines the scoreStyle string based on conditionals
    const determineColor = () => {

        if (totalScore <= 500) {
            return setScoreStyle("bad-score")
        }
        if (totalScore <= 1500) {
            return setScoreStyle("average-score")
        }
        if (totalScore <= 2500) {
            return setScoreStyle("good-score")
        }
        if (totalScore <= 3000) {
            return setScoreStyle("epic-score")
        }
        return setScoreStyle("great-score")

    }
    useEffect(() => {
        determineColor()
    }, [mountScore, mythicScore, totalScore, characterName, characterBanner, petScore])

    return (
        <div className="flex min-h-screen flex-col items-center justify-center dark:bg-gray-900">
            <Head>
                <title>GoobIO</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">

                <Profile characterBanner={characterBanner} mountScore={mountScore} mythicScore={mythicScore}
                    petScore={petScore} totalScore={totalScore} characterName={characterName} scoreStyle={scoreStyle} />

            </main>

            <footer className="flex h-24 w-full items-center justify-center border-t">
                <a className="flex items-center justify-center gap-2" href="/" rel="noopener noreferrer">
                    <span className="font-bold dark:text-white">GoobIO</span>
                </a>
            </footer>
        </div>
    )
}

const fetcher = async (url: string): Promise<any> => {
    try {
        const results = await fetch(url)


        if (!results.ok) throw new Error
        return results.json()
    } catch (error) {
        return {
            notFound: true,
        }
    }



}


//this is an example of an API response, but this thing is FAT, cannot send entire result and still remain performant
//handle types of the token, the results to pass to the page 
export async function getServerSideProps(context: any) {


    const { server, char } = context.params
    console.log("your char query: ", server, char)
    const data: token = await createAccessToken()
    console.log("token", data)

    const mythicPlusUrl = `https://us.api.blizzard.com/profile/wow/character/${server}/${char}/mythic-keystone-profile?namespace=profile-us&locale=en_US&access_token=${data.access_token}`
    const dungeons = await fetcher(mythicPlusUrl)

    let currRating: number = 0
    if (dungeons.current_mythic_rating !== undefined) {
        currRating = dungeons.current_mythic_rating.rating
    }

    const mountUrl = `https://us.api.blizzard.com/profile/wow/character/${server}/${char}/collections/mounts?namespace=profile-us&locale=en_US&access_token=${data.access_token}`
    const mounts = await fetcher(mountUrl)



    const mediaUrl = `https://us.api.blizzard.com/profile/wow/character/${server}/${char}/character-media?namespace=profile-us&locale=en_US&access_token=${data.access_token}`
    const media = await fetcher(mediaUrl)



    const petsUrl = `https://us.api.blizzard.com/profile/wow/character/${server}/${char}/collections/pets?namespace=profile-us&locale=en_US&access_token=${data.access_token}`
    const pets = await fetcher(petsUrl)

    //if anything goes wrong here, return 404
    try {
        const mountScore = mounts.mounts?.length
        const mythicScore = Math.floor(currRating)
        //assets[2] is the main portrait of the character
        const characterBanner = media.assets[2].value

        let petScore = 0
        pets.pets.map((pet: any) => {
            let countedPets = pet.level === 25 && pet.quality.name == "Rare"
            if (countedPets) {

                petScore += 1
            }
        })
        const totalScore = Math.floor(mounts.mounts.length + currRating + petScore)

        const characterName = char


        return { props: { mountScore, mythicScore, totalScore, characterName, characterBanner, petScore } }
    } catch {
        return {
            notFound: true
        }
    }
    // Pass data to the page via props, or in case of failure, return not found 

}
export default character