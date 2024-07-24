import Link from "next/link";
import Sidebar from "./components/sidebar";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen min-h-srceen">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px] min-h-screen">
          {children}

          <div className="text-14-regular mt-20 flex justify-between">
            <p className="justify-items-end text-dark-600 xl:text-left">
              © 2024 MediCare
            </p>
            <Link href="/?admin=true" className="text-green-500">
              Admin
            </Link>
          </div>
        </div>
      </section>
      <Sidebar />
    </div>
  );
}
