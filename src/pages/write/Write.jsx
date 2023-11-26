/*eslint-disable */
import React, { useState } from 'react';
import './Write.css';

function PostForm() {


  let titleDefault = '제목을 입력하세요.';

  return (
    <div className='writemain'>

        <div className='title'>
          <input type='text' placeholder='제목을 입력하세요' />
        </div>
        <div className='content'>
          <input type='text' placeholder='내용을 입력하세요' />
        </div>
      </div>
  );
}


export default PostForm;