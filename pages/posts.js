// import { useState, useEffect } from 'react'
import Layout from "../components/Layout";
import Link from "next/link";
// import Preloader from "../components/Preloader";


const client = require('contentful').createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});


export async function getStaticProps() {

  let data = await client.getEntries({
    content_type: "nextTest"
  });
  return {
    props: {
      posts: data.items
    }
  }
}

export default function Posts( { posts }) {
  // const [posts, setPosts] = useState(serverPosts)
  //
  // useEffect( () => {
  //   async function load() {
  //     const response = await fetch( 'http://localhost:4200/posts');
  //     const data = await response.json()
  //     setPosts(data)
  //   }
  //   if (!serverPosts) {
  //     load()
  //   }
  // },[])
  //
  // if (!posts) {
  //   return (
  //     <Preloader/>
  //   )
  // }

  return (
      <Layout title="Posts page">
        <h1>Posts page</h1>

        {/*<ul>*/}
        {/*  {posts.map(post =>*/}
        {/*    <li key={post.id}>*/}
        {/*      /!*for dynamic parameters href*!/*/}
        {/*      <Link href={"/post/[id]"} as={`/post/${post.id}`}>*/}
        {/*        <a>{post.title}</a>*/}
        {/*      </Link>*/}
        {/*    </li>*/}
        {/*  )}*/}
        {/*</ul>*/}

        <ul>
          {posts.length > 0
            ? posts.map( (i) =>
              <li key={i.sys.id}>
                <Link href={'/post/' + i.fields.slug}>
                  <a>
                    {i.fields.title}
                  </a>
                </Link>

              </li>
            )
            : null }
        </ul>
      </Layout>
  )
}

// Posts.getInitialProps = async ({req}) => {
//   if (!req) {
//     return {
//       posts: null
//     }
//   }
//   const response = await fetch( 'http://localhost:4200/posts');
//   const posts = await response.json();
//   return {
//     posts: posts
//   }
// };