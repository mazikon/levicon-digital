import { Fragment } from "react";
import styles from "./FlowDiagram.module.css";
import { ArrowIcon } from "./icons/Icons.jsx";

/**
 * steps: [{ icon: Component, title, description }]
 */
export default function FlowDiagram({ steps }) {
  return (
    <div className={styles.flow}>
      {steps.map((step, i) => {
        const Icon = step.icon;
        return (
          <Fragment key={step.title}>
            <div className={styles.step}>
              {Icon && <Icon className={styles.icon} />}
              <h4>{step.title}</h4>
              <p>{step.description}</p>
            </div>
            {i < steps.length - 1 && (
              <div className={styles.arrow} aria-hidden="true">
                <ArrowIcon />
              </div>
            )}
          </Fragment>
        );
      })}
    </div>
  );
}
