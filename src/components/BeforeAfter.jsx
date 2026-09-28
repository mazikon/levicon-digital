import styles from "./BeforeAfter.module.css";

/**
 * before / after: { label, items: string[] }
 * numbered: whether to show 1,2,3.. markers (for the sequential journey use)
 */
export default function BeforeAfter({ before, after, numbered = false }) {
  return (
    <div className={styles.grid}>
      <div className={`${styles.col} ${styles.before}`}>
        <span className={styles.label}>{before.label}</span>
        <ul className={styles.list}>
          {before.items.map((item, i) => (
            <li key={item}>
              {numbered && <span className={styles.num}>{i + 1}</span>}
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className={`${styles.col} ${styles.after}`}>
        <span className={styles.label}>{after.label}</span>
        <ul className={styles.list}>
          {after.items.map((item, i) => (
            <li key={item}>
              {numbered && <span className={styles.num}>{i + 1}</span>}
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
