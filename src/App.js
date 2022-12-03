import React, { useState, useMemo } from 'react';

import './styles/App.css';

import PostList from './component/PostList';
import PostForm from './component/PostForm';
import MySelect from './UI/select/MySelect';
import MyInput from './UI/input/MyInput';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'аа', body: 'бб' },
    { id: 2, title: 'гг 2', body: 'аа' },
    { id: 3, title: 'вв 3', body: 'яя' },
  ]);

  const [selectedSort, setSelectedSort] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const sortedPosts = useMemo(() => {
    if (selectedSort) {
      return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]));
    }
    return posts;
  }, [selectedSort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) => post.title.toLowerCase().includes(searchQuery));
  }, [searchQuery, sortedPosts]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const sortSelect = (sort) => {
    // setSelectedSort(sort);
  };

  return (
    <>
      <div className="App">
        <PostForm create={createPost} />

        <hr style={{ margin: '15px 0' }} />

        <div>
          <MyInput
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Поиск..."
          />
          <MySelect
            value={selectedSort}
            onChange={sortSelect}
            defaultValue="Сортировка"
            options={[
              { value: 'title', name: 'По названию' },
              { value: 'body', name: 'По описанию' },
            ]}
          />
        </div>

        {sortedAndSearchedPosts.length !== 0 ? (
          <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Посты про JS" />
        ) : (
          <h1 style={{ textAlign: 'center' }}>Посты не найдены!</h1>
        )}
      </div>
    </>
  );
}

export default App;
