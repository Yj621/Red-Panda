import { useState, useEffect } from "react";
import axios from "axios";
import "./Detail.css";
import PageIndicator from "../../components/pagination/Pagination";

export default function Detail({ contentId, handlePageChange }) {
  const [content, setContent] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/contents/${contentId}`
        );
        setContent(response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchData();
  }, [contentId]);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? 0 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === content.imageUrl.length - 1
        ? content.imageUrl.length - 1
        : prevIndex + 1
    );
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:4000/contents/${contentId}`);
      handlePageChange("Main");
    } catch (error) {
      console.error("Error deleting data: ", error);
    }
  };

  const handleBack = () => {
    handlePageChange("Main");
  };

  return (
    <>
      {content ? (
        <div className="detailPageLayout">
          <div className="detailPageContainer">
            <div className="detailPageProfileBox">
              <div className="detailPageProfile">
                <img
                  src={content.profile}
                  className="detailPageProfileImage"
                  alt="작성자 프로필"
                />
                <span>{content.author}</span>
              </div>
              <span className="detailPageDate">{content.date}</span>
            </div>
            <div className="detailPageBox">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="3.0625rem"
                height="3.0625rem"
                fill="currentColor"
                class="bi bi-chevron-left"
                viewBox="0 0 16 16"
                style={{ cursor: "pointer" }}
                onClick={handlePrevious}
              >
                <path
                  fill-rule="evenodd"
                  d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                />
              </svg>
              <img
                src={content.imageUrl[currentIndex]}
                alt="상세페이지 이미지"
                className="detailPageImage"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="3.0625rem"
                height="3.0625rem"
                fill="currentColor"
                class="bi bi-chevron-right"
                viewBox="0 0 16 16"
                style={{ cursor: "pointer" }}
                onClick={handleNext}
              >
                <path
                  fill-rule="evenodd"
                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                />
              </svg>
            </div>
            <PageIndicator
              images={content.imageUrl}
              currentIndex={currentIndex}
            />
            <div className="detailPageContentBox">
              {content.hashTags && (
                <div className="detailPageHashTags">
                  {content.hashTags?.map((tag) => (
                    <span>#{tag}</span>
                  ))}
                </div>
              )}
              <div className="detailPageContents">
                <span className="detailPageTitle">{content.title}</span>
                <span className="detailPageContent">{content.content}</span>
              </div>
            </div>
            <div className="detailButton">
              <div className="detailBack" onClick={handleBack}>
                뒤로가기
              </div>
              <button className="deleteButton" onClick={handleDelete}>
                삭제하기
              </button>
            </div>
          </div>
        </div>
      ) : (
        <h1>콘텐츠를 불러올 수 없습니다. 메인 페이지로 돌아가주세요.</h1>
      )}
    </>
  );
}
