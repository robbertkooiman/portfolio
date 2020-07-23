import React, { Component } from 'react';
import './ChipList.scss';

class ChipList extends Component {
    render() {
        return (
            <div className="ChipList">
                {this.props.name ? <h2 className="ListTitle">{this.props.name}</h2> : null}
                <ul>
                    {this.props.children}
                </ul>
            </div>
        );
    }
}

export default ChipList;