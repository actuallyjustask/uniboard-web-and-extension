import React, { Component } from "react";
import Home from "./components/home";
import Sidebar from "./components/sidebar/sidebar";
// import firebase from 'firebase';
import SidebarSearch from "./components/sidebarSearch/sidebarSearch";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GetTheExtension from "./components/getTheExtension";
import database from "./data";
import "./css/app.css";

class App extends Component {
  state = { loading: true, notFound: false };
  constructor(props) {
    super(props);
    database.onUpdate(data => {
      this.setState({ data: data, loading: false });
    });
  }
  render() {
    if (this.state.data) {
      console.log(this.state.data);
      return (
        <Router>
          <div className="App flex flex-col">
            <Route
              path="/home/sidebar/:id/:branchid"
              render={props => <Sidebar data={this.state.data} {...props} />}
            />
            <Route
              path="/home/search"
              render={props => (
                <SidebarSearch db={this.state.data} {...props} />
              )}
            />

            <Home data={this.state.data} />
          </div>
        </Router>
      );
    } else if (this.state.loading) {
      return <div className="loader">Loading...</div>;
    } else if (this.state.notFound) {
      return <GetTheExtension />;
    } else {
      return false;
    }
  }
}

export default App;
