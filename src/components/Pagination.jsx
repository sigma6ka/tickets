import React, { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import "./Pagination.css";

const Pagination = ({
  nextPageUrl,
  prevPageUrl,
  totalResults,
  onDataLoad,
}) => {
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    if (!searchParams.has("page")) {
      searchParams.append("page", 1);
      history.push({ search: searchParams.toString() });
    }
  }, [history, location.search]);

  const handleNextPage = () => {
    if (nextPageUrl) {
      onDataLoad(nextPageUrl);
      const nextPageNumber = getPageNumberFromUrl(nextPageUrl);
      updateUrl(nextPageNumber);
    }
  };

  const handlePrevPage = () => {
    if (prevPageUrl) {
      onDataLoad(prevPageUrl);
      const prevPageNumber = getPageNumberFromUrl(prevPageUrl);
      updateUrl(prevPageNumber);
    }
  };

  const getPageNumberFromUrl = (url) => {
    const match = url.match(/\?page=(\d+)/);
    return match ? parseInt(match[1]) : 1;
  };

  const updateUrl = (pageNumber) => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.set("page", pageNumber);
    history.push({ search: searchParams.toString() });
  };

  const perPage = 12;
  const currentPage = getPageNumberFromUrl(location.search);
  const startIndex = (currentPage - 1) * perPage + 1;
  const endIndex = Math.min(currentPage * perPage, totalResults);

  return (
    <div className="pagination">
      <div className="pagination-info">
				Showing <span>{startIndex}</span> - <span>{endIndex}</span> of <span>{totalResults}</span> results
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