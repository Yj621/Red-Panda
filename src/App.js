import { useState } from "react";
import Home from "./pages/Home";
import Introduce from "./pages/introduce/Introduce";
import Write from "./pages/write/Write";
import Header from "./components/header/Header";
import "./App.css";
import Detail from "./pages/detail/Detail";
import Main from "./pages/main/Main";

function App() {
  const [currentPage, setCurrentPage] = useState("Main");
  const [selectedContentId, setSelectedContentId] = useState(null);

  const handlePageChange = (page, contentId = null) => {
    setCurrentPage(page);
    setSelectedContentId(contentId);
  };

  return (
    <div className="App">
      <Header handlePageChange={handlePageChange} currentPage={currentPage} />
      {currentPage === "Main" && <Main handlePageChange={handlePageChange} />}
      {currentPage === "Introduce" && <Introduce />}
      {currentPage === "Write" && <Write />}
      {currentPage === "Detail" && (
        <Detail
          contentId={selectedContentId}
          handlePageChange={handlePageChange}
        />
      )}
    </div>
  );
}

export default App;
