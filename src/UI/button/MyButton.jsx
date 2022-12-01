import React from 'react';
import classses from './MyButton.module.css';

const MyButton = ({ children, ...props }) => {
  return (
    <div>
      <button {...props} className={classses.myBtn}>
        {children}
      </button>
    </div>
  );
};

export default MyButton;
