import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './footer.css'

const containerStyle = {
    backgroundColor:"#2f2f2f",
    marginTop:"0px",
    height:"50px",
    width:"100%",
}

class Footer extends React.Component {
    render() {
        return (

            <div className="container" style={containerStyle}>
                <p1>Wykonane przez Filip Adamczyk</p1>
            </div>


        );
    }
}

export default Footer;