import styles from "./ServiceGrid.module.css";

/**
 * items: [{ icon: Component, title, description }]
 */
export default function ServiceGrid({ items }) {
  return (
    <div className={styles.grid}>
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <div className={styles.card} key={item.title}>
            {Icon && (
              <span className={styles.iconWrap}>
                <Icon className={styles.icon} />
              </span>
            )}
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        );
      })}
    </div>
  );
}
