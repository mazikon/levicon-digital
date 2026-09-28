import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import styles from "./Header.module.css";
import Button from "./Button.jsx";
import Logo from "./Logo.jsx";
import { WHATSAPP_GENERAL_URL } from "../constants.js";

const NAV_ITEMS = [
  { to: "/", label: "Home" },
  { to: "/business-online-setup", label: "Business Online Setup" },
  { to: "/pricing", label: "Pricing" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

/* The mobile menu is fixed to the viewport directly below the header, so it
   needs the live header height. The header changes height between the mobile
   and desktop layouts, hence the observer rather than a static value. */
function useHeaderHeight(ref) {
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const publish = () => {
      const height = Math.round(el.getBoundingClientRect().height);
      document.documentElement.style.setProperty("--header-h", `${height}px`);
    };

    publish();
    const observer = new ResizeObserver(publish);
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref]);
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const headerRef = useRef(null);

  useHeaderHeight(headerRef);

  /* Escape closes the menu, and the page behind it is locked so a stray scroll
     can't slide content under the open panel. Both are mobile-only concerns. */
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  /* Growing past the mobile breakpoint reveals the desktop nav, so the panel
     must not be left open behind it. */
  useEffect(() => {
    const query = window.matchMedia("(min-width: 881px)");
    const onChange = (e) => {
      if (e.matches) setOpen(false);
    };
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  return (
    <header className={styles.site} ref={headerRef}>
      <div className={`wrap ${styles.nav}`}>
        <Link to="/" className={styles.brand} aria-label="Levicon Digital — home" onClick={() => setOpen(false)}>
          <Logo />
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
          <Button variant="accent" href={WHATSAPP_GENERAL_URL}>
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
