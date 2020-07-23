import React, { Component } from 'react';
import projects from "../projects";
import './Projects.scss';

class Projects extends Component {

    render() {
        return (
            <div className="Projects">
                <h1>
                    Projects
                </h1>

                <div className="ProjectList">
                    {projects.map(project => (
                        <div className="Project">
                            <div className="Image" style={{ backgroundImage: `url(${project.image})` }}>
                            </div>
                            <div className="Content">
                                <h2>{project.name}</h2>
                                <p>{project.description}</p>
                            </div>
                        </div>)
                    )}
                </div>
            </div>
        );
    }
}

export default Projects;