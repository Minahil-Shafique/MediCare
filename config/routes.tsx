// =================
// Table of Contents
// =================
// @Basic
// @User
// @Authentication
// @Patients
// @Legal Pages
// =================
// Note: Default Routes exists only for highlighting text in sidebar.tsx
// =================

export const routes = {
  // @Basic
  basic: {
    home: "/",
    routes: "/routes",
  },

  // @User
  user: {
    default: "/user",
    settings: "/settings",
    billing: "/billing",
  },

  // @Authentication
  auth: {
    login: "/auth/login",
    signup: "/auth/signup",
    forgotPassword: "/auth/forgot-password",
    resetPassword: "/auth/reset-password",
    OTP: "/auth/otp",
  },

  // @Patients
  patients: {
    default: `/patients/`,
    register: (id: string) => `/patients/${id}/register`,
  },

  // @Legal Pages
  legal: {
    terms: "/legal/terms-and-conditions",
    cookies: "/legal/cookies",
    privacy: "/legal/privacy-policy",
  },
};
