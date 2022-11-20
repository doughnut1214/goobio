import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Router from 'next/router'
import nextSession from 'next-session'
import CharacterForm from '../components/CharacterForm'
import Header from '../components/Header'
import React, { useEffect, useState } from 'react'
const Home: NextPage = () => {

  
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Head>
        <title>GoobIO</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1>GoobIO</h1>
        <CharacterForm />
        
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


export default Home
