import { useState } from "react";
import {
  ArrowUpRight,
  CheckCircle2,
  Factory,
  Package,
  ShieldCheck,
  Truck,
  Settings2,
  TrendingDown,
} from "lucide-react";

import Reveal from "../components/Reveal";
import PageMeta from "../components/PageMeta";
import { Link } from "react-router-dom";

const projects = [
  {
    id: "failure-mode-effect-analysis",
    number: "01",
    category: "QUALITY & RISK ANALYSIS",
    title: "Failure Mode Effect Analysis",
    description:
      "A structured approach to identify potential packaging failure modes, understand their effects and prioritise risks before they become recurring problems.",
    icon: ShieldCheck,
    problem:
      "Potential packaging failure modes can affect product quality, manufacturing performance, customer experience and overall reliability.",
    solution:
      "Systematically identify failure modes, evaluate their effects and causes, assess associated risks and prioritise appropriate preventive or corrective actions.",
    outcome: [
      "Potential failure mode identification",
      "Risk prioritisation",
      "Preventive action planning",
      "Improved packaging reliability",
    ],
  },
  {
    id: "material-reduction",
    number: "02",
    category: "Cost Saving",
    title: "Material Reduction",
    description:
      "Optimising packaging material without compromising functionality, quality or manufacturing performance.",
    icon: TrendingDown,
    problem:
      "Packaging material usage is higher than necessary, increasing overall pack cost.",
    solution:
      "Evaluate material structure, specifications, dimensions, performance requirements and manufacturing constraints.",
    outcome: [
      "Optimised material usage",
      "Lower packaging cost",
      "Maintained functional performance",
      "Improved material efficiency",
    ],
  },
  {
    id: "alternate-vendor",
    number: "03",
    category: "Vendor Development",
    title: "Alternate Vendor Development",
    description:
      "Developing technically suitable alternate suppliers to improve sourcing flexibility and commercial competitiveness.",
    icon: Factory,
    problem: "Dependence on a single supplier or limited vendor capability.",
    solution:
      "Define technical requirements, identify suitable vendors, coordinate development and conduct validation before commercial implementation.",
    outcome: [
      "Alternate supplier development",
      "Technical supplier evaluation",
      "Improved sourcing flexibility",
      "Commercial competitiveness",
    ],
  },
  {
    id: "machine-compatibility",
    number: "04",
    category: "Automation",
    title: "Machine Compatibility",
    description:
      "Packaging must work not only as a product, but also as part of the manufacturing process.",
    icon: Settings2,
    problem:
      "Packaging components do not perform consistently on existing machinery or automated lines.",
    solution:
      "Evaluate pack geometry, material behaviour, machine settings and process interaction to improve machine compatibility.",
    outcome: [
      "Improved machine performance",
      "Reduced line interruptions",
      "Better packaging-machine interaction",
      "Production-ready packaging",
    ],
  },
  {
    id: "transit-damage",
    number: "05",
    category: "Logistics",
    title: "Transit Damage Reduction",
    description:
      "Packaging performance must extend beyond the production line and protect the product throughout distribution.",
    icon: Truck,
    problem:
      "Product or packaging damage occurring during transportation and handling.",
    solution:
      "Assess packaging configuration, protection levels, loading conditions and logistics requirements to improve transit performance.",
    outcome: [
      "Improved transit protection",
      "Reduced damage risk",
      "Better pack configuration",
      "Improved logistics performance",
    ],
  },
  {
    id: "pack-optimisation",
    number: "06",
    category: "Packaging Optimisation",
    title: "Pack Optimisation",
    description:
      "Balancing packaging performance, cost, manufacturing requirements and logistics efficiency.",
    icon: Package,
    problem:
      "Existing packaging does not provide the right balance between cost, performance and operational requirements.",
    solution:
      "Review the complete packaging system and identify opportunities for structural, material, process and logistics optimisation.",
    outcome: [
      "Optimised packaging system",
      "Improved cost-performance balance",
      "Better operational efficiency",
      "Long-term packaging improvement",
    ],
  },
];

