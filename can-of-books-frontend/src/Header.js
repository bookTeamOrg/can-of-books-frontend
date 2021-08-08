import React, { Component } from 'react'
import LoginButton from './Login'
import LogoutButton from './LogoutButton'

export class Header extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <LoginButton/>
                    </li>
                    <li>
                        <LogoutButton/>
                    </li>
                </ul>
                
            </div>
        )
    }
}

export default Header
