import Link from "next/link";
import Head from "next/head";

export default function Layout( {children, title = 'Next App'}) {
    return (
        <>
          <Head>
            <title>{title} | Next course</title>
            <link rel="icon" href="/favicon.ico"/>
            <meta name="keywords" content="js, next js, react" />
            <meta name="description" content="learning project from next js" />


          </Head>
            <nav>
                <Link href={"/"}><a>Home</a></Link>
                <Link href={"/posts"}><a>Posts</a></Link>
                <Link href={"/about"}><a>About</a></Link>
            </nav>

            <main>{children}</main>

          <style jsx global>
            {`
             nav  {
              display: flex;
            }

            nav a {
              margin-right: 15px;
            }
            
            nav a:hover {
              color: red;
            }
            
            `}

          </style>
        </>
    )
}