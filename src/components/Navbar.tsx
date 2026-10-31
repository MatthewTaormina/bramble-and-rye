'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ShoppingBag, Menu as MenuIcon, X, Sparkles, Wheat } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { totalItems, setIsCartOpen } = useCart();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/menu', label: 'Our Breads & Cafe' },
    { href: '/order', label: 'Bake Schedule & Pre-Orders' },
    { href: '/sourcing', label: 'Sourcing & Mills' },
    { href: '/visit', label: 'Visit & Hours' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-40 bg-hearth/95 backdrop-blur-md border-b border-oatmeal transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand Identity */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-bramble focus:ring-offset-2 rounded"
          >
            <div className="w-10 h-10 rounded-full bg-rye flex items-center justify-center text-crust transition-transform group-hover:scale-105 shadow-sm">
              <Wheat className="w-5 h-5 text-crust" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-rye leading-none">
                Bramble & Rye
              </span>
              <span className="text-[11px] font-sans text-rye-muted uppercase tracking-widest mt-1">
                Naturally Leavened • Regional Grains
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav aria-label="Main Navigation" className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-2 text-sm font-medium rounded-md transition-colors ${
                    active
                      ? 'text-bramble font-semibold bg-oatmeal/50'
                      : 'text-rye hover:text-bramble hover:bg-oatmeal/30'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs: Pre-Order Pill & Cart Trigger */}
          <div className="flex items-center gap-3">
            <Link
              href="/order"
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-semibold tracking-wider uppercase text-hearth bg-bramble hover:bg-bramble-hover transition-colors rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-bramble focus:ring-offset-2"
            >
              Order for Pickup
            </Link>

            <button
              type="button"
              onClick={() => setIsCartOpen(true)}
              aria-label={`View pickup bag, ${totalItems} items`}
              className="relative p-2.5 rounded-full bg-oatmeal/60 hover:bg-oatmeal text-rye transition-colors focus:outline-none focus:ring-2 focus:ring-bramble"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-bramble text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-sm">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-md text-rye hover:bg-oatmeal/60 focus:outline-none focus:ring-2 focus:ring-bramble"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile navigation panel */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-oatmeal bg-hearth-soft px-4 pt-3 pb-6 space-y-2">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-2.5 rounded-md text-base font-medium transition-colors ${
                  active
                    ? 'bg-oatmeal text-bramble font-semibold'
                    : 'text-rye hover:bg-oatmeal/50 hover:text-bramble'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="pt-2">
            <Link
              href="/order"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center px-4 py-3 text-sm font-semibold tracking-wider uppercase text-hearth bg-bramble hover:bg-bramble-hover rounded"
            >
              Order for Pickup
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
