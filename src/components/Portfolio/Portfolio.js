import './Portfolio.css'
import Image from '../../images/maxresdefault.jpg'
import Flags from '../../images/Flags-App Screenshot.png'
import OmniFood from '../../images/OmniFood Screenshot.png'

const Portfolio = () => {
    return(
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>
            <div className='container portfolio-container'>
                <article className='portfolio-item'>
                    <img src={Flags} />
                    <h3>Flags-App</h3>
                    <a className='btn' target='_blank' href='https://github.com/MusheghMartirosyan/Flags-App'>GitHub Link</a>
                    <a className='btn btn-primary' target='_blank' href='https://musheghmartirosyan.github.io/Flags-App/'>Live Demo</a>
                </article>
                <article className='portfolio-item'>
                    <img src={OmniFood} />
                    <h3>OmniFood</h3>
                    <a className='btn' target='_blank' href='https://github.com/MusheghMartirosyan/OmniFood'>GitHub Link</a>
                    <a className='btn btn-primary' target='_blank' href='https://musheghmartirosyan.github.io/OmniFood/'>Live Demo</a>
                </article>
            </div>
        </section>
    )
}

export default Portfolio