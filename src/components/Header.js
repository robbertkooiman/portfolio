import React, { Component } from 'react';
import Logo from './Logo';
import { Link } from 'react-router-dom';
import "./Header.scss";
import Navigation from './Navigation';

class Header extends Component {
    render() {
        return (
            <header className="Header">
                <div>
                    <Logo />
                    <h3 className="Tagline">Development and Design</h3>
                </div>
                <Navigation />
            </header>
        );
    }
}

export default Header;