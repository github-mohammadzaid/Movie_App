import React from 'react';

const Pagination = ({ currentPage, setCurrentPage }) => {
  const handlePageChange = (page) => {
    setCurrentPage(page);
  }

  return (
    <nav>
      <ul className="pagination justify-content-center">
        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
          <button className="page-link" onClick={() => handlePageChange(currentPage - 1)}>Previous</button>
        </li>
        <li className="page-item">
          <button className="page-link" onClick={() => handlePageChange(currentPage + 1)}>Next</button>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;