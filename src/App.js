import React, { useRef, useState } from 'react';

import './styles/App.css';

import PostItem from './component/PostItem';
import PostList from './component/PostList';
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'Description' },
    { id: 2, title: 'JavaScript', body: 'Description' },
    { id: 3, title: 'JavaScript', body: 'Description' },
    { id: 4, title: 'JavaScript', body: 'Description' },
  ]);

  //   // const [title, setTitle] = useState('');
  //   // const [body, setBody] = useState('');
  const [post, setPost] = useState({ title: '', body: '' });

  const addNewPost = (e) => {
    e.preventDefault();

    setPosts([...posts, { ...post, id: Date.now() }]);
    setPost({ title: '', body: '' });
  };

  return (
    <>
      <div className="App">
        <form action="#">
          <MyInput
            value={post.title}
            onChange={(e) => setPost({ ...post, title: e.target.value })}
            type="text"
            placeholder="Название поста"
          />
          <MyInput
            value={post.body}
            onChange={(e) => setPost({ ...post, body: e.target.value })}
            type="text"
            placeholder="Описание поста"
          />
          <MyButton onClick={addNewPost}>Создать пост</MyButton>
        </form>
        <PostList posts={posts} title="Посты про JS" />
      </div>
    </>
  );
}

export default App;
