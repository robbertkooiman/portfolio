import React, { useState } from 'react';
import ChipList from './ChipList';
import Chip from './Chip';
import './Timeline.scss';
import useApi from '../hooks/useApi';

function Timeline() {
    const [filter, setFilter] = useState(null);

    const timeline = useApi('items/timeline?sort=-from&fields=*,type.*');
    const timelineTypes = useApi('items/timeline_entry_type');

    function formatDate(date) {
        return new Date(date).getFullYear();
    }

    return (
        <div className="Timeline">
            <h2>
                Timeline
            </h2>
            {
                !timelineTypes.isLoaded && timelineTypes.data ? <p>loading...</p> :
                    <ChipList>
                        <Chip key="everything" onClick={() => setFilter(null)}>Everything</Chip>
                        {timelineTypes.data.map(type => <Chip key={type.type} onClick={() => setFilter(type.type)}>{type.description}</Chip>)}
                    </ChipList>
            }
            {
                !timeline.isLoaded && timeline.data ? <p>loading...</p> :
                    <ul className="TimelineItems">
                        {timeline.data.filter(item => !filter || item.type.type === filter).map(item => (
                            <li key={item.id}>
                                {item.title}<br />
                                {item.link ?
                                    <a href={item.link}>{item.location}</a>
                                    : <span className="Half">{item.location}</span>}<br />
                                <div className="Half Footer">
                                    <Chip span={true}>{item.type.description}</Chip>
                                    {formatDate(item.from)}
                                    {item.type.type === 'education' || item.type.type === 'work' ?
                                        <span> - {item.to ? formatDate(item.to) : 'now'}</span>
                                        : null}
                                </div>
                            </li>
                        ))}
                    </ul>
            }
        </div>
    );
}

export default Timeline;