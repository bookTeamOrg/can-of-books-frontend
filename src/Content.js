import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';



export class Content extends Component {
    constructor(props){
        super(props)
        this.state = {
            user:{}
        };
    }
   
     componentDidMount () {
        // the function getIdTokenClaims is a promise based function
        console.log(this.props.auth0);
        this.props.auth0.getIdTokenClaims().then(tokenResponse => {
    
          console.log(tokenResponse);
          const jwt = tokenResponse.__raw;
          console.log(jwt);
    
          const config = {
            headers: {
              "Authorization": `Bearer ${jwt}`
            },
            method: 'get',
            baseURL: process.env.REACT_APP_SERVER,
            url: '/verify-token'
          };
    
          axios(config).then((axiosResponse) => {
            // console.log('backend data', axiosResponse.data);
    
            this.setState({
              user: axiosResponse.data
            })
          }).catch(error => alert(error))
    
        }).catch(error => console.log(error));
      };

    render() {
      console.log(this.props.auth0);
        return (
            <div>
                <p>
          Component Loaded!
        </p>
        {
          this.state.user.nickname &&
          <p>
            Data from Backend: {
              this.state.user.nickname
            }
          </p>
        }
            </div>
        )
    }
}

export default withAuth0(Content);
