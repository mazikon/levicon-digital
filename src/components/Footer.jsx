import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import Logo from "./Logo.jsx";
import { WHATSAPP_GENERAL_URL, WHATSAPP_NUMBER_DISPLAY } from "../constants.js";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.site}>
      <div className="wrap">
        <div className={styles.grid}>
          <div className={styles.brand}>
            <Logo variant="dark" />
            <p>
              A service of Levicon Systems Ltd. We help small businesses in Nigeria get
              properly set up and visible online.
            </p>
          </div>
          <div className={styles.cols}>
            <div className={styles.col}>
              <h5>Company</h5>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/business-online-setup">Business Online Setup</Link>
                </li>
                <li>
                  <Link to="/pricing">Pricing</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
            <div className={styles.col}>
              <h5>Get in touch</h5>
              <ul>
                <li>
                  <a href={WHATSAPP_GENERAL_URL} target="_blank" rel="noopener noreferrer">
                    WhatsApp: {WHATSAPP_NUMBER_DISPLAY}
                  </a>
                </li>
                <li>
                  <Link to="/contact">Enquiry form</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="divider" />
        <div className={styles.bottom}>
          <span>© {year} Levicon Systems Ltd. All rights reserved.</span>
          <span>Levicon Digital — Findable. Professional. Contactable.</span>
        </div>
      </div>
    </footer>
  );
}
