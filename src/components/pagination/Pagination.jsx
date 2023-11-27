import "./Pagination.css";

export default function PageIndicator({ images, currentIndex }) {
  return (
    <div className="pageIndicator">
      {images.map((_, index) => (
        <div
          key={index}
          className={`indicatorDot ${index === currentIndex ? "active" : ""}`}
        />
      ))}
    </div>
  );
}
