import "../styles/contact-form.scss";

function Form() {
  return (
    <div className="contact-form">
      <h2 className="contact-form__title">SEND A MESSAGE</h2>
      <form className="contact-form__form">
        <input type="text" name="name" className="contact-form__input" placeholder="Name" />
        <input type="email" name="email" className="contact-form__input" placeholder="Email" />
        <textarea name="message" className="contact-form__textarea" placeholder="Message..." rows={10} />
        <input type="submit" value="Send message" className="contact-form__input contact-form__input--button" />
      </form>
    </div>
  );
}

export default Form;
