import React, { useState } from 'react';
import { usePosts } from './hooks/usePosts';
import PostList from './components/PostList';
import Mybutton from './components/UI/buttons/Mybutton';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';
import Mymodal from './components/UI/MyModal/Mymodal';
import './syles/App.css'

function App() {

  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [modal, setModal] = useState(false);
  const sortedAndSearchPosts = usePosts(posts, filter.sort, filter.query);

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <Mybutton style={{ marginTop: '30px' }} onClick={() => setModal(true)}>
        Создать пост
      </Mybutton>
      <Mymodal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </Mymodal>

      <hr style={{ margin: '15px 0' }} />
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />
      <PostList remove={removePost} posts={sortedAndSearchPosts} title='Список постов' />
    </div>
  );
}

export default App;
