import React, { useState } from 'react';
import Counter from './components/Counter';
import './syles/App.css'
import PostItem from './components/PostItem';
import PostList from './components/PostList';
import Mybutton from './components/UI/buttons/Mybutton';
import MyInput from './components/UI/inputs/MyInput';
import PostForm from './components/PostForm';
import Myselect from './components/UI/select/Myselect';

function App() {

  const [posts, setPosts] = useState(
    [
      { id: 1, title: 'aa', body: 'hh' },
      { id: 2, title: 'vv', body: 'aa' },
      { id: 3, title: 'kk', body: 'pp' }
    ]
  );

  const [selectedSort, setSelectedSort] = useState('')

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort)
    // console.log(sort)
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
  }

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{margin: '15px 0'}}/>
      <div>
        <Myselect
          value={selectedSort}
          onChange={sortPosts}
          defaultOption='Сортировка по...'
          options={[
            {value: 'title', name: 'по названию'},
            {value: 'body', name: 'по описанию'}

          ]}
        />
      </div>

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
