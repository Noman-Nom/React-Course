import React from 'react'
import './Pagination.css'

const Pagination = () => {
    return (
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item"><a className="page-link" href="#">Previous</a></li>
            
            <li className="page-item"><a className="page-link" href="#">Next</a></li>
          </ul>
        </nav>
      );
}

export default Pagination