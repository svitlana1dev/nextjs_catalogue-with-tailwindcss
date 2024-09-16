import { Hero } from "@/components";
import CarCatalogue from "@/components/CarCatalogue";
import { HomeProps } from "@/types";

export default async function Home({ searchParams }: HomeProps) {
  return (
    <main className="overflow-hidden">
      <Hero />

      <CarCatalogue searchParams={searchParams} />
    </main>
  );
}
