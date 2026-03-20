export default function MyLibrarySidebarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <aside className="w-64 bg-blue-100 p-4">
      <h2 className="font-bold mb-4">My Library Sidebar</h2>
      <ul>
        <li>My Books</li>
        <li>Favorites</li>
        <li>Recently Viewed</li>
      </ul>
      {children}
    </aside>
  );
}
