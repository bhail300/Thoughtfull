import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import { prisma } from '../../server/db/client'
import Nav from '../../components/nav'


export default function Home({posts}) {
  return (
    <>
      <Head>
        <title>Thoughtfull</title>
        <meta name="description" content="App with a front and back end" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/clouds.svg" />
      </Head>
      <main className={styles.main}>
      <Nav/>
        <div className={styles.title}>
          <h1>Welcome to Thoughtfull</h1>
          <p>For those times when you're full of thoughts that you need to share.</p>
        </div>
        <div className={styles.page}>
          <h2>Homepage</h2>
        </div>
        <div>
          {posts.map((post) => (
          <div className={styles.thought} key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </div>
      ))}
        </div>
          <Link href='#'>
            <button>
              Back to top
            </button>
          </Link>
      </main>
    </>
  )
}

export async function getServerSideProps() {
  const posts = await prisma.post.findMany()
  return {
    props: {
      posts: JSON.parse(JSON.stringify(posts, (key, value) =>
      typeof value === 'bigint'
        ? value.toString()
        : value // return everthing else unchanged
      )),
    }
  }
}
