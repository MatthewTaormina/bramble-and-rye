'use client';

import React, { useState } from 'react';
import { X, Plus, Minus, Trash2, Clock, Sparkles, CheckCircle2, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
  const {
    items,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    pickupSlot,
    setPickupSlot,
    subtotal,
    totalItems,
    clearCart,
  } = useCart();

  const [isOrdered, setIsOrdered] = useState(false);
  const [orderVoucher, setOrderVoucher] = useState('');

  if (!isCartOpen) return null;

  const handleSimulateOrder = () => {
    const randomVoucher = 'BR-' + Math.floor(100000 + Math.random() * 900000);
    setOrderVoucher(randomVoucher);
    setIsOrdered(true);
  };

  const handleFinish = () => {
    setIsOrdered(false);
    clearCart();
    setIsCartOpen(false);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Daily Pre-Order Bag"
      className="fixed inset-0 z-50 overflow-hidden bg-rye/60 backdrop-blur-sm animate-fade-in"
      onClick={() => setIsCartOpen(false)}
    >
      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div
          className="w-screen max-w-md bg-hearth border-l border-oatmeal-dark flex flex-col shadow-2xl text-rye"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="p-5 border-b border-oatmeal flex items-center justify-between bg-hearth-paper">
            <div className="flex items-center gap-2.5">
              <span className="p-2 bg-bramble text-hearth rounded-full">
                <ShoppingBag className="w-4 h-4" />
              </span>
              <div>
                <h2 className="font-serif text-lg font-bold text-rye">
                  Daily Hearth Bag
                </h2>
                <span className="text-xs text-rye-muted font-mono">
                  {totalItems} {totalItems === 1 ? 'item' : 'items'} selected
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-1.5 rounded-full text-rye-muted hover:text-rye hover:bg-oatmeal transition-colors"
              aria-label="Close bag"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Microcopy Guarantee Banner */}
          <div className="bg-oatmeal-light px-5 py-3 border-b border-oatmeal flex items-start gap-2.5">
            <Sparkles className="w-4 h-4 text-crust shrink-0 mt-0.5" />
            <p className="text-xs text-rye-muted italic leading-relaxed">
              &ldquo;Baking fresh tomorrow at 5:00 AM. Your loaves will be bagged warm for your scheduled window.&rdquo;
            </p>
          </div>

          {/* Body Content */}
          <div className="flex-1 overflow-y-auto p-5 space-y-6">
            {items.length === 0 ? (
              <div className="text-center py-12 space-y-3">
                <ShoppingBag className="w-12 h-12 text-oatmeal-dark mx-auto stroke-[1.5]" />
                <h3 className="font-serif text-base font-semibold text-rye">
                  Your hearth bag is empty
                </h3>
                <p className="text-xs text-rye-muted max-w-xs mx-auto">
                  Explore our naturally leavened boules, heritage flours, and flaky wild bramble morning buns.
                </p>
              </div>
            ) : (
              <>
                {/* Item List */}
                <div className="space-y-3">
                  {items.map(({ item, quantity }) => (
                    <div
                      key={item.id}
                      className="p-3.5 rounded-lg border border-oatmeal bg-hearth-soft flex items-start justify-between gap-3"
                    >
                      <div className="flex-1">
                        <div className="flex items-baseline justify-between gap-2">
                          <h4 className="font-serif font-bold text-sm text-rye">
                            {item.name}
                          </h4>
                          <span className="font-mono text-xs font-semibold text-rye">
                            ${(item.price * quantity).toFixed(2)}
                          </span>
                        </div>
                        <p className="text-[11px] text-rye-muted line-clamp-1 mt-0.5">
                          {item.subtitle}
                        </p>

                        <div className="flex items-center gap-2 mt-3">
                          <div className="flex items-center border border-oatmeal-dark rounded bg-hearth">
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.id, quantity - 1)}
                              className="p-1 hover:bg-oatmeal text-rye transition-colors"
                              aria-label={`Decrease quantity of ${item.name}`}
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="px-2 text-xs font-mono font-semibold">
                              {quantity}
                            </span>
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.id, quantity + 1)}
                              className="p-1 hover:bg-oatmeal text-rye transition-colors"
                              aria-label={`Increase quantity of ${item.name}`}
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>

                          <button
                            type="button"
                            onClick={() => removeFromCart(item.id)}
                            className="p-1 text-rye-muted hover:text-bramble transition-colors"
                            aria-label={`Remove ${item.name}`}
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Local Pickup Window Selector */}
                <div className="p-4 bg-hearth-soft rounded-lg border border-oatmeal space-y-3">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-crust" />
                    <h4 className="font-serif font-bold text-xs uppercase tracking-wider text-rye">
                      Select Collection Window
                    </h4>
                  </div>
                  <p className="text-[11px] text-rye-muted">
                    Batches are pulled warm based on collection timing to eliminate counter staging delay.
                  </p>

                  <div className="space-y-2 pt-1">
                    {[
                      { id: 'morning', label: 'Morning Warm Hearth (7:00 AM – 10:00 AM)', desc: 'Batches 1 & 2 • Fresh Country Boules' },
                      { id: 'midday', label: 'Midday Pick (10:00 AM – 1:00 PM)', desc: 'Full inventory • Baguettes & Pastries' },
                      { id: 'afternoon', label: 'Afternoon Pick (1:00 PM – 4:00 PM)', desc: 'Pre-reserved loaves staged in linen bags' },
                    ].map((slot) => (
                      <label
                        key={slot.id}
                        className={`flex items-start gap-2.5 p-2.5 rounded border cursor-pointer transition-all text-xs ${
                          pickupSlot === slot.id
                            ? 'bg-oatmeal border-crust text-rye'
                            : 'bg-hearth border-oatmeal hover:bg-oatmeal/40 text-rye-muted'
                        }`}
                      >
                        <input
                          type="radio"
                          name="pickup-slot"
                          value={slot.id}
                          checked={pickupSlot === slot.id}
                          onChange={(e) => setPickupSlot(e.target.value)}
                          className="mt-0.5 text-bramble focus:ring-bramble"
                        />
                        <div>
                          <p className="font-semibold text-rye">{slot.label}</p>
                          <p className="text-[11px] text-rye-muted">{slot.desc}</p>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Footer Subtotal & Action */}
          {items.length > 0 && (
            <div className="p-5 border-t border-oatmeal bg-hearth-paper space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-rye-muted">Estimated Subtotal</span>
                <span className="font-mono text-base font-bold text-rye">
                  ${subtotal.toFixed(2)}
                </span>
              </div>
              <p className="text-[11px] text-rye-muted">
                Applicable taxes calculated at bakery register. No online prepayment required for demo orders.
              </p>
              <button
                type="button"
                onClick={handleSimulateOrder}
                className="w-full py-3 px-4 bg-bramble hover:bg-bramble-hover text-hearth text-xs font-semibold uppercase tracking-wider rounded transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-bramble focus:ring-offset-2 flex items-center justify-center gap-2"
              >
                <span>Confirm Demo Pre-Order</span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Simulated Order Confirmation Dialog */}
      {isOrdered && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-rye/80 backdrop-blur-sm animate-fade-in"
          onClick={handleFinish}
        >
          <div
            className="bg-hearth rounded-lg border border-oatmeal-dark max-w-sm w-full p-6 text-center space-y-4 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>

            <h3 className="font-serif text-xl font-bold text-rye">
              Order Staged at the Hearth
            </h3>

            <p className="text-xs text-rye-muted leading-relaxed">
              Your loaves are reserved for tomorrow morning. Our head baker will score and fire your bread fresh at 5:00 AM.
            </p>

            <div className="p-3 bg-oatmeal-light rounded border border-oatmeal font-mono text-sm">
              <span className="text-[10px] uppercase text-rye-muted block">Pickup Voucher</span>
              <strong className="text-bramble text-base tracking-widest">{orderVoucher}</strong>
            </div>

            <p className="text-[11px] text-rye-muted">
              Present this voucher at the pickup window between your scheduled time window.
            </p>

            <button
              type="button"
              onClick={handleFinish}
              className="w-full py-2.5 bg-rye text-hearth text-xs font-semibold rounded hover:bg-rye-light transition-colors"
            >
              Done & Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
