import React, { useState, useEffect, useRef } from 'react';
import PostService from '../API/PostService';
import PostFilter from '../component/PostFilter';
import PostForm from '../component/PostForm';
import PostList from '../component/PostList';
import { useFetching } from '../hooks/useFetching';
import { useObserver } from '../hooks/useObserver';
import { usePosts } from '../hooks/usePosts';

import '../styles/App.css';
import MyButton from '../UI/button/MyButton';
import Loader from '../UI/Loader/Loader';
import MyModal from '../UI/MyModal/MyModal';
import Pagination from '../UI/pagination/Pagination';
import MySelect from '../UI/select/MySelect';
import { getPageCount } from '../utils/page';

function Posts() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const lastElement = useRef();

  const [fetchPosts, isPostLoading, postError] = useFetching(async (limit, page) => {
    const response = await PostService.getAll(limit, page);
    setPosts([...posts, ...response.data]);
    const totalCount = response.headers['x-total-count'];
    setTotalPages(getPageCount(totalCount, limit));
  });

  useObserver(lastElement, page < totalPages, isPostLoading, () => {
    setPage(page + 1);
  });

  useEffect(() => {
    fetchPosts(limit, page);
  }, [page, limit]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const changePage = (page) => {
    setPage(page);
  };

  return (
    <>
      <div className="App">
        <MyButton style={{ marginTop: '30px' }} onClick={() => setModal(true)}>
          Создать пользователя
        </MyButton>
        <MyModal visible={modal} setVisible={setModal}>
          <PostForm create={createPost} />
        </MyModal>
        <hr style={{ margin: '15px 0' }} />
        <PostFilter filter={filter} setFilter={setFilter} />
        {postError && <h1>Произошла ошибка {postError}</h1>}

        <MySelect
          value={limit}
          onChange={(value) => setLimit(value)}
          defaultValue={'Кол-во элементов на странице'}
          options={[
            { value: 5, name: '5' },
            { value: 10, name: '10' },
            { value: 25, name: '15' },
            { value: -1, name: 'Показать все' },
          ]}
        />

        <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Посты про JS" />
        <div ref={lastElement} style={{ height: 20, background: 'red' }}></div>
        {isPostLoading && (
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
            <Loader />
          </div>
        )}

        <Pagination page={page} changePage={changePage} totalPages={totalPages} />
      </div>
    </>
  );
}

export default Posts;
