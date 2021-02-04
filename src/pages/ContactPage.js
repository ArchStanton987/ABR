import Section from '../components/Section'

import './contactPage.css'

export default function ContactPage() {

  const handleSubmit = e => {
    e.preventDefault()
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
          <input id="userEmail" type="text"></input>
          <label htmlFor="object">Objet</label>
          <select id="object" name="object" form="contactForm">
            <option value="Informations">Informations</option>
            <option value="Forfait simple">Forfait simple</option>
            <option value="Forfait cup">Forfait cup</option>
            <option value="Forfait championnat">Forfait championnat</option>
          </select>
          <label htmlFor="userMessage">Message</label>
          <textarea id="userMessage"></textarea>
          <input className="submitButton" type="submit" />
        </form>
      </Section>
    </>
  )
}
