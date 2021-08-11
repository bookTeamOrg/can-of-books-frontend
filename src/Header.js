import React, { Component } from "react";
import LoginButton from "./Login";
import LogoutButton from "./LogoutButton";
// import Profile from './Profile'
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

export class Header extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>My Favorite Books</Navbar.Brand>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <LoginButton />
        <LogoutButton />
        {/* TODO: if the user is logged in, render the `LogoutButton` - if the user is logged out, render the `LoginButton` */}
      </Navbar>
    );
  }
}

export default Header;
