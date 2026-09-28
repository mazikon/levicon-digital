import { Link } from "react-router-dom";
import WhatsAppIcon from "./icons/WhatsAppIcon.jsx";

/**
 * Renders as an internal <Link>, an external <a>, or a <button>
 * depending on the props supplied.
 *
 * variant: "accent" (primary CTA) | "primary" | "outline" | "outline-light" | "whatsapp"
 * to: internal route (uses react-router Link)
 * href: external URL (uses a plain <a>)
 */
export default function Button({
  variant = "primary",
  to,
  href,
  type = "button",
  className = "",
  children,
  ...rest
}) {
  const classes = `btn btn-${variant} ${className}`.trim();
  const content =
    variant === "whatsapp" ? (
      <>
        <WhatsAppIcon />
        {children}
      </>
    ) : (
      children
    );

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes} {...rest}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} className={classes} {...rest}>
      {content}
    </button>
  );
}
