'use client';

import React, { useState } from 'react';
import { MENU_ITEMS } from '@/data/menuData';
import { MenuItem, ItemCategory, OvenStatus } from '@/types';
import { useCart } from '@/context/CartContext';
import { Flame, CheckCircle2, XCircle, Info, ShoppingBag, Filter, Sparkles, Wheat } from 'lucide-react';
import TraceabilityModal from '@/components/TraceabilityModal';

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState<ItemCategory>('all');
  const [selectedTraceItem, setSelectedTraceItem] = useState<MenuItem | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const { addToCart } = useCart();

  const categories = [
    { id: 'all', label: 'Complete Menu' },
    { id: 'bread', label: 'Naturally Leavened Breads' },
    { id: 'pastry', label: 'Daily Laminated Pastry' },
    { id: 'beverage', label: 'Espresso & Botanicals' },
    { id: 'pantry', label: 'Heritage Flours & Starter' },
  ];

  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.ingredients.some((ing) => ing.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const getStatusBadge = (status: OvenStatus) => {
    switch (status) {
      case 'hot':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-crust-subtle text-crust border border-crust/30">
            <Flame className="w-3 h-3 text-crust" /> Hot from Hearth
          </span>
        );
      case 'available':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
            <CheckCircle2 className="w-3 h-3 text-emerald-700" /> Available
          </span>
        );
      case 'sold_out':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-stone-100 text-stone-500 border border-stone-200">
            <XCircle className="w-3 h-3 text-stone-400" /> Sold Out
          </span>
        );
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-10">
      {/* Page Header */}
      <div className="max-w-3xl space-y-4">
        <div className="flex items-center gap-2">
          <Wheat className="w-5 h-5 text-bramble" />
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-bramble">
            Seasonal Bread &amp; Cafe Catalog
          </span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-rye tracking-tight">
          Our Breads &amp; Daily Cafe Menu
        </h1>
        <p className="text-sm sm:text-base text-rye-muted leading-relaxed">
          Every loaf is naturally leavened over 28 to 36 hours with regional landrace grains and stone-milled flours. Our pastries shift with local orchard harvests, and beverages are dialed to balance wild ferments.
        </p>
      </div>

      {/* Filter and Search Controls */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-oatmeal">
        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 lg:pb-0">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id as ItemCategory)}
              className={`px-4 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat.id
                  ? 'bg-rye text-hearth shadow-sm'
                  : 'bg-oatmeal/60 text-rye hover:bg-oatmeal'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="w-full lg:w-72">
          <label htmlFor="menu-search" className="sr-only">Search menu items</label>
          <input
            id="menu-search"
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search grain, flour, or flavor..."
            className="w-full px-3.5 py-2 text-xs bg-hearth-paper border border-oatmeal-dark rounded text-rye placeholder:text-rye-muted/60 focus:outline-none focus:ring-1 focus:ring-crust"
          />
        </div>
      </div>

      {/* Menu Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => {
          const isSoldOut = item.ovenStatus === 'sold_out';
          return (
            <article
              key={item.id}
              className={`flex flex-col justify-between p-6 rounded-xl border transition-all ${
                isSoldOut
                  ? 'bg-oatmeal/20 border-oatmeal/60 opacity-80'
                  : 'bg-hearth border-oatmeal hover:border-crust/50 hover:shadow-md'
              }`}
            >
              <div>
                {/* Header line */}
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div>
                    {item.badge && (
                      <span className="inline-block text-[10px] font-mono uppercase tracking-wider font-semibold text-crust mb-1">
                        {item.badge}
                      </span>
                    )}
                    <h2 className="font-serif text-lg font-bold text-rye leading-tight">
                      {item.name}
                    </h2>
                  </div>
                  <span className="font-mono text-sm font-semibold text-rye shrink-0">
                    ${item.price.toFixed(2)}
                  </span>
                </div>

                <p className="text-xs text-crust-hover font-mono mb-2">
                  {item.subtitle}
                </p>

                <div className="mb-3">{getStatusBadge(item.ovenStatus)}</div>

                <p className="text-xs text-rye-muted leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Technical Fermentation Meta */}
                {(item.fermentationHours || item.hydrationPercent) && (
                  <div className="flex items-center gap-2 text-[11px] font-mono text-rye-muted mb-4">
                    {item.fermentationHours && (
                      <span className="bg-oatmeal-light px-2 py-0.5 rounded border border-oatmeal">
                        {item.fermentationHours}h Ferment
                      </span>
                    )}
                    {item.hydrationPercent && (
                      <span className="bg-oatmeal-light px-2 py-0.5 rounded border border-oatmeal">
                        {item.hydrationPercent}% Hydration
                      </span>
                    )}
                  </div>
                )}

                {/* Ingredients & Allergens */}
                <div className="space-y-1.5 pt-2 border-t border-oatmeal text-[11px] text-rye-muted mb-4">
                  <p>
                    <strong className="text-rye">Ingredients:</strong>{' '}
                    {item.ingredients.join(', ')}
                  </p>
                  <p>
                    <strong className="text-rye">Allergens:</strong>{' '}
                    {item.allergens.join(', ')}
                  </p>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-3 border-t border-oatmeal flex items-center justify-between gap-2">
                {item.traceability ? (
                  <button
                    type="button"
                    onClick={() => setSelectedTraceItem(item)}
                    className="inline-flex items-center gap-1.5 text-xs text-bramble font-medium hover:underline focus:outline-none"
                  >
                    <Info className="w-3.5 h-3.5" />
                    <span>Flour Traceability</span>
                  </button>
                ) : (
                  <span />
                )}

                <button
                  type="button"
                  disabled={isSoldOut}
                  onClick={() => addToCart(item)}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded text-xs font-semibold transition-colors ${
                    isSoldOut
                      ? 'bg-stone-200 text-stone-400 cursor-not-allowed'
                      : 'bg-bramble hover:bg-bramble-hover text-hearth shadow-sm focus:outline-none focus:ring-2 focus:ring-bramble'
                  }`}
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>{isSoldOut ? 'Sold Out' : 'Add to Order'}</span>
                </button>
              </div>
            </article>
          );
        })}
      </div>

      {filteredItems.length === 0 && (
        <div className="text-center py-16 bg-hearth-soft rounded-xl border border-oatmeal space-y-2">
          <p className="font-serif text-lg text-rye font-bold">No menu items found</p>
          <p className="text-xs text-rye-muted">
            Try adjusting your search query or switching to another category tab.
          </p>
        </div>
      )}

      {/* Traceability Modal */}
      <TraceabilityModal
        item={selectedTraceItem}
        onClose={() => setSelectedTraceItem(null)}
      />
    </div>
  );
}
