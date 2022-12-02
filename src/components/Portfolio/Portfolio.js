import './Portfolio.css'
import Image from '../../images/maxresdefault.jpg'
import Flags from '../../images/Flags-App Screenshot.png'
const Portfolio = () => {
    return(
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>
            <div className='container portfolio-container'>
                <article className='portfolio-item'>
                    {/* <div className='portfolio-item-img'></div> */}
                    <img src={Flags} />
                    <h3>Flags-App</h3>
                    <a className='btn' target='_blank' href='https://github.com/MusheghMartirosyan/Flags-App'>GitHub Link</a>
                    <a className='btn btn-primary' target='_blank' href='https://musheghmartirosyan.github.io/Flags-App/'>Live Demo</a>
                </article>
                <article className='portfolio-item'>
                    {/* <div className='portfolio-item-img'></div> */}
                    <img src={Image} />
                    <h3>Title</h3>
                    <a className='btn' target='_blank' href='#'>GitHub Link</a>
                    <a className='btn btn-primary' target='_blank' href='#'>Live Demo</a>
                </article>
                <article className='portfolio-item'>
                    {/* <div className='portfolio-item-img'></div> */}
                    <img src={Image} />
                    <h3>Title</h3>
                    <a className='btn' href='#'>GitHub Link</a>
                    <a className='btn btn-primary' href='#'>Live Demo</a>
                </article>
                <article className='portfolio-item'>
                    {/* <div className='portfolio-item-img'></div> */}
                    <img src={Image} />
                    <h3>Title</h3>
                    <a className='btn' href='#'>GitHub Link</a>
                    <a className='btn btn-primary' href='#'>Live Demo</a>
                </article>
                <article className='portfolio-item'>
                    {/* <div className='portfolio-item-img'></div> */}
                    <img src={Image} />
                    <h3>Title</h3>
                    <a className='btn' href='#'>GitHub Link</a>
                    <a className='btn btn-primary' href='#'>Live Demo</a>
                </article>
                <article className='portfolio-item'>
                    {/* <div className='portfolio-item-img'></div> */}
                    <img src={Image} />
                    <h3>Title</h3>
                    <a className='btn' href='#'>GitHub Link</a>
                    <a className='btn btn-primary' href='#'>Live Demo</a>
                </article>
                <article className='portfolio-item'>
                    {/* <div className='portfolio-item-img'></div> */}
                    <img src={Image} />
                    <h3>Title</h3>
                    <a className='btn' href='#'>GitHub Link</a>
                    <a className='btn btn-primary' href='#'>Live Demo</a>
                </article>
            </div>
        </section>
    )
}

export default Portfolio