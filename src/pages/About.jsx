import { Link } from "react-router-dom";
import useDocumentHead from "../hooks/useDocumentHead.js";
import ServiceGrid from "../components/ServiceGrid.jsx";
import CTASection from "../components/CTASection.jsx";

const AUDIENCES = [
  { title: "Real estate", description: "Listings, locations and enquiries in one place." },
  { title: "Interior & design", description: "A portfolio-led presence that shows the work." },
  { title: "Construction", description: "Services, past work and a clear way to enquire." },
  { title: "CCTV & security", description: "Trust-building information, clearly presented." },
  { title: "Cleaning companies", description: "Services, coverage area and booking contact." },
  { title: "Event businesses", description: "Packages and availability made easy to find." },
  { title: "Furniture", description: "Catalogue-style presentation with direct enquiry." },
  { title: "Professional services", description: "Credentials and services, clearly laid out." },
  { title: "Schools", description: "Programmes, location and admissions contact." },
  { title: "Hospitality", description: "Menus, rooms or offerings customers can browse." },
];

export default function About() {
  useDocumentHead({
    title: "About — Levicon Digital",
    description: "Levicon Digital is a service of Levicon Systems Ltd, helping small businesses get properly set up and visible online.",
    ogDescription: "A service of Levicon Systems Ltd, focused on business online setup for small businesses.",
  });

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="breadcrumb">
            <Link to="/">Home</Link> / About
          </div>
          <span className="eyebrow">About</span>
          <h1>A service of Levicon Systems Ltd.</h1>
          <p className="lede">
            Levicon Digital focuses on one thing: helping small businesses get properly set up
            and visible online.
          </p>
        </div>
      </section>

      <section>
        <div className="wrap" style={{ maxWidth: 760 }}>
          <h2>Why we exist</h2>
          <p>
            Many small businesses are already doing good work — they have customers, a
            location, WhatsApp and social media. What's often missing is the layer that brings
            it all together so a new customer can find them, understand what they offer and get
            in touch without friction.
          </p>
          <p>
            Levicon Digital was set up to close that specific gap: a straightforward,
            well-organised online setup, without unnecessary complexity or ongoing obligations
            the business doesn't need.
          </p>
        </div>
      </section>

      <div className="wrap">
        <hr className="divider" />
      </div>

      <section>
        <div className="wrap" style={{ maxWidth: 760 }}>
          <h2>How we work</h2>
          <p>
            We keep the process simple and remote. You share your business information —
            services, photos, logo and contact details — and we handle the setup: website,
            Google &amp; Maps, business email, WhatsApp and an enquiry system, built around your
            business's own content.
          </p>
          <p>
            We're direct about what a setup like this can and can't do. We don't promise
            rankings, sales or customer numbers — our job is to make sure your business is
            properly represented online and easy to reach.
          </p>
        </div>
      </section>

      <div className="wrap">
        <hr className="divider" />
      </div>

      <section>
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Who we work with</span>
            <h2>Built for local, service-based businesses</h2>
          </div>
          <ServiceGrid items={AUDIENCES} />
        </div>
      </section>

      <CTASection
        title="Not sure if this fits your business?"
        description="Send us a message — we'll tell you honestly."
        cta={{ label: "Get in Touch", to: "/contact", variant: "primary" }}
      />
    </>
  );
}
