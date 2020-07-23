import React, { useState } from 'react';
import { useMediaPredicate } from 'react-media-hook';
import Logo from './Logo';
import "./Header.scss";
import Navigation from './Navigation';


function Header() {

    const mobile = useMediaPredicate("(max-width: 600px)");
    const [showMenu, setShowMenu] = useState(false);

    return (
        <header className="Header">
            {!mobile || !showMenu ? <div>
                <Logo />
                <h3 className="Tagline">Development and Design</h3>
            </div> : null}
            {!mobile || showMenu ? <Navigation onNavigate={() => { setShowMenu(false) }} /> : null}
            {mobile ? <button onClick={() => setShowMenu(!showMenu)}>{showMenu ? 'Close' : 'Menu'}</button> : null}
        </header>
    );

}

export default Header;