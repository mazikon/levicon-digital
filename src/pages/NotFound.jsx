import { Link } from "react-router-dom";
import useDocumentHead from "../hooks/useDocumentHead.js";
import Button from "../components/Button.jsx";

export default function NotFound() {
  useDocumentHead({
    title: "Page not found — Levicon Digital",
    description: "The page you're looking for doesn't exist.",
  });

  return (
    <section className="page-hero" style={{ borderBottom: "none", textAlign: "center" }}>
      <div className="wrap">
        <span className="eyebrow" style={{ justifyContent: "center" }}>
          404
        </span>
        <h1>Page not found</h1>
        <p className="lede" style={{ margin: "0 auto 2em" }}>
          The page you're looking for doesn't exist or may have moved.
        </p>
        <Button variant="primary" to="/">
          Back to Home
        </Button>
      </div>
    </section>
  );
}
