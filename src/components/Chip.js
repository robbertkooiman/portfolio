import React, { Component } from 'react';
import Star from './Star';
import './Chip.scss';

class Chip extends Component {
    render() {
        return (
            <li className="Chip">{this.props.children} {this.props.star ? <Star /> : null}</li>
        );
    }
}

export default Chip;