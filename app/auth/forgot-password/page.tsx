// =================
// Table of Contents
// =================
// @Imports
// @Export
// -- @Logo
// -- @Welcome
// -- @Form
// =================

// @Imports
"use client";
import ForgotPasswordForm from "./components/ForgotPasswordForm";
import Image from "next/image";
import Welcome from "../components/welcome";

// @Export
export default function ForgotPassword() {
  return (
    <>
      {/* -- @Logo */}
      <Image
        src="/assets/icons/logo-full.svg"
        height={1000}
        width={1000}
        alt="patient"
        className="mb-12 h-10 w-fit"
      />

      {/* -- @Welcome */}
      <Welcome
        title="Forgot Password?"
        description="Enter your email to reset your password"
      />

      {/* -- @Form */}
      <ForgotPasswordForm />
    </>
  );
}
