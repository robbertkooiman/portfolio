import React, { Component } from 'react';
import './Avatar.scss';
import { getImageUrl } from "../hooks/useApi";

class Avatar extends Component {

    render() {
        return (
            <div className="Wrapper">
                <img src={getImageUrl("95c7c05c-de02-4c40-a137-ebdc2ef52a49")}
                    alt="Robbert" className="Avatar" />
            </div>
        );
    }
}

export default Avatar;