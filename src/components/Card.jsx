import React from "react";
import calendar from "./../images/calendar.svg";
import "./Card.css";
import gametime from './../images/btn-image/gametime.png';
import seatgeek from './../images/btn-image/seatsgeek.png';
import stubhub from './../images/btn-image/stubhub.png';
import ticketmaster from './../images/btn-image/ticketmaster.png';
import ticketnetwork from './../images/btn-image/ticketnetwork.png';

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
          {data.country || "Blank"} {data.city || "Venue"}
        </div>
      </div>

      <div className="card__btns">
        <button className="card__btn">
					<div className="card__btn-image"><img src={gametime} alt="" /></div>
					<div className="card__btn-text">Gametime</div>
				</button>
        <button className="card__btn">
					<div className="card__btn-image"><img src={seatgeek} alt="" /></div>
					<div className="card__btn-text">SeatGeek</div>
				</button>
        <button className="card__btn">
					<div className="card__btn-image"><img src={stubhub} alt="" /></div>
					<div className="card__btn-text">StubHub</div>
				</button>
        <button className="card__btn">
					<div className="card__btn-image"><img src={ticketmaster} alt="" /></div>
					<div className="card__btn-text">Ticketmaster</div>
				</button>
        <button className="card__btn">
					<div className="card__btn-image"><img src={ticketnetwork} alt="" /></div>
					<div className="card__btn-text">TicketNetwork</div>
				</button>
      </div>
    </div>
  );
};

export default Card;
