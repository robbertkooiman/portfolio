import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.scss';

function Navigation(props) {
    function onNavigate() {
        props.onNavigate();
    }

    return (
        <nav className="Navigation">
            <ul>
                {/* <li>
                        <NavLink activeClassName="Active" to="/" exact={true} onClick={onNavigate}>Home</NavLink>
                    </li> */}
                <li>
                    <NavLink activeClassName="Active" to="/projects" onClick={onNavigate}>Projects</NavLink>
                </li>
                <li>
                    <NavLink activeClassName="Active" to="/vitae" onClick={onNavigate}>Vitae</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;