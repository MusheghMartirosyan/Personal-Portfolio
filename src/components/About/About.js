import './About.css'
import AboutImage from '../../images/Mario.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {GiCheckMark} from 'react-icons/gi'

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
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque eos voluptatem eis dolorem maiores nihil ducimus arem ullam repreenderitquidem quia deserunt, molestiae, eligendi amet repellat molestias quos totam.</p>
                    <a href='#contact' className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About