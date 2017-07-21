import React, { Component } from "react";
import { Table,Jumbotron,Col,Clearfix } from "react-bootstrap";
import { Link } from 'react-router-dom';

class AboutUs extends Component {
    render() {
        console.log("routeParams", this.props.route);
        return (<div>
            <Jumbotron className="height-full">
                <div>
                    <h1>About Us</h1>
                    <p>This is a About Us page.</p>
                </div>
            </Jumbotron>
            <Jumbotron className="height-full">
                <div>
                    <h1>Profile section</h1>
                    <p>This is a Profile section.</p>
                </div>
            </Jumbotron>
            <Jumbotron className="height-full">
                <div>
                    <h1>Team section</h1>
                    <p>This is a Team section.</p>
                </div>
            </Jumbotron>
            <Jumbotron className="height-full">
                <div>
                    <h1>Contact section</h1>
                    <p>This is a Contact section.</p>
                </div>
            </Jumbotron>
        </div>
        );
    }
    componentDidMount() {
        console.log(this.props.match.path);
        if (this.props.match.path === "/aboutus/profile") {
            window.scrollTo(0, 500);
        } else if (this.props.match.path === "/aboutus/team") {
            window.scrollTo(0, 1000);
        }else if (this.props.match.path === "/aboutus/contact") {
            window.scrollTo(0, 1500);
        }
    }
}

export default AboutUs;


