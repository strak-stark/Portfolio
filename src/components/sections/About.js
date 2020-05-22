import React from 'react'
import Typography from '@material-ui/core/Typography';
import profilePic from '../../assets/avatar.jpg'
import illustration from '../../assets/illustration.png'
import githubIcon from '../../assets/githubIcon.svg'

import LazyLoad from 'react-lazy-load';
import Webgl from '../Webgl'
import './styles/About.css'
import { TradContext } from '../../contexts/TradContext';

const About = () => {
    let lang = React.useContext(TradContext);
    return (
        <section className="hero">
            <div className="hero-body">

                {lang === "ENG"
                    ? <>

                        <h1>Front-end Developer</h1>
                        <Typography paragraph className="aboutDescription">
                            I've been interested in programming since I was 13, I love what I do, especially bringing ideas to life.
        </Typography>
                    </>
                    : <>

                        <h1>Developpeur Front-end</h1>
                        <Typography paragraph className="aboutDescription">
                            Je m'intéresse à la programmation depuis que j'ai 13 ans, j'adore ce que je fais, surtout donner vie à mes idées.
        </Typography>
                    </>
                }
                <div className="hero-body-center">
                    <div className="profilePicCtnr">
                        <div>
                            <img className="profilePic" height="150" width="150" src={profilePic}></img>

                        </div>
                        {/* <div className="githubCtnr">
                            <img className="githubIcon" height="32" width="32" src={githubIcon}></img>
                        </div> */}
                    </div>
                    <Webgl />

                </div>
            </div>
s
            <div className="hero-foot">
                <div className="illustrationCtnr">
                    <img className="illustration" src={illustration}></img>
                </div>
            </div>

        </section>
    )

}

export default About