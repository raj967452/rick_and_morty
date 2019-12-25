import React from 'react';
import './style.scss';

const Loader = () => {
    return (
        <div className="d-flex justify-content-center spinner">
            <div className="spinner-border" style={{ width: '3rem', height: '3rem' }} role="status">
            <span className="sr-only">Loading...</span>
        </div></div>
    );
};

export default Loader;