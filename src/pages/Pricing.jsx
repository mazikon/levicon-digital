import { Link } from "react-router-dom";
import useDocumentHead from "../hooks/useDocumentHead.js";
import PriceCard from "../components/PriceCard.jsx";
import Faq from "../components/Faq.jsx";
import Button from "../components/Button.jsx";
import { WHATSAPP_BASE_URL } from "../constants.js";

const FEATURES = [
  "One-page professional website",
  "Google/Maps setup assistance",
  "Business email setup",
  "WhatsApp Business guidance",
  "WhatsApp click-to-chat",
  "Business profile & content",
  "Contact / enquiry form",
  "Social profile cleanup",
  "Basic SEO setup",
];

const FAQ_ITEMS = [
  {
    question: "Do I need an existing website?",
    answer: "No. The Starter package is designed for businesses that need a basic professional online presence.",
  },
  {
    question: "Do I need to visit your office?",
    answer: "No. The setup can be handled remotely.",
  },
  {
    question: "Can you set up WhatsApp Business for me?",
    answer: "We can guide and optimise the setup, but phone-number verification must be completed by the business owner on their device.",
  },
  {
    question: "Does ₦50,000 include domain and hosting?",
    answer: "Domain and hosting are separate unless specifically included in the agreed package.",
  },
  {
    question: "How long does setup take?",
    answer:
      "Timeframes depend on the actual scope of your setup and how quickly your business information and materials are provided. We'll confirm a realistic timeline once we understand your requirements — we don't offer blanket guarantees here.",
  },
];

export default function Pricing() {
  useDocumentHead({
    title: "Pricing — Levicon Digital Business Online Setup",
    description:
      "Levicon Digital's Business Online Setup: ₦50,000, split ₦35,000 upfront and ₦15,000 before final handover. See what's included.",
    ogDescription: "One straightforward package: ₦50,000 for a complete Business Online Setup.",
  });

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="breadcrumb">
            <Link to="/">Home</Link> / Pricing
          </div>
          <span className="eyebrow">Pricing</span>
          <h1>One straightforward package.</h1>
          <p className="lede">
            No tiers to compare, no add-ons you don't need — a complete basic online presence
            for businesses that don't have one yet.
          </p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <PriceCard
            name="BUSINESS ONLINE SETUP"
            amount="₦50,000"
            terms="For existing businesses that need a professional basic online presence."
            features={FEATURES}
            upfront="₦35,000"
            handover="₦15,000"
            note="Domain and hosting costs are separate unless specifically included in the agreed package."
            cta={{ label: "Start My Setup", to: "/contact" }}
          />
        </div>
      </section>

      <div className="wrap">
        <hr className="divider" />
      </div>

      <section>
        <div className="wrap" style={{ maxWidth: 820 }}>
          <div className="section-head">
            <span className="eyebrow">Questions</span>
            <h2>Before you start</h2>
          </div>
          <Faq items={FAQ_ITEMS} defaultOpenIndex={0} />
        </div>
      </section>

      <section className="tight">
        <div
          className="wrap raise"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 24,
            borderRadius: 8,
            padding: 36,
          }}
        >
          <div>
            <h3 style={{ marginBottom: 6 }}>Have a question first?</h3>
            <p className="muted" style={{ margin: 0 }}>
              Message us directly on WhatsApp.
            </p>
          </div>
          <Button variant="whatsapp" href={WHATSAPP_BASE_URL}>
            Chat With Us
          </Button>
        </div>
      </section>
    </>
  );
}
