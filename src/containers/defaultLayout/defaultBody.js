import React from 'react';

const Directory = React.lazy(() => import('../../components/directory'));

const Body = () => {
    return (
        <React.Fragment>
            <Directory />
        </React.Fragment>
    );
};

export default Body;