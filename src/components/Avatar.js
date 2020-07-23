import React, { Component } from 'react';
import './Avatar.scss';
import avatar from '../assets/robbert_bw.jpg';

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