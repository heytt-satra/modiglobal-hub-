import { Hero } from "@/components/landing/Hero";
import { Categories } from "@/components/landing/Categories";
import { HowItWorks } from "@/components/landing/HowItWorks";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Hero />
      <Categories />
      <HowItWorks />
    </main>
  );
}
