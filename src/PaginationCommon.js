import React from 'react';
import PropTypes from 'prop-types';

const Pagination = ({ totalElements, recordsPerPage, pageNumber, onPageChange }) => {
  const totalPages = Math.ceil(totalElements / recordsPerPage);

  const handleClick = (page) => {
    onPageChange(page);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <li key={i} className={`page-item ${pageNumber === i ? 'active' : ''}`}>
          <button onClick={() => handleClick(i)} className="page-link">
            {i}
          </button>
        </li>
      );
    }
    return pageNumbers;
  };

  return (
    <nav>
      <ul className="pagination">
        {renderPageNumbers()}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  totalElements: PropTypes.number.isRequired,
  recordsPerPage: PropTypes.number.isRequired,
  pageNumber: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
