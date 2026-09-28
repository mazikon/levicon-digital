import styles from "./CTASection.module.css";
import Button from "./Button.jsx";

export default function CTASection({ title, description, cta }) {
  return (
    <section className="tight">
      <div className={`wrap ${styles.banner}`}>
        <div>
          <h3>{title}</h3>
          <p className="muted" style={{ margin: 0 }}>
            {description}
          </p>
        </div>
        <Button variant={cta.variant || "primary"} to={cta.to} href={cta.href}>
          {cta.label}
        </Button>
      </div>
    </section>
  );
}
