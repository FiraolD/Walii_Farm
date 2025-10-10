import { Hero } from '@/app/components/Hero/Hero';
import { Features } from '@/app/components/Features/Features';
import { Gallery } from '@/app/components/Gallery/Gallery';
import { Testimonials } from '@/app/components/Testimonials/Testimonials';
import { ContactForm } from '@/app/components/Contact/ContactForm';

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Gallery />
      <Testimonials />
      <ContactForm />
    </>
  );
}