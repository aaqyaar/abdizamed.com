import Head from "next/head";
import React from "react";
import type { MetaTypes } from "types/meta.types";

export default function Meta({
  title,
  description,
  keywords,
  author,
  image,
  type,
}: MetaTypes) {
  // meta data
  const meta: MetaTypes = {
    title: title || "Abdi Zamed Website",
    description:
      description ||
      "I'm Abdisamad Mohamed Adam, a professional MERN Stack developer, and I have almost a 2 year of experience creating web apps, managed systems, and much more....",
    keywords:
      keywords ||
      "Abdi Zamed, Portfolio, Web Developer, Programmer, MERN Stack Developer, Freelancer",
    author: author || "Abdi Zamed Mohamed",
    image: image || "/abdizamed.svg",
    type: type || "website",
  };

  return (
    <>
      <Head>
        <title>Abdi Zamed | Personal Website</title>
      </Head>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta name="title" content={meta.title} />
      <meta name="description" content={meta.description} />
      <meta name="keywords" content={meta.keywords} />
      <meta name="author" content={meta.author} />
      <meta name="theme-color" content="#000000" />
      <meta name="image" content={meta.image} />
      <meta name="msapplication-navbutton-color" content="#000000" />
      <meta name="apple-mobile-web-app-status-bar-style" content="#000000" />
      <meta name="robots" content="index, follow" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta httpEquiv="Content-Type" content="text/html; charset=ISO-8859-1" />
      <meta property="og:type" content={meta.type} />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="web_author" content={meta.author} />
      <meta property="og:title" content={meta.title} />

      <meta property="og:description" content={meta.description} />
      <meta property="og:image" content={meta.image} />
      <meta property="og:url" content="https://abdizamed.vercel.app/" />
      <meta property="og:site_name" content="Abdi Zamed" />
      <meta property="og:locale" content="en_US" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@AbdiZamed" />
      <meta name="twitter:creator" content="@AbdiZamed" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.image} />
      <meta name="twitter:image:alt" content={meta.title} />
      <meta name="twitter:domain" content="https://abdizamed.vercel.app/" />

      <meta name="rating" content="General" />
      <meta name="distribution" content="Global" />
      <meta name="google" content="notranslate" />
      <meta
        name="google-site-verification"
        content="google-site-verification=0"
      />
      <meta name="googlebot" content="index, follow" />
      <meta name="googlebot-news" content="index, follow" />
      <meta name="googlebot-video" content="index, follow" />
      <meta name="googlebot-image" content="index, follow" />
      <meta name="googlebot-mobile" content="index, follow" />
      <meta name="googlebot-ads" content="index, follow" />
      <meta name="googlebot-ads" content="index, follow" />
      <meta name="google" content="nositelinkssearchbox" />
    </>
  );
}
