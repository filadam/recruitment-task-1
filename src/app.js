import React from 'react';

import './index.css';
import Header from './components/landingpage/layout/header/header'
import Carousel from './components/landingpage/layout/carousel/carousel'
import About from './components/landingpage/layout/aboutme/aboutme'
import InTouch from './components/landingpage/layout/intouch/intouch'
import Footer from './components/landingpage/layout/footer/footer'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Header/>
                <Carousel/>
                <About/>
                <InTouch/>
                <Footer/>
            </React.Fragment>

        )
    }
}

export default App;