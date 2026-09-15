import { useEffect } from "react";

function PageMeta({ title }) {
  useEffect(() => {
    document.title = title
      ? `${title} | Pack Bone Consulting`
      : "Pack Bone Consulting | Packaging Development Consultancy";
  }, [title]);

  return null;
}

export default PageMeta;