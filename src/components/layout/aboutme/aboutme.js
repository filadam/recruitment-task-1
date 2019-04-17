import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './aboutme.css'
import aboutItem from './smith.gif'

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => {
        images[item.replace('./', '')] = r(item);
    });
    return images;
}

const images = importAll(require.context('./icons', false, /\.(gif|jpe?g|svg)$/));

const opacity = {
    opacity:"0.6",
}

const opacityE = {
    opacity:"0.4",
}

class About extends React.Component {
    render() {
        return (

            <div className="container section ">
                <div className="container about col">
                    <img src={aboutItem}/>

                    <div className="col">
                        <h2>Smith Anderson</h2>
                        <h3>Illustrator & Character Designer</h3>
                        <p>Suspendisse vel nisl non mi suscipit vestibulum non id mi. Nam maximus ipsum non orci
                            pellentesque, eget volutpat lacus accumsan. Sed gravida lorem hendrerit ligula mattis
                            aliquet.
                            Sed et tortor vitae erat aliquet sagittis. Quisque non justo et turpis facilisis
                            sollicitudin at
                            eget sem. Duis sed diam diam. Donec hendrerit arcu id orci vestibulum, eu aliquam eros
                            sagittis.
                            Etiam a dignissim turpis. Vivamus nec imperdiet sapien, consequat ultricies nunc. Nam
                            elementum
                            sem felis. Aenean nec odio vel nulla rhoncus convallis ac vehicula nunc. Proin accumsan
                            imperdiet arcu, ut tempor orci vehicula at. Morbi quis dui mauris. Phasellus convallis
                            condimentum bibendum. In non vestibulum purus, eu porttitor justo.</p>
                        <div id="wrapper" className="col align-self-end">
                            <div className="icon">
                                <img src={images['fb.gif']}/>
                            </div>
                            <div className="icon" style={opacity}>
                                <img src={images['twit.gif']}/>
                            </div>
                            <div className="icon" style={opacityE}>
                                <img src={images['goo.gif']}/>
                            </div>
                            <div className="icon">
                                <img src={images['pin.gif']}/>
                            </div>
                            <div className="icon">
                                <img src={images['insta.gif']}/>
                            </div>
                            <div className="icon" style={opacity}>
                                <img src={images['drib.gif']}/>
                            </div>
                        </div>
                    </div>

                </div>

            </div>


        );
    }
}

export default About;