import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';

const Search = React.lazy(() => import('../../components/search/search'));

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container">
                <NavLink className="navbar-brand" to="/">
                    <img src={Logo} style={{ height: '50px' }} alt="Rick and Morty" />
                </NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"
                    aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to={"/about"}>About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to={"/srvices"}>Services</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to={"/contactus"}>Contact</NavLink>
                        </li>
                    </ul>
                    <Search />
                </div>
            </div>
        </nav>
    )
}

export default Header;
