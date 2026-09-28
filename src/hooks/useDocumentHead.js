import { useEffect } from "react";

function setMeta(attr, key, content) {
  if (!content) return;
  let el = document.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

/**
 * Sets document.title and updates meta description / Open Graph tags
 * for the currently mounted page. Runs on mount and whenever the
 * supplied values change.
 */
export default function useDocumentHead({ title, description, ogTitle, ogDescription }) {
  useEffect(() => {
    if (title) document.title = title;
    setMeta("name", "description", description);
    setMeta("property", "og:title", ogTitle || title);
    setMeta("property", "og:description", ogDescription || description);
  }, [title, description, ogTitle, ogDescription]);
}
