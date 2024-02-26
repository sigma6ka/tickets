import React from "react";

const ModalField = ({ closeModal }) => {
  return (
    <div className="modal__body _field" onClick={(e) => e.stopPropagation()}>
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
      <div className="modal__field">Target event wasn't found</div>
    </div>
  );
};

export default ModalField;
