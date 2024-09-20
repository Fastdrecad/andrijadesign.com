import { Link } from "react-router-dom";

import useDocumentTitle from "../../hooks/useDocumentTitle";
import SEO from "../../components/common/SEO/SEO";
import JsonLd from "../../components/common/SEO/JsonLd";

const NotFound = () => {
  useDocumentTitle();

  return (
    <>
      {/* SEO Meta Tags for 404 Page */}
      <SEO
        title="404 - Page Not Found | Andrija Mićunović - Full Stack Developer"
        description="The page you are looking for does not exist on Andrija Mićunović's full-stack developer portfolio website."
        url="https://www.andrijadesign.com/404"
        siteName="Andrija Mićunović Full Stack Developer Portfolio"
        canonicalUrl="https://www.andrijadesign.com/404"
      />

      {/* JSON-LD Structured Data for 404 Page */}
      <JsonLd pageType="notFound" pageData={null} />

      <div className="not-found">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <Link to="/">Go Home</Link>
      </div>
    </>
  );
};

export default NotFound;
