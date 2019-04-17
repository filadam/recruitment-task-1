import React from 'react';

import './index.css';
import Header from './components/layout/header/header'
import Carousel from './components/layout/carousel/carousel'
import About from './components/layout/aboutme/aboutme'
import InTouch from './components/layout/intouch/intouch'
import Footer from './components/layout/footer/footer'
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