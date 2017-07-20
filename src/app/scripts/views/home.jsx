import React from "react";
import { Jumbotron } from "react-bootstrap";
import { Link } from "react-router";

class Home extends React.Component {
    render() {
        return (
            <Jumbotron>
                <div>
                    <h1>Home</h1>
                    <p>This is a Home page.</p>
                </div>
                <div className="text-left">
                    <Link className="text-left" to="/aboutus/profile">Profile</Link>
                </div>
                <div className="text-left">
                    <Link className="text-left" to="/aboutus/team">Team</Link>
                </div>
                <div className="text-left">
                    <Link className="text-left" to="/aboutus/contact">Contact</Link>
                </div>
            </Jumbotron>
        );
    }
}
export default Home;