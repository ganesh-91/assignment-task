import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from "react-redux";

import { store } from "./store/appStore";
import './App.css';
import AboutUs from './components/AboutUs';
import Login from './components/Login';
import Home from './components/Home';
import Page404 from './components/Page404';

class App extends Component {
    render() {
        return (
          <div className="App">
            <Provider store={store}>
            <Router>
              <Switch>
                  <Route exact path="/" component={Login}></Route>
                  <Route path="/login" component={Login}></Route>
                  <Route path="/home" component={Home}></Route>
                  <Route path="/aboutus/profile" component={AboutUs} />
                    <Route path="/aboutus/team" component={AboutUs} />
                    <Route path="/aboutus/contact" component={AboutUs} />
                  <Route path="*" component={Page404}></Route>
              </Switch>
            </Router>
            </Provider>
          </div>
        );
    }
}

export default App;

