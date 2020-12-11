import Layout from "../../components/Layout";

const client = require('contentful').createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

export async function getStaticPaths() {
  let data = await client.getEntries({
    content_type: "nextTest"
  });

  return {
    paths : data.items.map(item => ({
      params: {slug: item.fields.slug}
    })),

    fallback: true
  }
}

export async function getStaticProps({params}) {
  let data = await client.getEntries( {
    content_type: "nextTest",
    'fields.slug': params.slug
  })
  return {
    props: {
      blog: data.items[0]
    }
  }
}

export default function Blog({blog}) {
  console.log(blog)
    return (
        <Layout title="Blog page">
          <div className="TETS">
            <h1>
              {blog.fields.title}
            </h1>

            <span>{blog.fields.date}</span>

            <p className="description">
              {blog.fields.description}
            </p>

            <img src={blog.fields.images.fields.file.url} alt={blog.fields.images.fields.title}/>
          </div>
        </Layout>
    )
}