function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <main className="projects-page">
      <PageMeta title="Projects" />
      {/* PAGE HERO */}
      <section className="inner-hero">
        <div className="container">
          <Reveal>
            <span className="eyebrow">PROJECTS / CASE STUDIES</span>

            <h1>
              PACKAGING PROBLEM
              <span> → PERMANENT SOLUTION.</span>
            </h1>

            <p>
              Real packaging challenges require more than temporary fixes. We
              approach problems from technical, manufacturing, supplier,
              quality, cost and logistics perspectives to develop practical
              solutions.
            </p>
          </Reveal>
        </div>
      </section>

      {/* INTRO */}
      <section className="section projects-intro">
        <div className="container projects-intro-grid">
          <Reveal direction="left">
            <div>
              <span className="section-kicker">HOW WE THINK</span>
              <h2>
                Fix the problem.
                <br />
                <span>Improve the system.</span>
              </h2>
            </div>
          </Reveal>

          <Reveal direction="right">
            <div className="projects-intro-copy">
              <p>
                Packaging challenges rarely exist in isolation. A leakage
                problem may involve material, sealing, machinery or process
                conditions. A cost issue may involve specifications, vendors,
                material selection or logistics.
              </p>

              <p>
                Our approach is to understand the complete system, identify the
                root cause and implement a solution that can work in real
                manufacturing conditions.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PROJECT GRID */}
      <section className="section projects-section">
        <div className="container">
          <Reveal>
            <div className="section-heading">
              <div>
                <span className="section-kicker">SELECTED CHALLENGES</span>
                <h2>What we solve.</h2>
              </div>

              <p>
                From packaging failures to cost and operational challenges, our
                work covers the complete packaging lifecycle.
              </p>
            </div>
          </Reveal>

          <div className="projects-grid">
            {projects.map((project, index) => {
              const Icon = project.icon;

              return (
                <Reveal key={project.id} delay={index * 0.08}>
                  <article
                    className={`project-card ${
                      activeProject === project.id ? "active" : ""
                    }`}
                    onClick={() =>
                      setActiveProject(
                        activeProject === project.id ? null : project.id,
                      )
                    }
                  >
                    <div className="project-card-top">
                      <span className="project-number">{project.number}</span>

                      <div className="project-icon">
                        <Icon size={22} strokeWidth={1.5} />
                      </div>
                    </div>

                    <span className="project-category">{project.category}</span>

                    <h3>{project.title}</h3>

                    <p>{project.description}</p>

                    <div className="project-card-action">
                      <span>
                        {activeProject === project.id
                          ? "Close case study"
                          : "View case study"}
                      </span>

                      <ArrowUpRight
                        size={18}
                        className={
                          activeProject === project.id ? "rotated" : ""
                        }
                      />
                    </div>

                    {activeProject === project.id && (
                      <div className="project-details">
                        <div>
                          <span>THE PROBLEM</span>
                          <p>{project.problem}</p>
                        </div>

                        <div>
                          <span>THE APPROACH</span>
                          <p>{project.solution}</p>
                        </div>

                        <div>
                          <span>KEY OUTCOMES</span>

                          <ul>
                            {project.outcome.map((item) => (
                              <li key={item}>
                                <CheckCircle2 size={15} />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section projects-process">
        <div className="container">
          <Reveal>
            <div className="projects-process-box">
              <div className="projects-process-content">
                <span className="section-kicker">THE OBJECTIVE</span>

                <h2>
                  Don't just solve
                  <br />
                  <span>today's problem.</span>
                </h2>

                <p>
                  Build a packaging solution that performs reliably,
                  commercially and operationally over the long term.
                </p>
              </div>

              <div className="projects-process-steps">
                <div>
                  <strong>01</strong>
                  <span>Understand</span>
                </div>

                <div>
                  <strong>02</strong>
                  <span>Identify</span>
                </div>

                <div>
                  <strong>03</strong>
                  <span>Develop</span>
                </div>

                <div>
                  <strong>04</strong>
                  <span>Validate</span>
                </div>

                <div>
                  <strong>05</strong>
                  <span>Optimise</span>
                </div>

                <div>
                  <strong>06</strong>
                  <span>Commercialise</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section projects-cta">
        <div className="container">
          <Reveal>
            <div className="cta-panel">
              <span className="eyebrow">HAVE A PACKAGING CHALLENGE?</span>

              <h2>
                Let's solve the
                <span> real problem.</span>
              </h2>

              <p>
                Tell us what is happening with your packaging. We can start from
                the problem and work towards a practical solution.
              </p>

              {/* <a href="/contact" className="btn btn-primary">
                Discuss a Project
                <ArrowUpRight size={18} />
              </a> */}
              <Link to="/contact" className="btn btn-primary">
                Discuss a Project
                <ArrowUpRight size={18} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

export default Projects;
