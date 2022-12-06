import React from 'react';
import { getPagesArrays } from '../../utils/page';

const Pagination = ({ totalPages, page, changePage }) => {
  let pagesArray = getPagesArrays(totalPages);

  return (
    <div className="page__wrapper">
      {pagesArray.map((p) => (
        <span
          onClick={() => changePage(p)}
          key={p}
          className={page === p ? 'page page__current' : 'page'}>
          {p}
        </span>
      ))}
    </div>
  );
};

export default Pagination;
