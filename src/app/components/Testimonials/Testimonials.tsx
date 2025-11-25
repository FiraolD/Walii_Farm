// src/app/components/Testimonials/Testimonials.tsx
import { TestimonialCard } from './TestimonialCard'; // ✅ named import

const testimonials: Testimonial[] = [
  { id: 1, name: 'Alice', role: 'Farmer', content: 'Great!', avatar: '/alice.jpg' },
  // ...
];

// src/app/components/Testimonials/Testimonials.tsx
interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar?: string; // optional if not always present
}

export function Testimonials() {
  return (
    <section className="py-20 bg-secondary/20">
      <div className="container">
        <h2 className="text-4xl font-serif font-bold text-center mb-16 text-dark">
          Guest Experiences
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial: Testimonial) => (
  <TestimonialCard
    key={testimonial.id}
    name={testimonial.name}
    role={testimonial.role}
    content={testimonial.content}
    avatar={testimonial.avatar}
  />
))}
        </div>
      </div>
    </section>
  );
}