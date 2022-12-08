import './About.css'
import AboutImage from '../../images/IMG_2227.jpeg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {GiCheckMark} from 'react-icons/gi'
import { Link } from 'react-router-dom'

const About = () => {

    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>
            <div className='container about-container'>
                <div className='about-me'>
                    <div className='about-me-image'>
                        <img src={AboutImage} alt='About image' />
                    </div>
                </div>
                <div className='about-content'>
                    <div className='about-cards'>
                        <article className='about-card'>
                            <FaAward className='about-icon' />
                            <h5>Experience</h5>
                            <span>1 Years Working</span>
                        </article>
                        <article className='about-card'>
                            <FiUsers className='about-icon' />
                            <h5>Clients</h5>
                            <span>0 Worldwide</span>
                        </article>
                        <article className='about-card'>
                            <GiCheckMark className='about-icon'/>
                            <h5>Projects</h5>
                            <span>6 + Completed</span>
                        </article>
                    </div>
                    <p>I'm Front-end Developer with 1 year of experience. Web developer adept at building responsive applications with
                        great UI&UX parts. Passionate about learning new technologies, bringing ideas to life, and working with
                        dedicated teams to build efficient and robust applications suited to the user's needs.
                        Electricty is always on. All other information you can see in my portfolio.</p>
                    <Link to='/contact' className='btn btn-primary'>Let's Talk</Link>
                </div>
            </div>
        </section>
    )
}

export default About