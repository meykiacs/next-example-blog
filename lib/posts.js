import { readdir, readFile } from 'fs/promises'
import matter from 'gray-matter'
import { marked } from 'marked'

export async function getPost(slug) {
  const source = await readFile(`content/posts/${slug}.md`, 'utf-8')
  const { data: { date, title }, content } = matter(source)
  const body = marked(content)
  return { date, title, body }
}

export async function getSlugs() {
  const files = await readdir('content/posts')
  return files.filter( file => file.endsWith('.md')).map(file => file.slice(0, -3))
}

export async function getPosts() {
  const slugs = await getSlugs()
  const posts = []
  for (const slug of slugs) {
    let post = await getPost(slug)
    post = { ...post, slug }
    posts.push(post)
  }
  return posts
}