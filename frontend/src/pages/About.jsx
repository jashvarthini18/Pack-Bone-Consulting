import {
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

import PageMeta from "../components/PageMeta";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="inner-page">
      <PageMeta title="About" />

      <section className="inner-hero">

        <div className="container">

          <div className="eyebrow">
            <span className="eyebrow-line"></span>
            ABOUT packbone
          </div>

          <h1>
            EXPERIENCE
            <span>THAT DELIVERS.</span>
          </h1>

          <p>
            Practical packaging expertise built around
            real manufacturing, commercial and
            supply-chain requirements.
          </p>

        </div>

      </section>


      <section className="about-section section">

        <div className="container">

          <div className="about-grid">

            <div className="about-visual">

              <div className="about-frame">

                <div className="about-grid-lines"></div>

                <div className="about-initials">
  <img
    src="./pack-bone-logo-with-name.png"
    alt="packbone Consulting"
  />
</div>

                <div className="about-caption">
                  <span>PACKAGING</span>
                  <span>
                    STRATEGY / ENGINEERING
                  </span>
                </div>

              </div>

            </div>


            <div className="about-content">

              <div className="eyebrow dark-eyebrow">
                <span className="eyebrow-line"></span>
                ABOUT THE CONSULTANT
              </div>

              <h2>
                EXPERIENCE THAT
                <span>
                  UNDERSTANDS THE REAL WORLD.
                </span>
              </h2>

              <p className="about-lead">
                Packaging Development Professional |
                Packaging Strategist |
                Project & Cost Optimisation Specialist
              </p>

              <p>
                With extensive hands-on experience in
                packaging development, new product
                development, supplier development,
                packaging optimisation, quality
                improvement, testing, validation,
                manufacturing trials and
                commercialisation, we provide practical
                packaging solutions built around real
                business and manufacturing requirements.
              </p>

              <p>
                We work at the intersection of Packaging,
                R&D, Marketing, Procurement, Quality,
                Manufacturing, Engineering and Supply
                Chain.
              </p>

              <Link
                to="/contact"
                className="text-link"
              >
                Work With Us
                <ArrowRight size={18} />
              </Link>

            </div>

          </div>

        </div>

      </section>


      <section className="about-principle">

        <div className="container">

          <div className="principle-mark">
  <img src="./pack-bone-logo.png" alt="Packbone" />
</div>

          <blockquote>
            “Packaging should not only look right.
            It must perform right, run right, cost
            right and reach the consumer right.”
          </blockquote>

        </div>

      </section>

    </div>
  );
}

export default About;