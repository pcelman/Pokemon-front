import React from "react";
import "../styles/pg.css";

export default function Pg({ charactersPerPage, charactersFilter, paginado, currentPage }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(charactersFilter / charactersPerPage); i++) {
    pageNumbers.push(i);
  }


  function handlePrev() {
    if (currentPage <= 1) return;
    paginado(currentPage - 1);
  }

  function handleNext() {
    if (currentPage >= pageNumbers.length) return;
    paginado(currentPage + 1);
  }

  return (
    <main className="pg">
      {currentPage === 1 ? (
        <div></div>
      ) : (
        <span className="pg__arrows" onClick={handlePrev}>
          {" "}
          {"<"}{" "}
        </span>
      )}

      <span className="pg__numbers">
        {pageNumbers &&
          pageNumbers.map((number) =>
            pageNumbers.length === 1 ? (
              <span></span>
            ) : number < currentPage - 2 || number > currentPage + 2 ? (
              <span>.</span>
            ) : (
              <span
                className={number === currentPage ? "pg__numbers--underline" : "pg__numbers--standard"}
                onClick={() => paginado(number)}
                key={number}
              >
                {number}{" "}
              </span>
            )
          )}
      </span>

      {pageNumbers && currentPage === pageNumbers.length ? (
        <div></div>
      ) : (
        <span className="pg__arrows" onClick={handleNext}>
          {" "}
          {">"}{" "}
        </span>
      )}
    </main>
  );
}
