import React from "react";

const formatDate = (dateString) => {
  const options = {
    month: "short",
    year: "numeric",
    day: "numeric",
    weekday: "short",
    hour: "numeric",
    minute: "numeric",
  };
  return new Date(dateString).toLocaleString("en-US", options);
};

const ModalContent = ({ data, closeModal}) => {
  return (
    <div className="modal__body" onClick={(e) => e.stopPropagation()}>
      <button className="modal__close" onClick={closeModal}>
        <svg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_432_1314)">
            <path
              d="M19.0706 19.5711C22.9759 15.6658 22.9759 9.3342 19.0706 5.42896C15.1654 1.52371 8.83373 1.52371 4.92849 5.42896C1.02325 9.3342 1.02325 15.6658 4.92849 19.5711C8.83373 23.4763 15.1654 23.4763 19.0706 19.5711Z"
              fill="#E2E8F0"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.73741 9.1059C9.42499 8.79348 8.91846 8.79348 8.60604 9.1059C8.29362 9.41832 8.29362 9.92485 8.60604 10.2373L10.8688 12.5L8.60604 14.7628C8.29362 15.0752 8.29362 15.5817 8.60604 15.8942C8.91846 16.2066 9.42499 16.2066 9.73741 15.8942L12.0002 13.6314L14.2629 15.8941C14.5753 16.2065 15.0818 16.2065 15.3943 15.8941C15.7067 15.5817 15.7067 15.0752 15.3943 14.7628L13.1315 12.5L15.3943 10.2373C15.7067 9.92488 15.7067 9.41835 15.3943 9.10593C15.0818 8.79351 14.5753 8.79351 14.2629 9.10593L12.0002 11.3687L9.73741 9.1059Z"
              fill="#64748B"
            />
          </g>
          <defs>
            <clipPath id="clip0_432_1314">
              <rect
                width="24"
                height="24"
                fill="white"
                transform="translate(0 0.5)"
              />
            </clipPath>
          </defs>
        </svg>
      </button>
      <div className="modal__box">
        <div className="modal__date">
          <div className="card__date-ico">
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.625 1.25C10.625 0.904822 10.3452 0.625 10 0.625C9.65482 0.625 9.375 0.904822 9.375 1.25V1.875H5.625V1.25C5.625 0.904822 5.34518 0.625 5 0.625C4.65482 0.625 4.375 0.904822 4.375 1.25V1.875H3.125C2.08947 1.875 1.25 2.71447 1.25 3.75V6.25V12.5C1.25 13.5355 2.08947 14.375 3.125 14.375H11.875C12.9105 14.375 13.75 13.5355 13.75 12.5V6.25V3.75C13.75 2.71447 12.9105 1.875 11.875 1.875H10.625V1.25ZM12.5 5.625V3.75C12.5 3.40482 12.2202 3.125 11.875 3.125H10.625V3.75C10.625 4.09518 10.3452 4.375 10 4.375C9.65482 4.375 9.375 4.09518 9.375 3.75V3.125H5.625V3.75C5.625 4.09518 5.34518 4.375 5 4.375C4.65482 4.375 4.375 4.09518 4.375 3.75V3.125H3.125C2.77982 3.125 2.5 3.40482 2.5 3.75V5.625H12.5ZM2.5 6.875H12.5V12.5C12.5 12.8452 12.2202 13.125 11.875 13.125H3.125C2.77982 13.125 2.5 12.8452 2.5 12.5V6.875Z"
                fill="#94A3B8"
              />
            </svg>
          </div>
          {formatDate(data.spend_date)}
        </div>
      </div>
      <div className="modal__box">
        <div className="modal__title">
          <div className="modal__title-text">{data.title}</div>
          <div className="modal__title-url">
            URL: <a href={data.url}>{data.url}</a>
          </div>
        </div>
      </div>
      <div className="modal__box">
        <div className="modal__venue">
          <div className="modal__venue-subtitle">Venue</div>
          <div className="modal__venue-title">{data.venue.name}</div>
          <div className="modal__venue-place">
            <p>{data.venue.country},</p>
            <p>{data.venue.city}</p>
          </div>
        </div>
      </div>
      <div className="modal__box">
        {data.tickets && (
          <div className="modal__tickets">
            <div className="modal__tickets-subtitle">Tickets</div>
            <div className="modal__ticket-box">
              {data.tickets.map((ticket, index) => (
                <div key={index} className="modal__ticket">
                  <div className="modal__ticket-content">
                    Price: <span>{ticket.price}</span>
                  </div>
                  <div className="modal__ticket-content">
                    Total Price: <span>{ticket.total_price}</span>
                  </div>
                  <div className="modal__ticket-content">
                    Section: <span>{ticket.section}</span>
                  </div>
                  <div className="modal__ticket-content">
                    Row: <span>{ticket.row}</span>
                  </div>
                  <div className="modal__ticket-content">
                    Available Quantities:{" "}
                    <span>{ticket.available_quantities.join(", ")}</span>
                  </div>
                  <div className="modal__ticket-content">
                    Currency: <span>{ticket.currency_code}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ModalContent;
