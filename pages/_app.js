import React from 'react'
import { Layout } from '../components'
import 'tailwindcss/tailwind.css'
import '../styles/globals.scss'
import 'moment/locale/pt-br'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Johnggli Blog</title>
        <link rel="icon" href="https://avatars0.githubusercontent.com/u/43749971" type="image/x-icon" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
