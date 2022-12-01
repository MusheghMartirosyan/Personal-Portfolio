import { BsGithub, BsLinkedin} from 'react-icons/bs'
import { GoMail} from 'react-icons/go'
import { useNavigate } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
    const navigate = useNavigate()
    return(
        <div className='footer-container'>
            <h2>Mushegh</h2>
            <div>
                <ul className='footer-navigation'>
                    <li onClick={() => navigate('/')}>Home</li>
                    <li onClick={() => navigate('/about')}>About</li>
                    <li onClick={() => navigate('/experience')}>Experience</li>
                    <li onClick={() => navigate('/portfolio')}>Portfolio</li>
                    <li onClick={() => navigate('/contact')}>Contact</li>
                </ul>
                <ul className='footer-socials'>
                    <li>
                        <a href='https://github.com/MusheghMartirosyan' target='_blank'><BsGithub /></a>
                    </li>
                    <li>
                        <a href='https://www.linkedin.com/in/mushegh-martirosyan-58b441257/' target='_blank'><BsLinkedin /></a>
                    </li>
                    <li>
                        <a href='mailto:mushegh114@gmail.com' target='_blank'><GoMail /></a>
                    </li>
                </ul>
            </div>
    </div>
    )
}

export default Footer