import {
  ArrowRight,
  Check,
  ChevronDown,
} from "lucide-react";

import { useState } from "react";
import PageMeta from "../components/PageMeta";

const steps = [
  {
    number: "01",
    title: "UNDERSTAND",
    text:
      "Understand the product, consumer requirement, business objective and existing challenges.",
    details:
      "The first step is to understand the complete requirement before development begins. This includes the product, consumer expectations, business objectives and the existing packaging challenges.",
    focus: [
      "Product requirements",
      "Consumer requirements",
      "Business objectives",
      "Existing packaging challenges",
    ],
  },

  {
    number: "02",
    title: "DEFINE",
    text:
      "Establish packaging requirements, specifications, performance criteria and cost targets.",
    details:
      "Once the requirement is understood, clear packaging requirements are established. Specifications, performance expectations and commercial targets provide the foundation for development.",
    focus: [
      "Packaging requirements",
      "Technical specifications",
      "Performance criteria",
      "Cost targets",
    ],
  },

  {
    number: "03",
    title: "DEVELOP",
    text:
      "Develop materials, components, suppliers, tools and packaging formats.",
    details:
      "Packaging solutions are developed around the defined requirements. This can involve material selection, component development, supplier involvement, tooling and packaging format development.",
    focus: [
      "Material development",
      "Component development",
      "Supplier development",
      "Packaging formats",
    ],
  },

  {
    number: "04",
    title: "TEST",
    text:
      "Conduct laboratory, machine, filling, packing, transit and performance trials.",
    details:
      "The developed packaging is evaluated through appropriate testing and trials. Testing helps identify technical issues and confirms whether the packaging performs under relevant conditions.",
    focus: [
      "Laboratory testing",
      "Machine trials",
      "Filling and packing trials",
      "Transit and performance trials",
    ],
  },

  {
    number: "05",
    title: "VALIDATE",
    text:
      "Verify packaging performance and production compatibility.",
    details:
      "Validation confirms that the packaging meets the required performance expectations and works effectively within the intended production environment.",
    focus: [
      "Packaging performance",
      "Production compatibility",
      "Process verification",
      "Performance validation",
    ],
  },

  {
    number: "06",
    title: "OPTIMISE",
    text:
      "Improve quality, cost, functionality, logistics and manufacturing efficiency.",
    details:
      "After validation, opportunities for improvement are identified across the packaging system. The objective is to achieve the right balance between quality, cost, functionality, logistics and manufacturing efficiency.",
    focus: [
      "Quality improvement",
      "Cost optimisation",
      "Functional improvement",
      "Manufacturing efficiency",
    ],
  },

  {
    number: "07",
    title: "COMMERCIALISE",
    text:
      "Support the transition from development to successful commercial production.",
    details:
      "The validated packaging solution is transitioned into commercial production. The focus is on supporting implementation and ensuring that the developed solution can move successfully into regular manufacturing.",
    focus: [
      "Production implementation",
      "Commercial readiness",
      "Supplier coordination",
      "Manufacturing transition",
    ],
  },

  {
    number: "08",
    title: "IMPROVE",
    text:
      "Continue monitoring and identify opportunities for further cost, quality and process improvement.",
    details:
      "Packaging development continues even after commercialisation. Ongoing improvement identifies opportunities to further enhance cost, quality, performance and process efficiency.",
    focus: [
      "Continuous improvement",
      "Cost opportunities",
      "Quality improvement",
      "Process improvement",
    ],
  },
];

function Approach() {
  const [activeStep, setActiveStep] = useState(null);

  const toggleStep = (number) => {
    setActiveStep(
      activeStep === number ? null : number
    );
  };

  return (
    <div className="inner-page">
      <PageMeta title="Approach" />

      {/* HERO */}
      <section className="inner-hero">
        <div className="container">

          <div className="eyebrow">
            <span className="eyebrow-line"></span>
            OUR APPROACH
          </div>

          <h1>
            FROM IDEA
            <span>TO PRODUCTION.</span>
          </h1>

          <p>
            A structured packaging development process
            built to move ideas into commercially viable
            production.
          </p>

        </div>
      </section>


      {/* PROCESS */}
      <section className="full-approach section">
        <div className="container">

          <div className="approach-intro">

            <div>
              <div className="eyebrow">
                <span className="eyebrow-line"></span>
                THE PROCESS
              </div>

              <h2>
                DEVELOP.
                <span>OPTIMISE.</span>
                VALIDATE.
              </h2>
            </div>

            <p>
              Every packaging project moves through a
              structured process designed to reduce
              technical uncertainty and development
              delays.
            </p>

          </div>


          {/* PROCESS LIST */}
          <div className="full-approach-list">

            {steps.map((step, index) => {

              const isActive =
                activeStep === step.number;

              return (
                <div
                  className={`full-approach-item ${
                    isActive ? "active" : ""
                  }`}
                  key={step.number}
                >

                  {/* TOP ROW */}

                  <div className="full-step-number">
                    {step.number}
                  </div>

                  <div className="full-step-title">
                    <h3>{step.title}</h3>
                  </div>

                  <div className="full-step-text">
                    <p>{step.text}</p>
                  </div>

                  <button
                    type="button"
                    className="full-step-icon"
                    onClick={() =>
                      toggleStep(step.number)
                    }
                    aria-label={
                      isActive
                        ? `Close ${step.title}`
                        : `View ${step.title} details`
                    }
                    aria-expanded={isActive}
                  >
                    {isActive ? (
                      <ChevronDown size={19} />
                    ) : index === steps.length - 1 ? (
                      <Check size={19} />
                    ) : (
                      <ArrowRight size={19} />
                    )}
                  </button>


                  {/* EXPANDED DETAILS */}

                  {isActive && (
                    <div className="full-step-details">

                      <div className="step-detail-content">

                        <span className="step-detail-label">
                          PROCESS {step.number}
                        </span>

                        <h4>
                          {step.title}
                        </h4>

                        <p>
                          {step.details}
                        </p>

                      </div>


                      <div className="step-focus">

                        <span className="step-detail-label">
                          KEY FOCUS
                        </span>

                        <ul>
                          {step.focus.map((item) => (
                            <li key={item}>
                              <Check size={15} />
                              {item}
                            </li>
                          ))}
                        </ul>

                      </div>

                    </div>
                  )}

                </div>
              );
            })}

          </div>

        </div>
      </section>
    </div>
  );
}

export default Approach;