import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
// import BookShelf from './BookShelf';
import { Content } from './Content';

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
        {/* <BookShelf/> */}
        <Content auth0={this.props.auth0}/>
        {console.log('profile',this.props.auth0)}

    </Card.Text>
  </Card.Body>
</Card>
        
        </div>
    )
  }
}

export default withAuth0(Profile);