import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

import PageMeta from "../components/PageMeta";
import Reveal from "../components/Reveal";
import industries from "../data/industries";

function Industries() {
  const navigate = useNavigate();

  return (
    <div className="inner-page industries-page">
      <PageMeta title="Industries" />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="inner-hero industries-hero">
        <div className="container">

          <Reveal>
            <div className="eyebrow">
              <span className="eyebrow-line"></span>
              INDUSTRIES
            </div>

            <h1>
              PACKAGING
              <span>ACROSS CATEGORIES.</span>
            </h1>

            <p>
              Packaging development expertise applied
              across consumer-product industries.
            </p>
          </Reveal>

        </div>
      </section>


      {/* =====================================================
          INDUSTRIES
      ===================================================== */}

      <section className="industries-section section">
        <div className="container">

          <Reveal>
            <div className="industries-header">

              <div className="eyebrow">
                <span className="eyebrow-line"></span>
                INDUSTRIES WE SERVE
              </div>

              <h2>
                BUILT FOR
                <span>REAL PRODUCTS.</span>
              </h2>

            </div>
          </Reveal>


          <div className="industries-grid">

            {industries.map((industry, index) => (

              <Reveal
                key={industry.slug}
                delay={index * 0.06}
              >

                <article
                  className="industry-card"
                  style={{
                    "--industry-image": `url("${industry.image}")`,
                  }}
                  onClick={() =>
                    navigate(`/industries/${industry.slug}`)
                  }
                  role="button"
                  tabIndex={0}
                  onKeyDown={(event) => {
                    if (
                      event.key === "Enter" ||
                      event.key === " "
                    ) {
                      navigate(
                        `/industries/${industry.slug}`
                      );
                    }
                  }}
                >

                  <div className="industry-overlay"></div>

                  <div className="industry-card-content">

                    <span className="industry-number">
                      {industry.number}
                    </span>

                    <h3>
                      {industry.name}
                    </h3>

                    <div className="industry-arrow">
                      <ArrowUpRight size={20} />
                    </div>

                  </div>

                </article>

              </Reveal>

            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          STATEMENT
      ===================================================== */}

      <section className="industries-statement section">

        <div className="container">

          <Reveal>

            <div className="industries-statement-inner">

              <div className="eyebrow">
                <span className="eyebrow-line"></span>
                ONE PACKAGING PARTNER
              </div>

              <h2>
                DIFFERENT
                <span>PRODUCTS.</span>
                <br />
                SAME
                <span>EXPERTISE.</span>
              </h2>

              <p>
                From everyday consumer products to
                regulated healthcare packaging and export
                applications, our approach adapts to the
                product, process and commercial requirement.
              </p>

            </div>

          </Reveal>

        </div>

      </section>

    </div>
  );
}

export default Industries;