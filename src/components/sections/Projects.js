import React from 'react'
import './styles/Projects.css'
import { TradContext } from '../../contexts/TradContext';
import { Typography, Box } from '@material-ui/core';
import githubIcon from "../../assets/githubIcon.svg"
import { projectsData } from '../../data/ProjectsData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

const iconsSize = "90px"
const Projects = () => {
    let lang = React.useContext(TradContext);

    return (
        <section className="projects">

            {lang === "ENG"
                ? <h2>My last projects</h2>
                : <h2>Mes derniers projets</h2>
            }

            <div className="projectsCtnr">
                {projectsData.map(project => {
                    return (
                        <article className={`project ${project.name}`} key={project.name}>

                            {lang === "ENG"
                                ? <span className={`badge ${project.type.type}`}>{project.type.ENG}</span>
                                : <span className={`badge ${project.type.type}`}>{project.type.FR}</span>
                            }
                            <div className="projectDataCtnr">
                                <div className="projectData">
                                    <h4>{project.name}</h4>
                                    <Typography paragraph className="aboutDescription">
                                            <Box fontFamily="Lato" m={1}>
                                                {lang === "ENG"
                                                    ? project.description.ENG
                                                    : project.description.FR
                                                }
                                            </Box>
                                        </Typography>
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: project.live ? "space-between" : "center",
                                            width: "250px"
                                        }}>
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="dataBtn">
                                            <div style={{
                                                width: "75px",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "space-between"
                                            }}>
                                                Github
                                        <img src={githubIcon} alt="Github Icon" width="22px" height="22px" />
                                            </div>
                                        </a>
                                        {project.live
                                            ? <button className="dataBtn">
                                                <div style={{
                                                    width: "75px",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "space-between"
                                                }}>
                                                    {lang === "ENG" ? "Go live" : "Tester"}

                                                    <FontAwesomeIcon icon={faPlay} />
                                                </div>
                                            </button>
                                            : null}

                                    </div>
                                </div>
                            </div>
                        </article>
                    )
                })}
            </div>
        </section >
    )

}

export default Projects