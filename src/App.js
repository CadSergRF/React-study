import React, { useState } from 'react';
import Counter from './components/Counter';
import './syles/App.css'
import PostItem from './components/PostItem';
import PostList from './components/PostList';
import Mybutton from './components/UI/buttons/Mybutton';
import MyInput from './components/UI/inputs/MyInput';

function App() {

  const [posts, setPost] = useState(
    [
      { id: 1, title: 'Javascript', body: 'Description' },
      { id: 2, title: 'Python', body: 'Description' },
      { id: 3, title: 'Basic', body: 'Description' }
    ]
  );

  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      id: Date.now(),
      title,
      body
    }

    setPost([...posts, newPost])
  }

  return (
    <div className="App">
      <form>
        <MyInput type='text' placeholder='Название поста' value={title} onChange={e => setTitle(e.target.value)} />
        <MyInput type='text' placeholder='Описание поста' value={body} onChange={e => setBody(e.target.value)} />
        <Mybutton onClick={addNewPost}>Создать пост</Mybutton>
      </form>

      <PostList posts={posts} title='Список постов' />

    </div>
  );
}

export default App;
