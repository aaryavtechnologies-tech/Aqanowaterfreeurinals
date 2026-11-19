import React, { useRef, useEffect, useState } from 'react';

export default function DemoModal({ isOpen, onClose }) {
  const dialogRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    category: 'Residential (Flat/Bungalow)',
    message: ''
  });
  const [toastMsg, setToastMsg] = useState('');

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      if (!dialog.open) {
        dialog.showModal();
      }
    } else {
      if (dialog.open) {
        dialog.close();
      }
    }
  }, [isOpen]);

  // Light dismiss on backdrop click
  const handleBackdropClick = (e) => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const rect = dialog.getBoundingClientRect();
    const isInDialog = (
      rect.top <= e.clientY &&
      e.clientY <= rect.top + rect.height &&
      rect.left <= e.clientX &&
      e.clientX <= rect.left + rect.width
    );
    if (!isInDialog) {
      onClose();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const businessPhone = '917984515685';

    const waText = encodeURIComponent(
      `*New Demo / Enquiry from Website*\n` +
      `👤 *Name:* ${formData.name}\n` +
      `📞 *Phone:* ${formData.phone}\n` +
      `📍 *Location:* ${formData.location}\n` +
      `🏢 *Category:* ${formData.category}\n` +
      `💬 *Message:* ${formData.message || 'I would like to book a live demonstration.'}\n\n` +
      `Please arrange demo slot / details.`
    );

    const waUrl = `https://wa.me/${businessPhone}?text=${waText}`;

    setToastMsg(`Thank you, ${formData.name}! Redirecting to WhatsApp...`);
    setTimeout(() => {
      window.open(waUrl, '_blank');
      onClose();
      setToastMsg('');
    }, 1000);
  };

  return (
    <>
      <dialog
        ref={dialogRef}
        aria-labelledby="modalTitle"
        onClick={handleBackdropClick}
        onClose={onClose}
      >
        <div className="dialog-content">
          <div className="dialog-header">
            <div>
              <h2 id="modalTitle" className="dialog-title">Book a Live Demonstration</h2>
              <p style={{ fontSize: '0.9rem', color: '#64748B', marginTop: '0.25rem' }}>
                Meet with Mukeshbhai Thakkar in Shela, Ahmedabad
              </p>
            </div>
            <button
              type="button"
              className="dialog-close-btn"
              onClick={onClose}
              aria-label="Close dialog"
            >
              &times;
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="modalName">
                Full Name: <span className="req">*</span>
              </label>
              <input
                type="text"
                id="modalName"
                name="name"
                className="form-control"
                placeholder="e.g. Rajesh Patel"
                required
                autoComplete="name"
                enterKeyHint="next"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="modalPhone">
                  Phone / WhatsApp: <span className="req">*</span>
                </label>
                <input
                  type="tel"
                  id="modalPhone"
                  name="phone"
                  className="form-control"
                  placeholder="e.g. 98765 43210"
                  required
                  pattern="[0-9+\s\-]{10,15}"
                  autoComplete="tel"
                  enterKeyHint="next"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label htmlFor="modalLocation">
                  Your Area: <span className="req">*</span>
                </label>
                <input
                  type="text"
                  id="modalLocation"
                  name="location"
                  className="form-control"
                  placeholder="e.g. Shela / Bopal"
                  required
                  enterKeyHint="next"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="modalCategory">Application Type:</label>
              <select
                id="modalCategory"
                name="category"
                className="form-control"
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              >
                <option value="Residential (Flat/Bungalow)">Residential (Flat / Bungalow)</option>
                <option value="Housing Society Borewell">Housing Society &amp; Common Borewell</option>
                <option value="Industrial / Factory">Industrial / Factory / Cooling Tower</option>
                <option value="Agriculture / Farm">Agriculture &amp; Drip Irrigation</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="modalMessage">Preferred Date / Problem Details:</label>
              <textarea
                id="modalMessage"
                name="message"
                className="form-control"
                placeholder="Tell us about your water hardness issue or preferred demo time..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              ></textarea>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end', marginTop: '1.5rem' }}>
              <button type="button" className="btn btn-outline" onClick={onClose}>
                Cancel
              </button>
              <button type="submit" className="btn btn-primary" autoFocus>
                <span>🚀</span> Submit &amp; Open WhatsApp
              </button>
            </div>
          </form>
        </div>
      </dialog>

      {toastMsg && (
        <div className="toast-notice success show">
          <span>✓</span> <div>{toastMsg}</div>
        </div>
      )}
    </>
  );
}
