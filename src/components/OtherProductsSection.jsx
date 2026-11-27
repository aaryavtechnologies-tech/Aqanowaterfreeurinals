import React, { useState } from 'react';

export const productsData = [
  {
    id: 'waterless-urinal',
    name: 'Waterless Odourless Urinal',
    tagline: '100% Zero-Water Flush Ceramic Eco-Sanitation Urinal',
    category: 'Waterless Sanitation',
    categoryIcon: '🚻',
    status: 'AVAILABLE',
    icon: '🚻',
    themeColor: '#0284c7',
    badgeText: 'Complete Ceramic Fixture',
    price: '₹ 10,000 / Piece (Incl. 18% GST)',
    image: '/assets/images/waterless-urinal-ceramic.jpg',
    gallery: [
      '/assets/images/waterless-urinal-ceramic.jpg',
      '/assets/images/waterless-urinal-front.jpg',
      '/assets/images/waterless-urinal-top-view.jpg',
    ],
    quickSpecs: ['Zero Flush Water', 'Complete Odour Lock', '₹ 10,000 / Piece (Incl. 18% GST)', 'Ceramic Vitreous China'],
    description:
      'Engineered waterless and odourless ceramic urinal that operates with 100% zero water flush. Features built-in odour-trap coupling and anti-bacterial hygiene barrier. Ideal for commercial complexes, malls, offices, factories, hospitals, and educational institutions.',
    highlights: [
      'Saves ~50,000 to 1,00,000 litres of fresh water per urinal every year',
      'Specialized mechanical odour-barrier prevents foul drain gases completely',
      'Zero flush valves, zero sensors, zero leaks, and zero electric pump costs',
      'High-grade stain-resistant ceramic vitreous china with anti-splash contour',
      'Direct manufacturer price of ₹ 10,000 / piece (including 18% GST)',
    ],
    idealFor: 'Offices, IT Parks, Malls, Universities, Factories, Hospitals & Public Restrooms',
  },
  {
    id: 'waterless-urinal-coupling',
    name: 'Waterless Urinal Waste Coupling',
    tagline: 'Universal Odour-Proof Retrofit Stainless Steel Waste Coupling',
    category: 'Waterless Sanitation',
    categoryIcon: '🔩',
    status: 'AVAILABLE',
    icon: '🔩',
    themeColor: '#0369a1',
    badgeText: 'Universal Retrofit',
    price: 'Factory Direct Pricing',
    image: '/assets/images/waterless-urinal-waste-coupling.jpg',
    gallery: [
      '/assets/images/waterless-urinal-waste-coupling.jpg',
      '/assets/images/waterless-urinal-coupling-group.jpg',
    ],
    quickSpecs: ['Stainless Steel', 'One-Way Odour Trap', 'Silicone Seal Gasket', 'www.waterfreeurinal.in'],
    description:
      'Universal high-grade stainless steel waste coupling engineered with a one-way mechanical odour-seal membrane. Converts ANY conventional flushing urinal into a 100% waterless, odourless unit without breaking tiles or changing existing plumbing lines.',
    highlights: [
      'Universal retrofit: Fits all standard commercial & residential urinal bowls',
      'Advanced one-way odour barrier locks sewer gas, smell, and drain insects',
      'Heavy-duty stainless steel body with solid brass lock-nut & red silicone gasket',
      'Top perforated dome strainer stops cigarette butts, chewing gum & pipe debris',
      'Official product engraved with www.waterfreeurinal.in for verified authenticity',
    ],
    idealFor: 'Commercial Buildings, Hotels, Existing Restroom Retrofits, Plumbers & Contractors',
  },
  {
    id: 'heat-pump',
    name: 'Heat Pump (Hot Water)',
    tagline: 'Thermodynamic High-Efficiency Water Heating System',
    category: 'HVAC & Heating',
    categoryIcon: '♨️',
    status: 'COMING SOON',
    icon: '♨️',
    themeColor: '#ea580c',
    badgeText: '75% Power Saving',
    price: 'Coming Soon',
    quickSpecs: ['Air-to-Water', '24/7 All-Weather', 'Smart Digital Control'],
    description:
      'Next-generation thermodynamic air-to-water heat pump extracting ambient heat from the air to heat water at up to 75% lower electricity consumption than conventional electric geysers.',
    highlights: [
      'Cuts domestic & commercial water heating power bills by 70% to 80%',
      '24/7 continuous operation in all weather conditions (rain, winter, night)',
      'Smart microcomputer digital control with automatic temperature setting',
      'Eco-friendly low-GWP refrigerant with titanium/stainless heat exchanger',
      'Centralized hot water supply for multiple bathrooms simultaneously',
    ],
    idealFor: 'Bungalows, Villas, Hotels, Hospitals, Hostels & Residential Societies',
  },
  {
    id: 'nc-roof',
    name: 'NC Roof (No Corrosion Roof)',
    tagline: '100% Anti-Corrosive Industrial & Coastal Roofing',
    category: 'Roofing & Drainage',
    categoryIcon: '🛡️',
    status: 'AVAILABLE',
    icon: '🛡️',
    themeColor: '#059669',
    badgeText: 'Rust-Proof Lifetime',
    price: 'Factory Sizing / Supply',
    quickSpecs: ['Acid & Fume Proof', 'Coastal Salt Proof', 'Heavy Structural Load'],
    description:
      'Engineered non-metallic anti-corrosion roofing sheets manufactured specifically for highly corrosive, chemical fume-heavy, acid-rich, and coastal salt-spray environments where metal sheets rust within years.',
    highlights: [
      '100% corrosion-proof and rust-free lifetime performance',
      'Resistant to acid vapors, alkali fumes, salt spray & industrial smog',
      'High impact resistance and exceptional load-bearing strength',
      'Superior thermal insulation keeping factory sheds cooler in summer',
      'No peeling, zero rust staining, and no paint repainting required',
    ],
    idealFor: 'Chemical Plants, Dyeing Units, Electroplating, Coastal Sheds & Warehouses',
  },
  {
    id: 'puf-panel-roof',
    name: 'PUF Panel Roof',
    tagline: 'Sandwich Polyurethane Foam Insulated Roofing Panels',
    category: 'PUF Panels',
    categoryIcon: '🏗️',
    status: 'AVAILABLE',
    icon: '🏗️',
    themeColor: '#2563eb',
    badgeText: 'Thermal Shield',
    price: 'Customized Sq Ft Pricing',
    quickSpecs: ['5-8°C Cooler Sheds', 'Rain Noise Dampening', 'Modular Pre-Painted'],
    description:
      'High-performance sandwich polyurethane foam (PUF) insulated roof panels designed to provide unmatched thermal comfort, sound dampening, and massive reduction in air-conditioning loads.',
    highlights: [
      'Cuts indoor shed temperature by 5°C to 8°C during peak summer',
      'Huge reductions in industrial cooling and HVAC power bills',
      'Dampens deafening monsoon rain noise inside factories and homes',
      'Rigid pre-painted steel exterior with flame-retardant high-density PUF core',
      'Rapid prefabricated modular installation with watertight overlaps',
    ],
    idealFor: 'Factory Sheds, Cold Storages, Food Processing, Bungalows & Prefab Buildings',
  },
  {
    id: 'puf-panel-wall',
    name: 'PUF Panel Wall',
    tagline: 'Insulated Sandwich Wall Cladding & Partition Panels',
    category: 'PUF Panels',
    categoryIcon: '🧱',
    status: 'AVAILABLE',
    icon: '🧱',
    themeColor: '#7c3aed',
    badgeText: 'Cold Chain & Clean Rooms',
    price: '40mm - 150mm Thickness',
    quickSpecs: ['Tongue & Groove', 'Food-Grade Finish', '40mm - 150mm Thickness'],
    description:
      'Factory-engineered PUF core insulated wall panels providing an airtight, temperature-controlled, hygienic wall envelope for clean rooms, cold storages, commercial sheds, and modern partitions.',
    highlights: [
      'High thermal resistance (R-value) for strict temperature control',
      'Precision tongue-and-groove joint profile preventing thermal leakage',
      'Smooth, dust-free, non-toxic food-grade surfaces easy to sanitize',
      'Lightweight yet high structural flexural strength for large spans',
      'Available in customized thicknesses from 40mm up to 150mm',
    ],
    idealFor: 'Cold Storages, Pharma Clean Rooms, Ripening Chambers & Prefab Shelters',
  },
  {
    id: 'upvc-roof-gutter',
    name: 'UPVC Roof Gutter',
    tagline: 'Heavy-Duty UV-Stabilized Rainwater Harvesting Drainage',
    category: 'Roofing & Drainage',
    categoryIcon: '🌧️',
    status: 'AVAILABLE',
    icon: '🌧️',
    themeColor: '#0891b2',
    badgeText: 'Rainwater Drainage',
    price: 'Per Running Meter',
    quickSpecs: ['UV-Protected UPVC', 'Leak-Proof Rubber Seals', 'Anti-Clog Smooth Flow'],
    description:
      'Durable, UV-stabilized UPVC rainwater harvesting drainage gutters engineered for leak-free rainwater collection, channelization, and building foundation protection without rust or corrosion.',
    highlights: [
      '100% rust-proof, rot-proof, and chemical-resistant UPVC construction',
      'High flow hydraulic capacity with leak-proof rubber seal fittings',
      'UV-stabilized formula prevents embrittlement and cracking under hot sun',
      'Smooth interior prevents moss, dirt, and dry leaf clogs',
      'Ideal partner for ground recharge and rainwater harvesting tanks',
    ],
    idealFor: 'Industrial Sheds, Warehouses, Residential Bungalows & Farmhouses',
  },
  {
    id: 'asa-tile-roof-sheet',
    name: 'ASA Tile Roof Sheet',
    tagline: 'Architectural Synthetic Resin Spanish Wave Roofing Tiles',
    category: 'Roofing & Drainage',
    categoryIcon: '🏡',
    status: 'AVAILABLE',
    icon: '🏡',
    themeColor: '#b45309',
    badgeText: 'Luxury Spanish Tile',
    price: 'Direct Supply / Sheet',
    quickSpecs: ['Weather-Grade ASA', 'Non-Fading Color', 'Lightweight & Shatterproof'],
    description:
      'Premium Spanish tile-style synthetic resin roofing sheets coated with weather-grade ASA resin. Combines timeless Mediterranean aesthetic luxury with modern high-strength durability.',
    highlights: [
      'Classic Roman/Spanish clay tile visual elegance without heavy structural load',
      'ASA surface layer guarantees long-lasting color stability against UV fading',
      'Superb acoustic and thermal insulation (rain sound muffling & heat reflection)',
      '100% waterproof, wind-resistant, shatter-proof, and hail-resistant',
      'Zero maintenance — self-cleaning surface washes clean in the rain',
    ],
    idealFor: 'Luxury Bungalows, Resorts, Farmhouses, Gazebos & Aesthetic Cottages',
  },
  {
    id: 'solar-ac',
    name: 'Solar AC (Solar Air Conditioner)',
    tagline: 'Hybrid Direct Solar-Powered Air Conditioning System',
    category: 'HVAC & Heating',
    categoryIcon: '☀️',
    status: 'AVAILABLE',
    icon: '☀️',
    themeColor: '#d97706',
    badgeText: 'Direct Solar PV',
    price: 'Hybrid Solar Inverter',
    quickSpecs: ['Daytime Zero Grid', 'DC Inverter Tech', 'Blends Solar & AC Grid'],
    description:
      'Next-generation hybrid solar air conditioner operating directly on solar photovoltaic (PV) DC electricity during daytime peak heat, minimizing or eliminating electricity meter consumption.',
    highlights: [
      'Operates seamlessly on direct solar PV power during high sunshine hours',
      'Slashes daytime air-conditioning electric bills by up to 70% - 90%',
      'Intelligent dual-power controller automatically blends solar and grid AC power',
      'High-efficiency DC inverter rotary compressor with eco refrigerant',
      'No expensive inverter batteries required for daytime direct operation',
    ],
    idealFor: 'Offices, Shops, Bungalows, Factories, Clinics & Farmhouses',
  },
  {
    id: 'wpc-door-frame',
    name: 'WPC Door and Frame',
    tagline: '100% Waterproof & Termite-Proof Wood Polymer Composite Doors',
    category: 'Doors & Interiors',
    categoryIcon: '🚪',
    status: 'AVAILABLE',
    icon: '🚪',
    themeColor: '#854d0e',
    badgeText: 'Termite & Water Proof',
    price: 'Standard & Custom Sizes',
    quickSpecs: ['100% Waterproof', 'Termite-Proof Lifetime', 'Flame Retardant Green'],
    description:
      'High-density solid Wood Polymer Composite (WPC) doors and door frames combining the natural beauty of wood with polymer resistance against water, termites, and flame.',
    highlights: [
      '100% waterproof & moisture-proof — never swells, rots, or warps in water',
      'Lifetime guarantee against termites, white ants, and wood-boring pests',
      'Self-extinguishing flame-retardant material with high fire safety',
      'High screw-holding capacity, smooth finish ready for paint, polish, or laminate',
      'Eco-friendly green product saving trees and natural forests',
    ],
    idealFor: 'Bathrooms, Kitchens, Balconies, Residential Flats, Villas & Hotels',
  },
];

