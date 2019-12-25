import React from 'react';
import { Link } from 'react-router-dom';
import PageNotFound from '../../../assets/images/PageNotFound.jpg';

const Page404 = () => (
    <div>
        <img src={PageNotFound} style={{height:'80vh', display: 'block', margin: 'auto', position: 'relative' }} alt="Page not found"/>
        <center><Link to="/">Return to Home Page</Link></center>
    </div>
);

export default Page404;