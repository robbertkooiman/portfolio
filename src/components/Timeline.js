import React, { Component } from 'react';
import './Timeline.scss';

class Timeline extends Component {
    timeline = [
        {
            what: "MArch Architecture",
            where: "Oxford Brookes University",
            link: "https://www.brookes.ac.uk/",
            from: 2020,
            to: null
        }, 
        {
            what: "MSc Advanced Computer Science",
            where: "Oxford Brookes University",
            link: "https://www.brookes.ac.uk/",
            from: 2019,
            to: 2020
        },
        {
            what: "Frontend Developer",
            where: "Trivento",
            link: "https://trivento.nl/",
            from: 2018,
            to: 2019
        },
        {
            what: "Lead Frontend Developer",
            where: "MetaDimensions",
            link: "https://metadimensions.com/",
            from: 2017,
            to: 2018
        },
        {
            what: "UX Designer / Frontend Developer",
            where: "Kubion",
            link: "https://www.kubion.nl/",
            from: 2015,
            to: 2017
        },
        {
            what: "BSc (Hons) Game Design and Development",
            where: "HKU University of the Arts Utrecht",
            link: "https://www.hku.nl/Home.htm",
            from: 2013,
            to: 2017
        },
        {
            what: "Shift Manager",
            where: "MyCom",
            from: 2012,
            to: 2015
        },
        {
            what: "VWO Diploma in Nature and Tech (Pre-U)",
            where: "UniC College Utrecht",
            link: "https://www.unic-utrecht.nl/",
            from: 2007,
            to: 2013
        },
    ]
    render() {
        return (
            <div className="Timeline">
                <h2>
                    Timeline
                </h2>
                <ul>
                    {this.timeline.map(item => (
                        <li>{item.what}<br />
                            {item.link ? <a href={item.link}>{item.where}</a> : item.where}<br />
                            <span className="Half">{item.from} - {item.to ? item.to : 'now'}</span></li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Timeline;