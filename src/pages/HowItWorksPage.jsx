import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PipeSlider from '../components/PipeSlider';
import CatalogueSection from '../components/CatalogueSection';
import CtaRibbon from '../components/CtaRibbon';

export default function HowItWorksPage({ onOpenDemo }) {
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
            <span aria-current="page">How It Works</span>
          </nav>
          <h1>Scientific Working Concept</h1>
          <p>Discover the physical catalytic alloy science transforming hard, scaling water without salt, harsh chemicals, or electric power.</p>
        </div>
      </section>

      {/* Science Core Section */}
      <section className="section-py">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: '3rem' }}>
            <div>
              <span className="section-badge">Physical Catalytic Science</span>
              <h2 className="section-title">26-Metal Alloy Core &amp; Galvanic Redox Reaction</h2>
              <p style={{ color: '#475569', lineHeight: 1.8, marginBottom: '1rem' }}>
                Inside every MOLLISAQUA® water conditioner lies an engineered catalytic core cast from an exclusive matrix of <strong>26 noble and semi-noble metals</strong>.
              </p>
              <p style={{ color: '#475569', lineHeight: 1.8, marginBottom: '1rem' }}>
                As pressurized water flows over the specially configured geometric internal core, it induces intense micro-turbulence and generates a low-voltage <strong>galvanic electrochemical field (Redox / Reduction-Oxidation process)</strong>.
              </p>
              <p style={{ color: '#475569', lineHeight: 1.8 }}>
                This reaction disrupts the ionic electrostatic bonds holding dissolved Calcium (Ca²⁺) and Magnesium (Mg²⁺) ions, triggering immediate heterogeneous crystallization before the minerals can adhere to pipe surfaces.
              </p>

              <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <span className="badge badge-accent">⚡ Zero Electricity</span>
                <span className="badge badge-accent">🚫 Zero Salt / Resins</span>
                <span className="badge badge-accent">🔄 Self-Regenerating Core</span>
              </div>
            </div>

            <div style={{ background: '#ffffff', padding: '1.5rem', borderRadius: '20px', border: '1px solid #e2e8f0', textAlign: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.06)' }}>
              <img
                src="/assets/images/mollisaqua-product-units.jpg"
                alt="MOLLISAQUA Water Conditioner Genuine Units"
                style={{ maxWidth: '100%', height: 'auto', borderRadius: '10px', margin: '0 auto', display: 'block' }}
              />
              <p style={{ marginTop: '1rem', fontSize: '0.875rem', color: '#475569', fontWeight: 600 }}>
                Precision heavy-duty stainless steel housing encasing the 26-metal catalytic alloy core with dual BSP threaded ends.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Calcite to Aragonite Transformation */}
      <section className="section-py bg-light">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Crystallographic Transformation</span>
            <h2 className="section-title">Calcite vs. Aragonite: The Molecular Difference</h2>
            <p className="section-desc">
              Understanding why catalytic conditioning neutralizes scaling power without striping the vital minerals essential for human wellness.
            </p>
          </div>

          <div className="grid-2" style={{ gap: '2rem' }}>
            <div style={{ background: 'white', padding: '2.5rem', borderRadius: '16px', borderTop: '4px solid #ef4444', boxShadow: '0 4px 15px rgba(0,0,0,0.04)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <span style={{ fontSize: '2.5rem' }}>🧱</span>
                <div>
                  <h3 style={{ color: '#b91c1c', margin: 0 }}>Untreated Hard Water (Calcite)</h3>
                  <small style={{ color: '#64748b' }}>Rigid Rhombohedral Geometry</small>
                </div>
              </div>
              <ul className="benefit-list" style={{ color: '#475569', lineHeight: 1.8 }}>
                <li>Forms interlocking, hard crystalline encrustations on heating elements, pipes, and tiles.</li>
                <li>Binds strongly to soap molecules, creating sticky curd that dries out hair follicles and skin pores.</li>
                <li>Constricts pipe internal diameter year after year, choking water pressure and burning pump motors.</li>
                <li>Requires toxic chemical descaling acids or expensive salt resin exchanges to combat.</li>
              </ul>
            </div>

            <div style={{ background: 'white', padding: '2.5rem', borderRadius: '16px', borderTop: '4px solid #10b981', boxShadow: '0 4px 15px rgba(0,0,0,0.04)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <span style={{ fontSize: '2.5rem' }}>✨</span>
                <div>
                  <h3 style={{ color: '#047857', margin: 0 }}>Conditioned Water (Aragonite)</h3>
                  <small style={{ color: '#64748b' }}>Smooth Orthorhombic Micro-Needles</small>
                </div>
              </div>
              <ul className="benefit-list" style={{ color: '#475569', lineHeight: 1.8 }}>
                <li>Minerals remain suspended in the water stream as microscopic, non-adherent crystals.</li>
                <li>Flows harmlessly through plumbing without latching onto pipe walls, glass, or geysers.</li>
                <li>Enables luxurious soap lathering and rinses off cleanly without leaving abrasive chalky film.</li>
                <li>Preserves 100% of the natural calcium and magnesium that nutritionists recommend for vitality.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Before / After Interactive Slider */}
      <section className="section-py">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Real Pipe Transformation</span>
            <h2 className="section-title">See Descaling in Real Time</h2>
            <p className="section-desc">Drag the interactive slider below to inspect an actual pipe interior before and after MOLLISAQUA® treatment.</p>
          </div>

          <PipeSlider />
        </div>
      </section>

      {/* Descaling Timeline (0 - 90 Days) */}
      <section className="section-py bg-light">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Progressive Results</span>
            <h2 className="section-title">What Happens After Installation?</h2>
            <p className="section-desc">MOLLISAQUA® doesn't just prevent new scale; its conditioned water gradually softens and clears old existing buildup.</p>
          </div>

          <div className="grid-4">
            <div className="feature-card">
              <span className="badge badge-accent" style={{ marginBottom: '0.75rem', display: 'inline-block' }}>Day 1 – 7</span>
              <h4>Immediate Soft Feel</h4>
              <p style={{ fontSize: '0.9rem', color: '#64748b' }}>Noticeable increase in soap foaming, smoother skin touch after showers, and lighter laundry feel.</p>
            </div>
            <div className="feature-card">
              <span className="badge badge-accent" style={{ marginBottom: '0.75rem', display: 'inline-block' }}>Day 8 – 30</span>
              <h4>Surface Descaling</h4>
              <p style={{ fontSize: '0.9rem', color: '#64748b' }}>Existing white chalk marks on bathroom tiles, glass doors, and chrome taps soften and wipe away easily.</p>
            </div>
            <div className="feature-card">
              <span className="badge badge-accent" style={{ marginBottom: '0.75rem', display: 'inline-block' }}>Day 31 – 60</span>
              <h4>Appliance Clearance</h4>
              <p style={{ fontSize: '0.9rem', color: '#64748b' }}>Scale coats inside geysers and washing machines crack and shed, restoring heating speed and efficiency.</p>
            </div>
            <div className="feature-card">
              <span className="badge badge-accent" style={{ marginBottom: '0.75rem', display: 'inline-block' }}>Day 61 – 90+</span>
              <h4>Plumbing Restored</h4>
              <p style={{ fontSize: '0.9rem', color: '#64748b' }}>Concealed pipes achieve clear, restored flow rate. Protective micro-passivation layer prevents corrosion.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Step Easy Installation */}
      <section className="section-py">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Zero Hassle Setup</span>
            <h2 className="section-title">4 Simple Steps to Installation</h2>
            <p className="section-desc">Any certified local plumber can mount MOLLISAQUA® in under 45 minutes using standard plumbing tools.</p>
          </div>

          <div className="grid-4">
            <div className="step-card">
              <div className="step-number">1</div>
              <h4>Flow Assessment</h4>
              <p>Check the main delivery line size (1/2" up to 4"+) and pump motor HP to select the optimal model.</p>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <h4>Location Selection</h4>
              <p>Position directly after the submersible pump, before overhead society tanks, or at terrace downline.</p>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <h4>Inline Fitting</h4>
              <p>Connect using standard threaded BSP couplings or flanges. No electrical plug or drain line required.</p>
            </div>
            <div className="step-card">
              <div className="step-number">4</div>
              <h4>Fit &amp; Forget</h4>
              <p>Turn on the pump! Conditioned water starts flowing immediately with 40+ years expected lifespan.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Crucial Scientific Clarification (TDS vs Scaling) */}
      <section className="section-py bg-light">
        <div className="container">
          <div style={{ background: 'white', borderLeft: '6px solid #0284c7', padding: '2.5rem', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
            <h3 style={{ color: '#0f172a', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              ℹ️ Important Fact: Does It Lower TDS (Total Dissolved Solids)?
            </h3>
            <p style={{ color: '#475569', lineHeight: 1.8, marginBottom: '1rem' }}>
              <strong>No, and it is deliberately designed not to.</strong> MOLLISAQUA® is a catalytic water conditioner, not a reverse osmosis (RO) membrane system. It does not strip out dissolved mineral ions such as calcium and magnesium, which are essential for biological health and natural water taste.
            </p>
            <p style={{ color: '#475569', lineHeight: 1.8 }}>
              Instead, it <strong>modifies the crystallization habit</strong> of these minerals so they can no longer bond to surfaces or form limescale. TDS reduction and scale elimination are two completely different scientific principles. If your drinking water requires pathogen or excess dissolved heavy-metal removal, pair with a standard drinking RO purifier while MOLLISAQUA® protects your whole house.
            </p>
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
