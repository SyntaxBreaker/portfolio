import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/contact-form.scss";

interface IFormStatus {
  status: string;
  message: string;
}

function Form() {
  const [formStatus, setFormStatus] = useState<IFormStatus | null>(null);
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.SyntheticEvent) => {
    e.preventDefault();

    setFormStatus(null);

    emailjs
      .sendForm(
        import.meta.env.PUBLIC_SERVICE_ID,
        import.meta.env.PUBLIC_TEMPLATE_ID,
        form.current as HTMLFormElement,
        import.meta.env.PUBLIC_PUBLIC_KEY,
      )
      .then(() =>
        setFormStatus({
          status: "Success",
          message: "The email has been sent successfully.",
        }),
      )
      .catch(() =>
        setFormStatus({
          status: "Error",
          message: "An error occurred while attempting to send the email.",
        }),
      )
      .finally(() => form.current?.reset());
  };

  return (
    <div className="contact-form">
      <h2 className="contact-form__title">SEND A MESSAGE</h2>
      {formStatus && (
        <span className="contact-form__status">{formStatus.message}</span>
      )}
      <form
        className="contact-form__form"
        ref={form as React.RefObject<HTMLFormElement>}
        onSubmit={sendEmail}
      >
        <input
          type="text"
          name="user_name"
          className="contact-form__input"
          placeholder="Name"
          required
        />
        <input
          type="email"
          name="user_email"
          className="contact-form__input"
          placeholder="Email"
          required
        />
        <textarea
          name="message"
          className="contact-form__textarea"
          placeholder="Message..."
          rows={10}
          required
        />
        <input
          type="submit"
          value="Send message"
          className="contact-form__input contact-form__input--button"
        />
      </form>
    </div>
  );
}

export default Form;
