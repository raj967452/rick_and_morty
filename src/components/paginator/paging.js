import React from 'react';
import PropTypes from 'prop-types';


const previousBtn = (currentPage, onPageChange) =>  currentPage > 1 && <li className="page-item disabled">
<a className="page-link" onClick={() => onPageChange('previous')} tabIndex="-1">Previous</a>
</li>
const Paging = () => (

    <nav aria-label="Page navigation">
        <ul className="pagination justify-content-center">
            <li className="page-item disabled">
                <a className="page-link" href="/" tabIndex="-1">Previous</a>
            </li>
            <li className="page-item"><a className="page-link" href="/">1</a></li>

            <li className="page-item">
                <a className="page-link" href="/">Next</a>
            </li>
        </ul>
    </nav>
)

export default Paging;