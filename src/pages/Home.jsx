import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import useDocumentHead from "../hooks/useDocumentHead.js";
import Button from "../components/Button.jsx";
import FlowDiagram from "../components/FlowDiagram.jsx";
import BeforeAfter from "../components/BeforeAfter.jsx";
import ServiceGrid from "../components/ServiceGrid.jsx";
import { WHATSAPP_GENERAL_URL } from "../constants.js";
import {
  SearchIcon,
  WebsiteIcon,
  MapPinIcon,
  EmailIcon,
  InfoDocIcon,
  EnquiryIcon,
} from "../components/icons/Icons.jsx";
import WhatsAppIcon from "../components/icons/WhatsAppIcon.jsx";

const HERO_FLOW = [
  { icon: SearchIcon, title: "Search", description: "A customer looks up your business or service nearby." },
  { icon: WebsiteIcon, title: "Your website", description: "They find clear information about what you offer." },
  { icon: WhatsAppIcon, title: "WhatsApp", description: "They reach out directly to enquire." },
];

const GAP_BEFORE_AFTER = {
  before: {
    label: "WITHOUT A CLEAR SETUP",
    items: [
      "Customers struggle to find the business online",
      "Services and pricing aren't easy to understand",
      "Basic information is hard to verify",
      "Photos and offerings are scattered across platforms",
      "There's no simple way to make contact",
    ],
  },
  after: {
    label: "WITH LEVICON DIGITAL",
    items: [
      "A website that clearly presents the business",
      "Google, Maps, email and WhatsApp working together",
      "Services, photos and information organised in one place",
      "A simple, direct way for customers to enquire",
      "A professional first impression, every time",
    ],
  },
};

const JOURNEY_BEFORE_AFTER = {
  before: {
    label: "BEFORE",
    items: [
      "Customer hears about the business",
      "Searches online",
      "Finds incomplete information",
      "Checks social media",
      "Still has questions",
      "Leaves",
    ],
  },
  after: {
    label: "AFTER",
    items: [
      "Customer hears about the business",
      "Finds the business online",
      "Understands what it offers",
      "Sees services and information",
      "Clicks WhatsApp or the enquiry form",
      "Contacts the business",
    ],
  },
};

const SERVICES = [
  { icon: WebsiteIcon, title: "Website", description: "A professional, mobile-friendly website that clearly presents the business." },
  { icon: MapPinIcon, title: "Google & Maps", description: "Setup and optimization assistance for business information and location." },
  { icon: EmailIcon, title: "Business Email", description: "A professional email address for business communication." },
  { icon: WhatsAppIcon, title: "WhatsApp", description: "WhatsApp Business guidance, optimisation and direct contact integration." },
  { icon: InfoDocIcon, title: "Business Information", description: "Services, products, photos, location and contact information organised clearly." },
  { icon: EnquiryIcon, title: "Enquiry System", description: "Simple contact and enquiry paths that make it easier for potential customers to reach the business." },
];

export default function Home() {
  useDocumentHead({
    title: "Levicon Digital — Business Online Setup for Small Businesses",
    description:
      "Levicon Digital helps small businesses get properly set up and visible online — a website, Google & Maps, business email, WhatsApp and a clear way for customers to reach you.",
    ogTitle: "Levicon Digital — Business Online Setup",
    ogDescription: "Findable. Professional. Contactable. We help small businesses build a professional online presence.",
  });

  return (
    <>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={`wrap ${styles.heroGrid}`}>
          <div>
            <span className={styles.heroKicker}>Business Online Setup</span>
            <h1>
              Your business is already running.
              <br />
              But can customers find you online?
            </h1>
            <p className="lede">
              We help small businesses build a professional online presence that makes it
              easier for customers to find you, understand what you offer and contact you.
            </p>
            <div className="btn-row">
              <Button variant="accent" to="/pricing">
                Get Your Business Online
              </Button>
              <Button variant="outline-light" href={WHATSAPP_GENERAL_URL}>
                Talk to Us on WhatsApp
              </Button>
            </div>
          </div>

          <div className="browser-mock" aria-hidden="true">
            <div className="browser-bar">
              <span className="browser-dot" />
              <span className="browser-dot" />
              <span className="browser-dot" />
              <div className="browser-url">yourbusiness.com</div>
            </div>
            <div className="browser-body">
              <FlowDiagram steps={HERO_FLOW} />
            </div>
          </div>
        </div>
      </section>

      <div className="wrap">
        <hr className="divider" />
      </div>

      {/* DESERVES TO BE SEEN */}
      <section>
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">The gap</span>
            <h2>Your business deserves to be seen</h2>
            <p className="lede">
              Many businesses already have good products, paying customers, a physical
              location, WhatsApp and social media. What's often missing is the layer that
              connects all of it together online.
            </p>
          </div>

          <BeforeAfter before={GAP_BEFORE_AFTER.before} after={GAP_BEFORE_AFTER.after} />
          <p className="muted" style={{ marginTop: 24 }}>
            We bring the important pieces together.
          </p>
        </div>
      </section>

      <div className="wrap">
        <hr className="divider" />
      </div>

      {/* JOURNEY */}
      <section className="tight">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">The journey</span>
            <h2>From being found to being contacted</h2>
          </div>
          <BeforeAfter
            before={JOURNEY_BEFORE_AFTER.before}
            after={JOURNEY_BEFORE_AFTER.after}
            numbered
          />
        </div>
      </section>

      <div className="wrap">
        <hr className="divider" />
      </div>

      {/* SERVICES */}
      <section>
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">What's included</span>
            <h2>We put the pieces together</h2>
            <p className={styles.servicesIntro}>
              Six essentials, set up properly and working together.{" "}
              <Link to="/business-online-setup">See the full setup →</Link>
            </p>
          </div>
        </div>
        <div className="wrap" style={{ padding: 0 }}>
          <ServiceGrid items={SERVICES} />
        </div>
      </section>

      {/* PRICING TEASER */}
      <section className="band">
        <div className={`wrap ${styles.pricingBand}`}>
          <div>
            <span className="eyebrow on-dark">One straightforward package</span>
            <h2 style={{ marginBottom: ".2em" }}>Business Online Setup — ₦50,000</h2>
            <p className="muted" style={{ margin: 0 }}>
              A complete, basic online presence for businesses that don't have one yet.
            </p>
          </div>
          <Button variant="accent" to="/pricing">
            See What's Included
          </Button>
        </div>
      </section>
    </>
  );
}
