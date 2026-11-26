import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import VideoSection from '../components/VideoSection';
import CatalogueSection from '../components/CatalogueSection';
import CtaRibbon from '../components/CtaRibbon';
import SocialPills from '../components/SocialPills';
import { SOCIAL_LINKS } from '../config/socialLinks';

export default function LiveDemoPage({ onOpenDemo }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    propertyType: 'Residential Bungalow / Flat',
    address: '',
    notes: '',
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
    const text = `*New Live Demo Booking Request*\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Preferred Date:* ${formData.date}\n*Preferred Time:* ${formData.time}\n*Property Type:* ${formData.propertyType}\n*Location:* ${formData.address}\n*Notes:* ${formData.notes || 'None'}`;
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
            <span aria-current="page">Live Demonstration</span>
          </nav>
          <h1>Live Product Demonstration</h1>
          <p>
            Experience MOLLISAQUA® in action. Watch our recorded live demonstration video clips below, or schedule an in-person visit to our experience center in Shela, Ahmedabad.
          </p>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '1.25rem', flexWrap: 'wrap' }}>
            <a href="#demo-videos" className="btn btn-secondary btn-sm">
              📹 Watch 5 Live Demo Videos
            </a>
            <a href="#book-demo" className="btn btn-outline-white btn-sm">
              📅 Book In-Person Visit in Shela
            </a>
          </div>
        </div>
      </section>

      {/* 1. Live Demonstration Videos (Featured at Top of Demo Page) */}
      <VideoSection onOpenDemo={onOpenDemo} />

      {/* 2. In-Person Demo Center Overview & Booking Form */}
      <section id="book-demo" className="section-py bg-light">
        <div className="container">
          <div className="grid-2" style={{ gap: '3rem', alignItems: 'flex-start' }}>
            {/* Left Info Column */}
            <div>
              <span className="section-badge">Live Experience Center</span>
              <h2 className="section-title">Visit Our Live Demonstration Center</h2>
              <p style={{ color: '#475569', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                We invite homeowners, society management committee members, factory plant managers, and progressive farmers to witness a live comparative demonstration. <strong>Bring your own borewell or tap water sample for testing!</strong>
              </p>

              {/* What You Will Experience */}
              <div style={{ background: 'white', padding: '1.75rem', borderRadius: '16px', border: '1px solid #e2e8f0', marginBottom: '2rem', boxShadow: '0 4px 15px rgba(0,0,0,0.04)' }}>
                <h4 style={{ color: '#0f172a', marginBottom: '1rem' }}>🔬 What You Will Experience in Person:</h4>
                <ul className="benefit-list" style={{ color: '#475569', lineHeight: 1.8 }}>
                  <li><strong>Live Water Flow Test:</strong> Observe pressurized water passing through the catalytic alloy core with zero pressure drop.</li>
                  <li><strong>Lather &amp; Surface Softness Comparison:</strong> Test lather formation comparing raw municipal/borewell water against conditioned water.</li>
                  <li><strong>Mineral Crystallography Demonstration:</strong> Understand how Calcite alters into non-adherent Aragonite powder.</li>
                  <li><strong>Tailored Sizing Consult:</strong> Personalized engineering consultation for your specific pipe diameter, pump rating, and daily consumption.</li>
                </ul>
              </div>

              {/* Direct Address & Contact Box */}
              <div style={{ background: 'white', padding: '1.75rem', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.06)', borderLeft: '5px solid #0284c7' }}>
                <h4 style={{ color: '#0f172a', marginBottom: '0.75rem' }}>📍 Demonstration Center Address</h4>
                <p style={{ color: '#334155', fontWeight: 600, margin: '0 0 0.5rem 0' }}>
                  A/1501, Riviera Springs, Skycity, Club O7 Road, Shela, Ahmedabad – 380058, Gujarat, India.
                </p>
                <p style={{ color: '#64748b', fontSize: '0.9rem', margin: '0 0 1rem 0' }}>
                  <strong>Key Contact:</strong> Mukeshbhai Thakkar (Param Industries)<br />
                  <strong>Emails:</strong> <a href={SOCIAL_LINKS.emailNirali.url} style={{ color: '#0284c7', textDecoration: 'none', fontWeight: 600 }}>{SOCIAL_LINKS.emailNirali.label}</a> • <a href={SOCIAL_LINKS.emailEnvisave.url} style={{ color: '#0284c7', textDecoration: 'none', fontWeight: 600 }}>{SOCIAL_LINKS.emailEnvisave.label}</a>
                </p>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
                  <a href="tel:+917984515685" className="btn btn-outline btn-sm">📞 Call +91 79845 15685</a>
                  <a href={SOCIAL_LINKS.emailNirali.url} className="btn btn-outline btn-sm">✉️ Email Us</a>
                  <a href="https://wa.me/917984515685?text=Hello%20Mukeshbhai,%20I%20would%20like%20to%20visit%20Riviera%20Springs%20for%20a%20Live%20Demo" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">💬 WhatsApp Directions</a>
                </div>
                <SocialPills
                  variant="card"
                  title="Direct Map & Social Channels"
                  subtitle="Instant one-click access to Google directions, reviews, and social profiles:"
                />
              </div>
            </div>

            {/* Right Booking Form Column */}
            <div style={{ background: 'white', padding: '2.5rem', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.08)', border: '1px solid #e2e8f0' }}>
              <span className="badge badge-accent" style={{ marginBottom: '0.5rem', display: 'inline-block' }}>Prior Booking Recommended</span>
              <h3 style={{ color: '#0f172a', marginBottom: '0.5rem' }}>Book Your Live Demo Slot</h3>
              <p style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                Submit below to reserve a 30-minute one-on-one demonstration with our technical specialists.
              </p>

              {submitted ? (
                <div style={{ padding: '2rem', background: '#ecfdf5', borderRadius: '12px', border: '1px solid #10b981', textAlign: 'center' }}>
                  <span style={{ fontSize: '3rem' }}>✅</span>
                  <h4 style={{ color: '#065f46', marginTop: '0.75rem' }}>Demo Request Initiated!</h4>
                  <p style={{ color: '#047857', fontSize: '0.95rem' }}>
                    Your booking details have been forwarded to Mukeshbhai Thakkar via WhatsApp. We will confirm your requested slot shortly.
                  </p>
                  <button onClick={() => setSubmitted(false)} className="btn btn-primary btn-sm" style={{ marginTop: '1rem' }}>
                    Book Another Slot
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-group" style={{ marginBottom: '1rem' }}>
                    <label style={{ display: 'block', fontWeight: 600, color: '#334155', marginBottom: '0.35rem', fontSize: '0.9rem' }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Rajesh Patel"
                      value={formData.name}
                      onChange={handleChange}
                      style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #cbd5e1' }}
                    />
                  </div>

                  <div className="form-group" style={{ marginBottom: '1rem' }}>
                    <label style={{ display: 'block', fontWeight: 600, color: '#334155', marginBottom: '0.35rem', fontSize: '0.9rem' }}>
                      Mobile Number (WhatsApp) *
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
                        Preferred Date *
                      </label>
                      <input
                        type="date"
                        name="date"
                        required
                        value={formData.date}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #cbd5e1' }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontWeight: 600, color: '#334155', marginBottom: '0.35rem', fontSize: '0.9rem' }}>
                        Preferred Time *
                      </label>
                      <select
                        name="time"
                        required
                        value={formData.time}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #cbd5e1' }}
                      >
                        <option value="">Select Time Slot</option>
                        <option value="10:00 AM - 12:00 PM">10:00 AM – 12:00 PM</option>
                        <option value="12:00 PM - 02:00 PM">12:00 PM – 02:00 PM</option>
                        <option value="03:00 PM - 05:00 PM">03:00 PM – 05:00 PM</option>
                        <option value="05:00 PM - 07:00 PM">05:00 PM – 07:00 PM</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group" style={{ marginBottom: '1rem' }}>
                    <label style={{ display: 'block', fontWeight: 600, color: '#334155', marginBottom: '0.35rem', fontSize: '0.9rem' }}>
                      Application / Property Type *
                    </label>
                    <select
                      name="propertyType"
                      value={formData.propertyType}
                      onChange={handleChange}
                      style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #cbd5e1' }}
                    >
                      <option value="Residential Bungalow / Flat">Residential Bungalow / Flat</option>
                      <option value="Housing Society / Apartment Tower">Housing Society / Apartment Tower</option>
                      <option value="Industrial Plant / Boiler / Cooling Tower">Industrial Plant / Boiler / Cooling Tower</option>
                      <option value="Agriculture / Farm Borewell">Agriculture / Farm Borewell</option>
                      <option value="Commercial (Hotel / Hospital / Hostel)">Commercial (Hotel / Hospital / Hostel)</option>
                    </select>
                  </div>

                  <div className="form-group" style={{ marginBottom: '1rem' }}>
                    <label style={{ display: 'block', fontWeight: 600, color: '#334155', marginBottom: '0.35rem', fontSize: '0.9rem' }}>
                      Your City / Area
                    </label>
                    <input
                      type="text"
                      name="address"
                      placeholder="e.g. Shela, Bopal, Prahlad Nagar, Sanand..."
                      value={formData.address}
                      onChange={handleChange}
                      style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #cbd5e1' }}
                    />
                  </div>

                  <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                    <label style={{ display: 'block', fontWeight: 600, color: '#334155', marginBottom: '0.35rem', fontSize: '0.9rem' }}>
                      Special Questions or TDS details (Optional)
                    </label>
                    <textarea
                      name="notes"
                      rows="2"
                      placeholder="e.g. Our borewell water TDS is approx 1,800 ppm..."
                      value={formData.notes}
                      onChange={handleChange}
                      style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #cbd5e1' }}
                    />
                  </div>

                  <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '0.9rem' }}>
                    Confirm Live Demo Booking via WhatsApp 🚀
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Google Map Section */}
      <section className="section-py">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Navigation &amp; Location</span>
            <h2 className="section-title">How to Reach Our Demo Center</h2>
            <p className="section-desc">Conveniently situated in Shela, Skycity, near Club O7 Road, Ahmedabad.</p>
          </div>

          <div style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.08)', height: '420px', width: '100%' }}>
            <iframe
              title="MOLLISAQUA Demo Center Shela Ahmedabad Location"
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

      {/* 4. Official Catalogues */}
      <CatalogueSection />

      {/* 5. CTA Ribbon */}
      <CtaRibbon onOpenDemo={onOpenDemo} />
    </main>
  );
}
