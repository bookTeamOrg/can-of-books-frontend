import React from "react";
import Header from "./Header";
// import IsLoadingAndError from "./IsLoadingAndError";
import Footer from "./Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Profile from "./Profile";
import BookShelf from "./BookShelf";
// import  Content  from "./Content";
import { withAuth0 } from '@auth0/auth0-react';
import LoginButton from "./Login";

export class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          {/* <IsLoadingAndError> */}
            <Header />

            <Switch>
              <Route exact path="/">
                {/* TODO: if the user is logged in, render the `BestBooks` component, if they are not, render the `Login` component */}
               {this.props.auth0.isAuthenticated?
                <BookShelf />
                :
                <LoginButton/>
               }
              </Route>

              <Route exact path="/profile">
                {/* TODO: add a route with a path of '/profile' that renders a `Profile` component */}
                {this.props.auth0.isAuthenticated?
                <Profile />:
                null
                }
              </Route>
            </Switch>
            {/* <Content/> */}
            <Footer />
          {/* </IsLoadingAndError> */}
        </Router>
      </>
    );
  }
}

export default withAuth0(App);
