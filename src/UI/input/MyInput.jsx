import React from 'react';
import classses from './MyInput.module.css';

const MyInput = React.forwardRef((props, ref) => {
  return (
    <>
      <input ref={ref} className={classses.myInput} {...props} />
    </>
  );
});

export default MyInput;
