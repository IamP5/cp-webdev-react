import './ContactForm.css'

function ContactForm() {
  return (
    <form className="contact-form">
      <div className="form-group">
        <label htmlFor="nome">Nome:</label>
        <input type="text" id="nome" name="nome" required />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
      </div>
      <div className="form-group">
        <label htmlFor="mensagem">Mensagem:</label>
        <textarea id="mensagem" name="mensagem" required></textarea>
      </div>
      <button type="submit">Enviar</button>
    </form>
  )
}

export default ContactForm