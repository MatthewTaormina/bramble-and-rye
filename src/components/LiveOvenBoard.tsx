'use client';

import React, { useState } from 'react';
import { Flame, CheckCircle2, XCircle, RefreshCw, Info, ShoppingBag } from 'lucide-react';
import { MenuItem, OvenStatus } from '@/types';
import { MENU_ITEMS } from '@/data/menuData';
import { useCart } from '@/context/CartContext';
import TraceabilityModal from './TraceabilityModal';

export default function LiveOvenBoard() {
  const [items, setItems] = useState<MenuItem[]>(MENU_ITEMS.filter((i) => i.category === 'bread' || i.category === 'pastry'));
  const [activeFilter, setActiveFilter] = useState<'all' | OvenStatus>('all');
  const [selectedTraceItem, setSelectedTraceItem] = useState<MenuItem | null>(null);
  const [lastRefreshed, setLastRefreshed] = useState<string>('Just now');
  const { addToCart } = useCart();

  // Filter items
  const filteredItems = items.filter((item) => {
    if (activeFilter === 'all') return true;
    return item.ovenStatus === activeFilter;
  });

  // Client demo simulation: cycle an item's status to demonstrate real-time POS sync
  const simulateStatusChange = () => {
    setItems((prev) =>
      prev.map((item, idx) => {
        if (idx === 0) {
          const nextStatus: OvenStatus =
            item.ovenStatus === 'hot'
              ? 'available'
              : item.ovenStatus === 'available'
              ? 'sold_out'
              : 'hot';
          return {
            ...item,
            ovenStatus: nextStatus,
            statusLabel:
              nextStatus === 'hot'
                ? 'Hot from Hearth (New Batch)'
                : nextStatus === 'available'
                ? 'Available on Shelf'
                : 'Sold Out for Today',
          };
        }
        return item;
      })
    );
    setLastRefreshed(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
  };

  const getStatusBadge = (status: OvenStatus) => {
    switch (status) {
      case 'hot':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-crust-subtle text-crust border border-crust/30">
            <Flame className="w-3.5 h-3.5 fill-crust text-crust animate-pulse" />
            Hot from the Hearth
          </span>
        );
      case 'available':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
            Available on Shelf
          </span>
        );
      case 'sold_out':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-stone-100 text-stone-500 border border-stone-200">
            <XCircle className="w-3.5 h-3.5 text-stone-400" />
            Sold Out for Today
          </span>
        );
    }
  };

  return (
    <section aria-labelledby="live-oven-title" className="py-12 bg-hearth-paper/50 rounded-xl border border-oatmeal p-6 md:p-8">
      {/* Header & Controls */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-oatmeal">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-crust animate-ping" />
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-bramble">
              Live POS Hearth Feed
            </span>
          </div>
          <h2 id="live-oven-title" className="font-serif text-2xl md:text-3xl font-bold text-rye">
            From the Oven Board
          </h2>
          <p className="text-sm text-rye-muted mt-1 max-w-xl">
            Real-time status of current hearth discharges and shelf inventory. Batches bake continually between 5:00 AM and 1:00 PM.
          </p>
        </div>

        {/* Demo simulator & sync status */}
        <div className="flex flex-wrap items-center gap-2.5">
          <span className="text-xs text-rye-muted font-mono hidden sm:inline">
            Synced: {lastRefreshed}
          </span>
          <button
            onClick={simulateStatusChange}
            type="button"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-oatmeal hover:bg-oatmeal-dark text-rye text-xs font-medium transition-colors shadow-sm"
            title="Click to simulate real-time POS batch cycle for client demonstration"
          >
            <RefreshCw className="w-3.5 h-3.5 text-bramble" />
            <span>Simulate POS Update</span>
          </button>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 pt-6 pb-6">
        <button
          onClick={() => setActiveFilter('all')}
          className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
            activeFilter === 'all'
              ? 'bg-rye text-hearth'
              : 'bg-oatmeal/60 text-rye hover:bg-oatmeal'
          }`}
        >
          All Items ({items.length})
        </button>
        <button
          onClick={() => setActiveFilter('hot')}
          className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors flex items-center gap-1 ${
            activeFilter === 'hot'
              ? 'bg-crust text-white'
              : 'bg-oatmeal/60 text-rye hover:bg-oatmeal'
          }`}
        >
          <Flame className="w-3 h-3" /> Hot from Hearth
        </button>
        <button
          onClick={() => setActiveFilter('available')}
          className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors flex items-center gap-1 ${
            activeFilter === 'available'
              ? 'bg-emerald-800 text-white'
              : 'bg-oatmeal/60 text-rye hover:bg-oatmeal'
          }`}
        >
          <CheckCircle2 className="w-3 h-3" /> Available on Shelf
        </button>
        <button
          onClick={() => setActiveFilter('sold_out')}
          className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
            activeFilter === 'sold_out'
              ? 'bg-stone-600 text-white'
              : 'bg-oatmeal/60 text-rye hover:bg-oatmeal'
          }`}
        >
          Sold Out
        </button>
      </div>

      {/* Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredItems.map((item) => {
          const isSoldOut = item.ovenStatus === 'sold_out';
          return (
            <div
              key={item.id}
              className={`flex flex-col justify-between p-5 rounded-lg border transition-all ${
                isSoldOut
                  ? 'bg-oatmeal/20 border-oatmeal/60 opacity-75'
                  : 'bg-hearth border-oatmeal hover:border-crust/50 hover:shadow-md'
              }`}
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-serif text-lg font-bold text-rye leading-snug">
                    {item.name}
                  </h3>
                  <span className="font-mono text-sm font-semibold text-rye shrink-0">
                    ${item.price.toFixed(2)}
                  </span>
                </div>

                <div className="mb-3">{getStatusBadge(item.ovenStatus)}</div>

                <p className="text-xs text-rye-muted line-clamp-2 mb-4 leading-relaxed">
                  {item.description}
                </p>

                {item.fermentationHours && (
                  <div className="flex items-center gap-2 text-[11px] font-mono text-rye-muted mb-4">
                    <span className="bg-oatmeal/70 px-2 py-0.5 rounded">
                      {item.fermentationHours}h Cold Ferment
                    </span>
                    {item.hydrationPercent && (
                      <span className="bg-oatmeal/70 px-2 py-0.5 rounded">
                        {item.hydrationPercent}% Hydration
                      </span>
                    )}
                  </div>
                )}
              </div>

              {/* Bottom Actions */}
              <div className="pt-3 border-t border-oatmeal flex items-center justify-between gap-2">
                {item.traceability ? (
                  <button
                    type="button"
                    onClick={() => setSelectedTraceItem(item)}
                    className="inline-flex items-center gap-1 text-[11px] text-bramble font-medium hover:underline"
                  >
                    <Info className="w-3.5 h-3.5" />
                    <span>Trace Flour</span>
                  </button>
                ) : (
                  <span />
                )}

                <button
                  type="button"
                  disabled={isSoldOut}
                  onClick={() => addToCart(item)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-semibold transition-colors ${
                    isSoldOut
                      ? 'bg-stone-200 text-stone-400 cursor-not-allowed'
                      : 'bg-bramble hover:bg-bramble-hover text-hearth shadow-sm'
                  }`}
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>{isSoldOut ? 'Sold Out' : 'Add to Order'}</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Flour Traceability Modal */}
      <TraceabilityModal
        item={selectedTraceItem}
        onClose={() => setSelectedTraceItem(null)}
      />
    </section>
  );
}
