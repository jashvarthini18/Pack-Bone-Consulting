import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Reveal from "../components/Reveal";
import PageMeta from "../components/PageMeta";

function NotFound() {
  return (
    <main className="not-found-page">
        <PageMeta title="404 - Page Not Found" />
      <div className="container">
        <Reveal>
          <div className="not-found-content">
            <span className="not-found-code">404</span>

            <span className="eyebrow">PAGE NOT FOUND</span>

            <h1>
              This packaging
              <span> doesn't exist.</span>
            </h1>

            <p>
              The page you're looking for may have been moved, removed or
              never existed.
            </p>

            <div className="not-found-actions">
              <Link to="/" className="btn btn-primary">
                <ArrowLeft size={17} />
                Back to Home
              </Link>

              <Link to="/contact" className="btn btn-secondary">
                Contact Us
                <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </main>
  );
}

export default NotFound;