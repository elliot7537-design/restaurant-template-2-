export const nav = [
  { label: "Tasting", href: "#menu" },
  { label: "À La Carte", href: "#menu" },
  { label: "Reservations", href: "#reserve" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
];

export const hero = {
  eyebrow: "Michelin Recommended · Paris · Est. 1976",
  title: "Experience the Language of Taste",
  subtitle:
    "Modern French dining with a timeless soul — elegant plates, warm light, and flavors that linger long after the last sip.",
  ctaPrimary: { label: "Reserve a Table", href: "#reserve" },
  ctaSecondary: { label: "View the Menu", href: "#menu" },
  badge: "50th Anniversary",
  chip: { label: "Apr 2026", detail: "Evening · 8:00 pm" },
};

export const about = {
  eyebrow: "Our Story",
  title: "Blending tradition & innovation to create unforgettable dining experiences.",
  body:
    "For half a century, La Table Éternelle has celebrated the art of the French table. Our kitchen marries the discipline of classical technique with the curiosity of modern gastronomy — every plate a quiet conversation between heritage and the present moment.",
  stats: [
    { value: "50", label: "Years of craft" },
    { value: "★★", label: "Michelin 2026" },
    { value: "12", label: "Seasonal menus" },
  ],
  quote:
    "Cuisine is memory made edible — a discipline of patience and fire.",
  quoteAuthor: "Chef Étienne Laurent",
};

export type Dish = {
  name: string;
  description: string;
  price: string;
  tag?: string;
};

export const menu: Record<string, { label: string; items: Dish[] }> = {
  entrees: {
    label: "Entrées",
    items: [
      {
        name: "Foie Gras Poêlé",
        description: "Seared foie gras, brioche perdue, caramelized figs, aged port reduction.",
        price: "32",
        tag: "Signature",
      },
      {
        name: "Tartare de Bœuf",
        description: "Hand-cut Charolais beef, shallot, cornichon, egg yolk, sourdough toast.",
        price: "24",
      },
      {
        name: "Velouté de Champignons",
        description: "Wild mushroom velouté, chestnut cream, black truffle shavings, hazelnut oil.",
        price: "19",
      },
      {
        name: "Huîtres Fines de Claire",
        description: "Half-dozen oysters, mignonette, fresh lemon, rye & butter.",
        price: "28",
      },
    ],
  },
  plats: {
    label: "Plats",
    items: [
      {
        name: "Canard à l'Orange",
        description: "Slow-roasted duck breast, bitter orange glaze, turnip confit, wild watercress.",
        price: "46",
        tag: "Chef's Pick",
      },
      {
        name: "Bouillabaisse Marseillaise",
        description: "Saffron fish stew, rouille, gruyère, toasted baguette — a taste of the south.",
        price: "52",
      },
      {
        name: "Boeuf Bourguignon",
        description: "Braised short rib in Pinot Noir, pearl onions, smoked lardons, pommes purée.",
        price: "44",
      },
      {
        name: "Saint-Jacques Rôties",
        description: "Pan-seared scallops, cauliflower velouté, brown butter, Champagne reduction.",
        price: "48",
      },
      {
        name: "Ratatouille Provençale",
        description: "Heirloom vegetables, basil oil, olive crumble, aged sheep's milk feta.",
        price: "34",
        tag: "Vegan",
      },
    ],
  },
  desserts: {
    label: "Desserts",
    items: [
      {
        name: "Soufflé au Grand Marnier",
        description: "Classic orange soufflé, crème anglaise, candied peel.",
        price: "18",
        tag: "15 min",
      },
      {
        name: "Tarte Tatin",
        description: "Caramelized apples, buttered pastry, salted caramel ice cream.",
        price: "16",
      },
      {
        name: "Île Flottante",
        description: "Floating meringue, vanilla crème anglaise, praline shards.",
        price: "14",
      },
      {
        name: "Plateau de Fromages",
        description: "Chef's selection of five French cheeses, fig jam, walnut bread.",
        price: "22",
      },
    ],
  },
  vins: {
    label: "Vins",
    items: [
      {
        name: "Chablis Premier Cru 2020",
        description: "Mineral, citrus, a whisper of hazelnut — Burgundy's quiet cathedral.",
        price: "86",
      },
      {
        name: "Châteauneuf-du-Pape 2018",
        description: "Rhône Valley. Dark cherry, garrigue, sun-warmed leather.",
        price: "124",
        tag: "Cellar",
      },
      {
        name: "Sancerre Blanc 2022",
        description: "Loire. Gooseberry, flint, bright acidity — made for oysters.",
        price: "72",
      },
      {
        name: "Champagne Brut Nature NV",
        description: "Grower Champagne. Bone dry, toasted brioche, long finish.",
        price: "98",
      },
    ],
  },
};

export const gallery = [
  {
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&q=80",
    alt: "Candle-lit dining room",
  },
  {
    src: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=900&q=80",
    alt: "Plated entrée",
  },
  {
    src: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=900&q=80",
    alt: "Chef plating at pass",
  },
  {
    src: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=900&q=80",
    alt: "Wine tasting",
  },
  {
    src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=900&q=80",
    alt: "Intimate table setting",
  },
  {
    src: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=900&q=80",
    alt: "Artful dessert",
  },
];

export const careers = {
  eyebrow: "Careers",
  title: "We're always looking for passionate, dedicated people to join our growing team.",
  body:
    "A kitchen is only as good as the people who stand beside you. If you love this work — the quiet intensity, the care, the craft — we'd love to hear from you.",
  roles: [
    {
      title: "Sous Chef",
      location: "Paris · Full-time",
      body: "Lead alongside Chef Laurent. 5+ years in classical French kitchens.",
    },
    {
      title: "Sommelier",
      location: "Paris · Full-time",
      body: "Curate our 600-bottle cellar. WSET Level 3 or equivalent.",
    },
    {
      title: "Front of House",
      location: "Paris · Part-time",
      body: "Warm, attentive, multilingual. Fine-dining service experience preferred.",
    },
  ],
};

export const testimonials = {
  eyebrow: "Guest Voices",
  title: "Where every visit becomes a great memory.",
  items: [
    {
      quote:
        "The soufflé alone is worth the flight to Paris. Every course felt like a small, deliberate gift.",
      author: "Amélie R.",
      role: "Le Monde",
      rating: 5,
    },
    {
      quote:
        "Fifty years and still the warmest room in the city. Service with genuine, easy grace.",
      author: "Daniel V.",
      role: "Returning guest, 12 years",
      rating: 5,
    },
    {
      quote:
        "A kitchen that remembers what French food can be — honest, generous, and quietly brilliant.",
      author: "Priya S.",
      role: "Condé Nast Traveler",
      rating: 5,
    },
  ],
};

export const footer = {
  wordmark: "LA TABLE ÉTERNELLE",
  tagline: "Modern French dining with a timeless soul.",
  address: ["14 rue de Richelieu", "75001 Paris, France"],
  hours: [
    { day: "Tuesday – Thursday", time: "6:00 pm – 10:30 pm" },
    { day: "Friday – Saturday", time: "6:00 pm – 11:30 pm" },
    { day: "Sunday – Monday", time: "Closed" },
  ],
  contact: [
    { label: "Reservations", value: "+33 1 42 60 00 00" },
    { label: "Private events", value: "events@latable.fr" },
    { label: "Press", value: "press@latable.fr" },
  ],
  social: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "Facebook", href: "https://facebook.com" },
    { label: "TripAdvisor", href: "https://tripadvisor.com" },
  ],
  fineprint: "© 2026 La Table Éternelle. Michelin-recommended since 1976.",
};
