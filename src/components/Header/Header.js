import './Header.css'
import Mario from '../../images/Mario.png'
import { BsArrowRight } from 'react-icons/bs'
import Footer from '../Footer/Footer'

const Header = () => {
    return(
        <>
        <header>
            <div className='container header'>
                <h5>Hello I'm</h5>
                <h1>Mushegh Martirosyan</h1>
                <h5 style={{marginTop: '1rem'}} className='text-light'>Front-End Developer</h5>
                <div>
                    <a href='#' className='btn' download>Download CV test</a>
                    <a href='#' className='btn btn-primary'>Let's Talk</a>
                </div>
                <div className='me'>
                    <img src={Mario} />
                </div>
                <span className='scroll-footer'>
                    Scroll to Footer <BsArrowRight />
                </span>
            </div>
        </header>
        <Footer/>
        </>
    )
}

export default Header