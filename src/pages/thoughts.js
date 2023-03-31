import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Nav from '../../components/nav'
import { useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'

export default function Home({posts:initialPosts}) {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [posts, setPosts] = useState(initialPosts)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await axios.post('/api/posts', { title, content })
    const newPost = res.data
    console.log(res.data)
    setPosts([...posts, newPost])
  }

  const router = useRouter()

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
        <div className={styles.page}>
          <h1>Welcome to Thoughtfull</h1>
          <p>For those times when you're full of thoughts that you need to share.</p>
        </div>
        <div className={styles.title}>
          <h2>Thoughtspage</h2>
        </div>
        <div>
        <form onSubmit={handleSubmit} className={styles.form}>
              <h3>Share your thoughts</h3><br/>
              <input className={styles.input} type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Write post title here...'/><br/>
              <textarea className={styles.textarea} value={content} onChange={(e) => setContent(e.target.value)} placeholder='Write post text here...'/>
              <button type="submit" onClick={() => router.push("/")}>Submit</button>
          </form>
        </div>
      </main>
    </>
  )
}

