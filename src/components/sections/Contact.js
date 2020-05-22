import React from 'react'
import Typography from '@material-ui/core/Typography';
import "./styles/Contact.css"
import twitterIcon from '../../assets/twitterIcon.svg'
import githubIcon from '../../assets/githubIcon.svg'
import linkedinIcon from '../../assets/linkedinLogo.svg'
import { TradContext } from '../../contexts/TradContext';

const iconSize = 35
const Contact = () => {
    let lang = React.useContext(TradContext);
    return (
        <section className="contact">

            {lang === "ENG"
                ? <h2>Reach me on social medias...</h2>
                : <h2>Retrouvez moi sur les résaux sociaux...</h2>
            }
            <div className="contactIcons">
                <img src={twitterIcon} alt="Twitter Icon" width={iconSize} height={iconSize}></img>
                <img src={githubIcon} alt="Github Icon" width={iconSize} height={iconSize}></img>
                <img src={linkedinIcon} alt="Linkedin Icon" width={iconSize} height={iconSize}></img>
            </div>

            {lang === "ENG"
                ? <h5>... or send me an email : </h5>
                : <h5>... ou envoyez-moi un email : </h5>
            }
            
            <div className="emailCtnr">
                <p><a href="mailto:aurelien.nezzar@outlooK.fr?subject=SweetWords">
                    aurelien.nezzar@outlooK.fr</a></p>
            </div>
        </section>
    )

}

export default Contact