import Header from "@/components/Header/Header";

export default function DashboardLayout({
  children,
  sidebar, // Next.js автоматично підставляє @sidebar
}: {
  children: React.ReactNode;
  sidebar: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      {sidebar} {/* тут рендериться sidebar сторінки */}
      <div className="flex-1 flex flex-col">
        <Header /> {/* спільний Header для всіх сторінок dashboard */}
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
