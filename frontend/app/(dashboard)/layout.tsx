import { getCurrentUser } from "@/lib/auth";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getCurrentUser();

  return (
    <div>
      <header>
        Welcome, {user.name} ({user.role})
      </header>
      <main>{children}</main>
    </div>
  );
}
