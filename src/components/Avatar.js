import React, { Component } from 'react';
import './Avatar.scss';
import avatar from '../assets/robbert_bw_400x400.jpg';

class Avatar extends Component {
    render() {
        return (
            <div className="Wrapper">
                <img src={avatar} alt="Robbert" className="Avatar" />
            </div>
        );
    }
}

export default Avatar;