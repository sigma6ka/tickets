import React, { useState, useEffect } from "react";
import { fetchDataFromAPI, fetchInitialDataFromAPI } from "./services/Api";
import Card from "./components/Card";
import Pagination from "./components/Pagination";
import Loader from "./components/Loader";
import "./main.css";
import "./reset.css";
import "./icons-font.css";

const App = () => {
  const [data, setData] = useState([]);
  // const [currentPageUrl, setCurrentPageUrl] = useState(
  //   "http://212.111.87.198:8000/api/v1/events?page=1"
  // );
  const [nextPageUrl, setNextPageUrl] = useState(null);
  const [prevPageUrl, setPrevPageUrl] = useState(null);
  const [loading, setLoading] = useState(true);
  const [totalResults, setTotalResults] = useState(0);
  const [currentPage, setCurrentPage] = useState(1); // Добавляем состояние для текущей страницы

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const initialData = await fetchInitialDataFromAPI();
        setData(initialData.results);
        setTotalResults(initialData.count);
        setNextPageUrl(initialData.next);
        setPrevPageUrl(initialData.previous);
        setLoading(false);
      } catch (error) {
        console.error("Ошибка при загрузке данных:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handlePageChange = async (url) => {
    try {
      setLoading(true);
      const newData = await fetchDataFromAPI(url);
      setData(newData.results);
      setTotalResults(newData.count);
      setNextPageUrl(newData.next);
      setPrevPageUrl(newData.previous);
      setCurrentPage(getPageNumberFromUrl(url)); // Обновляем currentPage при загрузке новых данных
      setLoading(false);
    } catch (error) {
      console.error("Ошибка при загрузке данных:", error);
      setLoading(false);
    }
  };

  const getPageNumberFromUrl = (url) => {
    const pageMatch = url.match(/page=(\d+)/);
    return pageMatch ? parseInt(pageMatch[1]) : 1;
  };

  return (
    <div className="app">
      <div className="card-container">
        {loading ? (
          <Loader />
        ) : (
          data.map((item, index) => <Card key={index} data={item} />)
        )}
      </div>
      {!loading && (
        <Pagination
          nextPageUrl={nextPageUrl}
          prevPageUrl={prevPageUrl}
          currentPage={currentPage}
          totalResults={totalResults}
          onDataLoad={handlePageChange}
        />
      )}
    </div>
  );
};

export default App;
