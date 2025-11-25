// src/app/components/Testimonials/Testimonials.tsx
import { TestimonialCard } from './TestimonialCard'; // ✅ named import

const testimonials = [
  {
    id: 1,
    
  },
  {
    id: 2,
  
  },
  {
    id: 3,

  }
];

export function Testimonials() {
  return (
    <section className="py-20 bg-secondary/20">
      <div className="container">
        <h2 className="text-4xl font-serif font-bold text-center mb-16 text-dark">
          Guest Experiences
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
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