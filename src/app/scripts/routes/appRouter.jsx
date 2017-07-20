// React
import React from "react";

// Router
import { Router, Route, browserHistory, IndexRoute } from "react-router";

// Redux Provider
import { Provider } from "react-redux";

// Store
import { store } from "../store/appStore";

// routing for dashboard
import Login from "../views/login.jsx";
import Home from "../views/home.jsx";
import AboutUs from "../views/aboutus.jsx";


export class AppRouter extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Router history={browserHistory}>
                    <Route path="/" component={Login} />
                    <Route path="/login" component={Login} />
                    <Route path="/home" component={Home} />
                    <Route path="/aboutus/profile" component={AboutUs} />
                    <Route path="/aboutus/team" component={AboutUs} />
                    <Route path="/aboutus/contact" component={AboutUs} />
                </Router>
            </Provider>
        );
    }
}
