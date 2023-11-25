import React, { useState } from 'react';

function PostForm() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // 여기서 데이터를 처리하거나 API로 전송하는 등의 로직을 추가할 수 있습니다.
    console.log('제목:', title);
    console.log('내용:', content);
    // 데이터 처리 후, 필요한 동작을 수행합니다.
  };

  return (
    <div>
      <h1>게시글 작성하기</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">제목:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="content">내용:</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <button type="submit">게시글 작성</button>
      </form>
    </div>
  );
}

export default PostForm;
