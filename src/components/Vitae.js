import React, { Component } from 'react';
import Avatar from './Avatar';
import Skillset from './Skillset';
import Timeline from './Timeline';
import './Vitae.scss';

class Vitae extends Component {
    render() {
        return (
            <div className="Vitae">
                <div className="Columns">
                    <div>
                        <Avatar />
                        <p>
                            I've always had an interest in interaction. Every representation of an interface is something I aim to perfect. As a studied game designer and experienced web developer and UX designer, I've always tried to maintain a versatile skillset to be able to contribute to all sorts of projects. I value minimalism and chase perfection.
                        </p>
                        <p>
                            Recently, I've decided to chase some athletic dreams as well as educational ones, by starting a master's degree in computer science and joining the rowing team at <a target="_blank" href="https://www.brookes.ac.uk/">Oxford Brookes University</a>.
                        </p>
                    </div>
                    <Skillset />
                </div>
                <Timeline />
            </div>
        );
    }
}

export default Vitae;