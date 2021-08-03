import React from 'react';
import "./Footer.scss";
import { useApi, getImageUrl } from "../hooks/useApi";

function Footer(props) {
    const socials = useApi('items/socials');

    return (
        <footer>
            <div className="Narrow">
                <ul>
                    {socials.data.map(item =>
                        <li key={item.id}>
                            <a href={item.link}>
                                <img className="Icon" src={getImageUrl(item.icon)} />
                                {item.name}
                            </a>
                        </li>
                    )}
                </ul>
            </div>
        </footer>
    );
}

export default Footer;