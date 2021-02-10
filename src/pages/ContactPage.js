import { useState } from 'react'
import emailjs from 'emailjs-com'

import Section from '../components/Section'

import './contactPage.css'

export default function ContactPage() {
  let defaultForm = {
    object: 'Informations',
    email: '',
    message: ''
  }
  const [contactForm, setContactForm] = useState(defaultForm)

  const handleChange = e => {
    setContactForm({
      ...contactForm,
      [e.currentTarget.name]: e.currentTarget.value
    })
  }

  function handleSubmit(e) {
    console.log(process.env.REACT_APP_TEST)
    e.preventDefault()
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE,
        e.target,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        result => {
          console.log(result.text)
        },
        error => {
          console.log(error.text)
        }
      )
  }

  return (
    <>
      <Section>
        <h3>Contact</h3>
        <p>
          Pour toute information, ou pour passer commande, merci de laisser un message et d'inscrire
          votre email. Je vous recontacte dès que possible.
        </p>
        <form onSubmit={handleSubmit} method="post" id="contactForm">
          <label htmlFor="userEmail">Votre email</label>
          <input
            onChange={handleChange}
            value={contactForm.email}
            id="userEmail"
            type="text"
            name="email"
            required
          ></input>
          <label htmlFor="object">Objet</label>
          <select
            onChange={handleChange}
            value={contactForm.object}
            id="object"
            name="object"
            form="contactForm"
            required
          >
            <option value="Informations">Informations</option>
            <option value="Forfait simple">Forfait simple</option>
            <option value="Forfait cup">Forfait cup</option>
            <option value="Forfait championnat">Forfait championnat</option>
          </select>
          <label htmlFor="userMessage">Message</label>
          <textarea
            onChange={handleChange}
            value={contactForm.message}
            id="userMessage"
            name="message"
            required
          ></textarea>
          <input className="submitButton" type="submit" />
        </form>
      </Section>
    </>
  )
}
