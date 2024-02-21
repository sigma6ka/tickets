import React from "react";
import "./Pagination.css";
// import { fetchDataFromAPI } from "./../services/api";

const Pagination = ({
  nextPageUrl,
  prevPageUrl,
  currentPage,
  totalResults,
  onDataLoad,
}) => {
  const handleNextPage = () => {
    if (nextPageUrl) {
      onDataLoad(nextPageUrl);
    }
  };

  const handlePrevPage = () => {
    if (prevPageUrl) {
      onDataLoad(prevPageUrl);
    }
  };

  const perPage = 12; // Количество элементов на странице
  const startIndex = !isNaN(currentPage) ? (currentPage - 1) * perPage + 1 : 1; // Проверяем, что currentPage является числом
  const endIndex = !isNaN(totalResults)
    ? Math.min(startIndex + perPage - 1, totalResults)
    : 1; // Проверяем, что totalResults является числом

  return (
    <div className="pagination">
      <div className="pagination-info">
        Showing{" "}
        <span>
          {startIndex}-{endIndex}
        </span>{" "}
        of <span>{totalResults}</span> results
      </div>
      <div className="pagination__buttons">
        {prevPageUrl ? (
          <button className="_active" onClick={handlePrevPage}>
            <div className="btn-ico icon-arrow-left"></div>
            <div className="btn-text">Previous</div>
          </button>
        ) : (
          <button disabled className="disabled">
            <div className="btn-ico icon-arrow-left"></div>
            <div className="btn-text">Previous</div>
          </button>
        )}
        {nextPageUrl ? (
          <button className="_active" onClick={handleNextPage}>
            <div className="btn-text">Next</div>
            <div className="btn-ico icon-arrow-right"></div>
          </button>
        ) : (
          <button disabled className="disabled">
            <div className="btn-text">Next</div>
            <div className="btn-ico icon-arrow-right"></div>
          </button>
        )}
      </div>
    </div>
  );
};

export default Pagination;
