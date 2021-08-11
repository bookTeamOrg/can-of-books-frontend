import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
<<<<<<< HEAD
=======
import BookShelf from './BookShelf';
>>>>>>> 0387eb1e9dce23b25024af70a7bcfda02c4bd014

class Profile extends Component {
  render() {
    const { user, isAuthenticated } = this.props.auth0;
    return(
        isAuthenticated &&
        
        <div>
            <Card style={{ width: '18rem' } }>
  <Card.Img variant="top" src= {user.picture} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
           <p>Hello {user.name}</p> 
        <p>Nickname: {user.nickname}</p>
        <p>Email Address: {user.email}</p>
<<<<<<< HEAD
=======
        <BookShelf/>

>>>>>>> 0387eb1e9dce23b25024af70a7bcfda02c4bd014
    </Card.Text>
  </Card.Body>
</Card>
        
        </div>
    )
  }
}

export default withAuth0(Profile);