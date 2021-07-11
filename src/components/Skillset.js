import React from 'react';
import { useApi } from '../hooks/useApi';
import Chip from './Chip';
import ChipList from './ChipList';

function Skillset() {
    const skills = useApi('items/skills');
    const languages = useApi('items/languages');

    return (
        <div className="Skillset">
            <h2>
                Languages
                </h2>
            <ChipList>
                {languages.data.map(item =>
                    <Chip key={item.id} star={item.star}>{item.description}</Chip>)}
            </ChipList>
            <h2>
                Skills
                </h2>
            <ChipList>
                {skills.data.map(item =>
                    <Chip key={item.id} star={item.star}>{item.description}</Chip>)}
            </ChipList>
            <p className="Half">Stars are personal favourites. My preference between Angular and React depends on the position of the stars and the <a target="weather" href="https://www.google.com/search?q=weather+in+Eikefjord">current weather in Eikefjord</a>.</p>
        </div>
    );

}

export default Skillset;