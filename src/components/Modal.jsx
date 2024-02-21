import React, { useEffect } from "react";
import "./Modal.css";
import moment from "moment";
import calendar from "./../images/calendar.svg";
import close from "./../images/close.svg";

const Modal = ({ data, active, setActive }) => {
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

  const getBody = document.body;

  useEffect(() => {
    if (active) {
      getBody.classList.add("_lock");
    } else {
      getBody.classList.remove("_lock");
    }
  }, [active, getBody]);

  return (
    <div
      className={active ? "modal _active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? "modal__content _active" : "modal__content"}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal__close" onClick={() => setActive(false)}><img src={close} alt="Close btn" /></div>
        <div className="modal__date">
          <img src={calendar} alt="Calendar Icon" />
          <p>{formattedDate}</p>
          <p>{formattedDayTime}</p>
        </div>
        <div className="modal__box">
          <h2 className="modal__title">{data.title}</h2>
          <p>
            URL:{" "}
            <a href={data.url} target="_blank" rel="noreferrer">
              {data.url}
            </a>
          </p>
        </div>
        <div className="modal__wrap">
          <p className="modal__subtitle">Venue</p>
          <div className="modal__title">{data.venue[0].name}</div>
          <div className="modal__inf">
            <p>
              {data.venue[0].city}, {data.venue[0].country}
            </p>
            <p>
              Price: <span>{data.tickets[0].price}</span>
            </p>
            <p>
              Total price: <span>{data.tickets[0].total_price}</span>
            </p>
            <p>
              Section: <span>{data.tickets[0].section}</span>
            </p>
            <p>
              Row: <span>{data.tickets[0].row}</span>
            </p>
            <p>
              Available quantities:{" "}
              <span>{data.tickets[0].available_quantities}</span>
            </p>
            <p>
              Currency code: <span>{data.tickets[0].currency_code}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
