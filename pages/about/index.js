import Router from "next/router";
import Layout from "../../components/Layout";

export default function About({title}) {
    return (
        <Layout title="About us page">
          <h1>
            {title}
          </h1>

          <button onClick={ () => Router.push('/')}>Back to home</button>
        </Layout>
    )
}

About.getInitialProps = async () => {
  // const response = await fetch("http://localhost:4200/about")
  // const data = await response.json()
  return  {
    // title: data.title
    title: "About us"
  }
}