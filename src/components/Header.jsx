import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import styles from "./Header.module.css";
import Button from "./Button.jsx";
import { WHATSAPP_BASE_URL } from "../constants.js";

const NAV_ITEMS = [
  { to: "/", label: "Home" },
  { to: "/business-online-setup", label: "Business Online Setup" },
  { to: "/pricing", label: "Pricing" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.site}>
      <div className={`wrap ${styles.nav}`}>
        <Link to="/" className={styles.brand} onClick={() => setOpen(false)}>
          <span className={styles.brandMark}>LEVICON DIGITAL</span>
        </Link>

        <ul className={`${styles.links} ${open ? styles.open : ""}`} id="primary-navigation">
          {NAV_ITEMS.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) => (isActive ? styles.active : undefined)}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className={styles.cta}>
          <Button variant="accent" href={WHATSAPP_BASE_URL}>
            WhatsApp Us
          </Button>
          <button
            type="button"
            className={styles.toggle}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="primary-navigation"
            onClick={() => setOpen((v) => !v)}
          >
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
