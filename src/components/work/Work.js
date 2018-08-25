import React, { Component } from 'react';
import project1 from '../../assets/img/projects/project1.jpg';
import project2 from '../../assets/img/projects/project2.jpg';
import project3 from '../../assets/img/projects/project3.jpg';
import project4 from '../../assets/img/projects/project4.jpg';
import project5 from '../../assets/img/projects/project5.jpg';

const projects = [{
    id: 1,
    name: 'Project1',
    githubLink: 'http://github.com/asifvora',
    projectLink: 'http://github.com/asifvora',
    image: project1
}, {
    id: 2,
    name: 'Project2',
    githubLink: 'http://github.com/asifvora',
    projectLink: 'http://github.com/asifvora',
    image: project2
}, {
    id: 3,
    name: 'Project3',
    githubLink: 'http://github.com/asifvora',
    projectLink: 'http://github.com/asifvora',
    image: project3
}, {
    id: 4,
    name: 'Project4',
    githubLink: 'http://github.com/asifvora',
    projectLink: 'http://github.com/asifvora',
    image: project4
}, {
    id: 5,
    name: 'Project5',
    githubLink: 'http://github.com/asifvora',
    projectLink: 'http://github.com/asifvora',
    image: project5
}]

class Work extends Component {

    projectsList() {
        return projects && projects.length > 0 ?
            projects.map((project, key) => {
                return (
                    <div className="item" key={key}>
                        <a href={project.projectLink}>
                            <img src={project.image} alt="Project" />
                        </a>
                        <a href={project.projectLink} className="btn-light" target="_blank">
                            <i className="fas fa-eye"></i> {project.name}
                        </a>
                        <a href={project.githubLink} className="btn-dark" target="_blank">
                            <i className="fab fa-github"></i> Github
                        </a>
                    </div>
                )
            })
            : <div>
                <center>
                    <h2 className="sm-heading">
                        No Project Found.
                    </h2>
                </center>
            </div >
    }

    render() {
        return (
            <main id="work">
                <h1 className="lg-heading">
                    My
                  <span className="text-secondary">Work</span>
                </h1>
                <h2 className="sm-heading">
                    Check out some of my projects...
                </h2>
                <div className="projects">
                    {this.projectsList()}
                </div>
            </main>
        );
    }
}

export default Work;
