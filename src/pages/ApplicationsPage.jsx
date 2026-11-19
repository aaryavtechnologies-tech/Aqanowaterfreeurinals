import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CatalogueSection from '../components/CatalogueSection';
import CtaRibbon from '../components/CtaRibbon';

export default function ApplicationsPage({ onOpenDemo }) {
  const [activeTab, setActiveTab] = useState('residential');

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
            <span aria-current="page">Applications</span>
          </nav>
          <h1>Where to Use MOLLISAQUA®</h1>
          <p>Comprehensive physical catalytic water conditioning engineered for residential homes, housing societies, manufacturing plants, and high-yield agriculture.</p>
        </div>
      </section>

      {/* Main 4 Application Pillars */}
      <section className="section-py">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Universal Versatility</span>
            <h2 className="section-title">Engineered for Every Water Challenge</h2>
            <p className="section-desc">
              Whether handling high-TDS deep borewell extraction, overhead society tanks, industrial cooling lines, or expansive drip irrigation systems, MOLLISAQUA® delivers dependable, maintenance-free performance.
            </p>
          </div>

          <div className="grid-2">
            {/* Pillar 1 */}
            <div className="app-card">
              <div className="app-card-img" style={{ background: 'linear-gradient(135deg, #0d3b66, #14532d)' }}>
                <span style={{ fontSize: '3rem' }}>🏢</span>
              </div>
              <div className="app-card-body">
                <span className="badge badge-accent">Community Scale</span>
                <h3>Housing Societies &amp; Common Borewells</h3>
                <p>
                  High-rise residential towers and gated communities often battle extreme scale deposition in central pumping mains, overhead distribution pipes, and individual apartment fixtures.
                </p>
                <ul className="benefit-list" style={{ marginTop: '1rem' }}>
                  <li>Installed directly on main borewell delivery line or before central overhead storage.</li>
                  <li>Eliminates frequent motor strain and protects community plumbing infrastructure.</li>
                  <li>No salt dumping or recurring softener replenishment costs for society maintenance committees.</li>
                  <li>Maintains equal scale-prevention efficacy for all connected resident apartments.</li>
                </ul>
                <div style={{ marginTop: '1.25rem' }}>
                  <button onClick={onOpenDemo} className="btn btn-secondary btn-sm">Request Society Consultation</button>
                </div>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="app-card">
              <div className="app-card-img" style={{ background: 'linear-gradient(135deg, #0284c7, #0369a1)' }}>
                <span style={{ fontSize: '3rem' }}>🏡</span>
              </div>
              <div className="app-card-body">
                <span className="badge badge-accent">Individual Living</span>
                <h3>Flats &amp; Independent Bungalows</h3>
                <p>
                  Transform your daily bathing, cooking, and washing experience without losing essential calcium and magnesium that traditional RO membranes or salt units waste or destroy.
                </p>
                <ul className="benefit-list" style={{ marginTop: '1rem' }}>
                  <li>Guards expensive bath fixtures, concealed diverters, and solar/gas geysers from lime build-up.</li>
                  <li>Noticeable reduction in hair fall, dry scalp, and post-shower skin dryness.</li>
                  <li>Restores laundry brightness and softens garments using 30% less detergent powder.</li>
                  <li>Installed neatly on terrace inlet line or individual flat water meter entry.</li>
                </ul>
                <div style={{ marginTop: '1.25rem' }}>
                  <button onClick={onOpenDemo} className="btn btn-secondary btn-sm">Book Home Demo</button>
                </div>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="app-card">
              <div className="app-card-img" style={{ background: 'linear-gradient(135deg, #1e293b, #0f172a)' }}>
                <span style={{ fontSize: '3rem' }}>🏭</span>
              </div>
              <div className="app-card-body">
                <span className="badge badge-accent">Heavy Duty</span>
                <h3>Factories, Boilers &amp; Industrial Systems</h3>
                <p>
                  Scale encrustation inside heat exchangers, steam boilers, and cooling towers causes catastrophic heat transfer degradation, surging electricity costs, and premature equipment replacement.
                </p>
                <ul className="benefit-list" style={{ marginTop: '1rem' }}>
                  <li>Continuous anti-fouling action in cooling towers and recirculation networks.</li>
                  <li>Prevents 1mm scale build-up which otherwise inflates industrial energy bills by 10%–12%.</li>
                  <li>Drastically reduces hazardous chemical acid-washing cycles and downtime.</li>
                  <li>Custom heavy-duty flanges engineered to withstand high industrial flow rates.</li>
                </ul>
                <div style={{ marginTop: '1.25rem' }}>
                  <a href="https://wa.me/917984515685?text=Hello%20Mukeshbhai,%20I%20am%20interested%20in%20MOLLISAQUA%20for%20Industrial%20Boiler/Cooling%20Tower%20applications" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm">Enquire for Factory</a>
                </div>
              </div>
            </div>

            {/* Pillar 4 */}
            <div className="app-card">
              <div className="app-card-img" style={{ background: 'linear-gradient(135deg, #15803d, #166534)' }}>
                <span style={{ fontSize: '3rem' }}>🌱</span>
              </div>
              <div className="app-card-body">
                <span className="badge badge-accent">Mollis Crop Booster</span>
                <h3>Agriculture, Farming &amp; Irrigation</h3>
                <p>
                  Saline and hard irrigation water creates salt encrustation on soil surfaces, suffocating root capillary absorption and constantly choking micro-drip emitters and spray nozzles.
                </p>
                <ul className="benefit-list" style={{ marginTop: '1rem' }}>
                  <li>Neutralizes salt bonding so water penetrates deeply into the root zone.</li>
                  <li>Completely prevents clogging in micro-drip irrigation emitters and sprinkler heads.</li>
                  <li>Improves seed germination percentage and accelerates crop vegetative growth.</li>
                  <li>Documented efficacy in high-TDS agricultural borewell supplies (up to 10,000+ ppm).</li>
                </ul>
                <div style={{ marginTop: '1.25rem' }}>
                  <a href="https://wa.me/917984515685?text=Hello%20Mukeshbhai,%20I%20want%20information%20regarding%20Mollis%20Crop%20Booster%20for%20Agriculture%20and%20Drip%20Irrigation" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm">Talk to Agricultural Expert</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Extended Commercial Sector Matrix */}
      <section className="section-py bg-light">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Commercial Use Cases</span>
            <h2 className="section-title">Specialized Commercial Applications</h2>
            <p className="section-desc">Reliable protection for high-consumption hospitality, medical, and agricultural operations.</p>
          </div>

          <div className="grid-4">
            <div className="feature-card text-center">
              <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>🏨</div>
              <h4>Hotels &amp; Resorts</h4>
              <p style={{ fontSize: '0.9rem' }}>Spot-free glassware, crystal clean swimming pools, and soft guest towels without harsh chemicals.</p>
            </div>
            <div className="feature-card text-center">
              <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>🏥</div>
              <h4>Hospitals &amp; Clinics</h4>
              <p style={{ fontSize: '0.9rem' }}>Guards autoclaves, laundry sterilizers, and central HVAC cooling circuits from mineral scale.</p>
            </div>
            <div className="feature-card text-center">
              <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>🐄</div>
              <h4>Dairy &amp; Poultry Farms</h4>
              <p style={{ fontSize: '0.9rem' }}>Prevents nipple drinker blockage, improves livestock hydration, and lowers gastrointestinal issues.</p>
            </div>
            <div className="feature-card text-center">
              <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>🐟</div>
              <h4>Aquaculture &amp; Fisheries</h4>
              <p style={{ fontSize: '0.9rem' }}>Prevents toxic precipitate formation in aeration pipes while maintaining vital oxygen circulation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sizing & Selection Guide Table */}
      <section className="section-py">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Model Matrix</span>
            <h2 className="section-title">Standard Line Size &amp; Application Guide</h2>
            <p className="section-desc">
              Choose the ideal unit matching your pipe diameter and peak water flow rate. All units feature premium precision stainless steel construction with zero moving parts.
            </p>
          </div>

          <div style={{ overflowX: 'auto', background: 'white', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.06)', padding: '1.5rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '600px' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid #e2e8f0', color: '#0f172a' }}>
                  <th style={{ padding: '1rem 0.75rem' }}>Pipe Size (Inches)</th>
                  <th style={{ padding: '1rem 0.75rem' }}>Rated Flow Rate</th>
                  <th style={{ padding: '1rem 0.75rem' }}>Primary Application</th>
                  <th style={{ padding: '1rem 0.75rem' }}>Mounting Type</th>
                  <th style={{ padding: '1rem 0.75rem', textAlign: 'center' }}>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                  <td style={{ padding: '1rem 0.75rem', fontWeight: 600, color: '#0284c7' }}>1/2" to 3/4" (15mm – 20mm)</td>
                  <td style={{ padding: '1rem 0.75rem' }}>Up to 1,500 LPH</td>
                  <td style={{ padding: '1rem 0.75rem' }}>Individual Flats, Bathrooms, Geysers, RO Pre-treatment</td>
                  <td style={{ padding: '1rem 0.75rem' }}>Threaded BSP Inline</td>
                  <td style={{ padding: '1rem 0.75rem', textAlign: 'center' }}>
                    <button onClick={onOpenDemo} className="btn btn-primary btn-sm">Get Price</button>
                  </td>
                </tr>
                <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                  <td style={{ padding: '1rem 0.75rem', fontWeight: 600, color: '#0284c7' }}>1" to 1.25" (25mm – 32mm)</td>
                  <td style={{ padding: '1rem 0.75rem' }}>2,500 – 4,500 LPH</td>
                  <td style={{ padding: '1rem 0.75rem' }}>Bungalows, Villas, Small Commercial Cafes &amp; Laundries</td>
                  <td style={{ padding: '1rem 0.75rem' }}>Threaded BSP Inline</td>
                  <td style={{ padding: '1rem 0.75rem', textAlign: 'center' }}>
                    <button onClick={onOpenDemo} className="btn btn-primary btn-sm">Get Price</button>
                  </td>
                </tr>
                <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                  <td style={{ padding: '1rem 0.75rem', fontWeight: 600, color: '#0284c7' }}>1.5" to 2" (40mm – 50mm)</td>
                  <td style={{ padding: '1rem 0.75rem' }}>8,000 – 18,000 LPH</td>
                  <td style={{ padding: '1rem 0.75rem' }}>Housing Societies, Agricultural Borewells, Small Factories</td>
                  <td style={{ padding: '1rem 0.75rem' }}>Threaded / Flanged</td>
                  <td style={{ padding: '1rem 0.75rem', textAlign: 'center' }}>
                    <button onClick={onOpenDemo} className="btn btn-primary btn-sm">Get Price</button>
                  </td>
                </tr>
                <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                  <td style={{ padding: '1rem 0.75rem', fontWeight: 600, color: '#0284c7' }}>2.5" to 3" (65mm – 80mm)</td>
                  <td style={{ padding: '1rem 0.75rem' }}>25,000 – 45,000 LPH</td>
                  <td style={{ padding: '1rem 0.75rem' }}>Large High-rise Towers, Irrigation Canals, Dairy Units</td>
                  <td style={{ padding: '1rem 0.75rem' }}>Heavy Duty Flanged</td>
                  <td style={{ padding: '1rem 0.75rem', textAlign: 'center' }}>
                    <button onClick={onOpenDemo} className="btn btn-primary btn-sm">Get Price</button>
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: '1rem 0.75rem', fontWeight: 600, color: '#0284c7' }}>4" and above (100mm+)</td>
                  <td style={{ padding: '1rem 0.75rem' }}>Custom High Flow</td>
                  <td style={{ padding: '1rem 0.75rem' }}>Heavy Industrial Boilers, Cooling Towers, Municipal Water</td>
                  <td style={{ padding: '1rem 0.75rem' }}>Industrial Flanged</td>
                  <td style={{ padding: '1rem 0.75rem', textAlign: 'center' }}>
                    <a href="https://wa.me/917984515685?text=Hello%20Mukeshbhai,%20I%20need%20custom%20high-flow%20sizing%20above%204%20inches" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm">Custom Quote</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Official Catalogues */}
      <CatalogueSection />

      {/* CTA Ribbon */}
      <CtaRibbon onOpenDemo={onOpenDemo} />
    </main>
  );
}
