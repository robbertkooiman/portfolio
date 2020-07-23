import React, { Component } from 'react';
import './Button.scss';

class Button extends Component {
    render() {
        return (
            <button className="Button">
                {this.props.children}
            </button>
        );
    }
}

export default Button;