import React from 'react'
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
            <div className="contactData">
                {lang === "ENG"
                    ? <h2>Find me on social medias...</h2>
                    : <h2>Retrouvez moi sur les résaux sociaux...</h2>
                }
                <div className="contactIcons">
                    <a href="https://twitter.com/AurelienNezzar" target="_blank" rel="noopener noreferrer">
                        <img src={twitterIcon} alt="Twitter Icon" width={iconSize} height={iconSize}></img>
                    </a>
                    <a href="https://github.com/strak-stark" target="_blank" rel="noopener noreferrer">
                        <img src={githubIcon} alt="Github Icon" width={iconSize} height={iconSize}></img>

                    </a>
                    <a href="https://fr.linkedin.com/in/aur%C3%A9lien-nezzar-a33438180" target="_blank" rel="noopener noreferrer">
                        <img src={linkedinIcon} alt="Linkedin Icon" width={iconSize} height={iconSize}></img>
                    </a>

                </div>

                {lang === "ENG"
                    ? <h5>... or send me an email : </h5>
                    : <h5>... ou envoyez-moi un email : </h5>
                }

                <div className="emailCtnr">
                    <p><a href="mailto:aurelien.nezzar@outlooK.fr?subject=SweetWords">
                        aurelien.nezzar@outlooK.fr</a></p>
                </div>

            </div>
        </section>
    )

}

export default Contact