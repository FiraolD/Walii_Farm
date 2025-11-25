import Image from 'next/image';

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export function TestimonialCard({ name, role, content, avatar }: TestimonialCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md h-full">
      <div className="flex items-center mb-4">
        <div>
          <h3 className="font-bold text-lg text-dark">{name}</h3>
          <p className="text-primary text-sm">{role}</p>
        </div>
      </div>
      <p className="text-dark/80 italic">&quot;{content}&quot;</p>
      <div className="flex text-amber-400 mt-3">
        {"★".repeat(5)}
      </div>
    </div>
  );
}