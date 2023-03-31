import styles from '@/styles/Form.module.css'
import { useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'

export default function Deletebutton(props){

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [posts, setPosts] = useState(props.posts)
  
    const handleDelete = async () => {
      const res = await axios.post(`/api/posts/${posts.id}`, { method: "DELETE" })
    }
  
    const router = useRouter()
    
    return(
        <>
           <button onClick={() => handleDelete(posts)}>Delete post</button>
        </>
    )
}