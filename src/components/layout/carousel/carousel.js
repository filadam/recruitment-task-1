import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './carousel.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import carousel__item from './hexaljpg.jpg'
import carousel__mobile from './hexalmini.jpg'

class Carousel extends React.Component {
    render() {
        return (
            <div className="hidden__container" src={carousel__mobile}>
                <div className="container d-none d-sm-block">
                    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={carousel__item} className="d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item">
                                <img src={carousel__item} className="d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item">
                                <img src={carousel__item} className="d-block w-100" alt="..."/>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button"
                           data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button"
                           data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>


        );
    }
}

export default Carousel;