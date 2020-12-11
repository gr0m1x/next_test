// import Head from 'next/head'
// import styles from '../styles/Home.module.css'
//
// export default function Home() {
//   return (
//     <div className={styles.container}>
//       <Head>
//         <title>Create Next App</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//
//       <main className={styles.main}>
//         <h1 className={styles.title}>
//           Welcome to <a href="https://nextjs.org">Next.js!</a>
//         </h1>
//
//         <p className={styles.description}>
//           Get started by editing{' '}
//           <code className={styles.code}>pages/index.js</code>
//         </p>
//
//         <div className={styles.grid}>
//           <a href="https://nextjs.org/docs" className={styles.card}>
//             <h3>Documentation &rarr;</h3>
//             <p>Find in-depth information about Next.js features and API.</p>
//           </a>
//
//           <a href="https://nextjs.org/learn" className={styles.card}>
//             <h3>Learn &rarr;</h3>
//             <p>Learn about Next.js in an interactive course with quizzes!</p>
//           </a>
//
//           <a
//             href="https://github.com/vercel/next.js/tree/master/examples"
//             className={styles.card}
//           >
//             <h3>Examples &rarr;</h3>
//             <p>Discover and deploy boilerplate example Next.js projects.</p>
//           </a>
//
//           <a
//             href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//             className={styles.card}
//           >
//             <h3>Deploy &rarr;</h3>
//             <p>
//               Instantly deploy your Next.js site to a public URL with Vercel.
//             </p>
//           </a>
//         </div>
//       </main>
//
//       <footer className={styles.footer}>
//         <a
//           href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Powered by{' '}
//           <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
//         </a>
//       </footer>
//     </div>
//   )
// }

import { useEffect, useState } from 'react'
import Layout from "../components/Layout";
import Link from "next/link";
// import {test} from "../api/api";


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

export default function Index({posts}) {
  // async function fetchEntries() {
  //   const entries = await client.getEntries({
  //     content_type: "nextTest"
  //   });
  //   if (entries.items) return entries.items;
  //   console.log(`Error getting Entries for ${contentType.name}.`)
  // }


  return (
    <Layout title="Home page">
      <h1>
        Hello NEXT
      </h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing.
      </p>

      <div>
        <h3>Posts</h3>
        <ul>
          {posts.length > 0
            ? posts.map( (i) =>
              // <Blog
              //   alt={i.fields.alt}
              //   date={i.fields.date}
              //   key={i.sys.id}
              //   image={i.fields.image}
              //   title={i.fields.title}
              //   url={i.fields.url}
              // />
              <li key={i.sys.id}>
                <Link href={'/blog/' + i.fields.slug}>
                  <a>
                    {i.fields.title}
                  </a>
                </Link>

              </li>
            )
            : null }
        </ul>

      </div>

      </Layout>
  )
}