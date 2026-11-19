import React from 'react';

export default function CatalogueSection() {
  return (
    <section id="catalogues" className="section-py bg-soft-blue">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Official Product Literature</span>
          <h2 className="section-title">Download Product Catalogues</h2>
          <p className="section-desc">
            Download our complete official MOLLISAQUA® Water Conditioner brochures in English and Gujarati (ગુજરાતી) with technical features, redox alloy process, agricultural benefits, and FAQs.
          </p>
        </div>

        <div className="catalogue-grid">
          {/* English Catalogue Card */}
          <article className="catalogue-card">
            <div className="catalogue-preview-wrapper">
              <span className="catalogue-overlay-badge">🇬🇧 English Edition (PDF &amp; HD)</span>
              <img
                src="/assets/catalogues/Mollisaqua-Water-Conditioner-Catalogue-English.jpg"
                alt="MOLLISAQUA Water Conditioner English Catalogue Preview"
                width="600"
                height="400"
                loading="lazy"
              />
            </div>
            <div className="catalogue-body">
              <h3 className="catalogue-title">MOLLISAQUA® English Brochure</h3>
              <p className="catalogue-subtitle">Comprehensive product specifications, redox alloy technology &amp; application matrix.</p>

              <ul className="catalogue-specs-list">
                <li>Key benefits: No power, zero maintenance, fit &amp; forget</li>
                <li>How it works: 26 noble &amp; semi-noble alloy catalytic redox</li>
                <li>Agricultural &amp; industrial application guidance</li>
                <li>Detailed technical FAQ section with TDS explanation</li>
                <li>Param Industries Ahmedabad contact details</li>
              </ul>

              <div className="catalogue-actions">
                <div className="catalogue-btn-row">
                  <a
                    href="/assets/catalogues/Mollisaqua-Water-Conditioner-Catalogue-English.pdf"
                    download="Mollisaqua-Water-Conditioner-Catalogue-English.pdf"
                    className="btn btn-primary"
                  >
                    <span>📄</span> Download PDF
                  </a>
                  <a
                    href="/assets/catalogues/Mollisaqua-Water-Conditioner-Catalogue-English.jpg"
                    download="Mollisaqua-Water-Conditioner-Catalogue-English.jpg"
                    className="btn btn-outline"
                  >
                    <span>🖼️</span> Download Image
                  </a>
                </div>
                <a
                  href="/assets/catalogues/Mollisaqua-Water-Conditioner-Catalogue-English.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm"
                  style={{ color: 'var(--color-secondary)', fontWeight: 600, textAlign: 'center' }}
                >
                  <span>🔍</span> View Full Resolution in New Tab ↗
                </a>
              </div>
            </div>
          </article>

          {/* Gujarati Catalogue Card */}
          <article className="catalogue-card">
            <div className="catalogue-preview-wrapper">
              <span className="catalogue-overlay-badge">🇮🇳 ગુજરાતી આવૃત્તિ (PDF &amp; HD)</span>
              <img
                src="/assets/catalogues/Mollisaqua-Water-Conditioner-Catalogue-Gujarati.jpg"
                alt="MOLLISAQUA Water Conditioner Gujarati Catalogue Preview"
                width="600"
                height="400"
                loading="lazy"
              />
            </div>
            <div className="catalogue-body">
              <h3 className="catalogue-title">MOLLISAQUA® ગુજરાતી બ્રોશર</h3>
              <p className="catalogue-subtitle">સંપૂર્ણ ઉત્પાદન માહિતી, મુખ્ય ફાયદાઓ, ટેકનોલોજી અને વારંવાર પૂછાતા પ્રશ્નો.</p>

              <ul className="catalogue-specs-list">
                <li>મુખ્ય ફાયદાઓ: વીજળી અને ક્ષાર વગર, ઝીરો મેન્ટેનન્સ (Fit &amp; Forget)</li>
                <li>કેવી રીતે કામ કરે છે: ૨૬ નોબલ અને સેમી-નોબલ ધાતુઓનું વિશિષ્ટ મિશ્રધાતુ</li>
                <li>કૃષિમાં ઉપયોગ: મોલિસ ક્રોપ બૂસ્ટર અને ડ્રિપ ઇરિગેશન પ્રોટેક્શન</li>
                <li>વારંવાર પૂછાતા પ્રશ્નો (FAQs): TDS, હાર્ડનેસ અને પીવાના પાણીની માહિતી</li>
                <li>પરમ ઇન્ડસ્ટ્રીઝ અમદાવાદ (સંપર્ક: ૭૯૮૪૫૧૫૬૮૫)</li>
              </ul>

              <div className="catalogue-actions">
                <div className="catalogue-btn-row">
                  <a
                    href="/assets/catalogues/Mollisaqua-Water-Conditioner-Catalogue-Gujarati.pdf"
                    download="Mollisaqua-Water-Conditioner-Catalogue-Gujarati.pdf"
                    className="btn btn-primary"
                  >
                    <span>📄</span> Download PDF (ગુજરાતી)
                  </a>
                  <a
                    href="/assets/catalogues/Mollisaqua-Water-Conditioner-Catalogue-Gujarati.jpg"
                    download="Mollisaqua-Water-Conditioner-Catalogue-Gujarati.jpg"
                    className="btn btn-outline"
                  >
                    <span>🖼️</span> Download Image
                  </a>
                </div>
                <a
                  href="/assets/catalogues/Mollisaqua-Water-Conditioner-Catalogue-Gujarati.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm"
                  style={{ color: 'var(--color-secondary)', fontWeight: 600, textAlign: 'center' }}
                >
                  <span>🔍</span> View Full Resolution in New Tab ↗
                </a>
              </div>
            </div>
          </article>
        </div>

        <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          <a
            href="https://wa.me/917984515685?text=Hello%20Mukeshbhai,%20please%20send%20me%20the%20Mollisaqua%20Water%20Conditioner%20catalogue%20in%20English%20and%20Gujarati%20on%20WhatsApp."
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp btn-lg"
          >
            <span>💬</span> Request Both Catalogues on WhatsApp (+91 79845 15685)
          </a>
        </div>
      </div>
    </section>
  );
}
