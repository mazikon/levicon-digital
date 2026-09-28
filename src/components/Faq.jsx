import { useState } from "react";
import styles from "./Faq.module.css";

function FaqItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className={styles.item}>
      <button
        type="button"
        className={styles.question}
        aria-expanded={isOpen}
        onClick={onToggle}
      >
        {question}
        <span className={`${styles.marker} ${isOpen ? styles.markerOpen : ""}`} aria-hidden="true">
          +
        </span>
      </button>
      <div className={`${styles.answer} ${isOpen ? styles.answerOpen : ""}`}>
        <p>{answer}</p>
      </div>
    </div>
  );
}

/**
 * items: [{ question, answer }]
 * defaultOpenIndex: index that starts expanded (matches original design's first-item-open)
 */
export default function Faq({ items, defaultOpenIndex = 0 }) {
  const [openIndex, setOpenIndex] = useState(defaultOpenIndex);

  return (
    <div>
      {items.map((item, i) => (
        <FaqItem
          key={item.question}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === i}
          onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
        />
      ))}
    </div>
  );
}
