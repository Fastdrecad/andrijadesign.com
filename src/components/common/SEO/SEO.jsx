import { Helmet } from "react-helmet-async";

const SEO = ({
  title,
  description,
  url,
  siteName,
  contentType = "website",
  image = "https://www.andrijadesign.com/thumbnail.jpg",
  canonicalUrl
}) => {
  return (
    <Helmet>
      {/* Standard Meta Tags */}
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="description" content={description} />

      {/* Optional Keywords Meta Tag */}
      <meta
        name="keywords"
        content="Fullstack developer, Web development, JavaScript, Node.js, React, TypeScript, Frontend, Backend, API development, Next.js, Tailwind CSS, MERN stack, Andrija Mićunović"
      />

      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:type" content={contentType} />
      {image && <meta property="og:image" content={image} />}
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Andrija's Portfolio Thumbnail" />
      <meta property="og:locale" content="en_US" />

      {/* Open Graph Profile (Optional for personal branding) */}
      <meta property="og:profile:username" content="Andrija Mićunović" />
      <meta property="og:profile:first_name" content="Andrija" />
      <meta property="og:profile:last_name" content="Mićunović" />

      {/* Social Media Links with rel="me" */}
      <link rel="me" href="https://www.andrijadesign.com" />
      <link rel="me" href="https://www.upwork.com/freelancers/fastdrecad" />
      <link rel="me" href="https://www.linkedin.com/in/andrija-Mićunović/" />
      <link rel="me" href="https://www.instagram.com/fastdrecad/" />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      <link
        rel="icon"
        type="image/png"
        href="/icons/favicon-16x16.png"
        sizes="16x16"
      />
      <link
        rel="icon"
        type="image/png"
        href="/icons/favicon-32x32.png"
        sizes="32x32"
      />
      <link
        rel="icon"
        type="image/png"
        href="/icons/favicon-96x96.png"
        sizes="96x96"
      />

      {/* Apple Touch Icons */}
      {[
        "57x57",
        "60x60",
        "72x72",
        "76x76",
        "114x114",
        "120x120",
        "144x144",
        "152x152",
        "180x180"
      ].map((size) => (
        <link
          key={size}
          rel="apple-touch-icon"
          sizes={size}
          href={`/icons/apple-icon-${size}.png`}
        />
      ))}

      {/* Manifest for PWA (if applicable) */}
      <link rel="manifest" href="/site.webmanifest" />

      {/* Preconnect for performance */}
      {[
        "https://www.youtube-nocookie.com",
        "https://www.google.com",
        "https://googleads.g.doubleclick.net",
        "https://static.doubleclick.net"
      ].map((link) => (
        <link key={link} rel="preconnect" href={link} />
      ))}

      {/* Preconnect DNS Prefetch for faster DNS lookups */}
      {[
        "https://www.youtube-nocookie.com",
        "https://www.google.com",
        "https://googleads.g.doubleclick.net",
        "https://static.doubleclick.net"
      ].map((link) => (
        <link key={link} rel="dns-prefetch" href={link} />
      ))}
    </Helmet>
  );
};

export default SEO;
