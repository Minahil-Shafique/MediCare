import { routes } from "@/config/routes";
import Link from "next/link";

export default function Header({}) {
  return (
    <ul className="flex items-center space-x-5 p-5 bg-dark-200">
      <li>
        <Link href={routes.basic.home}>Home</Link>
      </li>
      <li>
        <Link href={routes.basic.routes}>Routes</Link>
      </li>
    </ul>
  );
}
