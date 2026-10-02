// import { useEffect } from "react";

// function PageMeta({ title }) {
//   useEffect(() => {
//     document.title = title
//       ? `${title} | Packbone Consulting`
//       : "Packbone Consulting | Packaging Development Consultancy";
//   }, [title]);

//   return null;
// }

// export default PageMeta;
import { useEffect } from "react";

function PageMeta({ title, description }) {
  useEffect(() => {
    // Page title
    document.title = title
      ? `${title} | Packbone Consulting`
      : "Packbone Consulting | Packaging Development Consultancy";

    // Meta description
    let descriptionTag = document.querySelector(
      'meta[name="description"]'
    );

    if (!descriptionTag) {
      descriptionTag = document.createElement("meta");
      descriptionTag.setAttribute("name", "description");
      document.head.appendChild(descriptionTag);
    }

    descriptionTag.setAttribute(
      "content",
      description ||
        "Packbone Consulting provides packaging development, NPD, vendor development, cost optimisation, testing, validation and packaging project management solutions."
    );

    // Canonical URL
    const canonicalUrl =
      window.location.origin + window.location.pathname;

    let canonicalTag = document.querySelector(
      'link[rel="canonical"]'
    );

    if (!canonicalTag) {
      canonicalTag = document.createElement("link");
      canonicalTag.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalTag);
    }

    canonicalTag.setAttribute("href", canonicalUrl);
  }, [title, description]);

  return null;
}

export default PageMeta;