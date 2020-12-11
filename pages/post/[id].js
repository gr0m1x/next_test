import { useState, useEffect } from 'react'
import {useRouter} from "next/router";
import Router from "next/router";
import Layout from "../../components/Layout";
import Preloader from "../../components/Preloader";

export default function Post({post: serverPost}) {

  const [post, setPost] = useState(serverPost)

  // имеет доступ к информации роутинга
  const router = useRouter()

  useEffect( () => {
    async function load() {
      const response = await fetch( `http://localhost:4200/posts/${router.query.id}`);
      const data = await response.json();
      setPost(data)
    }
    if (!serverPost) {
      load()
    }

  }, []);
  
  if (!post) {
    return (
      <Preloader/>
    )
  }

  return (
    <Layout title="Post page">
      <h1>{post.title}</h1>
      <hr/>
      <p>{post.body}</p>Mike grim
      <button onClick={ () => Router.push('/posts')}>Back to posts</button>
    </Layout>
  )
}

Post.getInitialProps = async ({query, req}) => {
  // req возвращает сервер, если переходиш внутри фронта - req нету.
  if (!req) {
    return {post: null}
  }

  const response = await fetch( `http://localhost:4200/posts/${query.id}`);
  const post = await response.json();
  return {
    post: post
  }
};

// export async function getServerSideProps({query, req}) {
//   // только для SSR
//   const response = await fetch( `http://localhost:4200/posts/${query.id}`);
//   const post = await response.json();
//
//   return {props: {post}}
// }