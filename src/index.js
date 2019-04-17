import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Header from './components/layout/header/header'
import Carousel from './components/layout/carousel/carousel'
import About from './components/pages/aboutme/aboutme'
import InTouch from './components/pages/intouch/intouch'
import Footer from './components/layout/footer/footer'
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
    <React.Fragment>
    <Header />
    <Carousel />
    <About />
    <InTouch />
    <Footer />
    </React.Fragment>


    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
