import Head from "next/head"
import Navbar from "../components/Navbar"
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  console.log('render _app')
  return (
    <>
    <Head>
      <link rel="icon" href="/icons/favicon.ico" />
    </Head>
      <header>
        <Navbar />
      </header>
      <Component {...pageProps} />
    </>

  )
}
