import React, { Component } from 'react';
import star from '../assets/star.svg';
import './Star.scss';

class Star extends Component {
    render() {
        return (
            <img className="Star" alt="favorite" src={star} />
        );
    }
}

export default Star;