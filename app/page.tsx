import link from "next/link";
import Header from "@/components/customBlequi/header";
import { AuroraText } from "@/components/magicui/aurora-text";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="w-full py-30">
          <div className="flex flex-col items-center justify-center text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Hello <AuroraText colors={["#D60270", "#9B4F9B", "#0038A8"]}>World</AuroraText>
              <span>🌎</span>
            </h1>
          </div>
        </section>
      </main>
    </div>
  );
}
