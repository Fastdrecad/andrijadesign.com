import { Helmet } from "react-helmet-async";

const JsonLd = ({ pageType, pageData }) => {
  let jsonLd = {};

  switch (pageType) {
    case "about":
      // Schema for Home page (Full Stack Developer Portfolio)
      jsonLd = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Andrija Mićunović | Full Stack Developer",
        url: "https://www.andrijadesign.com",
        description:
          "Andrija Mićunović is a Full Stack Developer offering tailored web development solutions, including front-end, back-end, and full-stack projects.",
        author: {
          "@type": "Person",
          name: "Andrija Mićunović",
          url: "https://www.andrijadesign.com",
          sameAs: [
            "https://www.linkedin.com/in/andrija-Mićunović/",
            "https://github.com/fastdrecad",
            "https://twitter.com/fastdrecad"
          ]
        },
        mainEntityOfPage: "https://www.andrijadesign.com"
      };
      break;

    case "archive":
      // Schema for Archive page (List of Projects)
      if (Array.isArray(pageData) && pageData.length > 0) {
        jsonLd = {
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Projects Archive | Andrija Mićunović - Full Stack Developer",
          description:
            "A complete archive of projects developed by Andrija Mićunović, covering full-stack web development, real estate apps, eCommerce, and more.",
          url: "https://www.andrijadesign.com/archive",
          itemListElement: pageData.map((project, index) => ({
            "@type": "ListItem",
            position: index + 1,
            item: {
              "@type": "CreativeWork",
              name: project.title,
              description: project.desc,
              url: project.url,
              image: project.image || "", // Optional, in case some projects don't have images
              inLanguage: "en",
              author: {
                "@type": "Person",
                name: "Andrija Mićunović"
              },
              keywords: project.tech.join(", ") // Combine tech stack into keywords
            }
          }))
        };
      }
      break;

    case "notFound":
      // Not Found page schema (404 error page)
      jsonLd = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Page Not Found",
        description:
          "The page you are looking for does not exist on Andrija Mićunović's portfolio website.",
        url: "https://www.andrijadesign.com/404"
      };
      break;

    default:
      break;
  }

  return (
    <Helmet>
      {/* Inject the generated JSON-LD schema into the page */}
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  );
};

export default JsonLd;
