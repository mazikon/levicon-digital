import styles from "./BusinessOnlineSetup.module.css";
import useDocumentHead from "../hooks/useDocumentHead.js";
import CTASection from "../components/CTASection.jsx";
import { Link } from "react-router-dom";

const DETAIL_SECTIONS = [
  {
    eyebrow: "01 — Website",
    title: "A website that clearly presents your business",
    body: "One professional, mobile-friendly page covering who you are, what you offer, and how to reach you — built around your business's own content, not a generic template.",
  },
  {
    eyebrow: "02 — Google & Maps",
    title: "Set up and optimised, so you show up where customers are already looking",
    body: "We assist with setting up and organising your Google Business information — the details that let customers verify your business, see your location and know how to reach you.",
  },
  {
    eyebrow: "03 — Business Email",
    title: "A professional email address for your business",
    body: "Communication that carries your business name, not a personal or generic address — set up once a domain is selected.",
  },
  {
    eyebrow: "04 — WhatsApp",
    title: "A direct line from your website to your phone",
    body: "Guidance on setting up WhatsApp Business properly, plus a click-to-chat link built into your website so enquiries reach you immediately, in the app you already use.",
  },
  {
    eyebrow: "05 — Business Information",
    title: "Services, products, photos and location — organised clearly",
    body: "We take what you already have and organise it into a clear, consistent profile that reads the same wherever a customer finds it.",
  },
  {
    eyebrow: "06 — Enquiry System",
    title: "A simple path from interest to contact",
    body: "A contact form and WhatsApp link that make it easy for a potential customer to take the next step, instead of leaving to look elsewhere.",
  },
];

const STEPS = [
  { num: "01", title: "Tell us about your business", body: "Provide your business information, services, photos, logo and contact details." },
  { num: "02", title: "We set it up", body: "We build and organise your online presence." },
  { num: "03", title: "You review it", body: "You review the work and provide feedback." },
  { num: "04", title: "We finalise", body: "We complete the agreed revisions and handover." },
];

export default function BusinessOnlineSetup() {
  useDocumentHead({
    title: "Business Online Setup — Levicon Digital",
    description:
      "What's included in Levicon Digital's Business Online Setup: a website, Google & Maps, business email, WhatsApp, organised business information and an enquiry system.",
    ogDescription:
      "A professional online presence for small businesses — website, Google & Maps, email, WhatsApp and an enquiry system.",
  });

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="breadcrumb">
            <Link to="/">Home</Link> / Business Online Setup
          </div>
          <span className="eyebrow">The service</span>
          <h1>Everything needed for a business to be found, understood and contacted online.</h1>
          <p className="lede">
            One setup that brings your website, Google presence, email, WhatsApp and enquiry
            process together — so customers get a clear, consistent picture of your business
            wherever they find you.
          </p>
        </div>
      </section>

      {DETAIL_SECTIONS.map((section, i) => (
        <div key={section.title}>
          <section>
            <div className="wrap">
              <div className="section-head">
                <span className="eyebrow">{section.eyebrow}</span>
                <h2>{section.title}</h2>
                <p>{section.body}</p>
              </div>

              {i === 0 && (
                <div className="browser-mock">
                  <div className="browser-bar">
                    <span className="browser-dot" />
                    <span className="browser-dot" />
                    <span className="browser-dot" />
                    <div className="browser-url">yourbusiness.com</div>
                  </div>
                  <div className="browser-body">
                    <div className={styles.miniGrid}>
                      <div className={`raise ${styles.miniCard}`} style={{ padding: "24px" }}>
                        <h3>About</h3>
                        <p style={{ marginBottom: 0 }}>Who you are and what makes your business worth choosing.</p>
                      </div>
                      <div className={`raise ${styles.miniCard}`} style={{ padding: "24px" }}>
                        <h3>Services</h3>
                        <p style={{ marginBottom: 0 }}>What you offer, laid out clearly with photos where useful.</p>
                      </div>
                      <div className={`raise ${styles.miniCard}`} style={{ padding: "24px" }}>
                        <h3>Contact</h3>
                        <p style={{ marginBottom: 0 }}>Location, hours, WhatsApp and an enquiry form.</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </section>
          {i < DETAIL_SECTIONS.length - 1 && (
            <div className="wrap">
              <hr className="divider" />
            </div>
          )}
        </div>
      ))}

      {/* HOW IT WORKS */}
      <section className="band">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow on-dark">How it works</span>
            <h2>A straightforward setup process</h2>
          </div>
          <div className={styles.steps}>
            {STEPS.map((step) => (
              <div className={styles.stepRow} key={step.num}>
                <span className={styles.stepNum}>{step.num}</span>
                <div>
                  <h4>{step.title}</h4>
                  <p>{step.body}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="muted" style={{ marginTop: 24 }}>
            Everything can be handled remotely.
          </p>
        </div>
      </section>

      {/* CLEAR EXPECTATIONS */}
      <section>
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Set expectations</span>
            <h2>Clear setup. Clear expectations.</h2>
          </div>
          <div className={styles.disclosure}>
            <p style={{ marginBottom: 0 }}>
              <strong>We do not promise:</strong>
            </p>
            <ul>
              <li>Guaranteed Google rankings</li>
              <li>Guaranteed sales</li>
              <li>Guaranteed customer numbers</li>
            </ul>
            <p style={{ margin: "16px 0 0" }}>
              We focus on creating a clear, professional and functional online presence that
              makes it easier for potential customers to find and contact a business.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to see what's included?"
        description="Business Online Setup starts at ₦50,000."
        cta={{ label: "View Pricing", to: "/pricing", variant: "primary" }}
      />
    </>
  );
}
