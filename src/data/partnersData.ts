import { MillPartner } from '@/types';

export const MILL_PARTNERS: MillPartner[] = [
  {
    id: '1847-stone-milling',
    name: '1847 Stone Milling Co.',
    region: 'Fergus, Ontario',
    specialty: 'Granite Runner-Stone Whole Grains',
    bio: 'Multi-generational family mill powered by natural waterways in Wellington County. Their Austrian granite runner mill stones operate at cold temperatures below 38°C, preserving the natural endosperm oils, vitamin E, and fragile wheatgerm enzymes.',
    grainsSupplied: ['Certified Organic Spelt', 'Hard Red Winter Wheat', 'Soft Pastry White Wheat'],
    millingStyle: 'Natural Granite Stone (Cold Milled)',
    relationshipYears: 5
  },
  {
    id: 'oak-manor-mills',
    name: 'Oak Manor Organic Millers',
    region: 'Tavistock, Ontario',
    specialty: 'Heritage Rye & Sprouted Seeds',
    bio: 'Pioneers of organic grain agriculture in Ontario since 1975. Oak Manor sources grain from strict 5-year biodynamic crop rotations that rebuild topsoil without synthetic nitrogen, yielding dense, mineral-rich rye with distinct earthy terroir.',
    grainsSupplied: ['Whole Winter Rye', 'Sprouted Rye Berries', 'Ancient Emmer'],
    millingStyle: 'Low-friction traditional stone-ground whole meal',
    relationshipYears: 6
  },
  {
    id: 'k2-heritage-milling',
    name: 'K2 Heritage Grain Project',
    region: 'Caledon, Ontario',
    specialty: 'Red Fife & Ancient Landrace Wheat',
    bio: 'Dedicated to preserving Canada’s agricultural heritage. K2 cultivates pure 1842-lineage Red Fife wheat and Einkorn in small parcels. Red Fife offers unmatched crust caramelization and deep, complex herbaceous aromatics.',
    grainsSupplied: ['Red Fife Landrace Wheat', 'Einkorn Ancient Grain'],
    millingStyle: 'Small-batch water-cooled stone mill',
    relationshipYears: 4
  },
  {
    id: 'clear-creek-acres',
    name: 'Clear Creek Organic Farm',
    region: 'Elora Gorge Basin, Ontario',
    specialty: 'Heritage Spelt & Cover-Cropped Pulses',
    bio: 'Family-run farm practicing non-inversion minimum tillage along the Grand River basin. Their deep glacial soils produce exceptionally high-protein spelt with sweet, nutty nuances.',
    grainsSupplied: ['Dinkel Heritage Spelt', 'Buckwheat Blossom Seed'],
    millingStyle: 'Grown exclusively for Bramble & Rye single-origin loaves',
    relationshipYears: 3
  }
];

export const HERITAGE_GRAINS = [
  {
    name: 'Red Fife Heritage Wheat',
    origin: 'Peterborough & Caledon, Ontario (circa 1842)',
    flavorNotes: 'Honey blossom, roasted hazelnut, warm cereal malt',
    extraction: '85% High-Extraction',
    bestFor: 'Crusty hearth boules, open crumb loaves'
  },
  {
    name: 'Heritage Dinkel Spelt',
    origin: 'Wellington County, Ontario',
    flavorNotes: 'Sweet nutty profile, roasted chestnuts, mild acidity',
    extraction: '100% Whole Grain Stone-Ground',
    bestFor: 'Seeded batards, rustic pastries, high-digestibility loaves'
  },
  {
    name: 'Ontario Winter Rye',
    origin: 'Tavistock Sand-Loam, Ontario',
    flavorNotes: 'Earthy, deep malt, warm spice, natural cocoa',
    extraction: '100% Whole Meal (Rugbrød)',
    bestFor: 'Dense seeded rye, brown butter cookies, mother sourdough starters'
  },
  {
    name: 'Einkorn (Farro Piccolo)',
    origin: 'Grand River Basin, Ontario',
    flavorNotes: 'Golden hue, toasted hazelnut, delicate sweet grass',
    extraction: '90% Semi-bolted',
    bestFor: 'Rotating weekly heritage loaves and rustic galette crusts'
  }
];
