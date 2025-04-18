import { useEffect } from "react";
import "./Css/form.css";
import { useForm } from "react-hook-form";

function Contact() {
  useEffect(() => {
    document.body.style.backgroundColor = "#212121";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  const {
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  return (
    <div className="form-page-container">
      <form
        action="https://formspree.io/f/xkgjlawk"
        method="POST"
        className="form-card"
      >
        <h2 className="form-heading">Contact Me</h2>

        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          id="name"
          name="name"
          className="form-input"
          {...register("name", {
            required: "Name is required",
            minLength: {
              value: 2,
              message: "Name must be at least 2 characters",
            },
          })}
        />
        {errors.name && <p className="form-error">{errors.name.message}</p>}

        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className="form-input"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Invalid email address",
            },
          })}
        />
        {errors.email && <p className="form-error">{errors.email.message}</p>}

        <label htmlFor="message" className="form-label">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="form-textarea"
          {...register("message", {
            required: "Please enter a message",
            minLength: {
              value: 10,
              message: "Message should be at least 10 characters",
            },
          })}
        />
        {errors.message && <p className="form-error">{errors.message.message}</p>}

        <button type="submit" className="form-submit-btn">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
