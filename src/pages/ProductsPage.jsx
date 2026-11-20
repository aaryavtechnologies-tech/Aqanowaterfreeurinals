import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import OtherProductsSection, { productsData } from '../components/OtherProductsSection';
import CtaRibbon from '../components/CtaRibbon';

export default function ProductsPage({ onOpenDemo }) {
  const [selectedProduct, setSelectedProduct] = useState(productsData[0].name);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    product: productsData[0].name,
    projectLocation: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const text = `Hello Mukeshbhai,%0A%0A*New Product Enquiry from Website:*%0A- *Product:* ${encodeURIComponent(formData.product)}%0A- *Name:* ${encodeURIComponent(formData.name)}%0A- *Phone:* ${encodeURIComponent(formData.phone)}%0A- *Email:* ${encodeURIComponent(formData.email || 'N/A')}%0A- *Location:* ${encodeURIComponent(formData.projectLocation)}%0A- *Details:* ${encodeURIComponent(formData.message || 'Please send technical catalogue and quote.')}`;
    
    window.open(`https://wa.me/917984515685?text=${text}`, '_blank');
    setSubmitted(true);
  };

  return (
    <main>
      {/* Page Header Banner */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content">
            <span className="page-hero-badge">Comprehensive Product Portfolio</span>
            <h1 className="page-hero-title">
              Sustainable Infrastructure &amp; <span className="text-gradient">Green Building Solutions</span>
            </h1>
            <p className="page-hero-subtitle">
              Beyond catalytic water conditioning, Param Industries supplies specialized anti-corrosive roofing, PUF thermal panels, solar air-conditioning, WPC waterproof doors, and coming-soon zero-water urinals and heat pumps.
            </p>
            <div className="page-hero-cta" style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '1.5rem' }}>
              <a href="#other-products" className="btn btn-primary">
                Explore All 9 Products ↓
              </a>
              <a
                href="https://wa.me/917984515685?text=Hello%20Mukeshbhai,%20I%20would%20like%20to%20inquire%20about%20your%20extended%20product%20range."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                <span>💬</span> WhatsApp Inquiry
              </a>
              <a href="tel:+917984515685" className="btn btn-outline-white">
                <span>📞</span> Call +91 79845 15685
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Products Grid Section */}
      <OtherProductsSection onOpenDemo={onOpenDemo} />

      {/* Quick RFQ / Inquiry Form Section */}
      <section className="section-py bg-light" id="product-enquiry">
        <div className="container">
          <div style={{ maxWidth: '800px', marginInline: 'auto', background: 'white', padding: '2.5rem', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.08)', border: '1px solid #e2e8f0' }}>
            <div className="section-header" style={{ marginBottom: '1.75rem', textAlign: 'center' }}>
              <span className="section-badge">Fast Response RFQ</span>
              <h2 className="section-title" style={{ fontSize: '1.85rem' }}>Direct Product Enquiry Form</h2>
              <p className="section-desc" style={{ marginBottom: 0 }}>
                Select a product from our portfolio to receive customized specifications, sizing guidelines, and bulk factory quotes.
              </p>
            </div>

            {submitted ? (
              <div style={{ padding: '2rem', background: '#ecfdf5', borderRadius: '12px', border: '1px solid #10b981', textAlign: 'center' }}>
                <span style={{ fontSize: '3rem' }}>✅</span>
                <h3 style={{ color: '#065f46', marginTop: '0.75rem' }}>Enquiry Prepared for WhatsApp!</h3>
                <p style={{ color: '#047857', fontSize: '0.95rem' }}>
                  Your details have been routed directly to Mukeshbhai Thakkar on WhatsApp (+91 79845 15685). Our engineering team will assist you shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="btn btn-primary btn-sm"
                  style={{ marginTop: '1rem' }}
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem', marginBottom: '1.25rem' }}>
                  <div className="form-group">
                    <label style={{ display: 'block', fontWeight: 600, color: '#334155', marginBottom: '0.35rem', fontSize: '0.9rem' }}>
                      Select Product of Interest *
                    </label>
                    <select
                      name="product"
                      value={formData.product}
                      onChange={handleChange}
                      required
                      style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #cbd5e1', fontWeight: 600, color: '#0f172a' }}
                    >
                      {productsData.map((p) => (
                        <option key={p.id} value={p.name}>
                          {p.name} {p.status === 'COMING SOON' ? '(COMING SOON)' : ''}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label style={{ display: 'block', fontWeight: 600, color: '#334155', marginBottom: '0.35rem', fontSize: '0.9rem' }}>
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Ramesh Shah"
                      value={formData.name}
                      onChange={handleChange}
                      style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #cbd5e1' }}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem', marginBottom: '1.25rem' }}>
                  <div className="form-group">
                    <label style={{ display: 'block', fontWeight: 600, color: '#334155', marginBottom: '0.35rem', fontSize: '0.9rem' }}>
                      Mobile / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="e.g. 98765 43210"
                      value={formData.phone}
                      onChange={handleChange}
                      style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #cbd5e1' }}
                    />
                  </div>

                  <div className="form-group">
                    <label style={{ display: 'block', fontWeight: 600, color: '#334155', marginBottom: '0.35rem', fontSize: '0.9rem' }}>
                      City / Project Location *
                    </label>
                    <input
                      type="text"
                      name="projectLocation"
                      required
                      placeholder="e.g. Ahmedabad, Sanand, Surat, Rajkot"
                      value={formData.projectLocation}
                      onChange={handleChange}
                      style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #cbd5e1' }}
                    />
                  </div>
                </div>

                <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', fontWeight: 600, color: '#334155', marginBottom: '0.35rem', fontSize: '0.9rem' }}>
                    Requirement Details / Dimensions / Quantity
                  </label>
                  <textarea
                    name="message"
                    rows="3"
                    placeholder="e.g. Need quotation for 5,000 sq ft PUF Panel Roof or 10 units Water Free Urinals..."
                    value={formData.message}
                    onChange={handleChange}
                    style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #cbd5e1' }}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: '100%', padding: '0.9rem', fontSize: '1.05rem', justifyContent: 'center' }}
                >
                  Submit &amp; Open on WhatsApp 🚀
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Live Demo & Consultation Ribbon */}
      <CtaRibbon onOpenDemo={onOpenDemo} />
    </main>
  );
}
