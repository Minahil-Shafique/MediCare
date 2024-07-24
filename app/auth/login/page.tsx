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
import LoginForm from "./components/LoginForm";
import Image from "next/image";
import Welcome from "../components/welcome";

// @Export
export default function Login() {
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
        title="Welcome back 👋"
        description="Enter your credentials to get login"
      />

      {/* -- @Form */}
      <LoginForm />
    </>
  );
}
