type PageHeaderProps = {
  children: React.ReactNode;
};

export default function PageHeader({ children }: PageHeaderProps) {
  return <h1 className="text-4xl font-medium">{children}</h1>;
}
