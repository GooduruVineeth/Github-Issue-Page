import React from "react";
import _ from "lodash";
const Pagination = ({ totalSize, currentPage, handleOnChange }) => {
  const nuberOfPages = totalSize / 9;
  let pages = _.range(1, nuberOfPages + 1);
  return (
    <div class="mx-auto m-5" style={{ width: 200 }}>
      <ul className="pagination">
        {pages.map((page,index) => {
          return (
            
            <li key={index} className={index==currentPage-1 ?"page-item active":"page-item"}>
              <a
                className="page-link"
                onClick={() => {
                  handleOnChange(page);
                }}
              >
                {page}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Pagination;
