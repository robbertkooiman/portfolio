import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.scss';

class Navigation extends Component {
    render() {
        return (
            <nav className="Navigation">
                <ul>
                    <li>
                        <NavLink activeClassName="Active" to="/" exact={true}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="Active" to="/projects">Projects</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="Active" to="/vitae">Vitae</NavLink>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Navigation;