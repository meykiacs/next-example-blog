import Head from "next/head"
import { getPost, getSlugs } from "../../lib/posts"

export async function getStaticPaths() {
  const slugs = await getSlugs()
  return {
    paths: slugs.map(slug => ({
      params: {slug}
    })),
    fallback: false
  }
}
export async function getStaticProps({ params: { slug } }) {
  console.log('first-post getstaticprops')
  const post = await getPost(slug)
  return {
    props: {
      post
    }
  }
}

export default function PostPage({ post }) {
  console.log("render first post")
  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <main>
        <p>{post.date}</p>
        <h1>
          {post.title}
        </h1>
        <article dangerouslySetInnerHTML={{ __html: post.body }} />

      </main>
    </>
  )
}
