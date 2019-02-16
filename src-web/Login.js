import React, { Component } from "react";
import "./css/app.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as firebase from "firebase/app";
// import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import Navbar from "./components/nav/navbar";
import RegisterUser from "./components/registerUser";
import App from "./App";
import LoginWithMonash from "./components/loginWithMonash";
import database from "./data.js";
import About from "./components/about";
import PrivacyPolicy from "./components/privacypolicy";

class Login extends Component {
  state = {
    database: {}
  };
  constructor(props) {
    super(props);
    this.state.loggedIn = "not-checked";
    database.setAuthStateChangedCallback(this.changeAuthState);
    window.onGoogleYoloLoad = googleyolo => {
      this.setState({googleYoloObject: googleyolo});
    };
  }

  changeAuthState = user => {
    if (user) {
      this.setState({ loggedIn: true, email: user.email });
    } else {
      this.setState({ loggedIn: false, userId: null });
    }
  };

  loadGoogleYolo(googleyolo) {
    if(googleyolo){
      const hintPromise = googleyolo.hint({
        supportedAuthMethods: ["https://accounts.google.com"],
        supportedIdTokenProviders: [
          {
            uri: "https://accounts.google.com",
            clientId:
              "1062729892729-b3b06eljnptc7npj5bgmqktiqcogstp6.apps.googleusercontent.com"
          }
        ]
      });
      hintPromise.then(
        credential => {
          if (credential.idToken) {
            const cred = firebase.auth.GoogleAuthProvider.credential(
              credential.idToken
            );
            return firebase.auth().signInWithCredential(cred);
          }
        },
        error => {
          console.log("google yolo error", error);
        }
      );
    }
  }

  render() {
    if (
      this.state.loggedIn === true &&
      this.state.email.includes("student.monash.edu")
    ) {
      return <App uid={this.state.email} />;
    } else if (this.state.loggedIn === "not-checked") {
      return <i className="fas fa-circle-notch fa-spin loader text-5xl" />;
    } else if (
      this.state.loggedIn === true &&
      !this.state.email.includes("student.monash.edu")
    ) {
      return <LoginWithMonash />;
    } else {
      this.loadGoogleYolo(this.state.googleYoloObject)
      return (
        <Router>
          <Switch>
            <Route
              exact
              path="/login"
              render={() => (
                <React.Fragment>
                  <Navbar loggedIn={false} />
                  <RegisterUser />
                </React.Fragment>
              )}
            />
            <Route
              exact
              path="/privacy-policy"
              render={() => (
                <React.Fragment>
                  <Navbar loggedIn={false} />
                  <PrivacyPolicy />
                </React.Fragment>
              )}
            />
            <Route
              render={() => (
                <React.Fragment>
                  <Navbar loggedIn={false} />
                  <About />
                </React.Fragment>
              )}
            />
          </Switch>
        </Router>
      );
    }
  }
}
export default Login;
