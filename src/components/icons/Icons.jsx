const common = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, "aria-hidden": true };

export function SearchIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...common} {...props}>
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.3-4.3" />
    </svg>
  );
}

export function WebsiteIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...common} {...props}>
      <rect x="3" y="4" width="18" height="16" rx="1.5" />
      <path d="M3 9h18M8 4v5" />
    </svg>
  );
}

export function MapPinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...common} {...props}>
      <path d="M12 21s7-6.1 7-11.5A7 7 0 0 0 5 9.5C5 14.9 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.3" />
    </svg>
  );
}

export function EmailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...common} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="1.5" />
      <path d="M3 6.5l9 6 9-6" />
    </svg>
  );
}

export function InfoDocIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...common} {...props}>
      <path d="M4 19V5a1 1 0 0 1 1-1h9l6 6v9a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z" />
      <path d="M14 4v6h6" />
    </svg>
  );
}

export function EnquiryIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...common} {...props}>
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

export function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden {...props}>
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

export function ArrowIcon(props) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function ClockIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...common} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </svg>
  );
}
