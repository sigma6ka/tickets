import React, { useState, useEffect } from "react";
import { fetchDataFromAPI1 } from "./services/api";
import Card from "./components/Card";
import Pagination from "./components/Pagination";
import "./main.css";
import "./reset.css";
import "./icons-font.css";

const App = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchDataAndSetState = async () => {
      try {
        // Выберите одно из API для запроса данных
        const result = await fetchDataFromAPI1();
        // const result = await fetchDataFromAPI2();
        setData(result);
        setTotalPages(Math.ceil(result.length / 9));
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchDataAndSetState();
  }, []);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const startIndex = (currentPage - 1) * 9;
  const endIndex = startIndex + 9;
  const currentData = data.slice(startIndex, endIndex);

  return (
    <div className="app">
      <div className="card-container">
        {currentData.map((item, index) => (
          <Card key={index} data={item} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        totalResults={data.length}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default App;
