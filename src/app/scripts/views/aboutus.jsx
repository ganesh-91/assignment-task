import React from "react";
import { Jumbotron } from "react-bootstrap";

class AboutUs extends React.Component {
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
        if (this.props.route.path === "/aboutus/profile") {
            window.scrollTo(0, 500);
        } else if (this.props.route.path === "/aboutus/team") {
            window.scrollTo(0, 1000);
        }else if (this.props.route.path === "/aboutus/contact") {
            window.scrollTo(0, 1500);
        }
    }
}

AboutUs.propTypes = {
    route: React.PropTypes.object
};


export default AboutUs;