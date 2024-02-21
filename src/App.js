import React, { useState, useEffect } from "react";
import Card from "./components/Card";
import fetchLocalData from "./services/Api";
import "./reset.css";
import "./main.css";
import "./icons-font.css";

function App() {
  const [allCardData, setAllCardData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(9);
  const [totalCards, setTotalCards] = useState(0);

  useEffect(() => {
    const fetchLocalDataAndUpdateState = () => {
      try {
        const data = fetchLocalData();

        // Ваша логика обработки данных
        const cards = data; // Вам нужно адаптировать эту часть под данные, которые возвращает ваш API
        const totalCount = cards.length; // Вам также нужно адаптировать подсчет общего количества

        setAllCardData(cards);
        setTotalCards(totalCount);
      } catch (error) {
        // Обработка ошибок при запросе данных
        console.error("Ошибка при получении локальных данных", error);
      }
    };

    fetchLocalDataAndUpdateState();
  }, []);

  const totalPages = Math.ceil(totalCards / cardsPerPage);

  const visibleCards = allCardData.slice(
    (currentPage - 1) * cardsPerPage,
    currentPage * cardsPerPage
  );

  return (
    <div className="app">
      <div className="cards">
        {visibleCards.map((card) => (
          <Card key={card.id} data={card} />
        ))}
      </div>
      <div className="pagination">
        <p>
          Showing {currentPage === 1 ? 1 : (currentPage - 1) * cardsPerPage + 1}{" "}
          - {Math.min(currentPage * cardsPerPage, totalCards)} of {totalCards}{" "}
          results.
        </p>

        <div className="pagination__btns">
          <button
            onClick={() =>
              setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))
            }
            disabled={currentPage === 1}
            className={currentPage === 1 ? "disabled" : "_active"}
          >
            <div className="icon-arrow-left"></div>
            <div className="btn-text">Previous</div>
          </button>

          <button
            onClick={() =>
              setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className={currentPage === totalPages ? "disabled" : "_active"}
          >
            <div className="btn-text">Next</div>
            <div className="icon-arrow-right"></div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
