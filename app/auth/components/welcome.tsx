import { cn } from "@/lib/utils";

interface WelcomeProps {
  title?: string;
  className?: string;
  description?: string;
}
export default function Welcome({
  className,
  title = "Hi there 👋",
  description = "Get started with appointments.",
}: WelcomeProps) {
  return (
    <section className={cn("mb-12 space-y-4", className)}>
      <h1 className="header">{title}</h1>
      <p className="text-dark-700">{description}</p>
    </section>
  );
}
