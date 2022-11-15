import { NOTFOUND } from "dns";
import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { Context, useEffect, useState } from "react";
import createAccessToken, { token } from "../../auth/auth";

type goobIO = {
    totalScore: number,
    mythicScore: number,
    mountScore: number,
    characterName: string,
    //character banner
    characterBanner: string,
    petScore: number
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
    }, [])

    return (
        <div className="flex min-h-screen flex-col items-center justify-center py-2">
            <Head>
                <title>GoobIO</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
                <h1>{characterName} GoobIO</h1>
                <h1><b>{mountScore}</b>  goobIO contribution from mounts</h1>
                <h1><b>{mythicScore}</b>   goobIO contribution from Dungeons</h1>
                <h1><b>{petScore}</b> goobIO contribution from pets</h1>
                <h1 className={scoreStyle}><b>{totalScore}</b></h1>
                <img src={characterBanner} className="rounded-lg drop-shadow-lg"></img>

            </main>

            <footer className="flex h-24 w-full items-center justify-center border-t">
                <a
                    className="flex items-center justify-center gap-2"
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{' '}
                    <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                </a>
            </footer>
        </div>
    )
}



//this is an example of an API response, but this thing is FAT, cannot send entire result and still remain performant
//handle types of the token, the results to pass to the page 
export async function getServerSideProps(context: any) {


    const { server, char } = context.params
    console.log("your char query: ", server, char)
    const data: token = await createAccessToken()
    console.log("token", data)

    const mythicPlusUrl = `https://us.api.blizzard.com/profile/wow/character/${server}/${char}/mythic-keystone-profile?namespace=profile-us&locale=en_US&access_token=${data.access_token}`
    const dungeonResults = await fetch(mythicPlusUrl)
    if (dungeonResults.status === 404) {
        return {
            notFound: true,
        }
    }
    const dungeons = await dungeonResults.json()

    let currRating: number = 0
    if (dungeons.current_mythic_rating !== undefined) {
        currRating = dungeons.current_mythic_rating.rating
    }

    const mountUrl = `https://us.api.blizzard.com/profile/wow/character/${server}/${char}/collections/mounts?namespace=profile-us&locale=en_US&access_token=${data.access_token}`
    const mountResults = await fetch(mountUrl)
    if (mountResults.status === 404) {
        return {
            notFound: true,
        }
    }
    const mounts = await mountResults.json()


    const mediaUrl = `https://us.api.blizzard.com/profile/wow/character/${server}/${char}/character-media?namespace=profile-us&locale=en_US&access_token=${data.access_token}`
    const mediaResults = await fetch(mediaUrl)
    if (mediaResults.status === 404) {
        return {
            notFound: true,
        }
    }
    const media = await mediaResults.json()


    const petsUrl = `https://us.api.blizzard.com/profile/wow/character/${server}/${char}/collections/pets?namespace=profile-us&locale=en_US&access_token=${data.access_token}`
    const petsResults = await fetch(petsUrl)
    if (petsResults.status === 404) {
        return {
            notFound: true,
        }
    }
    const pets = await petsResults.json()


    const mountScore = mounts.mounts.length
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

    // Pass data to the page via props
    return { props: { mountScore, mythicScore, totalScore, characterName, characterBanner, petScore } }
}
export default character