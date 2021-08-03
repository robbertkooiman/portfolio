import React from 'react';
import Star from './Star';
import './Chip.scss';
import Button from './Button';

function Chip(props) {
    return (
        props.onClick ?
            <Button className={`Chip ${props.className ? props.className : ''}`} onClick={props.onClick}>
                {props.children} {props.star ? <Star /> : null}
            </Button>
            : props.span ? <span className="Chip">
                {props.children} {props.star ? <Star /> : null}
            </span>
                : <li className="Chip">
                    {props.children} {props.star ? <Star /> : null}
                </li>);
}

export default Chip;