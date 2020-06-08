import React from 'react'
import Typography from '@material-ui/core/Typography';
import profilePic from '../../assets/avatar.png'
import illustration from '../../assets/illustration.png'
import githubIcon from '../../assets/githubIcon.svg'
import Webgl from '../Webgl'
import './styles/About.css'
import { TradContext } from '../../contexts/TradContext';
import { Box } from '@material-ui/core';
import Fade from 'react-reveal/Fade';

const About = () => {
    let lang = React.useContext(TradContext);
    return (
        <section className="hero">
            <div className="hero-body">
                {lang === "ENG"
                    ? <Fade>
                        <h1>Front-end Developer</h1>
                        <Typography paragraph className="aboutDescription">
                            <Box fontFamily="Lato" m={1}>
                                I've been interested in programming since I was 13, I love what I do, especially bringing ideas to life.
                            </Box>
                        </Typography>
                    </Fade>
                    : <Fade>
                        <h1>Developpeur Front-end</h1>
                        <Typography paragraph className="aboutDescription">
                            <Box fontFamily="Lato" m={1}>
                                Je m'intéresse à la programmation depuis que j'ai 13 ans, j'adore ce que je fais, surtout donner vie à mes idées.
                            </Box>
                        </Typography>
                    </Fade>
                }
                <div className="hero-body-center">
                    <Fade>
                        <div className="profilePicCtnr">
                            <div>
                                <img className="profilePic" height="150" width="150" src={profilePic}></img>
                            </div>
                            {/* <div className="githubCtnr">
                            <img className="githubIcon" height="32" width="32" src={githubIcon}></img>
                        </div> */}
                        </div>
                        <Webgl />
                    </Fade>

                </div>
            </div>

            <Fade>
                <div className="hero-foot">
                    <div className="illustrationCtnr">
                        <img className="illustration" src={illustration} title="Designed by Freepik"></img>
                    </div>
                </div>
            </Fade>
        </section>
    )

}

export default About