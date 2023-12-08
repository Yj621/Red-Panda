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
  const getYYMMDD = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    let month = String(currentDate.getMonth() + 1);
    let day = String(currentDate.getDate());

    if (month.length === 1) {
      month = `0${month}`;
    }
    if (day.length === 1) {
      day = `0${day}`;
    }

    return `${year}-${month}-${day}`;
  };

  const addNewData = async () => {
    try {
      const day = getYYMMDD();
      const response = await axios.post('http://localhost:4000/contents', {
        title,
        content,
        imageUrl: imageUrls.filter((url) => url.trim() !== ''),
        date: day ,
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
        <textarea className='contentTA'
          type='text'
          placeholder='내용을 입력하세요'
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={15}
          cols={120}
          style={{ border: 'none', outline: 'none', resize: 'none', overflow: 'hidden',background:'#FAFAFA' }}
        />
      </div>
      <div className='imageUrls'>
        {imageUrls.map((url, index) => (
          <div key={index} className='imageUrl'>
            <div className='inputContainer'>
              <input
                type='text'
                placeholder={`이미지 URL ${index + 1}`}
                value={url}
                onChange={(e) => handleImageInputChange(index, e)}
              />
              {index === imageUrls.length - 1 && (
                <>
                  <button onClick={handleAddImageInput} className='addBtn'>추가</button>
                  {imageUrls.length > 1 && (
                    <button onClick={() => handleRemoveImageInput(index)} className='delBtn'>삭제</button>
                  )}
                </>
              )}
            </div>
          </div>
        ))}
      </div>
      <button onClick={addNewData} className='done'>작성 완료</button>
      <form action='/' className='backBtn'>
        <input type='submit' value='← 뒤로가기'/>
      </form>
    </div>
  );
  
  
} 

export default Write;
