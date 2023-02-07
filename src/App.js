import React, { useMemo, useState } from 'react';
import Counter from './components/Counter';
import './syles/App.css'
import PostItem from './components/PostItem';
import PostList from './components/PostList';
import Mybutton from './components/UI/buttons/Mybutton';
import MyInput from './components/UI/inputs/MyInput';
import PostForm from './components/PostForm';
import Myselect from './components/UI/select/Myselect';
import PostFilter from './components/PostFilter';
import Mymodal from './components/UI/MyModal/Mymodal';

function App() {

  const [posts, setPosts] = useState(
    [
      { id: 1, title: 'aa', body: 'hh' },
      { id: 2, title: 'vv', body: 'aa' },
      { id: 3, title: 'kk', body: 'pp' }
    ]
  );

  const [filter, setFilter] = useState({ sort: '', query: '' })
  const [modal, setModal] = useState(false)

  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
    }
    return posts;
  }, [filter.sort, posts])

  const sortedAndSearchPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query))
  }, [filter.query, sortedPosts])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }


  return (
    <div className="App">
      <Mybutton style={{marginTop: '30px'}} onClick={() => setModal(true)}>
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
