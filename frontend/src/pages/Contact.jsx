import { useState } from "react";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";


import PageMeta from "../components/PageMeta";

function Contact() {
  const [status, setStatus] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSubmitting(true);
    setStatus("");

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xbglrggz", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="inner-page">
      <PageMeta title="Contact" />

      {/* HERO */}
      <section className="inner-hero">
        <div className="container">
          <div className="eyebrow">
            <span className="eyebrow-line"></span>
            CONTACT
          </div>

          <h1>
            LET'S BUILD
            <span>BETTER PACKAGING.</span>
          </h1>

          <p>
            Tell us about your packaging requirement, challenge or development
            project.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact-section section">
        <div className="container">
          <div className="contact-grid">

            {/* CONTACT INFO */}
            <div className="contact-info">
              <div className="eyebrow dark-eyebrow">
                <span className="eyebrow-line"></span>
                GET IN TOUCH
              </div>

              <h2>
                START A<span>CONVERSATION.</span>
              </h2>

              <p>
                Whether you need a new packaging development, cost optimisation,
                supplier support, failure investigation or a complete turnkey
                project, we'd like to understand the requirement.
              </p>

              <div className="contact-details">

                <div className="contact-detail">
                  <Mail size={20} />

                  <div>
                    <small>EMAIL</small>
                    <a href="mailto:info@packbone.com">
                      info@packbone.com
                    </a>
                  </div>
                </div>

                <div className="contact-detail">
                  <Phone size={20} />

                  <div>
                    <small>PHONE</small>
                    <a href="tel:+919841358284">
                      +91 98413 58284
                    </a>
                  </div>
                </div>

                <div className="contact-detail">
                  <MapPin size={20} />

                  <div>
                    <small>LOCATION</small>
                    <span>India</span>
                  </div>
                </div>

              </div>
            </div>

            {/* FORM */}
            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >

              <div className="form-row">

                <div className="form-group">
                  <label htmlFor="name">NAME</label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="company">COMPANY</label>

                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Company name"
                    required
                  />
                </div>

              </div>

              <div className="form-row">

                <div className="form-group">
                  <label htmlFor="email">EMAIL</label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">PHONE</label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+91"
                    required
                  />
                </div>

              </div>

              <div className="form-group">
                <label htmlFor="requirement">
                  REQUIREMENT
                </label>

                <select
                  id="requirement"
                  name="requirement"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>
                    Select a service
                  </option>

                  <option>End-to-End Packaging Development</option>
                  <option>New Product Development – NPD</option>
                  <option>Vendor Development & Supplier Management</option>
                  <option>Cost Saving & Value Engineering</option>
                  <option>Quality Improvement & Cost Optimisation</option>
                  <option>Packaging Machinery & Automation Development</option>
                  <option>Turnkey Packaging Projects</option>
                  <option>Packaging Testing & Validation</option>
                  <option>Transit Trials & Packaging Performance</option>
                  <option>Packaging Validation</option>
                  <option>Logistics & Container Optimisation</option>
                  <option>Artwork & Packaging Graphics Development</option>
                  <option>Packaging Specification Development</option>
                  <option>Packaging Failure Investigation</option>
                  <option>Competitive Packaging Benchmarking</option>
                  <option>Packaging Sustainability</option>
                  <option>Packaging Procurement Technical Support</option>
                  <option>Packaging Project Management</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">
                  MESSAGE
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="Tell us about your packaging challenge..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="form-submit"
                disabled={submitting}
              >
                {submitting ? "SENDING..." : "SEND ENQUIRY"}

                {!submitting && <ArrowRight size={18} />}
              </button>

              {status === "success" && (
                <div className="form-message success">
                  Thank you for contacting Pack Bone Consulting. Your enquiry has been
    received successfully.
                </div>
              )}

              {status === "error" && (
                <div className="form-message error">
                  Something went wrong. Please try again or contact us directly.
                </div>
              )}

            </form>

          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;