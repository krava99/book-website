export default function RecommendedSidebarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <aside className="w-64 bg-green-100 p-4">
      <h2 className="font-bold mb-4">Recommended Sidebar</h2>
      <ul>
        <li>Top Picks</li>
        <li>Trending</li>
        <li>New Releases</li>
      </ul>
      {children}
    </aside>
  );
}
