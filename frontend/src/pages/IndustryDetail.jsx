// import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";

// import { Link, useParams } from "react-router-dom";

// import BreadcrumbSchema from "../components/BreadcrumbSchema";
// import PageMeta from "../components/PageMeta";
// import Reveal from "../components/Reveal";

// import industries from "../data/industries";

// function IndustryDetail() {
//   const { slug } = useParams();

//   const industry = industries.find((item) => item.slug === slug);

//   if (!industry) {
//     return (
//       <main className="industry-not-found">
//         <div className="container">
//           <span className="eyebrow">INDUSTRY NOT FOUND</span>

//           <h1>
//             This industry
//             <span> doesn't exist.</span>
//           </h1>

//           <Link to="/industries" className="btn btn-primary">
//             <ArrowLeft size={17} />
//             Back to Industries
//           </Link>
//         </div>
//       </main>
//     );
//   }
//   <BreadcrumbSchema
//     items={[
//       {
//         name: "Home",
//         url: "https://packboneconsulting.netlify.app/",
//       },
//       {
//         name: "Industries",
//         url: "https://packboneconsulting.netlify.app/industries",
//       },
//       {
//         name: industry.name,
//         url: `https://packboneconsulting.netlify.app/industries/${industry.slug}`,
//       },
//     ]}
//   />;

//   return (
//     <div className="industry-detail-page">
//       <PageMeta title={industry.name} />

//       {/* =====================================================
//           HERO
//       ===================================================== */}

//       <section
//         className="industry-detail-hero"
//         style={{
//           "--detail-image": `url("${industry.image}")`,
//         }}
//       >
//         <div className="industry-detail-overlay"></div>

//         <div className="container">
//           <Reveal>
//             <Link to="/industries" className="industry-back">
//               <ArrowLeft size={16} />
//               All Industries
//             </Link>

//             <div className="industry-detail-meta">
//               <span>{industry.number}</span>

//               <span>INDUSTRY</span>
//             </div>

//             <h1>{industry.name}</h1>

//             <p>{industry.description}</p>
//           </Reveal>
//         </div>
//       </section>

//       {/* =====================================================
//           OVERVIEW
//       ===================================================== */}

//       <section className="industry-detail-overview section">
//         <div className="container">
//           <div className="industry-detail-grid">
//             <Reveal direction="left">
//               <div>
//                 <span className="section-kicker">PACKAGING FOCUS</span>

//                 <h2>
//                   Packaging built around
//                   <span> performance.</span>
//                 </h2>
//               </div>
//             </Reveal>

//             <Reveal direction="right">
//               <div className="industry-detail-copy">
//                 <p>
//                   Packaging requirements can vary significantly between product
//                   categories. Our approach considers the product, packaging
//                   system, manufacturing process, supplier capability, logistics
//                   and commercial objectives.
//                 </p>

//                 <p>
//                   The objective is to develop packaging that is practical to
//                   manufacture, reliable in use and aligned with the overall
//                   business requirement.
//                 </p>
//               </div>
//             </Reveal>
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           KEY FOCUS
//       ===================================================== */}

//       <section className="industry-focus section">
//         <div className="container">
//           <Reveal>
//             <div className="industry-section-heading">
//               <div>
//                 <span className="section-kicker">KEY CONSIDERATIONS</span>

//                 <h2>
//                   What we
//                   <span> focus on.</span>
//                 </h2>
//               </div>
//             </div>
//           </Reveal>

//           <div className="industry-focus-grid">
//             {industry.focus.map((item, index) => (
//               <Reveal key={item} delay={index * 0.05}>
//                 <div className="industry-focus-card">
//                   <span>{String(index + 1).padStart(2, "0")}</span>

//                   <Check size={17} />

//                   <h3>{item}</h3>
//                 </div>
//               </Reveal>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           SERVICES
//       ===================================================== */}

//       <section className="industry-services section">
//         <div className="container">
//           <Reveal>
//             <div className="industry-section-heading">
//               <div>
//                 <span className="section-kicker">RELEVANT CAPABILITIES</span>

//                 <h2>
//                   How we can
//                   <span> help.</span>
//                 </h2>
//               </div>
//             </div>
//           </Reveal>

//           <div className="industry-services-list">
//             {industry.services.map((service, index) => (
//               <Reveal key={service} delay={index * 0.05}>
//                 <div className="industry-service-row">
//                   <span className="industry-service-number">
//                     {String(index + 1).padStart(2, "0")}
//                   </span>

//                   <h3>{service}</h3>

//                   <ArrowUpRight size={18} />
//                 </div>
//               </Reveal>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           CTA
//       ===================================================== */}

//       <section className="industry-detail-cta section">
//         <div className="container">
//           <Reveal>
//             <div className="industry-detail-cta-box">
//               <span className="eyebrow">PACKAGING DEVELOPMENT</span>

//               <h2>
//                 Have a<span> packaging challenge?</span>
//               </h2>

//               <p>
//                 Let's discuss your product, packaging requirements and
//                 development objectives.
//               </p>

