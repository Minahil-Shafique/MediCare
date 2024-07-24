// =================
// Table of Contents
// =================
// @Authentication
// @Stripe
// =================

export const api_routes = {
  // @Authentication
  auth: {
    register: "/api/register",
  },

  // @Stripe
  stripe: {
    getCustomers: "/api/stripe/get-customers",
    getSubscribers: "/api/stripe/get-subscribers",
    inovices: { get: "/api/stripe/invoices" },
    checkout: {
      create: "/api/stripe/create-checkout",
    },
  },
};
