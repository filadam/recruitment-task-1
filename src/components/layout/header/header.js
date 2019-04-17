import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import logo from './logo.gif'
import './header.css'
import 'bootstrap/dist/css/bootstrap.min.css';

class Header extends React.Component {
    render() {
        return (

            <div className="menu ">

                <nav className="navbar navbar-expand-sm justify-content-center ">

                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
                            aria-expanded="false"
                            aria-label="Toggle navigation">

                        <span className="navbar-toggler-icon"></span>
                        <div className="logobutton">
                            <img className="logo" src={logo}/>
                        </div>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">

                        <div className="navbar-nav ">
                            <a className="nav-item nav-link" href="#">PORTFOLIO<span
                                className="sr-only">(current)</span></a>
                            <a className="nav-item nav-link" href="#">ABOUT</a>
                            <div className="logobutton d-none d-sm-block">
                                <img className="logo" src={logo}/>

                            </div>

                            <a className="nav-item nav-link" href="#">BLOG</a>
                            <a className="nav-item nav-link" href="#">GET IN TOUCH</a>
                        </div>

                    </div>
                    <div className="triangle ">

                    </div>
                </nav>

            </div>


        );
    }
}

export default Header;