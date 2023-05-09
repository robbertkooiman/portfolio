import React, { Component } from 'react';
import Chip from './Chip';
import ChipList from './ChipList';

class Skillset extends Component {
    render() {
        return (
            <div className="Skillset">
                <h2>
                    Languages
                </h2>
                <ChipList>
                    <Chip star={true}>Angular</Chip>
                    <Chip star={true}>TypeScript</Chip>
                    <Chip star={true}>React</Chip>
                    <Chip star={true}>Git</Chip>
                    <Chip>JavaScript</Chip>
                    <Chip star={true}>Sass</Chip>
                    <Chip>C#</Chip>
                    <Chip>Unity</Chip>
                    <Chip star={true}>MongoDB</Chip>
                    <Chip star={true}>NodeJS</Chip>
                    <Chip>Express</Chip>
                    <Chip star={true}>CSS</Chip>
                    <Chip>HTML</Chip>
                    <Chip>PHP</Chip>
                    <Chip star={true}>English</Chip>
                    <Chip>Dutch</Chip>
                </ChipList>
                <h2>
                    Skills
                </h2>
                <ChipList>
                    <Chip star={true}>Agile</Chip>
                    <Chip star={true}>UX Design</Chip>
                    <Chip star={true}>Interaction Design</Chip>
                    <Chip star={true}>Development Lead</Chip>
                    <Chip>Kanban</Chip>
                    <Chip star={true}>Problem Solving</Chip>
                    <Chip>Scrum</Chip>
                </ChipList>
                <p className="Half">Stars are personal favourites.</p>
            </div>
        );
    }
}

export default Skillset;