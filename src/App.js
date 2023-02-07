import React, { useState } from 'react';
import Counter from './components/Counter';
import './syles/App.css'
import PostItem from './components/PostItem';
import PostList from './components/PostList';
import Mybutton from './components/UI/buttons/Mybutton';
import MyInput from './components/UI/inputs/MyInput';

function App() {

  const [posts, setPosts] = useState(
    [
      { id: 1, title: 'Javascript', body: 'Description' },
      { id: 2, title: 'Python', body: 'Description' },
      { id: 3, title: 'Basic', body: 'Description' }
    ]
  );

  const [post, setPost] = useState({title:'', body:''})

  const addNewPost = (e) => {
    e.preventDefault();

    setPosts([...posts, {...post, id: Date.now()}])
    setPost({title:'', body:''})
  }

  return (
    <div className="App">
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

      <PostList posts={posts} title='Список постов' />

    </div>
  );
}

export default App;
