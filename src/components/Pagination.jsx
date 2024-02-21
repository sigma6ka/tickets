import React from "react";
import './Pagination.css';

const Pagination = ({
  currentPage,
  totalPages,
  totalResults,
  onPageChange,
}) => {
  const nextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const startIndex = (currentPage - 1) * 9;
  const endIndex = Math.min(startIndex + 9, totalResults);

  return (
    <div className="pagination">
      <div className="pagination-info">
        Showing <span>{startIndex + 1}-{endIndex}</span> of <span>{totalResults}</span> results
      </div>
      <div className="pagination__buttons">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className={currentPage === 1 ? "disabled" : "_active"}
        >
					<div className="btn-ico icon-arrow-left"></div>
					<div className="btn-text">Previous</div>
        </button>
        {/* <span>
          {currentPage} из {totalPages}
        </span> */}
        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className={currentPage === totalPages ? "disabled" : "_active"}
        >
					<div className="btn-text">Next</div>
					<div className="btn-ico icon-arrow-right"></div>
        </button>
      </div>
    </div>
  );
};

export default Pagination;
