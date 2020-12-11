import { useState, useEffect } from 'react'
import Layout from "../components/Layout";
import Link from "next/link";
import Preloader from "../components/Preloader";

export default function Posts( {posts: serverPosts}) {
  const [posts, setPosts] = useState(serverPosts)

  useEffect( () => {
    async function load() {
      const response = await fetch( 'http://localhost:4200/posts');
      const data = await response.json()
      setPosts(data)
    }
    if (!serverPosts) {
      load()
    }
  },[])

  if (!posts) {
    return (
      <Preloader/>
    )
  }

  return (
      <Layout title="Posts page">
        <h1>Posts page</h1>

        <ul>
          {posts.map(post =>
            <li key={post.id}>
              {/*для динамических параметров href*/}
              <Link href={"/post/[id]"} as={`/post/${post.id}`}>
                <a>{post.title}</a>
              </Link>
            </li>
          )}
        </ul>
      </Layout>
  )
}

Posts.getInitialProps = async ({req}) => {
  if (!req) {
    return {
      posts: null
    }
  }
  const response = await fetch( 'http://localhost:4200/posts');
  const posts = await response.json();
  return {
    posts: posts
  }
};