function ProductCard({ prod, onSelectProductForRfq }) {
  const [activeImg, setActiveImg] = useState(prod.image || (prod.gallery && prod.gallery[0]) || null);
  const isComingSoon = prod.status === 'COMING SOON';
  const whatsappText = isComingSoon
    ? `Hello Mukeshbhai, I am interested in ${prod.name} (Coming Soon). Please notify me and share technical updates.`
    : `Hello Mukeshbhai, I would like more information, technical catalogue, and pricing for ${prod.name}.`;

  return (
    <article key={prod.id} className="product-range-card modern-card">
      {/* Product Image Wrap (If images available) */}
      {prod.image && (
        <div className="product-card-image-wrap">
          <img
            src={activeImg}
            alt={prod.name}
            width="360"
            height="230"
            loading="lazy"
            className="product-card-img"
          />
          {prod.price && (
            <span className="product-price-badge">{prod.price}</span>
          )}
        </div>
      )}

      {/* Gallery Thumbnails */}
      {prod.gallery && prod.gallery.length > 1 && (
        <div className="product-gallery-thumbs" aria-label={`${prod.name} photos`}>
          {prod.gallery.map((imgUrl, i) => (
            <button
              key={i}
              type="button"
              className={`product-thumb-btn ${activeImg === imgUrl ? 'active' : ''}`}
              onClick={() => setActiveImg(imgUrl)}
              aria-label={`View photo ${i + 1} of ${prod.name}`}
            >
              <img src={imgUrl} alt={`${prod.name} preview ${i + 1}`} className="product-thumb-img" />
            </button>
          ))}
        </div>
      )}

      {/* Card Header Bar */}
      <div className="product-card-banner">
        <div className="product-icon-wrap" aria-hidden="true">
          <span>{prod.icon}</span>
        </div>
        <div className="product-meta-wrap">
          <span className="product-category-chip">{prod.category}</span>
          {isComingSoon ? (
            <span className="badge-status badge-coming-soon">
              <span className="pulsing-dot"></span> COMING SOON
            </span>
          ) : (
            <span className="badge-status badge-available">
              ✓ AVAILABLE
            </span>
          )}
        </div>
      </div>

      {/* Card Body */}
      <div className="product-card-content">
        <h3 className="product-card-title">{prod.name}</h3>
        <p className="product-card-tagline">{prod.tagline}</p>

        {/* Quick Specs Pills */}
        <div className="product-quick-specs">
          {prod.quickSpecs.map((spec, i) => (
            <span key={i} className="quick-spec-pill">
              {spec}
            </span>
          ))}
        </div>

        <p className="product-card-desc">{prod.description}</p>

        {/* Highlight Box */}
        <div className="product-highlights-box">
          <div className="highlights-header">
            <span className="highlights-title">Key Engineering Highlights:</span>
            <span className="badge-pill-accent">{prod.badgeText}</span>
          </div>
          <ul className="product-highlights-list">
            {prod.highlights.map((item, idx) => (
              <li key={idx}>
                <span className="check-bullet">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="product-ideal-box">
          <span className="ideal-label">📍 Ideal For:</span>
          <span className="ideal-text">{prod.idealFor}</span>
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="product-card-footer">
        <a
          href={`https://wa.me/917984515685?text=${encodeURIComponent(whatsappText)}`}
          target="_blank"
          rel="noopener noreferrer"
          className={`btn ${isComingSoon ? 'btn-whatsapp' : 'btn-primary'} btn-sm card-action-btn`}
        >
          <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" style={{ flexShrink: 0 }}>
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.16 12.04 20.16C10.61 20.16 9.2 19.78 7.97 19.05L7.68 18.88L4.56 19.7L5.39 16.66L5.2 16.36C4.4 15.08 3.97 13.51 3.97 11.91C3.97 7.37 7.67 3.67 12.05 3.67ZM8.86 7.47C8.66 7.47 8.33 7.54 8.05 7.84C7.78 8.14 7.02 8.85 7.02 10.3C7.02 11.75 8.08 13.15 8.22 13.35C8.37 13.55 10.3 16.53 13.26 17.81C13.97 18.11 14.52 18.3 14.95 18.43C15.66 18.66 16.31 18.63 16.82 18.55C17.39 18.47 18.57 17.84 18.82 17.14C19.06 16.44 19.06 15.83 18.99 15.71C18.92 15.59 18.72 15.52 18.42 15.37C18.12 15.22 16.65 14.5 16.38 14.4C16.1 14.3 15.91 14.25 15.71 14.55C15.51 14.85 14.95 15.52 14.77 15.71C14.6 15.91 14.43 15.93 14.13 15.78C13.83 15.63 12.87 15.32 11.73 14.3C10.84 13.51 10.25 12.53 10.07 12.23C9.9 11.93 10.05 11.77 10.2 11.62C10.34 11.49 10.5 11.27 10.65 11.1C10.8 10.93 10.85 10.81 10.95 10.61C11.05 10.41 11 10.24 10.92 10.09C10.85 9.94 10.25 8.47 10.01 7.87C9.77 7.29 9.53 7.37 9.35 7.36C9.18 7.35 8.99 7.47 8.86 7.47Z" />
          </svg>
          <span>{isComingSoon ? 'Pre-Enquire on WhatsApp' : 'Get Quote on WhatsApp'}</span>
        </a>
        {onSelectProductForRfq ? (
          <button
            type="button"
            className="btn btn-outline btn-sm"
            onClick={() => onSelectProductForRfq(prod.name)}
            title="Fill online enquiry form for this product"
          >
            RFQ Form ↓
          </button>
        ) : (
          <a
            href="tel:+917984515685"
            className="btn btn-outline btn-sm"
            aria-label={`Call for ${prod.name}`}
            title="Call Mukeshbhai Thakkar"
          >
            📞 Call
          </a>
        )}
      </div>
    </article>
  );
}

export default function OtherProductsSection({ onOpenDemo, showHeader = true, onSelectProductForRfq }) {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { key: 'ALL', label: 'All Products', count: 10 },
    { key: 'Waterless Sanitation', label: 'Waterless Sanitation', count: 2, icon: '🚻' },
    { key: 'HVAC & Heating', label: 'HVAC & Solar', count: 2, icon: '♨️' },
    { key: 'Roofing & Drainage', label: 'Roofing & Gutters', count: 3, icon: '🛡️' },
    { key: 'PUF Panels', label: 'PUF Panels', count: 2, icon: '🏗️' },
    { key: 'Doors & Interiors', label: 'WPC Doors', count: 1, icon: '🚪' },
  ];

  const filteredProducts = productsData.filter((prod) => {
    const matchesCategory = activeCategory === 'ALL' || prod.category === activeCategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      prod.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="other-products" className="section-py other-products-section">
      <span id="products" style={{ display: 'block', position: 'relative', top: '-80px', visibility: 'hidden' }}></span>
      <div className="container">
        {/* Section Header */}
        {showHeader && (
          <div className="section-header">
            <span className="section-badge">Eco-Friendly &amp; Building Solutions</span>
            <h2 className="section-title">
              Our Extended Range of <span className="text-gradient">Sustainable Products</span>
            </h2>
            <p className="section-desc">
              Along with MOLLISAQUA® Water Conditioners, Param Industries brings you innovative green technologies, advanced anti-corrosion roofing, energy-saving systems, and durable building solutions.
            </p>
          </div>
        )}

        {/* Search & Filter Bar */}
        <div className="product-filter-control-panel">
          <div className="product-search-box">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" style={{ width: 18, height: 18, color: '#94a3b8' }}>
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input
              type="text"
              placeholder="Search products (e.g. Urinal, Coupling, Heat Pump, PUF, NC Roof, Solar AC, Door)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search sustainable products"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="clear-search-btn"
                aria-label="Clear search query"
              >
                ✕
              </button>
            )}
          </div>

          <div className="product-category-tabs" role="tablist" aria-label="Filter products by category">
            {categories.map((cat) => (
              <button
                key={cat.key}
                type="button"
                role="tab"
                aria-selected={activeCategory === cat.key}
                className={`product-cat-pill ${activeCategory === cat.key ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.key)}
              >
                {cat.icon && <span style={{ marginRight: '6px' }}>{cat.icon}</span>}
                {cat.label} <span className="cat-pill-count">{cat.count}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Results Count & Helper */}
        <div className="product-results-summary">
          <span>Showing <strong>{filteredProducts.length}</strong> of <strong>{productsData.length}</strong> Products</span>
          {activeCategory !== 'ALL' && (
            <button
              type="button"
              className="reset-filter-link"
              onClick={() => {
                setActiveCategory('ALL');
                setSearchQuery('');
              }}
            >
              Reset Filters ↺
            </button>
          )}
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length === 0 ? (
          <div className="no-products-found">
            <span style={{ fontSize: '3rem' }}>🔍</span>
            <h3>No products matching "{searchQuery}"</h3>
            <p>Try searching for keywords like "Urinal", "Coupling", "Roof", "PUF", "Solar", or "Door".</p>
            <button
              type="button"
              className="btn btn-outline btn-sm"
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('ALL');
              }}
              style={{ marginTop: '1rem' }}
            >
              Clear Search &amp; Show All Products
            </button>
          </div>
        ) : (
          <div className="product-range-grid">
            {filteredProducts.map((prod) => (
              <ProductCard
                key={prod.id}
                prod={prod}
                onSelectProductForRfq={onSelectProductForRfq}
              />
            ))}
          </div>
        )}

        {/* Bottom Banner */}
        <div className="products-bottom-banner">
          <div className="banner-text">
            <span className="banner-badge">Direct Factory Consultation</span>
            <h3>Need Custom Sizing, Technical Drawings, or Bulk Supply?</h3>
            <p>
              Connect directly with <strong>Mukeshbhai Thakkar</strong> at Param Industries, Ahmedabad for direct factory pricing, architectural consultations, and site visits across Gujarat.
            </p>
          </div>
          <div className="banner-actions">
            <a
              href="https://wa.me/917984515685?text=Hello%20Mukeshbhai,%20I%20want%20to%20discuss%20bulk%20supply%20and%20pricing%20for%20your%20product%20range."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.16 12.04 20.16C10.61 20.16 9.2 19.78 7.97 19.05L7.68 18.88L4.56 19.7L5.39 16.66L5.2 16.36C4.4 15.08 3.97 13.51 3.97 11.91C3.97 7.37 7.67 3.67 12.05 3.67ZM8.86 7.47C8.66 7.47 8.33 7.54 8.05 7.84C7.78 8.14 7.02 8.85 7.02 10.3C7.02 11.75 8.08 13.15 8.22 13.35C8.37 13.55 10.3 16.53 13.26 17.81C13.97 18.11 14.52 18.3 14.95 18.43C15.66 18.66 16.31 18.63 16.82 18.55C17.39 18.47 18.57 17.84 18.82 17.14C19.06 16.44 19.06 15.83 18.99 15.71C18.92 15.59 18.72 15.52 18.42 15.37C18.12 15.22 16.65 14.5 16.38 14.4C16.1 14.3 15.91 14.25 15.71 14.55C15.51 14.85 14.95 15.52 14.77 15.71C14.6 15.91 14.43 15.93 14.13 15.78C13.83 15.63 12.87 15.32 11.73 14.3C10.84 13.51 10.25 12.53 10.07 12.23C9.9 11.93 10.05 11.77 10.2 11.62C10.34 11.49 10.5 11.27 10.65 11.1C10.8 10.93 10.85 10.81 10.95 10.61C11.05 10.41 11 10.24 10.92 10.09C10.85 9.94 10.25 8.47 10.01 7.87C9.77 7.29 9.53 7.37 9.35 7.36C9.18 7.35 8.99 7.47 8.86 7.47Z" />
              </svg>
              <span>WhatsApp Chat</span>
            </a>
            <a href="tel:+917984515685" className="btn btn-outline-white">
              <span>📞</span> +91 79845 15685
            </a>
            <a href="mailto:envisave24@gmail.com" className="btn btn-outline-white">
              <span>✉️</span> envisave24@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
