import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { fetchDataFromAPI, fetchInitialDataFromAPI } from "./services/Api";
import Card from "./components/Card";
import Pagination from "./components/Pagination";
import Loader from "./components/Loader";
import "./main.css";
import "./reset.css";

const App = () => {
  const [data, setData] = useState([]);
  const [nextPageUrl, setNextPageUrl] = useState(null);
  const [prevPageUrl, setPrevPageUrl] = useState(null);
  const [loading, setLoading] = useState(true);
  const [totalResults, setTotalResults] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const history = useHistory();

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

  useEffect(() => {
    const pageNumber = getPageNumberFromUrl(history.location.search);
    setCurrentPage(pageNumber);
  }, [history.location.search]);

  const handlePageChange = async (url) => {
    try {
      setLoading(true);
      const newData = await fetchDataFromAPI(url);
      setData(newData.results);
      setTotalResults(newData.count);
      setNextPageUrl(newData.next);
      setPrevPageUrl(newData.previous);
      setCurrentPage(getPageNumberFromUrl(url));
      setLoading(false);
    } catch (error) {
      console.error("Ошибка при загрузке данных:", error);
      setLoading(false);
    }
  };

  const getPageNumberFromUrl = (search) => {
    const match = search.match(/\?page=(\d+)/);
    return match ? parseInt(match[1]) : 1;
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
          totalResults={totalResults}
          onDataLoad={handlePageChange}
          currentPage={currentPage}
        />
      )}
    </div>
  );
};

export default App;