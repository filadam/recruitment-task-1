import React from "react";
import './intouch.css'
import 'bootstrap/dist/css/bootstrap.css';

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => {
        images[item.replace('./', '')] = r(item);
    });
    return images;
}

const images = importAll(require.context('./icons', false, /\.(gif|jpe?g|svg)$/));


class InTouch extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            fields: {},
            errors: {}
        }
    }

    handleValidation() {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        //Name
        if (!fields["name"]) {
            formIsValid = false;
            errors["name"] = "Cannot be empty";
        }

        if (typeof fields["name"] !== "undefined") {
            if (!fields["name"].match(/^[a-zA-Z]+$/)) {
                formIsValid = false;
                errors["name"] = "Only letters";
            }
        }

        //Email
        if (!fields["email"]) {
            formIsValid = false;
            errors["email"] = "Cannot be empty";
        }

        if (typeof fields["email"] !== "undefined") {
            let lastAtPos = fields["email"].lastIndexOf('@');
            let lastDotPos = fields["email"].lastIndexOf('.');

            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') === -1
                && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
                formIsValid = false;
                errors["email"] = "Email is not valid";
            }
        }


        this.setState({errors: errors});
        return formIsValid;
    }

    contactSubmit(e) {
        e.preventDefault();
        if (this.handleValidation()) {
        }
    }

    handleChange(field, e) {
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.setState({fields});
    }

    render() {
        return (
            <div
                className="container touchSection"
            >
                <form
                    name="contactForm"
                    className="contactForm"
                    onSubmit={this.contactSubmit.bind(this)}
                >
                    <h5>Get in Touch</h5>
                    <h6>In order to get in touch use the contact form below:</h6>
                    <input
                        placeholder="Name (Required)"
                        onChange={this.handleChange.bind(this, "name")}
                        value={this.state.fields["name"]}/>
                    <span className="error">
                        {this.state.errors["name"]}
                    </span>

                    <input
                        placeholder="Email (Required)"
                        onChange={this.handleChange.bind(this, "email")}
                        value={this.state.fields["email"]}
                    />
                    <span className="error">
                        {this.state.errors["email"]}
                    </span>

                    <input
                        placeholder="Subject"
                        maxLength="60"
                    />
                    <textarea
                        placeholder="Write your message here..."
                        onChange={this.handleChange.bind(this, "message")}
                    >{this.state.fields["message"]}</textarea>
                    <button
                    >Send
                    </button>
                </form>
                <div className="sider col-sm-3 align-self-center">
                    <p3>
                        <b>Orci varius:</b> natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                        Quisque pellentesque, erat non sagittis luctus, orci arcu varius sem, ac interdum nisl odio at
                        leo. Nam
                        eget nibh ipsum.
                    </p3>
                    <div className="sider2">
                        <div className="iconTouch">
                            <img src={images['place.gif']} alt="zdjecie"/>
                            <p2>Street X, 14/18 Hoth</p2>
                        </div>
                        <div className="iconTouch">
                            <img src={images['phone.gif']} alt="zdjecie"/>
                            <p2>123 456 789</p2>
                        </div>
                        <div className="iconTouch">
                            <img src={images['mail.gif']} alt="zdjecie"/>
                            <p2>vader@deathstar.com</p2>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default InTouch;