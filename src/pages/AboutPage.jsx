import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import CatalogueSection from '../components/CatalogueSection';
import CtaRibbon from '../components/CtaRibbon';

export default function AboutPage({ onOpenDemo }) {
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
            <span aria-current="page">About Product</span>
          </nav>
          <h1>About MOLLISAQUA® Water Conditioner</h1>
          <p>A smart, eco-friendly breakthrough in whole-building water treatment that neutralizes limescale while keeping beneficial minerals intact.</p>
        </div>
      </section>

      {/* Hard Water vs Conditioned Water */}
      <section className="section-py">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center' }}>
            <div>
              <span className="section-badge">The Fundamental Science</span>
              <h2 className="section-title">Understanding Hard Water vs. Conditioned Water</h2>
              <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                Groundwater across Ahmedabad and Gujarat naturally dissolves rich deposits of limestone and chalk, creating high concentrations of Calcium (Ca²⁺) and Magnesium (Mg²⁺) ions.
              </p>
              <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                When this hard water is exposed to pressure changes, temperature rises (in geysers and boilers), or atmospheric air, these minerals precipitate out as <strong>Calcite</strong>—sharp, needle-shaped, sticky crystals that cement themselves into pipes, shower valves, and geyser elements.
              </p>
              <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                <strong>The Conditioned Solution:</strong> Rather than replacing calcium with sodium salt (as old chemical softeners do), the MOLLISAQUA® Water Conditioner physically transforms Calcite into <strong>Aragonite</strong>—microscopic, smooth, spherical crystals that cannot adhere to any surface.
              </p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <button type="button" className="btn btn-primary" onClick={onOpenDemo}>Schedule a Live Demo</button>
                <Link to="/how-it-works" className="btn btn-outline">Explore How It Works →</Link>
              </div>
            </div>

            <div>
              <img
                src="/assets/images/water-crystals-comparison.svg"
                alt="Comparison between Calcite crystals and Aragonite crystals under microscope"
                width="600"
                height="400"
                style={{ borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-lg)' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Concept & Core */}
      <section className="section-py bg-light">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Engineering Concept</span>
            <h2 className="section-title">How the Physical Conditioning Unit Operates</h2>
            <p className="section-desc">
              Constructed with a non-sacrificial catalytic alloy core housed within heavy-duty, corrosion-resistant Stainless Steel.
            </p>
          </div>

          <div className="grid-3">
            <div className="feature-card">
              <div className="feature-icon-box">🌪️</div>
              <h3>1. Hydrodynamic Vortex</h3>
              <p>
                As pressurized water enters the chamber, precision engineered internal helical fins induce high-velocity turbulence, breaking up laminar boundary layers and accelerating the fluid.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-box">⚡</div>
              <h3>2. Galvanic Redox Reaction</h3>
              <p>
                The water contacts our proprietary catalytic alloy core of 26 noble and semi-noble metals, triggering a natural galvanic redox reaction that nucleates dissolved calcium into harmless seed crystals.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-box">🛡️</div>
              <h3>3. Aragonite Non-Stick Flow</h3>
              <p>
                The newly created Aragonite micro-spheres are completely non-adherent. They remain suspended in the water stream and effortlessly wash through plumbing, leaving pipes scale-free.
              </p>
            </div>
          </div>

          <div style={{ marginTop: '3.5rem', textAlign: 'center' }}>
            <img
              src="/assets/images/catalytic-chamber.svg"
              alt="Internal catalytic chamber working mechanism"
              width="900"
              height="560"
              style={{ marginInline: 'auto', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)' }}
            />
          </div>
        </div>
      </section>

      {/* Installation Details */}
      <section className="section-py">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Quick &amp; Non-Invasive</span>
            <h2 className="section-title">Simple Inline Installation for Any Property</h2>
            <p className="section-desc">
              No electrical socket required. No brine drainage pipe needed. Any licensed local plumber can fit the unit within 60 to 90 minutes.
            </p>
          </div>

          <div className="step-grid">
            <div className="step-card">
              <span className="step-number">1</span>
              <h3>Borewell Discharge</h3>
              <p>Installed directly onto the pump discharge line before water enters underground sumps or overhead storage tanks.</p>
            </div>

            <div className="step-card">
              <span className="step-number">2</span>
              <h3>Overhead Tank Outlet</h3>
              <p>Mounted on the gravity distribution line coming down from your rooftop overhead tank, treating water feeding all bathrooms and kitchens.</p>
            </div>

            <div className="step-card">
              <span className="step-number">3</span>
              <h3>Individual Flat Inlet</h3>
              <p>Compact 3/4" or 1" models fit neatly inside flat utility service shafts, providing independent whole-apartment soft water.</p>
            </div>

            <div className="step-card">
              <span className="step-number">4</span>
              <h3>Industrial Inlets</h3>
              <p>Flanged heavy-duty 2" to 8" units fitted inline on cooling tower circulation loops, boiler feedwater headers, or drip irrigation mainlines.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications Table */}
      <section id="specs" className="section-py bg-soft-blue">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Standard Models</span>
            <h2 className="section-title">Technical Specifications &amp; Sizing Chart</h2>
            <p className="section-desc">
              We manufacture a complete line of threaded and flanged models suited for low-flow homes up to massive industrial infrastructure.
            </p>
          </div>

          <div className="table-responsive">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Model Code</th>
                  <th>Pipe Size (Inches / MM)</th>
                  <th>Flow Capacity (LPH)</th>
                  <th>Primary Application</th>
                  <th>End Connection</th>
                  <th>Housing Grade</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>AQ-50D</strong></td>
                  <td>1/2" (15 mm)</td>
                  <td>800 – 1,500 LPH</td>
                  <td>Single Bathroom / Kitchen / Geyser / Washing Machine</td>
                  <td>BSP Male Thread</td>
                  <td>Heavy-Duty Stainless Steel</td>
                </tr>
                <tr>
                  <td><strong>AQ-75R</strong></td>
                  <td>3/4" (20 mm)</td>
                  <td>1,500 – 3,000 LPH</td>
                  <td>2-3 BHK Flat / Independent Villa</td>
                  <td>BSP Male Thread</td>
                  <td>Heavy-Duty Stainless Steel</td>
                </tr>
                <tr>
                  <td><strong>AQ-100B</strong></td>
                  <td>1" (25 mm)</td>
                  <td>3,000 – 6,000 LPH</td>
                  <td>Large Bungalow / Row House / Duplex</td>
                  <td>BSP Male Thread</td>
                  <td>Heavy-Duty Stainless Steel</td>
                </tr>
                <tr>
                  <td><strong>AQ-150S</strong></td>
                  <td>1.5" (40 mm)</td>
                  <td>6,000 – 12,000 LPH</td>
                  <td>Small Housing Society / Commercial Restaurant</td>
                  <td>BSP Thread / Flange</td>
                  <td>Heavy-Duty Stainless Steel</td>
                </tr>
                <tr>
                  <td><strong>AQ-200S</strong></td>
                  <td>2" (50 mm)</td>
                  <td>12,000 – 25,000 LPH</td>
                  <td>Medium High-Rise Society / Agricultural Borewell</td>
                  <td>Thread / Flanged ANSI 150#</td>
                  <td>Industrial Grade Stainless Steel</td>
                </tr>
                <tr>
                  <td><strong>AQ-300I</strong></td>
                  <td>3" (80 mm)</td>
                  <td>25,000 – 55,000 LPH</td>
                  <td>Large Housing Society / Industrial Cooling Tower</td>
                  <td>ANSI Flanged</td>
                  <td>Industrial Grade Stainless Steel</td>
                </tr>
                <tr>
                  <td><strong>AQ-400I+</strong></td>
                  <td>4" to 8"+ (100-200mm)</td>
                  <td>55,000 – 1,80,000+ LPH</td>
                  <td>Heavy Industry / Boilers / Mega Irrigation Projects</td>
                  <td>Industrial Flanged</td>
                  <td>Custom Heavy-Duty Stainless Steel</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div style={{ marginTop: '2rem', background: 'var(--color-white)', padding: '1.5rem', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--color-secondary)', boxShadow: 'var(--shadow-sm)' }}>
            <p style={{ margin: 0, color: '#334155', fontSize: '0.95rem' }}>
              <strong>Operating Parameters:</strong> Working Pressure: 1.0 to 12.0 Bar (15 to 175 PSI) • Max Operating Temperature: 95°C • Maintenance Cycle: Zero (No consumables, salt, or resin) • Pressure Drop: &lt; 0.1 Bar across rated flow rates.
            </p>
          </div>
        </div>
      </section>

      {/* Official Catalogues Section */}
      <CatalogueSection />

      {/* Consultation CTA */}
      <CtaRibbon onOpenDemo={onOpenDemo} />
    </main>
  );
}
