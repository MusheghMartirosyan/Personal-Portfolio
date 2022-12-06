import './Experience.css'
import {AiFillHtml5} from 'react-icons/ai'
import {DiCss3, DiJavascript, DiReact} from 'react-icons/di'
import {FaBootstrap} from 'react-icons/fa'
import {SiRedux} from 'react-icons/si'
import {BiGitBranch} from 'react-icons/bi'
import {BsGithub} from 'react-icons/bs'
import {ImNpm } from 'react-icons/im'

const Experience = () => {
    return(
        <section id='experience'>
            <h5>What Skills I Have</h5>
            <h2>My Experience</h2>
            <div className='container experience-container'>
                <div className='experience-content'>
                    <h3>Front-End Development</h3>
                    <div className='experience-front'>
                        <div className='experience-details'>
                            <AiFillHtml5 />
                            <h4>HTML</h4>
                        </div>
                        <div className='experience-details'>
                            <DiCss3 />
                            <h4>CSS</h4>
                        </div>
                        <div className='experience-details'>
                            <FaBootstrap />
                            <h4>Bootstrap</h4>
                        </div>
                        <div className='experience-details'>
                            <DiJavascript />
                            <h4>Java Script</h4>
                        </div>
                        <div className='experience-details'>
                            <DiReact />
                            <h4>React Js</h4>
                        </div>
                        <div className='experience-details'>
                            <SiRedux />
                            <h4>Redux</h4>
                        </div>
                        <div className='experience-details'>
                            <BiGitBranch />
                            <h4>Git</h4>
                        </div>
                        <div className='experience-details'>
                            <BsGithub />
                            <h4>GitHub</h4>
                        </div>
                        <div className='experience-details'>
                            <ImNpm />
                            <h4>Npm</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience