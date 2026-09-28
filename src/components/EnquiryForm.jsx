import { useState } from "react";
import styles from "./EnquiryForm.module.css";
import { buildWhatsAppLink } from "../constants.js";

const BUSINESS_TYPES = [
  "Real estate",
  "Interior / design",
  "Construction",
  "CCTV / security",
  "Cleaning",
  "Events",
  "Furniture",
  "Professional services",
  "School",
  "Hospitality",
  "Other",
];

const INITIAL_STATE = {
  name: "",
  business: "",
  type: BUSINESS_TYPES[0],
  message: "",
};

export default function EnquiryForm() {
  const [values, setValues] = useState(INITIAL_STATE);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
    setSent(false);
  }

  function validate() {
    const nextErrors = {};
    if (!values.name.trim()) nextErrors.name = "Please enter your name.";
    if (!values.business.trim()) nextErrors.business = "Please enter your business name.";
    if (!values.message.trim()) {
      nextErrors.message = "Let us know a little about what you need.";
    } else if (values.message.trim().length < 10) {
      nextErrors.message = "A few more details will help us respond faster.";
    }
    return nextErrors;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const text = `Hi Levicon Digital, I'd like to get my business online.

Name: ${values.name}
Business: ${values.business}
Business type: ${values.type}
Message: ${values.message}`;

    window.open(buildWhatsAppLink(text), "_blank", "noopener,noreferrer");
    setSent(true);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div>
        <label htmlFor="name">Your name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={values.name}
          onChange={handleChange}
          className={errors.name ? styles.invalid : ""}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        {errors.name && (
          <span id="name-error" className={styles.errorText}>
            {errors.name}
          </span>
        )}
      </div>

      <div>
        <label htmlFor="business">Business name</label>
        <input
          type="text"
          id="business"
          name="business"
          value={values.business}
          onChange={handleChange}
          className={errors.business ? styles.invalid : ""}
          aria-invalid={Boolean(errors.business)}
          aria-describedby={errors.business ? "business-error" : undefined}
        />
        {errors.business && (
          <span id="business-error" className={styles.errorText}>
            {errors.business}
          </span>
        )}
      </div>

      <div>
        <label htmlFor="type">Business type</label>
        <select id="type" name="type" value={values.type} onChange={handleChange}>
          {BUSINESS_TYPES.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message">What do you need help with?</label>
        <textarea
          id="message"
          name="message"
          placeholder="A short description of your business and what you'd like set up."
          value={values.message}
          onChange={handleChange}
          className={errors.message ? styles.invalid : ""}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <span id="message-error" className={styles.errorText}>
            {errors.message}
          </span>
        )}
      </div>

      <button type="submit" className={`btn btn-accent ${styles.submitRow}`}>
        Send via WhatsApp
      </button>
      <p className={styles.formNote}>
        This opens WhatsApp with your details pre-filled so you can send it directly to us.
      </p>
      {sent && (
        <p className={styles.successNote}>
          WhatsApp should have opened in a new tab — just hit send there to reach us.
        </p>
      )}
    </form>
  );
}
