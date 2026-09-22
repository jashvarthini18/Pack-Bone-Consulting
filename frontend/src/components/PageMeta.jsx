import { useEffect } from "react";

function PageMeta({ title }) {
  useEffect(() => {
    document.title = title
      ? `${title} | Packbone Consulting`
      : "Packbone Consulting | Packaging Development Consultancy";
  }, [title]);

  return null;
}

export default PageMeta;