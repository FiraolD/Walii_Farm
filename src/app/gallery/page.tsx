import { Gallery } from '@/app/components/Gallery/Gallery';

export default function GalleryPage() {
  return (
    <div>
      <div className="container py-12">
        <h1 className="text-4xl font-serif font-bold text-center mb-4">Photo Gallery</h1>
        <p className="text-center text-dark/70 mb-12">Explore our farmhouse and surroundings</p>
      </div>
      <Gallery />
    </div>
  );
}