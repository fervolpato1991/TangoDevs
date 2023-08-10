import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import Animations from '../Animations'
import './index.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
  }, []);

  const sendEmail = (event) => {
    event.preventDefault();
  
    const userId = 'ePsTtr0xZJnMgBKZH';
    const serviceId = 'service_6jw38uh';
    const templateId = 'template_o3j1oh7';
  
    emailjs
  .sendForm(serviceId, templateId, form.current, userId)
  .then(
    () => {
      alert('Message successfully sent!');
      window.location.reload(false);
    }
  )
  .catch((error) => {
    console.error('Failed to send the message:', error);
    alert('Failed to send the message, please try again');
  });
  };

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <Animations
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'u', 's']}
              idx={15}
            />
          </h1>
          <p>
            We are interested in freelance opportunities - especially on ambitious
            or large projects. However, if you have any other requests or
            questions, don't hesitate to contact us using below form either.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="from_name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact