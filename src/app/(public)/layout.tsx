import { Announcements } from "@/components/announcements";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";

export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Theme accentColor="amber">
      <Announcements />
      <Header />
      <main className="w-full container mx-auto min-h-screen">{children}</main>
      <Footer />
    </Theme>
  );
}
