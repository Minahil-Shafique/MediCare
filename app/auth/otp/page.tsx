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
import OTPForm from "./components/OTPForm";
import Image from "next/image";
import Welcome from "../components/welcome";

// @Export
export default function OTP() {
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
        title="Enter OTP"
        description="An OTP has been forwarded to your email"
      />

      {/* -- @Form */}
      <OTPForm />
    </>
  );
}
