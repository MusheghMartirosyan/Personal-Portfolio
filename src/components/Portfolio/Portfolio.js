import './Portfolio.css'
import Image from '../../images/maxresdefault.jpg'
const Portfolio = () => {
    return(
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>
            <div className='container portfolio-container'>
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