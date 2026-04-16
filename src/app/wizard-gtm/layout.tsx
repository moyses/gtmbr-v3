export default function WizardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="min-h-screen font-inter">{children}</div>;
}
