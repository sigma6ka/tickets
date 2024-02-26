import React, { useState, useEffect } from "react";
import Loader from "./Loader";
import "./Modal.css";
import ModalContent from "./ModalContent";
import ModalField from "./ModalField";

const Modal = ({ closeModal, eventData, eventType }) => {
  const [loading, setLoading] = useState(true);
  const [modalContent, setModalContent] = useState(null);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const response = await fetch(
          `http://80.242.58.170:8000/api/v1/${eventType}/tickets?vividseats_event_id=${eventData}`
        );
        console.log(response);
        if (response.ok) {
          const eventDataFromApi = await response.json();
          setModalContent(eventDataFromApi);
          setIsError(false);
        } else {
					setIsError(true);
          setModalContent({ error: true, message: "Error fetching data" });
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data", error);
        setLoading(false);
      }
    };

    fetchEventData();
  }, [eventData, eventType]);

  return (
    <div className="modal__overlay" onClick={closeModal}>
      <div className="modal__content">
        {loading ? (
          <Loader />
        ) : isError ? (
          <ModalField />
        ) : (
          <ModalContent data={modalContent} closeModal={closeModal} />
        )}
      </div>
    </div>
  );
};

export default Modal;
