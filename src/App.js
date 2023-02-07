import React, { useState } from 'react';
import Counter from './components/Counter';
import './syles/App.css'
import PostItem from './components/PostItem';
import PostList from './components/PostList';
import Mybutton from './components/UI/buttons/Mybutton';
import MyInput from './components/UI/inputs/MyInput';
import PostForm from './components/PostForm';

function App() {

  const [posts, setPosts] = useState(
    [
      { id: 1, title: 'Javascript', body: 'Description' },
      { id: 2, title: 'Python', body: 'Description' },
      { id: 3, title: 'Basic', body: 'Description' }
    ]
  );

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <PostForm create={createPost} />
      {posts.length
        ?
        <PostList remove={removePost} posts={posts} title='Список постов' />
        :
        <h1 style={{ textAlign: 'center', marginTop: '20px' }}>
          Посты не найдены
        </h1>
      }



    </div>
  );
}

export default App;
