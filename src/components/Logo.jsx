import styles from "./Logo.module.css";
import logoUrl from "../image/levicon-digital.png";

/**
 * Official brand logo, served from the supplied artwork in src/image.
 *
 * The image is the single source of truth for the mark, so the intrinsic
 * 216x144 ratio is what every size below is derived from. Width is always
 * `auto` against a fixed height, which is what keeps the logo from being
 * stretched or squashed at any breakpoint.
 *
 * `variant` is still accepted (Header passes "light", Footer passes "dark") so
 * the call sites stay untouched, but the supplied PNG carries a baked-in cream
 * background and cannot be recoloured by CSS, so it renders identically in
 * both places.
 */
export default function Logo({ variant = "light" }) {
  return (
    <span className={styles.logo} data-variant={variant}>
      <img
        className={styles.image}
        src={logoUrl}
        alt="Levicon Digital"
        width={216}
        height={144}
        decoding="async"
      />
    </span>
  );
}
