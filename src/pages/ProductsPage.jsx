import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import OtherProductsSection, { productsData } from '../components/OtherProductsSection';
import CtaRibbon from '../components/CtaRibbon';

export default function ProductsPage({ onOpenDemo }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    product: productsData[0].name,
    projectLocation: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const rfqFormRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectProduct = (productName) => {
    setFormData((prev) => ({ ...prev, product: productName }));
    if (rfqFormRef.current) {
      rfqFormRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const text = `Hello Mukeshbhai,%0A%0A*New Product RFQ from Website:*%0A- *Product:* ${encodeURIComponent(formData.product)}%0A- *Name:* ${encodeURIComponent(formData.name)}%0A- *Phone:* ${encodeURIComponent(formData.phone)}%0A- *Email:* ${encodeURIComponent(formData.email || 'N/A')}%0A- *Location:* ${encodeURIComponent(formData.projectLocation)}%0A- *Details:* ${encodeURIComponent(formData.message || 'Please send technical catalogue and quote.')}`;
    
    window.open(`https://wa.me/917984515685?text=${text}`, '_blank');
    setSubmitted(true);
  };

  return (
    <main>
      {/* Modern Page Banner with Deep Gradient & High Contrast */}
      <section className="page-banner">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span aria-current="page">Other Sustainable Products</span>
          </nav>

          <span className="page-badge-pill">
            ★ Param Industries Portfolio • Ahmedabad
          </span>

          <h1>
            Sustainable Infrastructure &amp; <span className="text-gradient">Green Building Solutions</span>
          </h1>

          <p>
            Beyond catalytic water conditioning, explore our certified range of Waterless Odourless Urinals, Stainless Steel Waste Couplings (www.waterfreeurinal.in), Heat Pumps, Corrosion-Proof Roofing, Insulated PUF Panels, Solar AC, and WPC Doors.
          </p>

          {/* Quick Stats Grid */}
          <div className="banner-stats-grid">
            <div className="banner-stat-card">
              <span className="banner-stat-number">10</span>
              <span className="banner-stat-desc">Specialized Eco Products</span>
            </div>
            <div className="banner-stat-card">
              <span className="banner-stat-number">100%</span>
              <span className="banner-stat-desc">Anti-Corrosive &amp; Rust-Proof</span>
            </div>
            <div className="banner-stat-card">
              <span className="banner-stat-number">₹4,000</span>
              <span className="banner-stat-desc">Waterless Urinal / Piece</span>
            </div>
            <div className="banner-stat-card">
              <span className="banner-stat-number">Direct</span>
              <span className="banner-stat-desc">Factory Supply &amp; Pricing</span>
            </div>
          </div>

          {/* High Visibility Action Buttons */}
          <div className="page-banner-cta-group">
            <a href="#other-products" className="btn btn-accent btn-lg">
              <span>📦</span> Explore All 10 Products ↓
            </a>
            <a
              href="https://wa.me/917984515685?text=Hello%20Mukeshbhai,%20I%20would%20like%20to%20inquire%20about%20your%20extended%20sustainable%20product%20range."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-lg"
            >
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.16 12.04 20.16C10.61 20.16 9.2 19.78 7.97 19.05L7.68 18.88L4.56 19.7L5.39 16.66L5.2 16.36C4.4 15.08 3.97 13.51 3.97 11.91C3.97 7.37 7.67 3.67 12.05 3.67ZM8.86 7.47C8.66 7.47 8.33 7.54 8.05 7.84C7.78 8.14 7.02 8.85 7.02 10.3C7.02 11.75 8.08 13.15 8.22 13.35C8.37 13.55 10.3 16.53 13.26 17.81C13.97 18.11 14.52 18.3 14.95 18.43C15.66 18.66 16.31 18.63 16.82 18.55C17.39 18.47 18.57 17.84 18.82 17.14C19.06 16.44 19.06 15.83 18.99 15.71C18.92 15.59 18.72 15.52 18.42 15.37C18.12 15.22 16.65 14.5 16.38 14.4C16.1 14.3 15.91 14.25 15.71 14.55C15.51 14.85 14.95 15.52 14.77 15.71C14.6 15.91 14.43 15.93 14.13 15.78C13.83 15.63 12.87 15.32 11.73 14.3C10.84 13.51 10.25 12.53 10.07 12.23C9.9 11.93 10.05 11.77 10.2 11.62C10.34 11.49 10.5 11.27 10.65 11.1C10.8 10.93 10.85 10.81 10.95 10.61C11.05 10.41 11 10.24 10.92 10.09C10.85 9.94 10.25 8.47 10.01 7.87C9.77 7.29 9.53 7.37 9.35 7.36C9.18 7.35 8.99 7.47 8.86 7.47Z" />
              </svg>
              <span>WhatsApp Inquiry</span>
            </a>
            <a href="tel:+917984515685" className="btn btn-outline-white btn-lg">
              <span>📞</span> +91 79845 15685
            </a>
          </div>
        </div>
      </section>

      {/* Main Products Grid (without repeating the header) */}
      <OtherProductsSection
        onOpenDemo={onOpenDemo}
        showHeader={false}
        onSelectProductForRfq={handleSelectProduct}
      />

      {/* Quick RFQ / Product Enquiry Form */}
      <section className="section-py bg-light" id="product-enquiry" ref={rfqFormRef}>
        <div className="container">
          <div className="rfq-form-card">
            <div className="section-header" style={{ marginBottom: '1.75rem', textAlign: 'center' }}>
              <span className="section-badge">Fast Response RFQ</span>
              <h2 className="section-title" style={{ fontSize: '1.85rem' }}>Direct Product Enquiry Form</h2>
              <p className="section-desc" style={{ marginBottom: 0 }}>
                Select a product from our portfolio to receive customized specifications, sizing guidelines, and factory pricing.
              </p>
            </div>

            {submitted ? (
              <div className="rfq-submitted-box">
                <span style={{ fontSize: '3.2rem' }}>✅</span>
                <h3>Enquiry Prepared for WhatsApp!</h3>
                <p>
                  Your details have been forwarded to <strong>Mukeshbhai Thakkar</strong> on WhatsApp (+91 79845 15685). We will assist you promptly.
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
                {/* Product Selection Radio / Select */}
                <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                  <label className="form-label-bold">
                    Select Product of Interest: <span className="req">*</span>
                  </label>
                  <select
                    name="product"
                    value={formData.product}
                    onChange={handleChange}
                    required
                    className="product-select-dropdown"
                  >
                    {productsData.map((p) => (
                      <option key={p.id} value={p.name}>
                        {p.icon} {p.name} {p.status === 'COMING SOON' ? '— (COMING SOON)' : ''}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="rfq-form-grid-2">
                  <div className="form-group">
                    <label className="form-label-bold">
                      Your Full Name: <span className="req">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Ramesh Shah"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-control-input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label-bold">
                      Mobile / WhatsApp Number: <span className="req">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="e.g. 98765 43210"
                      value={formData.phone}
                      onChange={handleChange}
                      className="form-control-input"
                    />
                  </div>
                </div>

                <div className="rfq-form-grid-2">
                  <div className="form-group">
                    <label className="form-label-bold">
                      City / Project Location: <span className="req">*</span>
                    </label>
                    <input
                      type="text"
                      name="projectLocation"
                      required
                      placeholder="e.g. Ahmedabad, Sanand, Surat, Rajkot"
                      value={formData.projectLocation}
                      onChange={handleChange}
                      className="form-control-input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label-bold">
                      Email Address (Optional):
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="e.g. yourname@gmail.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-control-input"
                    />
                  </div>
                </div>

                <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                  <label className="form-label-bold">
                    Requirement Details / Dimensions / Quantity:
                  </label>
                  <textarea
                    name="message"
                    rows="3"
                    placeholder="e.g. Need quotation for 5,000 sq ft PUF Panel Roof or 10 units Water Free Urinals..."
                    value={formData.message}
                    onChange={handleChange}
                    className="form-control-input"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: '100%', padding: '1rem', fontSize: '1.05rem', justifyContent: 'center' }}
                >
                  <span>🚀</span> Submit &amp; Open on WhatsApp
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Live Demo Ribbon */}
      <CtaRibbon onOpenDemo={onOpenDemo} />
    </main>
  );
}
