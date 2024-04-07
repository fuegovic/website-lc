import { Hero } from "./Hero";
import Feature from "./feature"

export const Home = () => (
  <>
    <main className="relative overflow-hidden w-full">
      <Hero />
      <Feature locate={""} />
    </main>
  </>
);
