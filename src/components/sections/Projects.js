import React from 'react'
import './styles/Projects.css'
import { TradContext } from '../../contexts/TradContext';
import { Typography } from '@material-ui/core';
import githubIcon from "../../assets/githubIcon.svg"
const iconsSize = "90px"
const Projects = () => {
    let lang = React.useContext(TradContext);
    const projectsNames = ["ponctual", "dirCleaner", "winCrypt", "connect4", "nezzarChat", "slh"]
    const projectsData = [
        {
            name: "Ponctual",
            description: "Application intended for schools, allowing to manage students, teachers, delays, absences etc ...",
            github: "https://github.com/strak-stark/Ponctual",
            type: ["courseProject", "course project"]
        },
        {
            name: "nezzarChat",
            description: "Online chat using Kwick API",
            github: "https://github.com/strak-stark/nezzarKwick",
            type: ["courseProject", "course project"]
        },
        {
            name: "Connect4",
            description: "Simple Connect4 made with HTML, CSS and JavaScript",
            github: "https://github.com/strak-stark/Connect4",
            type: ["sideProject", "side project"]
        },
        {
            name: "Strak's Lsb Hider",
            description: "Strak's Lsb Hider is a CLI oriented Linux project that help you embed files (images, videos, texts etc...) into Images using least significant bit of each pixel.",
            github: "https://github.com/strak-stark/StrakLsbHider",
            type: ["sideProject", "side project"]
        },
        {
            name: "WinCrypt",
            description: 'WinCrypt is a CLI oriented Linux project that help you encrypt files (images, videos, texts etc...) into ".wc" files that can be secure and encrypted with a custom key.',
            github: "https://github.com/strak-stark/WinCrypt",
            type: ["sideProject", "side project"]
        },
        {
            name: "DirCleaner",
            description: "DirCleaner is a python program that help you clear your PC desktop using tkinter UI.",
            github: "https://github.com/strak-stark/DirCleaner",
            type: ["sideProject", "side project"]
        },
    ]
    return (
        <section className="projects">
            <h2>My last projects</h2>
            <div className="projectsCtnr">
                {projectsData.map(project => {
                    return (
                        <article className={`project ${project.name}`}>
                            <span class={`badge ${project.type[0]}`}>{project.type[1]}</span>
                            <div className="projectDataCtnr">
                                <div className="projectData">
                                    <h4>{project.name}</h4>
                                    <Typography paragraph className="aboutDescription">
                                        {project.description}
                                    </Typography>

                                    <a href={project.github} target="_blank">
                                        <img src={githubIcon} alt="Github Icon" width="32px" height="32px"></img>
                                    </a>
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