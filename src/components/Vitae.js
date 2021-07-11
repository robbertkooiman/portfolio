import React, { Component } from 'react';
import Avatar from './Avatar';
import Skillset from './Skillset';
import Timeline from './Timeline';
import './Vitae.scss';
import resume from "../assets/Curriculum Vitae.pdf";

class Vitae extends Component {
    render() {
        return (
            <div className="Vitae">
                <div className="Narrow">
                    <div>
                        <Avatar />
                        <p>
                            I've always been interested in interaction. Every representation of an interface is something I aim to perfect. As a learned game designer and experienced web developer and UX designer, I've always tried to maintain a versatile skillset to be able to contribute to all kinds of projects. I value minimalism and struggle with perfectionism.
                        </p>
                        <p>
                            Recently, I've decided to chase some athletic dreams as well as educational ones, by starting a master's degree and joining the rowing team at <a target="_blank" rel="noopener noreferrer" href="https://www.brookes.ac.uk/">Oxford Brookes University</a>.
                        </p>
                        <a target="_blank" rel="noopener noreferrer" href={resume}>Download my curriculum vitae</a>
                    </div>
                    <Skillset />
                </div>
                <Timeline />
            </div>
        );
    }
}

export default Vitae;