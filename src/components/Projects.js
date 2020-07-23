import React, { Component } from 'react';
import projects from "../projects";
import './Projects.scss';
import Chip from "./Chip";
import ChipList from "./ChipList";

class Projects extends Component {

    render() {
        return (
            <div className="Projects">
                <p>
                    Here I feature some of my projects. Most are personal, some are old, but here they will stay until I find something more awesome. These projects range from incoherent scribbles from when I was younger, to student projects, to professional achievements for products that are in use today.
                </p>
                <div className="ProjectList">
                    {projects.map(project => (
                        <div className="Project">
                            <div className="Image" style={{ backgroundImage: `url(${project.thumb})` }}>
                            </div>
                            <div className="Content">
                                <h2>{project.name} <span className="Half">{project.year}</span></h2>
                                <p>{project.description}</p>
                                <ChipList>
                                    {project.actions ? project.actions.map(action => <a target="_blank" rel="noopener noreferrer" href={action.link}>{action.text}</a>) : null}
                                    {project.tags.map(tag => <Chip>{tag}</Chip>)}
                                </ChipList>
                            </div>
                        </div>)
                    )}
                </div>
            </div>
        );
    }
}

export default Projects;