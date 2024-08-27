import './Contato.css'
import ContactForm from '../../components/ContactForm/ContactForm'
import Instagram from '../../assets/icons/contact_instagram.svg'
import Twitter from '../../assets/icons/contact_twitter.svg' 
import Discord from '../../assets/icons/contact_discord.svg'

function Contato() {
  return (
    <section className="contact">
      <div className="contact__text">
        <h1>Dúvidas e suporte, entre em contato:</h1>
        <div className="contact__social">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src={Twitter} alt="Twitter" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={Instagram} alt="Instagram" />
          </a>
          <a href="https://discord.gg" target="_blank" rel="noopener noreferrer">
            <img src={Discord} alt="Discord" />
          </a>
        </div>
      </div>

      <ContactForm />
    </section>
  )
}

export default Contato