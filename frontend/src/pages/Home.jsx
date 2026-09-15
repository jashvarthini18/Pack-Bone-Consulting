import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Factory,
  FlaskConical,
  Layers3,
  Package,
  Settings2,
  ShieldCheck,
  Truck,
  Zap,
  Activity,
} from "lucide-react";

import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import Marquee from "../components/Marquee";
import PageMeta from "../components/PageMeta";

/* =========================================================
   HERO
========================================================= */

function Hero() {
  return (
    <section className="hero">
      <PageMeta title="Home" />
      <div className="hero-grid"></div>

      <div className="hero-orbit orbit-one"></div>
      <div className="hero-orbit orbit-two"></div>

      <div className="container hero-content">
        <div className="hero-left">
          <Reveal>
            <div className="eyebrow">
              <span className="eyebrow-line"></span>
              THE BACKBONE OF THE PACK
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1>
              PACKAGING
              <span>DEVELOPMENT</span>
              <span>CONSULTANCY</span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="hero-bottom">
              <div>
                <p className="hero-subtitle">
                  From Concept to Commercialisation.
                </p>

                <p className="hero-description">
                  We develop, optimise, validate and commercialise packaging
                  solutions built for the real world.
                </p>
              </div>

              <div className="hero-actions">
                <Link to="/services" className="btn btn-primary">
                  Explore Services
                  <ArrowRight size={18} />
                </Link>

                <Link to="/contact" className="btn btn-outline">
                  Start a Project
                  <ArrowUpRight size={18} />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal direction="left" delay={0.25} className="hero-visual">
          <div className="package-visual">
            <div className="package-shadow"></div>

            <div className="package-box">
              <div className="box-front">
                <div className="box-logo">PB</div>

                <div className="box-line"></div>

                <strong>
                  PACK
                  <br />
                  BONE
                </strong>

                <small>PACKAGING SOLUTIONS</small>
              </div>

              <div className="box-side"></div>

              <div className="box-top"></div>
            </div>

            <div className="technical-dimension dimension-width">
              <span></span>
              120 mm
              <span></span>
            </div>

            <div className="technical-dimension dimension-height">
              <span></span>
              180 mm
              <span></span>
            </div>

            <div className="visual-crosshair crosshair-1"></div>

            <div className="visual-crosshair crosshair-2"></div>

            <div className="visual-circle"></div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* =========================================================
   CAPABILITY
========================================================= */

function CapabilityStrip() {
  const items = [
    "CONCEPT",
    "MATERIAL",
    "SUPPLIER",
    "TRIAL",
    "VALIDATION",
    "PRODUCTION",
  ];

  return (
    <section className="capability-strip">
      <div className="container">
        <div className="capability-label">END-TO-END EXPERTISE</div>

        <div className="capability-flow">
          {items.map((item, index) => (
            <div className="flow-item" key={item}>
              <span>{item}</span>

              {index !== items.length - 1 && <ArrowRight size={16} />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   PROBLEM SOLUTION
========================================================= */

const problems = [
  ["01", "LEAKAGE", "Root-cause investigation & seal optimisation"],
  ["02", "HIGH PACKAGING COST", "Value engineering & material optimisation"],
  ["03", "SELECTION OF VENDORS", "Vendor qualification & alternate sourcing"],
  ["04", "MACHINE COMPATIBILITY", "Filling, packing & automation trials"],
  ["05", "TRANSIT DAMAGE", "Transit evaluation & configuration optimisation"],
  [
    "06",
    "QUALITY FAILURES",
    "Failure investigation & permanent corrective action",
  ],
];

function ProblemSolution() {
  return (
    <section className="problem-section section">
      <div className="container">
        <div className="section-intro">
          <div>
            <div className="eyebrow dark-eyebrow">
              <span className="eyebrow-line"></span>
              WHAT WE SOLVE
            </div>

            <h2>
              PACKAGING PROBLEM
              <span>→ PERMANENT SOLUTION</span>
            </h2>
          </div>

          <p>
            Packaging challenges rarely have a single cause. We look across
            materials, components, suppliers, machines, processes and the supply
            chain to identify practical solutions.
          </p>
        </div>

        {/* <div className="problem-grid">

          {problems.map(([number, problem, solution]) => (

            <div
              className="problem-card"
              key={number}
            >

              <div className="problem-number">
                {number}
              </div>

              <div className="problem-content">

                <h3>{problem}</h3>

                <div className="solution">
                  <ArrowRight size={16} />
                  <span>{solution}</span>
                </div>

              </div>

              <ArrowUpRight
                className="problem-arrow"
                size={20}
              />

            </div>

          ))}

        </div> */}
        <div className="problem-grid">
          {problems.map(([number, problem, solution], index) => (
            <Reveal key={number} delay={index * 0.07}>
              <div className="problem-card">
                <div className="problem-number">{number}</div>

                <div className="problem-content">
                  <h3>{problem}</h3>

                  <div className="solution">
                    <ArrowRight size={16} />

                    <span>{solution}</span>
                  </div>
                </div>

                <ArrowUpRight className="problem-arrow" size={20} />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   SERVICES PREVIEW
========================================================= */

const servicePreview = [
  ["01", "End-to-End Packaging Development", Package, "packaging-development"],
  ["02", "New Product Development", Layers3, "new-product-development"],
  ["03", "Vendor Development", Factory, "vendor-development"],
  ["04", "Cost & Value Engineering", Zap, "cost-value-engineering"],
  ["05", "Quality Improvement", ShieldCheck, "quality-improvement"],
  ["06", "Machinery & Automation", Settings2, "machinery-automation"],
  ["07", "Turnkey Packaging Projects", Truck, "turnkey-packaging-projects"],
  ["08", "Packaging Testing & Validation", FlaskConical, "testing-validation"],
  ["09", "Transit & Trials Packaging Performance", Activity, "transit-trials-packaging-performance"],
  ["10", "Packaging Validation", Check, "packaging-validation"],
  ["11", "Logistics & Container Optimisation", Truck, "logistics-container-optimisation"],
  ["12", "Artwork & Packaging Graphics Development", Package, "artwork-packaging-graphics-development"],
  ["13", "Packaging Specification Development", Layers3, "packaging-specification-development"],
  ["14", "Packaging Failure Investigation", Factory, "packaging-failure-investigation"],
  ["15", "Competitive Packaging Benchmarking", Zap, "competitive-packaging-benchmarking"],
  ["16", "Packaging Sustainability", ShieldCheck, "packaging-sustainability"],
  ["17", "Packaging Procurement Technical Support", Settings2, "packaging-procurement-technical-support"],
  ["18", "Packaging Project Management", Truck, "packaging-project-management"],
];

function ServicesPreview() {
  return (
    <section className="services-section section">
      <div className="container">
        <div className="services-heading">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-line"></span>
              OUR CAPABILITIES
            </div>

            <h2>
              BUILT AROUND
              <span>THE COMPLETE PACKAGING LIFECYCLE.</span>
            </h2>
          </div>

          <p>
            Technical expertise, supplier development, manufacturing
            understanding and commercial thinking — connected under one project
            framework.
          </p>
        </div>

        <div className="services-grid">
          {servicePreview.map(([number, title, Icon, slug], index) => (
            <Reveal key={number} delay={index * 0.06}>
              <Link to={`/services#${slug}`} className="service-card">
                <div className="service-top">
                  <span>{number}</span>

                  <Icon size={24} strokeWidth={1.4} />
                </div>

                <div className="service-body">
                  <h3>{title}</h3>

                  <p>
                    Practical packaging solutions designed for performance,
                    manufacturing and commercial requirements.
                  </p>
                </div>

                <div className="service-link">
                  Explore
                  <ArrowUpRight size={17} />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="services-more">
          <span>18 SPECIALISED SERVICES</span>

          <Link to="/services">
            View All Services
            <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   APPROACH PREVIEW
========================================================= */

function ApproachPreview() {
  const steps = [
    "UNDERSTAND",
    "DEFINE",
    "DEVELOP",
    "TEST",
    "VALIDATE",
    "OPTIMISE",
    "COMMERCIALISE",
    "IMPROVE",
  ];

  return (
    <section className="approach-section section">
      <div className="container">
        <div className="approach-header">
          <div className="eyebrow">
            <span className="eyebrow-line"></span>
            OUR APPROACH
          </div>

          <h2>
            FROM IDEA
            <span>TO PRODUCTION.</span>
          </h2>

          <p>
            A structured process designed to move packaging from concept to
            validated, commercially viable production.
          </p>
        </div>

        <div className="approach-list">
          {steps.map((step, index) => (
            <div className="approach-item" key={step}>
              <div className="approach-number">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="approach-title">
                <h3>{step}</h3>
              </div>

              <div className="approach-description">
                <p>
                  Packaging development stage focused on moving the project
                  towards the next milestone.
                </p>
              </div>

              {/* <div className="approach-icon">
                {index === 7 ? <Check size={18} /> : <ArrowRight size={18} />}
              </div> */}
            </div>
          ))}
        </div>

        <div className="services-more">
          <span>OUR PROCESS</span>

          <Link to="/approach">
            Explore Our Approach
            <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   HOME
========================================================= */

function Home() {
  return (
    <>
      <Hero />

      <CapabilityStrip />

      <Marquee />

      {/* <ProblemSolution /> */}

      <ApproachPreview />

      <ServicesPreview />

      <section className="home-transition">
        <div className="container">
          <p>
            PACKAGING ENGINEERING
            <span>×</span>
            COMMERCIAL THINKING
          </p>
        </div>
      </section>
    </>
  );
}

export default Home;
