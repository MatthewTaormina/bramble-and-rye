import React from 'react';
import Link from 'next/link';
import { Wheat, ArrowRight } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4 py-16">
      <div className="max-w-md w-full bg-white rounded-2xl border border-oatmeal-dark shadow-sm p-8 text-center space-y-4">
        <div className="w-12 h-12 rounded-full bg-bramble-subtle text-bramble flex items-center justify-center mx-auto">
          <Wheat className="w-6 h-6 text-bramble" />
        </div>
        <h1 className="font-serif text-2xl font-bold text-rye">
          Page Not Found
        </h1>
        <p className="text-xs text-rye-muted leading-relaxed">
          The ovens have cooled for this path. The loaf or page you are looking for has been moved or does not exist.
        </p>
        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-bramble hover:bg-bramble-hover text-hearth text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors shadow-sm"
          >
            <span>Return to Hearth Home</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
