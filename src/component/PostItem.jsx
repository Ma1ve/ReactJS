import React from 'react';
import MyButton from '../UI/button/MyButton';
import { useNavigate } from 'react-router-dom';

const PostItem = (props) => {
  const { number, post, remove } = props;

  let navigate = useNavigate();

  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {post.id}. {post.title}
        </strong>
        <div>{post.body}</div>
      </div>
      <div className="post__btn">
        <MyButton onClick={() => navigate(`/posts/${post.id}`)}>Открыть</MyButton>
        <MyButton onClick={() => remove(post)}>Удалить</MyButton>
      </div>
    </div>
  );
};

export default PostItem;
