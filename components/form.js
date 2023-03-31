import styles from '@/styles/Form.module.css'
import { useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'


export default function Form({posts:initialPosts}){

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
    
    return(
        <>
            <form onSubmit={handleSubmit} className={styles.form}>
              <h3>Share your thoughts</h3><br/>
              <input className={styles.input} type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Write post title here...'/><br/>
              <textarea className={styles.textarea} value={content} onChange={(e) => setContent(e.target.value)} placeholder='Write post text here...'/>
              <button type="submit" onClick={() => router.push("/")}>Submit</button>
          </form>
        </>
    )
}