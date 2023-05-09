import React from 'react';
import Star from './Star';
import './Chip.scss';
import Button from './Button';

function Chip(props) {
    return (
        props.onClick ?
            <Button className="Chip" onClick={props.onClick}>
                {props.children} {props.star ? <Star /> : null}
            </Button>
            : <li className="Chip">
                {props.children} {props.star ? <Star /> : null}
            </li>);
}

export default Chip;