import React from 'react';
import PropTypes from 'prop-types';

import Sort from '../sort';
import Filters from '../filters'

const DirectoryHeader = (props) => {
    return (
        <React.Fragment>
            <div className="directory-container-header">
                <div className="d-flex flex-row justify-content-between">
                    <div className="mt-2">{props.charactersLength} Charater(s) found.</div>
                    <Sort />
                    <Filters />
                </div>
            </div>
        </React.Fragment>
    )
}

DirectoryHeader.prototype = {
    charactersLength: PropTypes.number.isRequired
}

export default DirectoryHeader;
