import Image from "next/image";

export default function Sidebar() {
  return (
    <Image
      src="/assets/images/onboarding-img.png"
      height={1000}
      width={1000}
      alt="patient"
      className="side-img max-w-[50%]"
    />
  );
}
