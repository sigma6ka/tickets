import React from "react";
import calendar from "./../images/calendar.svg";
import "./Card.css";

const formatDate = (dateString) => {
  const options = {
    month: "short",
    year: "numeric",
    weekday: "short",
    hour: "numeric",
    minute: "numeric",
  };
  return new Date(dateString).toLocaleString("en-US", options);
};

const Card = ({ data }) => {
  return (
    <div className="card">
      <div className="card__date">
        <div className="card__date-ico">
          <img src={calendar} alt="calendar" />
        </div>
        <div className="card__date-datetime">
          {formatDate(data.local_date_datetime)}
        </div>
      </div>
      <div className="card__box">
        <h2 className="card__title">{data.name}</h2>
        <div className="card__location">
          {data.country || "US"}, {data.city || "Baltimore"}
        </div>
      </div>

      <div className="card__btns">
        <button className="card__btn">Btn-1</button>
        <button className="card__btn">Btn-2</button>
        <button className="card__btn">Btn-3</button>
        <button className="card__btn">Btn-4</button>
      </div>
    </div>
  );
};

export default Card;
