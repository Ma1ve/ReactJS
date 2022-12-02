import React, { useRef, useState } from 'react';

import './styles/App.css';

import PostList from './component/PostList';
import PostForm from './component/PostForm';
import MySelect from './UI/select/MySelect';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'a', body: 'b' },
    { id: 2, title: 'b', body: 'a' },
    { id: 3, title: 'f', body: 'd' },
    { id: 4, title: 'dd', body: 'ff' },
  ]);

  const [selectedSort, setSelectedSort] = useState();

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const sortSelect = (sort) => {
    console.log(sort);
    setSelectedSort(sort);
    // setSelectedSort([...posts].sort((a, b) => a[sort].localeCompare(b[sort])));
  };

  return (
    <>
      <div className="App">
        <PostForm create={createPost} />

        <hr style={{ margin: '15px 0' }} />

        <div>
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

        {posts.length !== 0 ? (
          <PostList remove={removePost} posts={posts} title="Посты про JS" />
        ) : (
          <h1 style={{ textAlign: 'center' }}>Посты не найдены!</h1>
        )}
      </div>
    </>
  );
}

export default App;
