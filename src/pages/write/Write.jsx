import React, { useState } from 'react';
import axios from 'axios';
import './Write.css';

function Write() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [imageUrls, setImageUrls] = useState(['']); // 이미지 URL을 담을 배열

  const handleAddImageInput = () => {
    setImageUrls([...imageUrls, '']); // 이미지 URL 입력 칸 추가
  };

  const handleRemoveImageInput = (index) => {
    const newImageUrls = [...imageUrls];
    newImageUrls.splice(index, 1); // 해당 인덱스의 이미지 URL 입력 칸 제거
    setImageUrls(newImageUrls);
  };

  const handleImageInputChange = (index, e) => {
    const newImageUrls = [...imageUrls];
    newImageUrls[index] = e.target.value; // 해당 인덱스의 이미지 URL 업데이트
    setImageUrls(newImageUrls);
  };

  const addNewData = async () => {
    try {
      const response = await axios.post('http://localhost:4000/contents', {
        title,
        content,
        imageUrl: imageUrls.filter((url) => url.trim() !== ''), // 비어있는 이미지 URL 제외
      });

      console.log('New data added:', response.data);
      setTitle('');
      setContent('');
      setImageUrls(['']); // 이미지 URL 입력 칸 초기화
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
      <div className='imageUrls'>
        {imageUrls.map((url, index) => (
          <div key={index} className='imageUrl'>
            <input
              type='text'
              placeholder={`이미지 URL ${index + 1}`}
              value={url}
              onChange={(e) => handleImageInputChange(index, e)}
            />
            <button onClick={() => handleRemoveImageInput(index)}>삭제</button>
          </div>
        ))}
        <button onClick={handleAddImageInput} className='addbtn'>추가</button>
      </div>
      <button onClick={addNewData}>Add Data</button>
    </div>
  );
}

export default Write;
