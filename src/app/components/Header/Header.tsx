import { Navigation } from './Navigation';
import Link from 'next/link';

export function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-serif font-bold text-primary">
          Waliin  Farm
        </Link>
        <Navigation />
      </div>
    </header>
  );
}