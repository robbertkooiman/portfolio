import React, { useState } from 'react';
import ChipList from './ChipList';
import Chip from './Chip';
import './Timeline.scss';

function Timeline() {
    const [filter, setFilter] = useState(null);
    const timeline = [
        {
            key: "met2",
            type: "row",
            what: "🥇 Metropolitan Regatta Academic 8+",
            where: "Oxford Brookes B",
            from: 2022
        },
        {
            key: "bucs1",
            type: "row",
            what: "🥇 BUCS Regatta Champions 4-",
            where: "Oxford Brookes",
            link: "https://results.bucsrowing.org.uk/results/regatta2021/Race472.pdf",
            from: 2021
        },
        {
            key: "bucs2",
            type: "row",
            what: "🥇 BUCS Regatta Champions 8+",
            where: "Oxford Brookes A",
            link: "https://results.bucsrowing.org.uk/results/regatta2021/Race285.pdf",
            from: 2021
        },
        {
            key: "marlow",
            type: "row",
            what: "🥉 Marlow Regatta Champions 8+",
            where: "Oxford Brookes B",
            link: "https://www.rowresults.co.uk/results/met21sun/Race66.pdf",
            from: 2021
        },
        {
            key: "met1",
            type: "row",
            what: "🥇 Metropolitan Regatta Academic 8+",
            where: "Oxford Brookes B",
            from: 2021
        },
        {
            key: "architecture",
            type: "education",
            what: "MArch Architecture",
            where: "Oxford Brookes University",
            link: "https://www.brookes.ac.uk/",
            from: 2020,
            to: 2021
        },
        {
            key: "databalk",
            type: "freelance",
            what: "Frontend developer",
            where: "DataBalk",
            link: "https://databalk.nu/",
            from: 2021
        },
        {
            key: "dolkhesper",
            type: "freelance",
            what: "Frontend Developer",
            where: "DolkHesper",
            link: "https://www.dolkhesper.com/",
            from: 2019,
            to: 2021
        },
        {
            key: "compscience",
            type: "education",
            what: "MSc Advanced Computer Science",
            where: "Oxford Brookes University",
            link: "https://www.brookes.ac.uk/",
            from: 2019,
            to: 2020
        },
        {
            key: "trivento",
            type: "work",
            what: "Frontend Developer",
            where: "Trivento",
            link: "https://trivento.nl/",
            from: 2018,
            to: 2019
        },
        {
            key: "arb",
            type: "row",
            what: "🥇 ARB Regatta",
            where: "Orca EJZ 2018",
            link: "https://orcaroeien.nl/",
            from: 2018
        },
        {
            key: "metadimensions",
            type: "work",
            what: "Lead Frontend Developer",
            where: "MetaDimensions",
            link: "https://metadimensions.com/",
            from: 2017,
            to: 2018
        },
        {
            key: "hofvijver",
            type: "row",
            what: "🥇 Hofvijver Regatta",
            where: "Orca Clubacht 2017",
            link: "https://orcaroeien.nl/",
            from: 2017
        },
        {
            key: "peil",
            type: "row",
            what: "🥇 Peil Regatta",
            where: "Orca Clubacht 2016",
            link: "https://orcaroeien.nl/",
            from: 2017
        },
        {
            key: "erasmus",
            type: "row",
            what: "🥇 Erasmus Sprints",
            where: "Orca Clubacht 2016",
            link: "https://orcaroeien.nl/",
            from: 2017
        },
        {
            key: "kubion",
            type: "work",
            what: "UX Designer / Frontend Developer",
            where: "Kubion",
            link: "https://www.kubion.nl/",
            from: 2015,
            to: 2017
        },
        {
            key: "bachelor-game-development",
            type: "education",
            what: "BSc (Hons) Game Design and Development",
            where: "HKU University of the Arts Utrecht",
            link: "https://www.hku.nl/Home.htm",
            from: 2013,
            to: 2017
        },
        {
            key: "mycom",
            type: "work",
            what: "Shift Manager",
            where: "MyCom",
            from: 2012,
            to: 2015
        },
        {
            key: "vwo",
            type: "education",
            what: "VWO Diploma in Nature and Tech (Pre-U)",
            where: "UniC College Utrecht",
            link: "https://www.unic-utrecht.nl/",
            from: 2007,
            to: 2013
        },
    ]

    return (
        <div className="Timeline">
            <h2>
                Timeline
            </h2>
            <ChipList>
                <Chip onClick={() => setFilter(null)}>Everything</Chip>
                <Chip onClick={() => setFilter("work")}>Jobs</Chip>
                <Chip onClick={() => setFilter("freelance")}>Freelance</Chip>
                <Chip onClick={() => setFilter("row")}>Rowing</Chip>
                <Chip onClick={() => setFilter("education")}>Education</Chip>
            </ChipList>
            <ul className="TimelineItems">
                {timeline.filter(item => !filter || item.type === filter).map(item => (
                    <li key={item.key}>{item.what}<br />
                        {item.link ? <a href={item.link}>{item.where}</a> : item.where}<br />
                        <span className="Half">{item.from} {item.to ? '- ' + item.to : null}</span></li>
                ))}
            </ul>
        </div>
    );
}

export default Timeline;