import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Write.css';

function Write() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const addNewData = async () => {
    try {
      const response = await axios.post('http://localhost:4000/contents', {
        title,
        content,
      });

      console.log('New data added:', response.data);
      setTitle('');
      setContent('');
    } catch (error) {
      console.error('Error adding data:', error);
    }
  };

  return (
    <div className='writemain'>
      <div className='title'>
        <input
          type='text'
          placeholder='제목을 입력하세요'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className='content'>
        <input
          type='text'
          placeholder='내용을 입력하세요'
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <button onClick={addNewData}>Add Data</button>
    </div>
  );
}

export default Write;
