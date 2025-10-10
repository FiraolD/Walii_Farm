import { ImageCard } from './ImageCard'; // ✅ matches named export

const galleryImages = [
  { id: 1, src: "/images/farmhouse-hero.jpg", alt: "Farmhouse exterior with garden" },
  { id: 2, src: "/images/cozy-living.jpg", alt: "Cozy living room with fireplace" },
  { id: 3, src: "/images/kitchen.jpg", alt: "Rustic farmhouse kitchen" },
  { id: 4, src: "/images/bedroom.jpg", alt: "Comfortable bedroom with wooden beams" },
  { id: 5, src: "/images/garden.jpg", alt: "Private garden with seating area" },
  { id: 6, src: "/images/bathroom.jpg", alt: "Modern rustic bathroom" },
    { id: 7, src: "/images/farmhouse-hero.jpg", alt: "Farmhouse exterior with garden" },
  { id: 8, src: "/images/cozy-living.jpg", alt: "Cozy living room with fireplace" },
  { id: 9, src: "/images/kitchen.jpg", alt: "Rustic farmhouse kitchen" },
  { id: 10, src: "/images/bedroom.jpg", alt: "Comfortable bedroom with wooden beams" },
  { id: 11, src: "/images/garden.jpg", alt: "Private garden with seating area" },
  { id: 12, src: "/images/bathroom.jpg", alt: "Modern rustic bathroom" },
];

export function Gallery() {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <h2 className="text-4xl font-serif font-bold text-center mb-16 text-dark">
          Our Farm
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <ImageCard 
              key={image.id}
              src={image.src}
              alt={image.alt}
            />
          ))}
        </div>
      </div>
    </section>
  );
}