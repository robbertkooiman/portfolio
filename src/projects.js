import plockuzzle from "./assets/plockuzzle.png";
import homestead from "./assets/homestead.png";
import xeonide from "./assets/xeonide.png";
import futureHouse from "./assets/future-house.png";
import ctgb from "./assets/ctgb.png";
import noordzee from "./assets/noordzee.png";
import kubion from "./assets/kubion.png";
import plockuzzleThumb from "./assets/plockuzzle_thumb.png";
import homesteadThumb from "./assets/homestead_thumb.png";
import xeonideThumb from "./assets/xeonide_thumb.png";
import futureHouseThumb from "./assets/future-house_thumb.png";
import ctgbThumb from "./assets/ctgb_thumb.png";
import noordzeeThumb from "./assets/noordzee_thumb.png";

const projects = [
    {
        name: "Kubion",
        slug: "kubion",
        image: kubion,
        thumb: kubion,
        tags: ["Web", "Design", "Branding"],
        year: 2019,
        description: "I helped one of my previous employers find their company's unique branding and created a branding guide and an accompanying website for them from scratch.",
        actions: [
            {
                text: "View",
                link: "https://www.kubion.nl"
            }
        ]
    },
    {
        name: "CTGB Accessible Database",
        slug: "ctgb",
        image: ctgb,
        thumb: ctgbThumb,
        tags: ["Web", "Angular"],
        year: 2019,
        description: "An accessible database of plant protection products that was due an update, while still staying true to the older version in order not to alienate customers.",
        actions: [
            {
                text: "View",
                link: "https://toelatingen.ctgb.nl/en/authorisations"
            }
        ]
    },
    {
        name: "Homestead",
        slug: "homestead",
        image: homestead,
        thumb: homesteadThumb,
        tags: ["Student", "Game"],
        year: 2017,
        description: "My graduation project: a smooth blend between first-person, third-person and strategic control mechanisms. Start off alone and gather an army to defeat another.",
        actions: [
            {
                text: "Play",
                link: "http://robbertkooiman.com/homestead_web/"
            }
        ]
    },
    {
        name: "Het Lot van de Noordzee",
        slug: "noordzee",
        image: noordzee,
        thumb: noordzeeThumb,
        tags: ["Web", "Game", "Networking"],
        year: 2017,
        description: "I lead a project for the WWF to educate high school students about sustainability and environmental issues in the North Sea, in a gamified multiplayer experience.",
        actions: [
            {
                text: "View",
                link: "https://www.lotvandenoordzee.nl"
            },
        ]
    },
    {
        name: "Plockuzzle",
        slug: "plockuzzle",
        image: plockuzzle,
        thumb: plockuzzleThumb,
        tags: ["Student", "Game"],
        year: 2014,
        description: "A short puzzle game where you press buttons to move blocks, with a small twist at the end. My attempt at a minimalistic but breathtaking view, and big red buttons to press."
    },
    {
        name: "Xeonide",
        slug: "xeonide",
        image: xeonide,
        thumb: xeonideThumb,
        tags: ["Game"],
        year: 2010,
        description: "A custom map for Halo: Reach. One of my earliest game design projects. A symmetric arena with a logical layout and interesting sightlines, for 2v2 or 4v4 skirmishes.",
        actions: [
            {
                text: "Watch Video",
                link: "https://www.youtube.com/watch?v=-JG9GNLrV7o"
            }
        ]
    },
    {
        name: "House of the Future",
        slug: "future-house",
        image: futureHouse,
        thumb: futureHouseThumb,
        tags: ["Architecture", "3D Modeling"],
        year: 2007,
        description: "A 3D drawing I made for a project showing the youth's vision of the future. My future's perfect house has it's own ecosystem, a small physical footprint and doesn't disturb the environment around it."
    }
];

export default projects;