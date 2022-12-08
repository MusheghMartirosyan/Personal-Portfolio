import './Contact.css'
import { GoMail } from 'react-icons/go'
import { RiWhatsappLine } from 'react-icons/ri'
import { FaTelegramPlane } from 'react-icons/fa'
import emailjs from 'emailjs-com'
import { useRef } from 'react'

const Contact = () => {
    const form = useRef(null)

    const sendMessage = (e) => {
        e.preventDefault()
        
        emailjs.sendForm('service_7cpcgzb', 'template_a2w1bd7', form.current, 'X19mtNj255M5pMj18');
        form.current.reset()
    }

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
                            <FaTelegramPlane />
                            <h4>Telegram</h4>
                            <h5>@MusheghMartirosyan</h5>
                            <a href='https://t.me/musheghmartirosyan'>Send a message</a>
                        </article>
                    </div>
                        <form ref={form} onSubmit={sendMessage} className='contact-form'>
                            <input type='text' name='name' placeholder='Your Name' />
                            <input type='email' name='email' placeholder='Your Email' />
                            <textarea name='message' placeholder='Your Message' />
                            <button className='btn btn-primary'>Send Message</button>
                        </form>
                </div>
            </div>
        </section>
    )
}

export default Contact