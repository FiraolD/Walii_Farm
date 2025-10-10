'use client';
import { useState } from 'react';
import Link from 'next/link';
import { GiHamburgerMenu } from 'react-icons/gi';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-8">
        {navItems.map((item) => (
          <Link 
            key={item.name} 
            href={item.href}
            className="text-dark hover:text-primary transition"
          >
            {item.name}
          </Link>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden text-dark"
        onClick={() => setIsOpen(!isOpen)}
      >
        <GiHamburgerMenu size={24} />
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden absolute top-16 right-4 bg-white shadow-lg rounded-lg p-4 w-48">
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <Link 
                key={item.name} 
                href={item.href}
                className="text-dark hover:text-primary transition py-2"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </>
  );
}