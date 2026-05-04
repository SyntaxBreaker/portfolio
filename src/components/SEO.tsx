interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  pathname: string;
  keywords: string;
}

function SEO({
  title = "SyntaxBreaker Portfolio | Front-end Developer",
  description = "Welcome to my portfolio! I'm a self-taught front-end developer who enjoys creating digital products and solutions.",
  image = "/favicon.ico",
  keywords: keywords,
  pathname: pathname,
}: SEOProps) {
  const siteUrl = "https://syntaxbreaker.netlify.app";
  const canonicalUrl = `${siteUrl}${pathname === "/" ? "" : pathname}`;
  const imageUrl = image.startsWith("http") ? image : `${siteUrl}${image}`;

  return (
    <>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      <link rel="sitemap" href="/sitemap-index.xml" />

      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
    </>
  );
}

export default SEO;
