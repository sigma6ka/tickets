import React, { useState, useEffect } from "react";
import { fetchDataFromAPI, fetchInitialDataFromAPI } from "./services/Api";
import Card from "./components/Card";
import Modal from "./components/Modal";
import Pagination from "./components/Pagination";
import Loader from "./components/Loader";
import "./main.css";
import "./reset.css";
import ModalField from "./components/ModalField";

const App = () => {
  const [data, setData] = useState([]);
  const [nextPageUrl, setNextPageUrl] = useState(null);
  const [prevPageUrl, setPrevPageUrl] = useState(null);
  const [loading, setLoading] = useState(true);
  const [totalResults, setTotalResults] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [modalData, setModalData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalFieldOpen, setIsModalFieldOpen] = useState(false);
  // const [modalButton, setModalButton] = useState("");

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
      setCurrentPage(getPageNumberFromUrl(url));
      setLoading(false);
    } catch (error) {
      console.error("Ошибка при загрузке данных:", error);
      setLoading(false);
    }
  };

  const openModal = async (eventId) => {
    // setModalButton(button);

    try {
      const response = await fetch(
        `http://80.242.58.170:8000/api/v1/gametime/tickets?vividseats_event_id=${eventId}`
      );
      const eventData = await response.json();
      if (response.ok) {
        setModalData(eventData);
        setIsModalOpen(true);
        document.body.classList.add("lock");
      } else {
        console.error("Ошибка при загрузке данных:", eventData.error);
        setIsModalFieldOpen(true);
        document.body.classList.add("lock");
      }
    } catch (error) {
      console.error("Ошибка при загрузке данных:", error);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsModalFieldOpen(false);
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
      {isModalOpen && <Modal eventData={modalData} closeModal={closeModal} />}
      {isModalFieldOpen && (
        <ModalField eventData={modalData} closeModal={closeModal} />
      )}
    </div>
  );
};

export default App;