//               <Link to="/contact" className="btn btn-primary">
//                 Discuss a Project
//                 <ArrowUpRight size={18} />
//               </Link>
//             </div>
//           </Reveal>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default IndustryDetail;
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import { Link, useParams } from "react-router-dom";

import BreadcrumbSchema from "../components/BreadcrumbSchema";
import PageMeta from "../components/PageMeta";
import Reveal from "../components/Reveal";

import industries from "../data/industries";

function IndustryDetail() {
  const { slug } = useParams();

  const industry = industries.find((item) => item.slug === slug);

  // =====================================================
  // INVALID INDUSTRY
  // =====================================================

  if (!industry) {
    return (
      <main className="industry-not-found">
        <PageMeta
          title="Industry Not Found"
          description="The requested industry page could not be found."
          noindex
        />

        <div className="container">
          <span className="eyebrow">INDUSTRY NOT FOUND</span>

          <h1>
            This industry
            <span> doesn't exist.</span>
          </h1>

          <Link to="/industries" className="btn btn-primary">
            <ArrowLeft size={17} />
            Back to Industries
          </Link>
        </div>
      </main>
    );
  }

  // =====================================================
  // DYNAMIC SEO
  // =====================================================

  const pageTitle = `${industry.name} Packaging Solutions`;

  const pageDescription = `${industry.description} Packbone Consulting provides packaging development consultancy, optimisation, testing, validation and project support for ${industry.name.toLowerCase()} products.`;

  const canonicalUrl = `https://packboneconsulting.netlify.app/industries/${industry.slug}`;

  return (
    <div className="industry-detail-page">

      {/* =====================================================
          SEO
      ===================================================== */}

      <PageMeta
        title={pageTitle}
        description={pageDescription}
      />

      {/* =====================================================
          BREADCRUMB STRUCTURED DATA
      ===================================================== */}

      <BreadcrumbSchema
        items={[
          {
            name: "Home",
            url: "https://packboneconsulting.netlify.app/",
          },
          {
            name: "Industries",
            url: "https://packboneconsulting.netlify.app/industries",
          },
          {
            name: industry.name,
            url: canonicalUrl,
          },
        ]}
      />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className="industry-detail-hero"
        style={{
          "--detail-image": `url("${industry.image}")`,
        }}
      >
        <div className="industry-detail-overlay"></div>

        <div className="container">
          <Reveal>
            <Link to="/industries" className="industry-back">
              <ArrowLeft size={16} />
              All Industries
            </Link>

            <div className="industry-detail-meta">
              <span>{industry.number}</span>
              <span>INDUSTRY</span>
            </div>

            <h1>{industry.name}</h1>

            <p>{industry.description}</p>
          </Reveal>
        </div>
      </section>

      {/* =====================================================
          OVERVIEW
      ===================================================== */}

      <section className="industry-detail-overview section">
        <div className="container">
          <div className="industry-detail-grid">
            <Reveal direction="left">
              <div>
                <span className="section-kicker">
                  PACKAGING FOCUS
                </span>

                <h2>
                  Packaging built around
                  <span> performance.</span>
                </h2>
              </div>
            </Reveal>

            <Reveal direction="right">
              <div className="industry-detail-copy">
                <p>
                  Packaging requirements can vary significantly between
                  product categories. Our approach considers the product,
                  packaging system, manufacturing process, supplier
                  capability, logistics and commercial objectives.
                </p>

                <p>
                  The objective is to develop packaging that is practical
                  to manufacture, reliable in use and aligned with the
                  overall business requirement.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =====================================================
          KEY FOCUS
      ===================================================== */}

      <section className="industry-focus section">
        <div className="container">
          <Reveal>
            <div className="industry-section-heading">
              <div>
                <span className="section-kicker">
                  KEY CONSIDERATIONS
                </span>

                <h2>
                  What we
                  <span> focus on.</span>
                </h2>
              </div>
            </div>
          </Reveal>

          <div className="industry-focus-grid">
            {industry.focus.map((item, index) => (
              <Reveal key={item} delay={index * 0.05}>
                <div className="industry-focus-card">
                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <Check size={17} />

                  <h3>{item}</h3>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          SERVICES
      ===================================================== */}

      <section className="industry-services section">
        <div className="container">
          <Reveal>
            <div className="industry-section-heading">
              <div>
                <span className="section-kicker">
                  RELEVANT CAPABILITIES
                </span>

                <h2>
                  How we can
                  <span> help.</span>
                </h2>
              </div>
            </div>
          </Reveal>

          <div className="industry-services-list">
            {industry.services.map((service, index) => (
              <Reveal key={service} delay={index * 0.05}>
                <div className="industry-service-row">
                  <span className="industry-service-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3>{service}</h3>

                  <ArrowUpRight size={18} />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="industry-detail-cta section">
        <div className="container">
          <Reveal>
            <div className="industry-detail-cta-box">
              <span className="eyebrow">
                PACKAGING DEVELOPMENT
              </span>

              <h2>
                Have a<span> packaging challenge?</span>
              </h2>

              <p>
                Let's discuss your product, packaging requirements
                and development objectives.
              </p>

              <Link to="/contact" className="btn btn-primary">
                Discuss a Project
                <ArrowUpRight size={18} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

export default IndustryDetail;