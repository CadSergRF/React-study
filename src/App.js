import React, { useEffect, useState } from 'react';
import { usePosts } from './hooks/usePosts';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';
import Mybutton from './components/UI/buttons/Mybutton';
import Mymodal from './components/UI/MyModal/Mymodal';
import axios from 'axios';
import './syles/App.css'
import PostService from './API/PostService';
import Loader from './components/UI/Loader/Loader';
import { useFetching } from './hooks/useFetchig';
import { getPageCount, getPagesArray } from './utils/pages';
import Pagination from './components/UI/pagination/Pagination';

function App() {

  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  const sortedAndSearchPosts = usePosts(posts, filter.sort, filter.query);

  const [fetchPosts, isPostsLoading, postError] = useFetching(async(limit, page) => {
    const responce = await PostService.getAll(limit, page);
    setPosts(responce.data);
    const totalCount = responce.headers['x-total-count']
    setTotalPages(getPageCount(totalCount, limit))
  })


  useEffect(() => {
    fetchPosts(limit, page);
  }, [])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const changePage = (page) => {
    setPage(page)
    fetchPosts(limit, page)
  }

  return (
    <div className="App">
      <button onClick={fetchPosts}>GET POST</button>
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
      {postError &&
        <h1>Произошла ошибка ${postError}</h1>
      }
      {isPostsLoading
        ? <div style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}><Loader/></div>
        : <PostList remove={removePost} posts={sortedAndSearchPosts} title='Список постов' />
      }
      <Pagination 
        page={page} 
        changePage={changePage} 
        totalPages={totalPages}
      />

    </div>
  );
}

export default App;
