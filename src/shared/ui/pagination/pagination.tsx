import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import s from './pagination.module.scss';
import ArrowIconTwo from '../../assets/icons/ui/arrowIconTwo';

interface PaginationProps {
  className?: string;
  onChange: (page: number) => void;
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
}

function Pagination(props: PaginationProps) {
  const {
    className,
    onChange,
    currentPage,
    totalItems,
    itemsPerPage,
  } = props;

  const [currentPageState, setCurrentPageState] = useState(currentPage);

  useEffect(() => {
    setCurrentPageState(currentPage);
  }, [currentPage]);

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPageState(page);
    onChange(page);
  };

  const renderPageNumbers = () => {
    const pageNumbers: (number | string)[] = [];
    const maxPagesToShow = 5;
    const halfPagesToShow = Math.floor(maxPagesToShow / 2 - 1);

    if (totalPages <= maxPagesToShow) {
      for (let i = 1; i <= totalPages; i += 1) {
        pageNumbers.push(i);
      }
    } else if (currentPageState <= halfPagesToShow + 2) {
      for (let i = 1; i <= maxPagesToShow - 1; i += 1) {
        pageNumbers.push(i);
      }
      pageNumbers.push('right');
      pageNumbers.push(totalPages);
    } else if (currentPageState > totalPages - halfPagesToShow - 2) {
      pageNumbers.push(1);
      pageNumbers.push('left');
      for (let i = totalPages - maxPagesToShow + 2; i <= totalPages; i += 1) {
        pageNumbers.push(i);
      }
    } else {
      pageNumbers.push(1);
      pageNumbers.push('left');
      for (
        let i = currentPageState - halfPagesToShow;
        i <= currentPageState + halfPagesToShow;
        i += 1
      ) {
        pageNumbers.push(i);
      }
      pageNumbers.push('right');
      pageNumbers.push(totalPages);
    }

    return pageNumbers.map((number) => (typeof number === 'number' ? (
      <button
        type="button"
        key={uuidv4()}
        onClick={() => handlePageChange(number)}
        className={`${s.paginationBtn}`}
        aria-current={currentPageState === number}
      >
        {number}
      </button>
    ) : (
      <button
        type="button"
        key={uuidv4()}
        className={`${s.paginationBtn}`}
        onClick={() => {
          let newPage = currentPageState;
          if (number === 'left') {
            newPage = Math.max(1, currentPageState - maxPagesToShow + 2);
          } else if (number === 'right') {
            newPage = Math.min(totalPages, currentPageState + maxPagesToShow - 2);
          }
          handlePageChange(newPage);
        }}
      >
        ...
      </button>
    )));
  };

  return (
    <div className={`${s.pagination} ${className}`}>
      <button
        type="button"
        aria-label="previous page"
        className={s.paginationBtn}
        onClick={() => {
          if (currentPageState > 1) {
            handlePageChange(currentPageState - 1);
          }
        }}
      >
        <ArrowIconTwo className={s.arrowIcon} />
      </button>
      {renderPageNumbers()}
      <button
        type="button"
        aria-label="next page"
        className={s.paginationBtn}
        onClick={() => {
          if (currentPageState < totalPages) {
            handlePageChange(currentPageState + 1);
          }
        }}
      >
        <ArrowIconTwo className={s.arrowIcon} />
      </button>
    </div>
  );
}

Pagination.defaultProps = {
  className: '',
};

export default Pagination;
