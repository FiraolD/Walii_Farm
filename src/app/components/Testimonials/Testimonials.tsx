// src/app/components/Testimonials/Testimonials.tsx
import { TestimonialCard } from './TestimonialCard'; // ✅ named import

const testimonials: Testimonial[] = [
  { id: 1, name: 'Alice', role: 'Farmer', content: 'Great!', avatar: '/alice.jpg' },
  // ...
];

// TestimonialCard.tsx (excerpt)

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  avatar?: string; // <-- make optional
}

export default function TestimonialCard({
  name,
  role,
  content,
  avatar,
}: TestimonialCardProps) {
  const avatarSrc = avatar ?? "/images/default-avatar.jpg"; // path to fallback image

  return (
    <article className="...">
      {/* If using next/image */}
      {/* <Image src={avatarSrc} alt={`${name} avatar`} width={48} height={48} /> */}
      <img src={avatarSrc} alt={`${name} avatar`} className="w-12 h-12 rounded-full" />
      <h3>{name}</h3>
      <p>{role}</p>
      <blockquote>{content}</blockquote>
    </article>
  );
}
