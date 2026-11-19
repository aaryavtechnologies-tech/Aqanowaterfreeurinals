import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import CatalogueSection from '../components/CatalogueSection';
import CtaRibbon from '../components/CtaRibbon';

export default function FeaturesPage({ onOpenDemo }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <section className="page-banner">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span aria-current="page">Features &amp; Benefits</span>
          </nav>
          <h1>Features &amp; Advertised Benefits</h1>
          <p>Explore the transformative advantages of our physical catalytic water conditioner for personal health, appliance longevity, and recurring cost elimination.</p>
        </div>
      </section>

      {/* Core Advantages */}
      <section className="section-py">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Key Product Advantages</span>
            <h2 className="section-title">Designed to Eliminate Hard Water Frustrations</h2>
            <p className="section-desc">
              A permanent one-time investment that works silently in your plumbing without human intervention, chemicals, or ongoing electricity bills.
            </p>
          </div>

          <div className="grid-3">
            <div className="feature-card">
              <div className="feature-icon-box">🚫🧂</div>
              <h3>No Salt or Chemicals Added</h3>
              <p>
                Unlike traditional softeners that load water with sodium chloride (salt), our catalytic technology does not add a single chemical or synthetic additive to your daily water supply.
              </p>
              <span className="card-footer-link">Pure &amp; sodium-free water →</span>
            </div>

            <div className="feature-card">
              <div className="feature-icon-box">🛠️</div>
              <h3>Zero Regular Maintenance</h3>
              <p>
                Fit it once and forget it (Fit &amp; Forget). No salt bags to lift, no resin beds to regenerate, no backwash filter media to replace, and no recurring servicing contracts required.
              </p>
              <span className="card-footer-link">100% passive design →</span>
            </div>

            <div className="feature-card">
              <div className="feature-icon-box">🧖‍♀️</div>
              <h3>Hair Fall &amp; Skin Comfort</h3>
              <p>
                Helps restore hair softness and manageability by preventing insoluble calcium curd from coating hair follicles and skin pores. Leaves skin hydrated without soap scum residue.
              </p>
              <span className="card-footer-link">Gentle on sensitive skin →</span>
            </div>

            <div className="feature-card">
              <div className="feature-icon-box">⚡</div>
              <h3>Protects Geysers &amp; Solar Heaters</h3>
              <p>
                Eliminates the insulating calcium crust on heating rods, gas geyser heat exchangers, and solar collectors, preserving 100% thermal transfer and lowering power bills.
              </p>
              <span className="card-footer-link">Saves up to 25% electricity →</span>
            </div>

            <div className="feature-card">
              <div className="feature-icon-box">✨</div>
              <h3>Prevents Stains on Taps &amp; Tiles</h3>
              <p>
                Keeps expensive chrome-plated (CP) fittings, glass shower enclosures, bathtubs, and imported bathroom tiles gleaming with minimal cleaning effort.
              </p>
              <span className="card-footer-link">Easy bathroom cleaning →</span>
            </div>

            <div className="feature-card">
              <div className="feature-icon-box">🌿</div>
              <h3>100% Eco-Friendly &amp; Zero Wastage</h3>
              <p>
                No toxic saline brine dumped into septic tanks or groundwater aquifers. Zero litres of water wasted in backwashing cycles, preserving Gujarat’s vital water table.
              </p>
              <span className="card-footer-link">Environmentally responsible →</span>
            </div>
          </div>

          <div style={{ marginTop: '2.5rem', background: '#FFFBEB', border: '1px solid #FDE68A', borderRadius: 'var(--radius-md)', padding: '1.25rem 1.75rem' }}>
            <p style={{ fontSize: '0.875rem', color: '#92400E', lineHeight: 1.6, margin: 0 }}>
              <strong>Important Consumer Notice:</strong> All technical, water improvement, and health-related claims advertised on this website are based on catalytic physical crystallization principles (Calcite to Aragonite morphology via redox alloy). Results may vary depending on local water chemistry, baseline TDS, pH, and flow dynamics. We recommend experiencing a live demonstration at our Shela, Ahmedabad facility to observe results firsthand.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison Matrix */}
      <section className="section-py bg-light">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Comprehensive Comparison</span>
            <h2 className="section-title">How MOLLISAQUA® Compares to Alternative Solutions</h2>
            <p className="section-desc">
              Make an informed decision by examining the differences between Catalytic Conditioning, Salt-Based Softeners, and Electronic Magnetic Descalers.
            </p>
          </div>

          <div className="table-responsive">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Criteria / Factor</th>
                  <th className="highlight-col">MOLLISAQUA® Catalytic Conditioner</th>
                  <th>Traditional Salt-Based Softeners</th>
                  <th>Electronic / Magnetic Descalers</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Working Technology</strong></td>
                  <td className="highlight-col">Hydrodynamic Catalytic 26-Alloy Core (Redox Nucleation)</td>
                  <td>Ion-Exchange Chemical Resin</td>
                  <td>Electromagnetic Coils / Radio Frequencies</td>
                </tr>
                <tr>
                  <td><strong>Consumables / Recurring Costs</strong></td>
                  <td className="highlight-col"><span className="badge-good">₹0 Forever (No consumables)</span></td>
                  <td><span className="badge-bad">₹1,500 – ₹8,000/mo (Salt &amp; Resin)</span></td>
                  <td><span className="badge-good">₹0 Consumables</span></td>
                </tr>
                <tr>
                  <td><strong>Electrical Power Consumption</strong></td>
                  <td className="highlight-col"><span className="badge-good">0 Watts (Operates on water flow)</span></td>
                  <td><span className="badge-bad">Continuous power for timer valve</span></td>
                  <td><span className="badge-bad">Requires 24/7 electric socket</span></td>
                </tr>
                <tr>
                  <td><strong>Water Wastage</strong></td>
                  <td className="highlight-col"><span className="badge-good">0 Litres Wasted</span></td>
                  <td><span className="badge-bad">20% – 30% lost in brine regeneration</span></td>
                  <td><span className="badge-good">0 Litres Wasted</span></td>
                </tr>
                <tr>
                  <td><strong>Essential Minerals</strong></td>
                  <td className="highlight-col"><span className="badge-good">Retains Calcium &amp; Magnesium</span></td>
                  <td><span className="badge-bad">Replaces minerals with Sodium (Salt)</span></td>
                  <td><span className="badge-good">Retains minerals</span></td>
                </tr>
                <tr>
                  <td><strong>Water Feel on Skin</strong></td>
                  <td className="highlight-col">Clean, soft, refreshing rinse</td>
                  <td>Slick, slimy, difficult to rinse off soap</td>
                  <td>Mild softening effect</td>
                </tr>
                <tr>
                  <td><strong>Drinking Suitability</strong></td>
                  <td className="highlight-col"><span className="badge-good">Safe &amp; mineral-rich for all uses</span></td>
                  <td><span className="badge-bad">High sodium content (bad for BP/heart)</span></td>
                  <td><span className="badge-good">Safe</span></td>
                </tr>
                <tr>
                  <td><strong>Existing Scale Removal</strong></td>
                  <td className="highlight-col"><span className="badge-good">Gradually descales over 60-90 days</span></td>
                  <td>Stops new scale only</td>
                  <td>Variable / Unpredictable</td>
                </tr>
                <tr>
                  <td><strong>Durability &amp; Warranty</strong></td>
                  <td className="highlight-col"><span className="badge-good">25+ Years (Heavy-Duty Stainless Steel)</span></td>
                  <td>3 – 5 Years (Resin bed foul)</td>
                  <td>1 – 3 Years (Electronics failure)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Asset Protection & Health Breakdown */}
      <section className="section-py">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', marginBottom: '4rem' }}>
            <div>
              <span className="section-badge">Health &amp; Wellness</span>
              <h2 className="section-title">Healthy Skin, Silky Hair &amp; Soft Fabrics</h2>
              <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '1rem' }}>
                When bathing in untreated hard water, soap reacts with calcium ions to form an insoluble residue (soap scum) that coats your scalp, clogs pores, causes chronic dandruff, and leads to severe hair thinning.
              </p>
              <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '1rem' }}>
                Conditioned water allows soaps and shampoos to lather richly and rinse cleanly away. Your skin retains its natural moisture barrier without needing excessive lotions, and hair regains its natural shine and bounce.
              </p>
              <ul className="app-highlights">
                <li>Significantly reduces post-shower hair fall and scalp dryness</li>
                <li>Clothes come out of the washing machine softer and brighter</li>
                <li>Uses 30% less detergent, shampoo, and bath soap</li>
              </ul>
            </div>
            <div>
              <img
                src="/assets/images/application-home.svg"
                alt="Home and bathroom water conditioning benefits"
                width="550"
                height="370"
                style={{ borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-md)' }}
              />
            </div>
          </div>

          <div className="grid-2" style={{ alignItems: 'center' }}>
            <div>
              <img
                src="/assets/images/pipe-scale-comparison.svg"
                alt="Pipe protection and limescale prevention"
                width="550"
                height="370"
                style={{ borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-md)' }}
              />
            </div>
            <div>
              <span className="section-badge">Asset Protection</span>
              <h2 className="section-title">Protecting Appliances &amp; Concealed Plumbing</h2>
              <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '1rem' }}>
                Replacing concealed bathroom plumbing pipes damaged by lime encrustation can cost upwards of ₹1,00,000 to ₹3,00,000 in demolition and masonry repairs.
              </p>
              <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '1rem' }}>
                The MOLLISAQUA conditioner acts as an impenetrable shield for your entire plumbing infrastructure, geysers, dishwashers, solar heaters, and RO drinking water plants.
              </p>
              <ul className="app-highlights">
                <li>Doubles the operational lifespan of electric &amp; solar geysers</li>
                <li>Protects expensive RO membranes from fouling and premature replacement</li>
                <li>Maintains full water pressure and flow across multi-storey risers</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Official Catalogues Section */}
      <CatalogueSection />

      {/* Call to Action Banner */}
      <CtaRibbon onOpenDemo={onOpenDemo} />
    </main>
  );
}
