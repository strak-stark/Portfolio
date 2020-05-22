import React from 'react';
import Welcome from './sections/Welcome'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Contact from './sections/Contact'

function Main(){
    return (
        <div>
            <About />
            <Skills />
            <Projects />
            <Contact />
        </div>
    )
}
export default Main;