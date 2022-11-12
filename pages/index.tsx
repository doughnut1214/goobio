import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import nextSession from 'next-session'



import createAccessToken from '../auth/auth'
const Home: NextPage = ({ achievementPoints }: any) => {
 


  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>GoobIO</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1>GoobIO</h1>
        {achievementPoints}
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
type token = {
  access_token: string,
  token_type: string,
  expires_in: number,
  sub: string
}
//todo: make new dynamic page routes, /{server}/{character}, do API fetches there using this token
//this is an example of an API response, but this thing is FAT, cannot send entire result and still remain performant
//todo: remove any from the data token, figure out casting unkown to type token
export async function getServerSideProps() {
  const data: any  = await  createAccessToken()
  const url = `https://us.api.blizzard.com/profile/wow/character/stormrage/fenloron/achievements?namespace=profile-us&locale=en_US&access_token=${data.access_token}`
  const results = await fetch(url)
  const test = await results.json()
  const achievementPoints = test.total_quantity
  // Pass data to the page via props
  return { props: { achievementPoints } }
}
export default Home
