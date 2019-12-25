import React from 'react';

const Search = () => {
    return (
        <React.Fragment>
            <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </React.Fragment>
    )
}

export default Search;
