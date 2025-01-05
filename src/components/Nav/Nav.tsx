"use client"
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavProps = {
  children: React.ReactNode;
};

export function Nav({ children }: NavProps) {
  return (
    <nav className="flex w-full bg-primary justify-center">{children}</nav>
  );
}

export function NavLink({ href, name }: { href: string; name: string }) {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className={cn(
        "text-primary-foreground p-8 h-full text-xl hover:bg-secondary hover:text-secondary-foreground",
        pathname === href && "bg-background text-foreground"
      )}
    >
      {name}
    </Link>
  );
}
