import React, { Component } from 'react'
import { withAuth0 } from "@auth0/auth0-react";

export class BookShelf extends Component {
    render() {
        const {isAuthenticated} = this.props.auth0;
        return (
            isAuthenticated &&
            <div>
                <ul>
                    <li>
                        <p>Book 1</p>
                    </li>
                    <li>
                        Book 2
                    </li>
                    <li>
                        Book 3
                    </li>
                    <li>
                        Book 4
                    </li>

                </ul>
                
            </div>
        )
    }
}

export default withAuth0(BookShelf);

