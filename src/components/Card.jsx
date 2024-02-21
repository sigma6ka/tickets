import React, { useState } from "react";
import moment from "moment";
import calendar from "./../images/calendar.svg";
import Modal from "./Modal";
import "./Card.css";

const Card = ({ data }) => {
  // Разбор данных для блока даты
  const formatDate = (dateString) => {
    const date = moment(dateString);

    if (!date.isValid()) {
      return { formattedDate: "", formattedDayTime: "" };
    }

    const formattedDate = date.format("MMM D, YYYY");
    const formattedDayTime = date.format("ddd h:mm a");

    return { formattedDate, formattedDayTime };
  };

  const { formattedDate, formattedDayTime } = formatDate(data.spend_date);

  const [showModal, setShowModal] = useState(false);

  const handleDetailsClick = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <div className="card">
      {/* Блок даты */}
      <div className="date">
        <img src={calendar} alt="Calendar Icon" />
        <p>{formattedDate}</p>
        <p>{formattedDayTime}</p>
      </div>

      <div className="inf">
        {/* Блок заголовка */}
        <div className="title">{data.title}</div>

        {/* Блок месторасположения */}
        <div className="location">
          {data.venue.map((venue) => (
            <div key={venue.id}>
              <p>
                {venue.country}, {venue.city}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Блок кнопок */}
      <div className="buttons">
        <button onClick={handleDetailsClick}>Btn-1</button>
        <button>Btn-2</button>
        <button>Btn-3</button>
        <button>Btn-4</button>
      </div>

      {/* Модальное окно внутри компонента карточки  */}
			<Modal data={data} active={showModal} setActive={handleModalClose} />
      {/* {showModal && <Modal data={data} active={setShowModal} setActive={handleModalClose} />} */}
    </div>
  );
};

export default Card;
