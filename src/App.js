import React, { useState, useEffect } from "react";
import { fetchDataFromAPI, fetchInitialDataFromAPI } from "./services/Api";
import Card from "./components/Card";
import Modal from "./components/Modal";
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
  const [modalData, setModalData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
	const [modalEventType, setModalEventType] = useState("");

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
        console.error("Error loading data:", error);
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
      setCurrentPage(getPageNumberFromUrl(url));
      setLoading(false);
    } catch (error) {
      console.error("Error loading data:", error);
      setLoading(false);
    }
  };

  const openModal = (eventData, eventType) => {
    setModalData(eventData);
    setIsModalOpen(true);
		setModalEventType(eventType);
		document.body.classList.add('lock');
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.classList.remove("lock");
  };

  const getPageNumberFromUrl = (url) => {
    const match = url.match(/page=(\d+)/);
    return match ? parseInt(match[1]) : 1;
  };

  return (
    <div className="app">
      <div className="card-container">
        {loading ? (
          <Loader />
        ) : (
          data.map((item, index) => (
            <Card key={index} data={item} openModal={openModal} />
          ))
        )}
      </div>
      {!loading && (
        <Pagination
          nextPageUrl={nextPageUrl}
          prevPageUrl={prevPageUrl}
          totalResults={totalResults}
          onDataLoad={handlePageChange}
        />
      )}
      {isModalOpen && <Modal eventType={modalEventType} eventData={modalData} closeModal={closeModal} />}
    </div>
  );
};

export default App;
