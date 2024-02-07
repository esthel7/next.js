export default function SearchLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {children}
      &copy; esthel with Nomad API
    </div>
  );
}
