import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Header from "./Header";
import Profile from "./Profile";
import BookShelf from "./BookShelf";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from 'react-bootstrap/Container'

export class App extends Component {
  render() {
    return (
      <div>
        <Container fluid id="header">
          <Row>
            <Col>
        <h1> Hello</h1>
            </Col>
            <Col><Header /></Col>
          </Row>
        </Container>
        <>
          <BrowserRouter>
            <Router>
              <Switch>
                <Route exact path="/">
                  <BookShelf />

                  <Profile />
                </Route>
                <Route exact path="/profile">

                </Route>
              </Switch>
            </Router>
          </BrowserRouter>
        </>
      </div>
    );
  }
}

export default App;
