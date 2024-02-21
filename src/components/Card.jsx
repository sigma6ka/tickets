import React from "react";
// import calendar from "./../images/calendar.svg";
import "./Card.css";
import gametime from "./../images/btn-image/gametime.png";
import seatgeek from "./../images/btn-image/seatsgeek.png";
import stubhub from "./../images/btn-image/stubhub.png";
import ticketmaster from "./../images/btn-image/ticketmaster.png";
import ticketnetwork from "./../images/btn-image/ticketnetwork.png";

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
          {/* <img src={calendar} alt="calendar" /> */}
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10.625 1.25C10.625 0.904822 10.3452 0.625 10 0.625C9.65482 0.625 9.375 0.904822 9.375 1.25V1.875H5.625V1.25C5.625 0.904822 5.34518 0.625 5 0.625C4.65482 0.625 4.375 0.904822 4.375 1.25V1.875H3.125C2.08947 1.875 1.25 2.71447 1.25 3.75V6.25V12.5C1.25 13.5355 2.08947 14.375 3.125 14.375H11.875C12.9105 14.375 13.75 13.5355 13.75 12.5V6.25V3.75C13.75 2.71447 12.9105 1.875 11.875 1.875H10.625V1.25ZM12.5 5.625V3.75C12.5 3.40482 12.2202 3.125 11.875 3.125H10.625V3.75C10.625 4.09518 10.3452 4.375 10 4.375C9.65482 4.375 9.375 4.09518 9.375 3.75V3.125H5.625V3.75C5.625 4.09518 5.34518 4.375 5 4.375C4.65482 4.375 4.375 4.09518 4.375 3.75V3.125H3.125C2.77982 3.125 2.5 3.40482 2.5 3.75V5.625H12.5ZM2.5 6.875H12.5V12.5C12.5 12.8452 12.2202 13.125 11.875 13.125H3.125C2.77982 13.125 2.5 12.8452 2.5 12.5V6.875Z"
              fill="#94A3B8"
            />
          </svg>
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
          <div className="card__btn-image">
            <img src={gametime} alt="" />
          </div>
          <div className="card__btn-text">Gametime</div>
        </button>
        <button className="card__btn">
          <div className="card__btn-image">
            <img src={seatgeek} alt="" />
          </div>
          <div className="card__btn-text">SeatGeek</div>
        </button>
        <button className="card__btn">
          <div className="card__btn-image">
            <img src={stubhub} alt="" />
          </div>
          <div className="card__btn-text">StubHub</div>
        </button>
        <button className="card__btn">
          <div className="card__btn-image">
            <img src={ticketmaster} alt="" />
          </div>
          <div className="card__btn-text">Ticketmaster</div>
        </button>
        <button className="card__btn">
          <div className="card__btn-image">
            <img src={ticketnetwork} alt="" />
          </div>
          <div className="card__btn-text">TicketNetwork</div>
        </button>
      </div>
    </div>
  );
};

export default Card;
