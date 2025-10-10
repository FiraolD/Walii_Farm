// src/app/components/Testimonials/Testimonials.tsx
import { TestimonialCard } from './TestimonialCard'; // ✅ named import

const testimonials = [
  {
    id: 1,
    name: "Amina Hassan",
    role: "Addis Ababa Family",
    content: "Spending our weekend at Waliin Farm felt like a return to our roots. The children learned how to milk cows and enjoyed fresh ayib with injera straight from the farm kitchen!",
    avatar: "/images/avatar.png"
  },
  {
    id: 2,
    name: "Tewodros Bekele",
    role: "Hawassa Business Traveler",
    content: "After a long week in the city, the peace of Waliin Farm—waking up to roosters, fresh tej, and the smell of roasting barley—restored my spirit completely.",
    avatar: "/images/avatar.png"
  },
  {
    id: 3,
    name: "Selamawit Gebre",
    role: "Adama Couple’s Retreat",
    content: "We celebrated our engagement under the stars with a traditional coffee ceremony and grilled beef from the farm. The warmth of the hosts felt like family.",
    avatar: "/images/avatar.png"
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