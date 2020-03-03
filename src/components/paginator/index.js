import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { MAX_PAGES } from '../../services/constants';
import './style.scss';

const propTypes = {
    initialPage: PropTypes.number
}
const defaultProps = {
    initialPage: 1,
    pageSize: 5
}
class Paginator extends PureComponent {
    state = {
        pager: {
            currentPage: 1,
            pages: null
        }
    }; 
    componentDidMount() {
        if (this.props.paginatorData.pages > 1) {
            let pager = this.state.pager;
            pager = this.getPager(this.props.paginatorData.pages, this.props.initialPage);
            // update state
            this.setState({ pager: pager });            
        }
    }
    setPage(page) {
        let pager = this.state.pager;
        if (page < 1 || page > pager.totalPages) {
            return;
        }
        pager = this.getPager(this.props.paginatorData.pages, page);
        // update state
        this.setState({ pager: pager });
        // call change page function in parent component
        this.props.fetchCharacter(`/character?page=${page}`);
    }
    getPager(totalPages, currentPage) {
        const maxPage = MAX_PAGES || 5;
        let startPage, endPage, pages = [];

        currentPage = currentPage || 1;

        if (totalPages <= MAX_PAGES) {
            startPage = 1;
            endPage = maxPage;
        } else {
            if (currentPage <= maxPage) {
                startPage = 1;
                endPage = maxPage;
            } else if (currentPage + (maxPage - 1) >= totalPages) {
                startPage = totalPages - maxPage;
                endPage = totalPages;
            } else {
                startPage = currentPage;
                endPage = currentPage + (maxPage - 1);
            }
        }
        pages = [...Array(endPage + 1 - startPage).keys()].map(i => startPage + i);
        return {
            currentPage: currentPage,
            pages: pages
        };
    }
    render() {
        const { paginatorData } = this.props;
        const pager = this.state.pager;
        if (!pager.pages || pager.pages.length <= 1) {
            return null;
        }
        return (
            <nav aria-label="Page navigation">
                <ul className="pagination justify-content-center my-4">
                    <li className={`page-item ${pager.currentPage === 1 ? 'disabled' : ''}`}>
                        <button type="button" className="page-link jump-button" onClick={() => this.setPage(1)}>First</button>
                    </li>
                    <li className={`page-item ${pager.currentPage === 1 ? 'disabled' : ''}`}>
                        <button type="button" className="page-link" onClick={() => this.setPage(pager.currentPage - 1)}>
                            <span aria-hidden="true">&laquo;</span>
                            <span className="sr-only">Previous</span>
                        </button>
                    </li>
                    {pager.pages.map((page, index) =>
                        <li className={`page-item ${pager.currentPage === page ? 'active' : ''}`} key={`page_${index + 1}`}>
                            <button type="button" className="page-link" onClick={() => this.setPage(page)}>{page}</button>
                        </li>
                    )}
                    <li className={`page-item ${pager.currentPage === paginatorData.pages ? 'disabled' : ''}`}>
                        <button type="button" className="page-link" onClick={() => this.setPage(pager.currentPage + 1)}>
                            <span aria-hidden="true">&raquo;</span>
                            <span className="sr-only">Next</span>
                        </button>
                    </li>
                    <li className={`page-item ${pager.currentPage === paginatorData.pages ? 'disabled' : ''}`}>
                        <button type="button" className="page-link jump-button" onClick={() => this.setPage(pager.totalPages)}>Last</button>
                    </li>
                </ul>
            </nav>
        )
    }
}

Paginator.propTypes = propTypes;
Paginator.defaultProps = defaultProps;

export default Paginator;