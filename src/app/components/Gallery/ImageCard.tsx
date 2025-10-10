// src/app/components/Gallery/ImageCard.tsx
import Image from 'next/image';

interface ImageCardProps {
  src: string;
  alt: string;
}

// Named export (no "default")
export function ImageCard({ src, alt }: ImageCardProps) {
  return (
    <div className="group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow">
      <div className="relative h-64 w-full">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
    </div>
  );
}