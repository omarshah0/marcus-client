import React from "react"
import Helmet from "react-helmet"

import favicon16x16 from "../../images/favicon/favicon-16x16.png"
import favicon32x32 from "../../images/favicon/favicon-32x32.png"
import appleTouchIcon from "../../images/favicon/apple-touch-icon.png"

const PageHelmet = ({
  title,
  description,
  keywords,
  image,
  url,
  lang,
  article,
  robots,
  author,
  createdDate,
  updatedDate,
  subcategory,
}) => {
  let imagePath =
    "https://www.datocms-assets.com/49651/1624952153-bp.png?auto=format&w=100" // Replace with binaryPakistan Logo
  if (image) {
    imagePath = image
  }

  return (
    <Helmet>
      <html lang={lang || "en"} />
      {title && [
        <title
          {...{
            key: "title",
            itemProp: "name",
          }}
        >
          {title}
        </title>,
        <meta
          {...{
            key: "metaTitle",
            name: "title",
            content: title,
          }}
        />,
        <meta
          {...{
            key: "ogTitle",
            property: "og:title",
            content: title,
          }}
        />,
        <meta
          {...{
            key: "twitterTitle",
            name: "twitter:title",
            content: title,
          }}
        />,
        <meta
          {...{
            key: "ogImage",
            property: "og:image",
            content: imagePath,
          }}
        />,
        <meta
          {...{
            key: "twitterImage",
            name: "twitter:image",
            content: imagePath,
          }}
        />,
        <meta
          {...{
            key: "twitterCard",
            name: "twitter:card",
            content: "summary_large_image",
          }}
        />,
        <meta
          {...{
            key: "image",
            itemProp: "image",
            content: imagePath,
          }}
        />,
        <meta
          {...{
            key: "name",
            itemProp: "name",
            content: title,
          }}
        />,
      ]}
      <meta property="og:type" content="article" />
      {url && <meta property="og:url" content={url} />}
      {url && <link rel="canonical" href={url} />}
      {keywords && <meta name="keywords" content={keywords} />}
      {robots && <meta name="robots" content={robots} />}
      <meta
        {...{
          key: "description",
          name: "description",
          content: description || "BinaryPakistan",
        }}
      />
      <meta
        {...{
          key: "ogDescription",
          property: "og:description",
          content: description || "BinaryPakistan",
        }}
      />
      <meta
        {...{
          key: "twitterDescription",
          name: "twitter:description",
          content: description || "BinaryPakistan",
        }}
      />
      <link
        {...{
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: appleTouchIcon,
        }}
      />
      <link
        {...{
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: favicon32x32,
        }}
      />
      <link
        {...{
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: favicon16x16,
        }}
      />
      {article && (
        <script type="application/ld+json">
          {`
        ${JSON.stringify({
          "@context": "https://schema.org",
          publisher: {
            "@type": "Organization",
            name: "BinaryPakistan",
            logo: {
              "@type": "ImageObject",
              url:
                "https://www.datocms-assets.com/49651/1624952153-bp.png?auto=format&w=100",
            },
          },
          "@type": "Article",
          headline: title,
          description: description,
          keywords: title,
          author: {
            "@type": "Person",
            name: `${author ? author : "The BinaryPakistan Team"}`,
          },
          mainEntityOfPage: url,
          url: url,
          datePublished: createdDate,
          dateModified: updatedDate,
          articleSection: subcategory,
          image: [imagePath],
        })}
        `}
        </script>
      )}
    </Helmet>
  )
}

export default PageHelmet
