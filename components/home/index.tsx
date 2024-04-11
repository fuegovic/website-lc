import { Hero } from "./Hero";
import Feature from "./feature"
import NewsletterForm from '@/components/NewsletterForm'

export const Home = () => (
  <>
    <main className="relative overflow-hidden w-full">
      <Hero />
      <Feature locate={""} />
      <NewsletterForm />
    </main>
  </>
);
