import React from 'react';
import './Projects.scss';
import Chip from "./Chip";
import ChipList from "./ChipList";
import { useApi, urlBase } from "../hooks/useApi";

function Projects() {
    const projects = useApi('items/projects?fields=*,tags.tags_id.*,thumbnail');

    function getThumbnail(id) {
        return urlBase + 'assets/' + id;
    }

    return (
        <div className="Projects">
            <p>
                Here I feature some of my projects. Most are personal, some are old, but here they will stay until I find something more awesome. These projects range from incoherent scribbles from when I was younger, to student projects, to professional achievements for products that are in use today.
                </p>
            <div className="ProjectList">
                {projects.isLoaded ?
                    projects.data.map(project => (
                        <div className="Project" key={project.id}>
                            <div className="Image" style={{ backgroundImage: `url(${getThumbnail(project.thumbnail)})` }}>
                            </div>
                            <div className="Content">
                                <h2>{project.title} <span className="Half">{project.year}</span></h2>
                                <p>{project.description}</p>
                                <ChipList>
                                    {project.link ? <a target="_blank" rel="noopener noreferrer" href={project.link}>{project.link_text}</a> : null}
                                    {project.tags.map(tag => <Chip key={tag.tags_id.id}>{tag.tags_id.description}</Chip>)}
                                </ChipList>
                            </div>
                        </div>)
                    ) : null}
            </div>
        </div>
    );

}

export default Projects;