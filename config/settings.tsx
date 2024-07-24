// =================
// Table of contents
// =================
// @Settings
// -- @Other Configurations
// -- @Development
// -- @Pricing
// -- @Social

// @Site Configuration
// @Meta Configuration
// =================
import { Metadata } from "next";
import { OpenGraph } from "next/dist/lib/metadata/types/opengraph-types";

// @Settings
const settings = {
  sitename: "MediCare",
  domain: "",
  devServer: "http://localhost:4000",
  Prodserver: "https://live-server.app/",
  mail: "",
  defaultIconSize: 24,
  seperator: "&%#",

  // -- @Other Configurations
  pagination: {
    valuesPerPage: 10,
    paginationLimit: 3,
  },

  // -- @Development
  inDevelopment: true,
  stripeDev: {
    monthly: "https://buy.stripe.com/",
    yearly: "https://buy.stripe.com/",
  },
  stripeProd: {
    monthly: "https://buy.stripe.com/",
    yearly: "https://buy.stripe.com/",
  },

  // -- @Pricing
  paymentAmount: {
    free: 0,
    monthly: 2400, // $24.00
    yearly: 24000, // $240.00
  },

  // -- @Social
  social: {
    facebook: "https://www.facebook.com/",
    github: "https://github.com/",
    twitter: "https://twitter.com/",
    instagram: "https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/",
    tiktok: "https://www.tiktok.com/",
  },
};

// @Site Configuration
export const siteConfig = {
  title: "",
  description: ``,
  // TODO
  // logo: logoImg,
  // icon: logoIconImg,
  // mode: MODE.LIGHT,
  // favicon
};

// @Meta Configuration
export const metaObject = (
  title?: string,
  openGraph?: OpenGraph,
  description: string = siteConfig.description
): Metadata => {
  return {
    title: title ? `${title}` : siteConfig.title,
    description,
    openGraph: openGraph ?? {
      title: title ? `${title}` : title,
      description,
      url: "",
      siteName: "", // https://developers.google.com/search/docs/appearance/site-names
      images: {
        url: "",
        width: 1200,
        height: 630,
      },
      locale: "en_US",
      type: "website",
    },
  };
};

export { settings };
