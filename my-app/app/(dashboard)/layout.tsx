import Header from "@/components/Header/Header";

export default function DashboardLayout({
  children,
  sidebar, // Next.js підставляє вміст @sidebar
}: {
  children: React.ReactNode;
  sidebar: React.ReactNode; // sidebar може бути undefined
}) {
  return (
    <div className="flex min-h-screen">
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-6">
          <div className="flex gap-6">
            <aside>{sidebar}</aside>
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
