import React, { useRef, useState } from 'react';
import '../Contact/Contact.scss'
import emailjs from '@emailjs/browser'


const Result = () => {
    return (
        <p>Your message has been sent, We'll get back to you soon</p>
    )
}

const Contact = () => {
    const form = useRef();
    const [result, setResult] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_6bqkppw', 'template_veqy7di', form.current, '5q7fD7of4M8_GIBAu')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
        setResult(true)
    };

    setTimeout(() => {
        setResult(false)
    }, 5000);

    return (
        <div className='Contacts'>
            <form action ref={form} onSubmit={sendEmail}>
                <h1>Contact Us</h1>
                <div className="form-item">
                    <label htmlFor="">
                        Full name:
                    </label>
                    <input type="text" required name='user_name' />
                </div>
                <div className="form-item">
                    <label htmlFor="">
                        email Address:
                    </label>
                    <input type="email" required name='user_email' />
                </div>
                <div className="form-item">
                    <label htmlFor="">
                        Message:
                    </label>
                    <textarea name="message" id="" cols="30" rows="10" required></textarea>
                </div>
                <button type='submit'>Send</button>
                <div className="result">
                    {result ? <Result /> : null}
                </div>
            </form>
        </div>
    )
}

export default Contact;