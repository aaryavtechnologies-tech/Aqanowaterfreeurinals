import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PipeSlider from '../components/PipeSlider';
import SavingsCalculator from '../components/SavingsCalculator';
import VideoSection from '../components/VideoSection';
import CatalogueSection from '../components/CatalogueSection';
import CtaRibbon from '../components/CtaRibbon';
import FaqAccordion from '../components/FaqAccordion';

export default function HomePage({ onOpenDemo }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <span className="hero-tagline">
                <span>💧</span> Lifetime Hard Water Protection
              </span>
              <h1 className="hero-title">
                Say Goodbye to Hard Water Problems <span className="text-gradient">Without Salt or Chemicals</span>
              </h1>
              <p className="hero-subtitle">
                Revolutionary catalytic physical water conditioner designed for homes, societies, factories, and agricultural borewells. Protect your plumbing, end hair dryness, stop appliance scaling, and save thousands every year.
              </p>

              <div className="hero-cta-group">
                <button type="button" className="btn btn-accent btn-lg" onClick={onOpenDemo}>
                  <span>📅</span> Book Live Demo
                </button>
                <a
                  href="https://wa.me/917984515685?text=Hello%20Mukeshbhai,%20I%20am%20interested%20in%20the%20Mollisaqua%20Water%20Conditioner.%20Please%20share%20details."
                  className="btn btn-whatsapp btn-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.16 12.04 20.16C10.61 20.16 9.2 19.78 7.97 19.05L7.68 18.88L4.56 19.7L5.39 16.66L5.2 16.36C4.4 15.08 3.97 13.51 3.97 11.91C3.97 7.37 7.67 3.67 12.05 3.67ZM8.86 7.47C8.66 7.47 8.33 7.54 8.05 7.84C7.78 8.14 7.02 8.85 7.02 10.3C7.02 11.75 8.08 13.15 8.22 13.35C8.37 13.55 10.3 16.53 13.26 17.81C13.97 18.11 14.52 18.3 14.95 18.43C15.66 18.66 16.31 18.63 16.82 18.55C17.39 18.47 18.57 17.84 18.82 17.14C19.06 16.44 19.06 15.83 18.99 15.71C18.92 15.59 18.72 15.52 18.42 15.37C18.12 15.22 16.65 14.5 16.38 14.4C16.1 14.3 15.91 14.25 15.71 14.55C15.51 14.85 14.95 15.52 14.77 15.71C14.6 15.91 14.43 15.93 14.13 15.78C13.83 15.63 12.87 15.32 11.73 14.3C10.84 13.51 10.25 12.53 10.07 12.23C9.9 11.93 10.05 11.77 10.2 11.62C10.34 11.49 10.5 11.27 10.65 11.1C10.8 10.93 10.85 10.81 10.95 10.61C11.05 10.41 11 10.24 10.92 10.09C10.85 9.94 10.25 8.47 10.01 7.87C9.77 7.29 9.53 7.37 9.35 7.36C9.18 7.35 8.99 7.47 8.86 7.47Z" />
                  </svg>
                  <span>WhatsApp Now</span>
                </a>
                <a href="tel:+917984515685" className="btn btn-outline-white btn-lg">
                  <span>📞</span> Call Now
                </a>
              </div>

              <div className="hero-stats-row">
                <div className="stat-item">
                  <h3>100%</h3>
                  <p>Maintenance &amp; Salt Free</p>
                </div>
                <div className="stat-item">
                  <h3>0 kWh</h3>
                  <p>Zero Power Consumption</p>
                </div>
                <div className="stat-item">
                  <h3>25+ Yrs</h3>
                  <p>Durable Long Service Life</p>
                </div>
              </div>
            </div>

            <div className="hero-image-wrapper">
              <div className="hero-image-card" style={{ background: '#ffffff', padding: '1rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <img
                  src="/assets/images/mollisaqua-product-units.jpg"
                  alt="MOLLISAQUA Water Conditioner Genuine Product Range"
                  width="600"
                  height="400"
                  style={{ objectFit: 'contain', width: '100%', height: 'auto', borderRadius: '10px' }}
                />
                <div style={{ marginTop: '0.75rem', textAlign: 'center', width: '100%', borderTop: '1px solid #e2e8f0', paddingTop: '0.5rem' }}>
                  <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#0f172a' }}>
                    Official MOLLISAQUA® Product Range • High Grade Precision Stainless Steel
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hard Water Problems vs Solution */}
      <section className="section-py bg-light">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Common Water Challenges</span>
            <h2 className="section-title">Are You Frustrated with Hard Water &amp; Limescale?</h2>
            <p className="section-desc">
              Borewell and municipal water in Gujarat carries high calcium and magnesium hardness that silently chokes pipelines, burns out geysers, ruins luxury bathroom fixtures, and causes severe hair loss.
            </p>
          </div>

          <div className="grid-3">
            <div className="feature-card">
              <div className="feature-icon-box">🚿</div>
              <h3>Hair Fall &amp; Dry Skin</h3>
              <p>
                Hard water prevents shampoo and soap from lathering, leaving a sticky curd that clogs scalp pores, causes hair breakage, and triggers itchy skin.
              </p>
              <Link to="/features" className="card-footer-link">Solved with conditioned water →</Link>
            </div>

            <div className="feature-card">
              <div className="feature-icon-box">⚡</div>
              <h3>30% Higher Power Bills</h3>
              <p>
                Just 2mm of calcium scale on geysers, solar coils, and boiler heating elements increases electricity and fuel consumption by over 20-30%.
              </p>
              <Link to="/features" className="card-footer-link">Saves power year after year →</Link>
            </div>

            <div className="feature-card">
              <div className="feature-icon-box">🚰</div>
              <h3>Choked Pipes &amp; White Stains</h3>
              <p>
                Ugly stubborn white scaling on expensive CP taps, shower nozzles, tiles, glass partitions, and premature failure of concealed plumbing lines.
              </p>
              <Link to="/features" className="card-footer-link">Zero white deposit guarantee →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Pipe Comparison Slider */}
      <section className="section-py">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Visual Proof</span>
            <h2 className="section-title">See the Difference: Inside Your Pipes</h2>
            <p className="section-desc">
              Drag the comparison slider left and right to inspect how untreated hard water calcifies pipes versus the clean, unobstructed flow with our Catalytic Water Conditioner.
            </p>
          </div>

          <PipeSlider />

          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link to="/how-it-works" className="btn btn-secondary">
              Learn the Science of Catalytic Conditioning →
            </Link>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section-py bg-soft-blue">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Why Choose Us</span>
            <h2 className="section-title">Why MOLLISAQUA® Outperforms Conventional Softeners</h2>
            <p className="section-desc">
              Traditional ion-exchange water softeners require thousands of rupees in salt bags every month, waste hundreds of litres during backwash, and add harmful sodium into your water.
            </p>
          </div>

          <div className="table-responsive">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Feature / Parameter</th>
                  <th className="highlight-col">MOLLISAQUA® Catalytic Conditioner</th>
                  <th>Conventional Salt Softeners</th>
                  <th>Electronic Descalers</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Monthly Salt / Chemical Refill</strong></td>
                  <td className="highlight-col"><span className="badge-good">✓ ZERO (No salt ever)</span></td>
                  <td><span className="badge-bad">✗ Requires 50-200 kg Salt/mo</span></td>
                  <td><span className="badge-good">✓ Zero Salt</span></td>
                </tr>
                <tr>
                  <td><strong>Electricity / Power Required</strong></td>
                  <td className="highlight-col"><span className="badge-good">✓ 0 Watts (Hydrodynamic)</span></td>
                  <td><span className="badge-bad">✗ Continuous electric valve</span></td>
                  <td><span className="badge-bad">✗ Needs continuous 24/7 power</span></td>
                </tr>
                <tr>
                  <td><strong>Water Wastage (Backwash drain)</strong></td>
                  <td className="highlight-col"><span className="badge-good">✓ 0% Water Wastage</span></td>
                  <td><span className="badge-bad">✗ Wastes 20-30% saline drain</span></td>
                  <td><span className="badge-good">✓ 0% Wastage</span></td>
                </tr>
                <tr>
                  <td><strong>Maintenance Routine</strong></td>
                  <td className="highlight-col"><span className="badge-good">✓ 100% Maintenance Free</span></td>
                  <td><span className="badge-bad">✗ Resin cleaning, brine tank washes</span></td>
                  <td><span className="badge-bad">✗ Coil replacement &amp; circuit issues</span></td>
                </tr>
                <tr>
                  <td><strong>Retains Healthy Minerals</strong></td>
                  <td className="highlight-col"><span className="badge-good">✓ Yes (Ca &amp; Mg intact in Aragonite form)</span></td>
                  <td><span className="badge-bad">✗ Replaces healthy minerals with Sodium</span></td>
                  <td><span className="badge-good">✓ Yes</span></td>
                </tr>
                <tr>
                  <td><strong>Lifespan &amp; Build Material</strong></td>
                  <td className="highlight-col"><span className="badge-good">✓ 25+ Years (Heavy-Duty Stainless Steel)</span></td>
                  <td><span className="badge-bad">✗ 3-5 Years (Resin degradation)</span></td>
                  <td><span className="badge-bad">✗ 2-4 Years (Plastic/Electronics)</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Applications Preview */}
      <section className="section-py">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Versatile Applications</span>
            <h2 className="section-title">Engineered for Every Hard Water Challenge</h2>
            <p className="section-desc">
              From single bungalows to massive residential high-rises, industrial cooling towers, and agricultural irrigation networks across Gujarat.
            </p>
          </div>

          <div className="grid-4">
            <article className="app-card">
              <div className="app-card-img">
                <img src="/assets/images/application-society.svg" alt="Housing Societies & Common Borewells Application" width="300" height="200" loading="lazy" />
              </div>
              <div className="app-card-body">
                <h3>Housing Societies &amp; Borewells</h3>
                <p>One master unit treats the entire central supply line or overhead tank, eliminating monthly salt maintenance headaches for society committees.</p>
                <ul className="app-highlights">
                  <li>Saves ₹30,000+ monthly society salt costs</li>
                  <li>Stops high-rise plumbing riser calcification</li>
                  <li>Clean water for 100+ flats simultaneously</li>
                </ul>
                <Link to="/applications#societies" className="btn btn-outline btn-sm">Explore Societies →</Link>
              </div>
            </article>

            <article className="app-card">
              <div className="app-card-img">
                <img src="/assets/images/application-home.svg" alt="Flats & Bungalows Application" width="300" height="200" loading="lazy" />
              </div>
              <div className="app-card-body">
                <h3>Flats &amp; Bungalows</h3>
                <p>Point-of-entry installation protects expensive bathroom faucets, concealed mixers, shower heads, geysers, and washing machines from day one.</p>
                <ul className="app-highlights">
                  <li>Silky smooth bathing water &amp; hair protection</li>
                  <li>Zero white lime marks on Italian tiles &amp; glass</li>
                  <li>Extends geyser &amp; solar heater life by 3x</li>
                </ul>
                <Link to="/applications#residential" className="btn btn-outline btn-sm">Explore Homes →</Link>
              </div>
            </article>

            <article className="app-card">
              <div className="app-card-img">
                <img src="/assets/images/application-industry.svg" alt="Factories & Industries Application" width="300" height="200" loading="lazy" />
              </div>
              <div className="app-card-body">
                <h3>Factories &amp; Industries</h3>
                <p>Eliminates scale formation in cooling towers, boilers, heat exchangers, food processing chillers, and industrial RO pre-filtration.</p>
                <ul className="app-highlights">
                  <li>Cuts thermal energy loss by 15% to 25%</li>
                  <li>Drastically cuts acid wash shutdowns</li>
                  <li>Flanged models available up to 8"+ pipelines</li>
                </ul>
                <Link to="/applications#industrial" className="btn btn-outline btn-sm">Explore Industrial →</Link>
              </div>
            </article>

            <article className="app-card">
              <div className="app-card-img">
                <img src="/assets/images/application-agriculture.svg" alt="Agriculture & Farming Application" width="300" height="200" loading="lazy" />
              </div>
              <div className="app-card-body">
                <h3>Agriculture &amp; Farming</h3>
                <p>Installed directly on borewell pump discharge. Unclogs drip irrigation emitters and improves water soil infiltration for healthier crop yields.</p>
                <ul className="app-highlights">
                  <li>Stops calcium clogging of drip holes &amp; sprinklers</li>
                  <li>Reduces white salt crusting on fertile topsoil</li>
                  <li>Enhances crop nutrient &amp; moisture uptake</li>
                </ul>
                <Link to="/applications#agriculture" className="btn btn-outline btn-sm">Explore Agriculture →</Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Savings Calculator */}
      <section className="section-py bg-light">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Interactive Tool</span>
            <h2 className="section-title">Calculate Your Estimated Annual Savings</h2>
            <p className="section-desc">
              See how much money you waste each year on salt refills, extra geyser power, plumbing repairs, and RO membrane replacements caused by hard water.
            </p>
          </div>

          <SavingsCalculator onOpenDemo={onOpenDemo} />
        </div>
      </section>

      {/* Live Video Showcase Section */}
      <VideoSection onOpenDemo={onOpenDemo} />

      {/* Official Catalogues Section (English & Gujarati) */}
      <CatalogueSection />

      {/* Live Demo Ribbon */}
      <CtaRibbon onOpenDemo={onOpenDemo} />

      {/* FAQ Section */}
      <section className="section-py bg-light">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Got Questions?</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-desc">Clear answers to help you understand how water conditioning works for your property.</p>
          </div>

          <FaqAccordion />
        </div>
      </section>
    </main>
  );
}
