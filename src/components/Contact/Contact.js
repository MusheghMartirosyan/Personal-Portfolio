import './Contact.css'
import { GoMail } from 'react-icons/go'
import { RiWhatsappLine } from 'react-icons/ri'

const Contact = () => {
    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>
            <div className='container contact-container'>
                <div className='contact-content'>
                    <div className='contact-cards'>
                        <article className='contact-card'>
                            <GoMail />
                            <h4>Email</h4>
                            <h5>mushegh114@gmail.com</h5>
                            <a href='mailto:mushegh114@gmail.com'>Send a message</a>
                        </article>
                        <article className='contact-card'>
                            <RiWhatsappLine />
                            <h4>WhatsApp</h4>
                            <h5>+37455115145</h5>
                            <a href='https://api.whatsapp.com/send?phone+37455115145'>Send a message</a>
                        </article>
                        <article className='contact-card'>
                            <h5>Projects</h5>
                            <span>6 + Completed</span>
                        </article>
                    </div>
                        <form className='contact-form'>
                            <input type='text' placeholder='Your Name' />
                            <input type='email' placeholder='Your Email' />
                            <textarea placeholder='Your Message' />
                            <button className='btn btn-primary'>Send Message</button>
                        </form>
                </div>
            </div>
        </section>
    )
}

export default Contact