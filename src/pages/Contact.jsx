import { Link } from "react-router-dom";
import styles from "./Contact.module.css";
import useDocumentHead from "../hooks/useDocumentHead.js";
import Button from "../components/Button.jsx";
import EnquiryForm from "../components/EnquiryForm.jsx";
import Faq from "../components/Faq.jsx";
import { WHATSAPP_BASE_URL, WHATSAPP_NUMBER_DISPLAY } from "../constants.js";
import { EmailIcon, ClockIcon } from "../components/icons/Icons.jsx";
import WhatsAppIcon from "../components/icons/WhatsAppIcon.jsx";

const FAQ_ITEMS = [
  {
    question: "Do I need an existing website?",
    answer: "No. The Starter package is designed for businesses that need a basic professional online presence.",
  },
  {
    question: "Do I need to visit your office?",
    answer: "No. The setup can be handled remotely.",
  },
  {
    question: "Can you set up WhatsApp Business for me?",
    answer: "We can guide and optimise the setup, but phone-number verification must be completed by the business owner on their device.",
  },
  {
    question: "How long does setup take?",
    answer:
      "Timeframes depend on the actual scope of your setup and how quickly your business information is provided — we'll confirm a realistic timeline once we understand your requirements.",
  },
];

export default function Contact() {
  useDocumentHead({
    title: "Contact — Levicon Digital",
    description: "Get in touch with Levicon Digital on WhatsApp or through our enquiry form to start your Business Online Setup.",
    ogDescription: "Reach Levicon Digital on WhatsApp or send an enquiry to start your Business Online Setup.",
  });

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="breadcrumb">
            <Link to="/">Home</Link> / Contact
          </div>
          <span className="eyebrow">Contact</span>
          <h1>Let's get your business online.</h1>
          <p className="lede">
            Message us on WhatsApp for the fastest response, or send a few details through the
            form and we'll reach out.
          </p>
        </div>
      </section>

      <section>
        <div className={`wrap ${styles.contactGrid}`}>
          <div>
            <div className={styles.contactCard}>
              <span className={styles.iconWrap}>
                <WhatsAppIcon />
              </span>
              <div>
                <h4>WhatsApp</h4>
                <p>{WHATSAPP_NUMBER_DISPLAY} — the quickest way to reach us.</p>
                <div style={{ marginTop: 16 }}>
                  <Button variant="whatsapp" href={WHATSAPP_BASE_URL}>
                    Chat With Us
                  </Button>
                </div>
              </div>
            </div>

            <div className={styles.contactCard}>
              <span className={styles.iconWrap}>
                <EmailIcon />
              </span>
              <div>
                <h4>Email</h4>
                <p>
                  A dedicated business email address will be listed here once a domain is
                  selected for Levicon Digital.
                </p>
              </div>
            </div>

            <div className={styles.contactCard}>
              <span className={styles.iconWrap}>
                <ClockIcon />
              </span>
              <div>
                <h4>How we work</h4>
                <p>Everything is handled remotely — no office visit needed.</p>
              </div>
            </div>
          </div>

          <div className={styles.formWrap}>
            <h3 style={{ marginBottom: 20 }}>Send an enquiry</h3>
            <EnquiryForm />
          </div>
        </div>
      </section>

      <div className="wrap">
        <hr className="divider" />
      </div>

      <section>
        <div className="wrap" style={{ maxWidth: 820 }}>
          <div className="section-head">
            <span className="eyebrow">Before you write in</span>
            <h2>A few quick answers</h2>
          </div>
          <Faq items={FAQ_ITEMS} defaultOpenIndex={0} />
        </div>
      </section>
    </>
  );
}
