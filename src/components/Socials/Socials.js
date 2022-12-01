import './Socials.css'
import { BsGithub, BsLinkedin} from 'react-icons/bs'
import {GoMail} from 'react-icons/go'

const Socials = () => {
    return(
        <div className='socials'>
            <a href='https://github.com/MusheghMartirosyan' target='_blank'><BsGithub /></a>
            <a href='https://www.linkedin.com/in/mushegh-martirosyan-58b441257/' target='_blank'><BsLinkedin /></a>
            <a href='mailto:mushegh114@gmail.com' target='_blank'><GoMail /></a>
        </div>
    )
}

export default Socials