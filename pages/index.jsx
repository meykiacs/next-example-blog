import Head from "next/head"

export default function HomePage() {
  console.log("render homepage")
  return (
    <>
      <Head>
        <title>My Blog</title>
      </Head>
      <main>My Blog</main>
    </>
  )
}
