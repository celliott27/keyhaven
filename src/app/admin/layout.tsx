import { Nav, NavLink } from "@/components/Nav/Nav";

export default function CustomerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Nav>
        <NavLink href="/admin" name="Dashboard" />
        <NavLink href="/admin/products" name="Products" />
        <NavLink href="/admin/users" name="Customers" />
        <NavLink href="/admin/orders" name="Sales" />
      </Nav>
      <div className="my-8 container">{children}</div>
    </>
  );
}
