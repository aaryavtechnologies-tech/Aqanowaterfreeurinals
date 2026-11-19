import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CatalogueSection from '../components/CatalogueSection';
import FaqAccordion from '../components/FaqAccordion';
import CtaRibbon from '../components/CtaRibbon';

export default function ContactPage({ onOpenDemo }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    application: 'Residential / Bungalow',
    pipeSize: '1 Inch (Typical Bungalow)',
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `*New Website Enquiry*\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Location:* ${formData.location}\n*Application:* ${formData.application}\n*Pipe Size:* ${formData.pipeSize}\n*Message:* ${formData.message || 'Please provide quotation and specifications'}`;
    const url = `https://wa.me/917984515685?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    setSubmitted(true);
  };

  return (
    <main>
      <section className="page-banner">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span aria-current="page">Contact Us</span>
          </nav>
          <h1>Get in Touch with Our Water Specialists</h1>
          <p>Have questions about hard water, need custom pipe sizing, or wish to schedule a live product demonstration? Reach out today.</p>
        </div>
      </section>

      {/* Contact Cards & Form */}
      <section className="section-py">
        <div className="container">
          <div className="grid-2" style={{ gap: '3rem', alignItems: 'flex-start' }}>
            {/* Contact Details Column */}
            <div>
              <span className="section-badge">Direct Communication</span>
              <h2 className="section-title">We Are Here to Assist You</h2>
              <p style={{ color: '#475569', lineHeight: 1.8, marginBottom: '2rem' }}>
                Connect directly with <strong>Mukeshbhai Thakkar</strong> and our engineering team at Param Industries. Whether you manage a residential apartment, a factory boiler, or an agricultural plantation, we provide exact guidance.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {/* Phone Card */}
                <div style={{ display: 'flex', gap: '1.25rem', background: '#f8fafc', padding: '1.5rem', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
                  <div style={{ fontSize: '2rem', background: '#e0f2fe', width: '56px', height: '56px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '12px' }}>
                    📞
                  </div>
                  <div>
                    <h4 style={{ color: '#0f172a', margin: '0 0 0.25rem 0' }}>Call or WhatsApp Directly</h4>
                    <p style={{ color: '#64748b', margin: '0 0 0.5rem 0', fontSize: '0.9rem' }}>Direct Line to Mukeshbhai Thakkar</p>
                    <a href="tel:+917984515685" style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0284c7', textDecoration: 'none' }}>
                      +91 79845 15685
                    </a>
                  </div>
                </div>

                {/* WhatsApp Chat Card */}
                <div style={{ display: 'flex', gap: '1.25rem', background: '#f0fdf4', padding: '1.5rem', borderRadius: '16px', border: '1px solid #bbf7d0' }}>
                  <div style={{ fontSize: '2rem', background: '#dcfce7', width: '56px', height: '56px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '12px' }}>
                    💬
                  </div>
                  <div>
                    <h4 style={{ color: '#166534', margin: '0 0 0.25rem 0' }}>Instant WhatsApp Support</h4>
                    <p style={{ color: '#15803d', margin: '0 0 0.5rem 0', fontSize: '0.9rem' }}>Chat directly for quick pricing &amp; sizing advice</p>
                    <a
                      href="https://wa.me/917984515685?text=Hello%20Mukeshbhai,%20I%20am%20interested%20in%20learning%20more%20about%20MOLLISAQUA%20Water%20Conditioner"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary btn-sm"
                      style={{ background: '#25d366', borderColor: '#25d366', color: 'white' }}
                    >
                      Open WhatsApp Chat
                    </a>
                  </div>
                </div>

                {/* Email Card */}
                <div style={{ display: 'flex', gap: '1.25rem', background: '#f8fafc', padding: '1.5rem', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
                  <div style={{ fontSize: '2rem', background: '#e0f2fe', width: '56px', height: '56px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '12px' }}>
                    ✉️
                  </div>
                  <div>
                    <h4 style={{ color: '#0f172a', margin: '0 0 0.25rem 0' }}>Official Email Address</h4>
                    <p style={{ color: '#64748b', margin: '0 0 0.5rem 0', fontSize: '0.9rem' }}>Send drawings, water test reports &amp; RFQs</p>
                    <a href="mailto:envisave24@gmail.com" style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0284c7', textDecoration: 'none' }}>
                      envisave24@gmail.com
                    </a>
                  </div>
                </div>

                {/* Address Card */}
                <div style={{ display: 'flex', gap: '1.25rem', background: '#f8fafc', padding: '1.5rem', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
                  <div style={{ fontSize: '2rem', background: '#e0f2fe', width: '56px', height: '56px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '12px' }}>
                    📍
                  </div>
                  <div>
                    <h4 style={{ color: '#0f172a', margin: '0 0 0.25rem 0' }}>Live Demo Center &amp; Office</h4>
                    <p style={{ color: '#475569', margin: '0 0 0.5rem 0', lineHeight: 1.6, fontSize: '0.95rem' }}>
                      A/1501, Riviera Springs, Skycity,<br />
                      Club O7 Road, Shela,<br />
                      Ahmedabad – 380058, Gujarat, India.
                    </p>
                    <small style={{ color: '#0284c7', fontWeight: 600 }}>Param Industries, Ahmedabad</small>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Form Column */}
            <div style={{ background: 'white', padding: '2.5rem', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.08)', border: '1px solid #e2e8f0' }}>
              <span className="badge badge-accent" style={{ marginBottom: '0.5rem', display: 'inline-block' }}>Fast Response Guaranteed</span>
              <h3 style={{ color: '#0f172a', marginBottom: '0.5rem' }}>Send Us an Enquiry</h3>
              <p style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                Fill out the form below. Your requirement will be formatted directly into a WhatsApp inquiry for quick pricing.
              </p>

              {submitted ? (
                <div style={{ padding: '2rem', background: '#ecfdf5', borderRadius: '12px', border: '1px solid #10b981', textAlign: 'center' }}>
                  <span style={{ fontSize: '3rem' }}>🎉</span>
                  <h4 style={{ color: '#065f46', marginTop: '0.75rem' }}>Enquiry Submitted!</h4>
                  <p style={{ color: '#047857', fontSize: '0.95rem' }}>
                    Your message has opened in WhatsApp for Mukeshbhai Thakkar. We will get back to you shortly.
                  </p>
                  <button onClick={() => setSubmitted(false)} className="btn btn-primary btn-sm" style={{ marginTop: '1rem' }}>
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-group" style={{ marginBottom: '1rem' }}>
                    <label style={{ display: 'block', fontWeight: 600, color: '#334155', marginBottom: '0.35rem', fontSize: '0.9rem' }}>
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Mukesh Patel"
                      value={formData.name}
                      onChange={handleChange}
                      style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #cbd5e1' }}
                    />
                  </div>

                  <div className="form-group" style={{ marginBottom: '1rem' }}>
                    <label style={{ display: 'block', fontWeight: 600, color: '#334155', marginBottom: '0.35rem', fontSize: '0.9rem' }}>
                      Mobile / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={handleChange}
                      style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #cbd5e1' }}
                    />
                  </div>

                  <div className="grid-2" style={{ gap: '1rem', marginBottom: '1rem' }}>
                    <div>
                      <label style={{ display: 'block', fontWeight: 600, color: '#334155', marginBottom: '0.35rem', fontSize: '0.9rem' }}>
                        Your City / Area *
                      </label>
                      <input
                        type="text"
                        name="location"
                        required
                        placeholder="e.g. Ahmedabad, Surat, Rajkot..."
                        value={formData.location}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #cbd5e1' }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontWeight: 600, color: '#334155', marginBottom: '0.35rem', fontSize: '0.9rem' }}>
                        Application Type *
                      </label>
                      <select
                        name="application"
                        value={formData.application}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #cbd5e1' }}
                      >
                        <option value="Residential / Bungalow">Residential Bungalow / Villa</option>
                        <option value="Individual Flat / Apartment">Individual Flat / Apartment</option>
                        <option value="Housing Society / Common Borewell">Housing Society / Common Borewell</option>
                        <option value="Factory / Industrial Boilers / Cooling">Factory / Boiler / Cooling Tower</option>
                        <option value="Agriculture / Drip Irrigation">Agriculture / Drip Irrigation</option>
                        <option value="Commercial (Hotel / Hospital)">Commercial (Hotel / Hospital)</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group" style={{ marginBottom: '1rem' }}>
                    <label style={{ display: 'block', fontWeight: 600, color: '#334155', marginBottom: '0.35rem', fontSize: '0.9rem' }}>
                      Estimated Pipe Line Diameter
                    </label>
                    <select
                      name="pipeSize"
                      value={formData.pipeSize}
                      onChange={handleChange}
                      style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #cbd5e1' }}
                    >
                      <option value="1/2 Inch (15mm) - Bathroom / Line">1/2 Inch (15mm) – Bathroom / Sub-line</option>
                      <option value="3/4 Inch (20mm) - Apartment Line">3/4 Inch (20mm) – Apartment Inlet</option>
                      <option value="1 Inch (25mm) - Bungalow / Villa">1 Inch (25mm) – Typical Bungalow</option>
                      <option value="1.25 to 1.5 Inch (32mm - 40mm)">1.25" to 1.5" (32mm – 40mm)</option>
                      <option value="2 Inch (50mm) - Society / Borewell">2 Inch (50mm) – Society / Farm Borewell</option>
                      <option value="2.5 to 3 Inch (65mm - 80mm)">2.5" to 3" (65mm – 80mm)</option>
                      <option value="4 Inch and above (Industrial)">4 Inch and above (Industrial/High Flow)</option>
                      <option value="Not sure - need site recommendation">Not sure – need recommendation</option>
                    </select>
                  </div>

                  <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                    <label style={{ display: 'block', fontWeight: 600, color: '#334155', marginBottom: '0.35rem', fontSize: '0.9rem' }}>
                      Requirement Details or Questions
                    </label>
                    <textarea
                      name="message"
                      rows="3"
                      placeholder="Please share pricing, delivery time, or any borewell TDS details..."
                      value={formData.message}
                      onChange={handleChange}
                      style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #cbd5e1' }}
                    />
                  </div>

                  <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '0.9rem' }}>
                    Send Enquiry to WhatsApp 🚀
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Google Maps */}
      <section className="section-py bg-light">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Locate Us</span>
            <h2 className="section-title">Visit Our Shela, Ahmedabad Office</h2>
            <p className="section-desc">A/1501, Riviera Springs, Skycity, Club O7 Road, Shela, Ahmedabad – 58.</p>
          </div>

          <div style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.08)', height: '400px', width: '100%' }}>
            <iframe
              title="Param Industries MOLLISAQUA Ahmedabad Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14690.69750058509!2d72.44318725!3d23.00067645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b1d92bf2f3b%3A0xcfeee0fa8ea457cb!2sRiviera%20Springs!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* Official Catalogues */}
      <CatalogueSection />

      {/* FAQ Accordion */}
      <FaqAccordion onOpenDemo={onOpenDemo} />

      {/* CTA Ribbon */}
      <CtaRibbon onOpenDemo={onOpenDemo} />
    </main>
  );
}
