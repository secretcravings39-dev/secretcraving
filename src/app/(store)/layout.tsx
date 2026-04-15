import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CartDrawer } from "@/components/CartDrawer";
import { BottomTab } from "@/components/BottomTab";
import { AgeGate } from "@/components/AgeGate";

export default function StoreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="contents" suppressHydrationWarning>
      <AgeGate />
      <Header />
      <main className="flex-1 pb-14 md:pb-0">{children}</main>
      <Footer />
      <BottomTab />
      <CartDrawer />
    </div>
  );
}
