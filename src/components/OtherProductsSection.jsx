import React, { useState } from 'react';

export const productsData = [
  {
    id: 'water-free-urinal',
    name: 'Water Free Urinal',
    tagline: '100% Zero-Water Ecological Sanitation Solution',
    category: 'Eco Sanitation',
    status: 'COMING SOON',
    icon: '🚻',
    badgeColor: '#f59e0b',
    description:
      'Advanced waterless urinal engineered to eliminate 100% flush water wastage while maintaining complete hygiene and zero odour. Designed for commercial complexes, malls, offices, and institutions.',
    highlights: [
      'Saves ~40,000 to 60,000 litres of fresh water per urinal annually',
      'Zero flush valves, zero sensors, and zero electrical running costs',
      'Specialized odour-barrier cartridge and microbial hygiene seal',
      'Heavy-duty stain-resistant ceramic / composite construction',
      'Huge savings on recurring plumbing maintenance & pump electricity',
    ],
    idealFor: 'IT Parks, Offices, Malls, Universities, Hospitals & Airports',
  },
  {
    id: 'heat-pump',
    name: 'Heat Pump (Hot Water)',
    tagline: 'Thermodynamic High-Efficiency Water Heating System',
    category: 'HVAC & Heating',
    status: 'COMING SOON',
    icon: '♨️',
    badgeColor: '#f59e0b',
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
    tagline: '100% Anti-Corrosive Industrial & Coastal Roofing Sheets',
    category: 'Roofing & Drainage',
    status: 'AVAILABLE',
    icon: '🛡️',
    badgeColor: '#10b981',
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
    status: 'AVAILABLE',
    icon: '🏗️',
    badgeColor: '#10b981',
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
    status: 'AVAILABLE',
    icon: '🧱',
    badgeColor: '#10b981',
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
    tagline: 'Heavy-Duty UV-Stabilized Rainwater Harvesting Drainage System',
    category: 'Roofing & Drainage',
    status: 'AVAILABLE',
    icon: '🌧️',
    badgeColor: '#10b981',
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
    status: 'AVAILABLE',
    icon: '🏡',
    badgeColor: '#10b981',
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
    status: 'AVAILABLE',
    icon: '☀️',
    badgeColor: '#10b981',
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
    status: 'AVAILABLE',
    icon: '🚪',
    badgeColor: '#10b981',
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

export default function OtherProductsSection({ onOpenDemo }) {
  const [activeCategory, setActiveCategory] = useState('ALL');

  const categories = [
    { key: 'ALL', label: 'All Products (9)' },
    { key: 'Eco Sanitation', label: '🚻 Eco Sanitation' },
    { key: 'HVAC & Heating', label: '♨️ HVAC & Solar' },
    { key: 'Roofing & Drainage', label: '🛡️ Roofing & Gutters' },
    { key: 'PUF Panels', label: '🏗️ PUF Panels' },
    { key: 'Doors & Interiors', label: '🚪 WPC Doors' },
  ];

  const filteredProducts =
    activeCategory === 'ALL'
      ? productsData
      : productsData.filter((p) => p.category === activeCategory);

  return (
    <section id="other-products" className="section-py other-products-section">
      <span id="products" style={{ display: 'block', position: 'relative', top: '-80px', visibility: 'hidden' }}></span>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">Eco-Friendly &amp; Building Solutions</span>
          <h2 className="section-title">
            Our Extended Range of <span className="text-gradient">Sustainable Products</span>
          </h2>
          <p className="section-desc">
            Along with MOLLISAQUA® Water Conditioners, Param Industries brings you innovative green technologies, advanced anti-corrosion roofing, energy-saving systems, and durable building solutions.
          </p>
        </div>

        {/* Category Tabs */}
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
              {cat.label}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="product-range-grid">
          {filteredProducts.map((prod) => {
            const isComingSoon = prod.status === 'COMING SOON';
            const whatsappText = isComingSoon
              ? `Hello Mukeshbhai, I am interested in ${prod.name} (Coming Soon). Please notify me and share technical updates.`
              : `Hello Mukeshbhai, I would like more information and pricing for ${prod.name}.`;

            return (
              <article key={prod.id} className="product-range-card">
                <div className="product-card-top">
                  <div className="product-icon-wrap" aria-hidden="true">
                    <span>{prod.icon}</span>
                  </div>
                  <div className="product-status-wrap">
                    {isComingSoon ? (
                      <span className="badge-status badge-coming-soon">
                        <span className="pulsing-dot"></span> COMING SOON
                      </span>
                    ) : (
                      <span className="badge-status badge-available">
                        ✓ In Stock &amp; Supply
                      </span>
                    )}
                  </div>
                </div>

                <div className="product-card-content">
                  <span className="product-category-label">{prod.category}</span>
                  <h3 className="product-card-title">{prod.name}</h3>
                  <p className="product-card-tagline">{prod.tagline}</p>
                  <p className="product-card-desc">{prod.description}</p>

                  <div className="product-highlights-box">
                    <h4 className="highlights-title">Key Advantages:</h4>
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
                    <strong>Ideal Applications:</strong> {prod.idealFor}
                  </div>
                </div>

                <div className="product-card-footer">
                  <a
                    href={`https://wa.me/917984515685?text=${encodeURIComponent(whatsappText)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`btn ${isComingSoon ? 'btn-whatsapp' : 'btn-primary'} btn-sm`}
                    style={{ flex: 1, justifyContent: 'center' }}
                  >
                    <span>💬</span> {isComingSoon ? 'Pre-Enquire on WhatsApp' : 'Get Quote on WhatsApp'}
                  </a>
                  <a
                    href="tel:+917984515685"
                    className="btn btn-outline btn-sm"
                    aria-label={`Call for ${prod.name}`}
                    title="Call Mukeshbhai Thakkar"
                  >
                    <span>📞</span> Call
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="products-bottom-banner">
          <div className="banner-text">
            <h3>Need Custom Sizing, Technical Drawings, or Bulk Supply?</h3>
            <p>
              Connect with <strong>Mukeshbhai Thakkar</strong> at Param Industries, Ahmedabad for factory pricing, architectural consultations, and site visits across Gujarat.
            </p>
          </div>
          <div className="banner-actions">
            <a
              href="https://wa.me/917984515685?text=Hello%20Mukeshbhai,%20I%20want%20to%20discuss%20bulk%20supply%20and%20pricing%20for%20your%20product%20range."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              <span>💬</span> WhatsApp Consultation
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
