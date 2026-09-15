import { useState, useEffect } from "react";
import Reveal from "../components/Reveal";

import {
  ArrowRight,
  ArrowUpRight,
  Check,
} from "lucide-react";

import { Link } from "react-router-dom";

import { services } from "../data/services";
import PageMeta from "../components/PageMeta";

function Services() {
  const [activeService, setActiveService] = useState(null);

  /*
   * =========================================================
   * OPEN SERVICE FROM URL HASH
   * Example:
   * /services#testing-validation
   * =========================================================
   */

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");

    if (!hash) return;

    const service = services.find(
      (item) => item.slug === hash
    );

    if (!service) return;

    setActiveService(service.number);

    setTimeout(() => {
      const element = document.getElementById(hash);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    }, 300);

  }, []);


  /*
   * =========================================================
   * HANDLE MANUAL HASH CHANGES
   * =========================================================
   */

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");

      if (!hash) {
        setActiveService(null);
        return;
      }

      const service = services.find(
        (item) => item.slug === hash
      );

      if (!service) return;

      setActiveService(service.number);

      setTimeout(() => {
        const element =
          document.getElementById(hash);

        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        }
      }, 100);
    };

    window.addEventListener(
      "hashchange",
      handleHashChange
    );

    return () => {
      window.removeEventListener(
        "hashchange",
        handleHashChange
      );
    };
  }, []);


  /*
   * =========================================================
   * SERVICE CLICK
   * =========================================================
   */

  const handleServiceClick = (service) => {
    const isCurrentlyActive =
      activeService === service.number;

    setActiveService(
      isCurrentlyActive
        ? null
        : service.number
    );

    // Update URL hash
    if (!isCurrentlyActive) {
      window.history.replaceState(
        null,
        "",
        `#${service.slug}`
      );
    } else {
      window.history.replaceState(
        null,
        "",
        window.location.pathname
      );
    }
  };


  return (
    <div className="inner-page services-page">

      <PageMeta title="Services" />


      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="inner-hero">

        <div className="container">

          <div className="eyebrow">
            <span className="eyebrow-line"></span>
            OUR SERVICES
          </div>

          <h1>
            PACKAGING
            <span>EXPERTISE.</span>
          </h1>

          <p>
            End-to-end packaging development,
            optimisation, testing, validation and
            commercialisation support.
          </p>

        </div>

      </section>


      {/* =====================================================
          SERVICES
      ===================================================== */}

      <section className="all-services section">

        <div className="container">

          <div className="services-intro">

            <span>
              18 SPECIALISED CAPABILITIES
            </span>

            <p>
              From concept development to commercial
              production, our services cover the
              complete packaging lifecycle.
            </p>

          </div>


          <div className="service-list">

            {services.map((service, index) => {

              const isActive =
                activeService === service.number;

              return (
                <Reveal
                  key={service.number}
                  delay={index * 0.025}
                >

                  <article
                    id={service.slug}
                    className={`large-service-card ${
                      isActive ? "active" : ""
                    }`}
                    onClick={() =>
                      handleServiceClick(service)
                    }
                  >

                    {/* NUMBER */}

                    <div className="large-service-number">
                      {service.number}
                    </div>


                    {/* MAIN CONTENT */}

                    <div className="large-service-main">

                      <div className="large-service-meta">
                        {service.category}
                      </div>

                      <h2>
                        {service.title}
                      </h2>

                      <p className="large-service-description">
                        {service.description}
                      </p>


                      {/* POINTS */}

                      <div
                        className={`service-points ${
                          isActive
                            ? "show-points"
                            : ""
                        }`}
                      >

                        {service.points.map(
                          (point) => (

                            <div
                              className="service-point"
                              key={point}
                            >

                              <Check size={14} />

                              <span>
                                {point}
                              </span>

                            </div>

                          )
                        )}

                      </div>

                    </div>


                    {/* ARROW */}

                    <div className="large-service-arrow">

                      <ArrowUpRight
                        size={23}
                      />

                    </div>

                  </article>

                </Reveal>
              );
            })}

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="inner-cta">

        <div className="container">

          <div className="eyebrow">
            <span className="eyebrow-line"></span>
            HAVE A PACKAGING CHALLENGE?
          </div>

          <h2>
            LET'S FIND
            <span>THE SOLUTION.</span>
          </h2>

          <Link
            to="/contact"
            className="cta-button"
          >
            TALK TO US

            <ArrowRight size={19} />
          </Link>

        </div>

      </section>

    </div>
  );
}

export default Services;