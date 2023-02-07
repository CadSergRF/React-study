import React, { useState } from 'react'
import Mybutton from './UI/buttons/Mybutton';
import MyInput from './UI/inputs/MyInput';

const PostForm = ({create}) => {

  const [post, setPost] = useState({title:'', body:''})

  const addNewPost = (e) => {
    e.preventDefault();

    // setPosts([...posts, {...post, id: Date.now()}])
    const newPost = {
      ...post, id: Date.now()
    }
    create(newPost)
    setPost({title:'', body:''})
  }

  return (
    <form>
        <MyInput 
        type='text' 
        placeholder='Название поста' 
        value={post.title} 
        onChange={e => setPost({...post, title: e.target.value})} 
        />
        <MyInput 
        type='text' 
        placeholder='Описание поста' 
        value={post.body} 
        onChange={e => setPost({...post, body: e.target.value})} 
        />
        <Mybutton onClick={addNewPost}>Создать пост</Mybutton>
      </form>
  )
}

export default PostForm