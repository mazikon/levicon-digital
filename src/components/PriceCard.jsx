import styles from "./PriceCard.module.css";
import { CheckIcon } from "./icons/Icons.jsx";
import Button from "./Button.jsx";

export default function PriceCard({
  name,
  amount,
  terms,
  features,
  upfront,
  handover,
  note,
  cta,
}) {
  return (
    <div className={styles.card}>
      <div className={styles.name}>{name}</div>
      <p className={styles.amount}>{amount}</p>
      <p className={styles.terms}>{terms}</p>

      <ul className={styles.list}>
        {features.map((feature) => (
          <li key={feature}>
            <CheckIcon />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <div className={styles.paySplit}>
        <div className={styles.payChip}>
          <strong>{upfront}</strong>
          <span className="muted">upfront</span>
        </div>
        <div className={styles.payChip}>
          <strong>{handover}</strong>
          <span className="muted">before final handover</span>
        </div>
      </div>

      <Button variant="accent" to={cta.to} href={cta.href}>
        {cta.label}
      </Button>
      <p className={styles.note}>{note}</p>
    </div>
  );
}
