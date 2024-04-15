import { AdminHeader } from "@/components/admin/admin-header";
import { AdminSidebar } from "@/components/admin/admin-sidebar";
import Providers from "@/components/layout/providers";
import { ScrollArea } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <AdminHeader />
      <div className="flex h-screen overflow-hidden">
        <AdminSidebar />
        <ScrollArea className="h-full">
          <main className="w-full pt-16">{children}</main>
        </ScrollArea>
      </div>
    </Providers>
  );
}
