import React, { useState, useMemo } from 'react';

import './styles/App.css';

import PostList from './component/PostList';
import PostForm from './component/PostForm';
import MySelect from './UI/select/MySelect';
import MyInput from './UI/input/MyInput';
import PostFilter from './component/PostFilter';
import MyModal from './UI/MyModal/MyModal';
import MyButton from './UI/button/MyButton';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'аа', body: 'бб' },
    { id: 2, title: 'гг 2', body: 'аа' },
    { id: 3, title: 'вв 3', body: 'яя' },
  ]);

  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [modal, setModal] = useState(false);

  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
    }
    return posts;
  }, [filter.sort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) => post.title.toLowerCase().includes(filter.query));
  }, [filter.query, sortedPosts]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
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
        <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Посты про JS" />
      </div>
    </>
  );
}

export default App;
