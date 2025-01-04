import Link from "next/link";

export default function Home() {
  return (
    <Link className="bg-primary text-primary-foreground p-10" href="/admin">
      dashboard
    </Link>
  );
}
