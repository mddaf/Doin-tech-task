import React, { useState } from 'react';
import { FOOTER_COLUMNS } from '../data/content';

export default function Footer({ onSubscribe }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setSubscribed(true);
      if (onSubscribe) onSubscribe(email);
      setEmail('');
    }
  };

  return (
    <footer className="site-footer">
      <div className="container">
        {/* Top Footer: Brand, Newsletter & Link Columns */}
        <div className="footer-top-grid">
          {/* Brand & Newsletter Column */}
          <div className="footer-brand-col">
            <div className="footer-logo">
              <img 
                src="/figma_svgs/1_1787.svg" 
                alt="ByteSpace" 
                className="logo-mark"
              />
              <span className="footer-logo-text">ByteSpace</span>
            </div>

            <p className="newsletter-prompt">
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>

            <form className="newsletter-form" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="newsletter-input"
                id="footer-email-input"
              />
              <button type="submit" className="btn btn-lime newsletter-submit-btn" id="footer-subscribe-btn">
                Search
              </button>
            </form>

            {subscribed && (
              <p className="newsletter-success-msg">
                ✓ Thank you! You've been subscribed to ByteSpace updates.
              </p>
            )}

            <p className="newsletter-disclaimer">
              By subscribing, you agree to our <a href="#privacy">Privacy Policy</a> and consent to receive updates from our company.
            </p>
          </div>

          {/* Links Columns */}
          <div className="footer-links-grid">
            {FOOTER_COLUMNS.map((col, idx) => (
              <div key={idx} className="footer-link-group">
                <h4 className="footer-group-title">{col.title}</h4>
                <ul className="footer-links-list">
                  {col.links.map((link, lIdx) => (
                    <li key={lIdx}>
                      <a href={link.href} className="footer-link">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Copyright & Legal Links */}
        <div className="footer-bottom-bar">
          <div className="copyright-text">
            © 2026 ByteSpace. All rights reserved.
          </div>
          <div className="legal-links">
            <a href="#privacy" className="legal-link">Privacy Policy</a>
            <a href="#terms" className="legal-link">Terms of Service</a>
            <a href="#cookies" className="legal-link">Cookies Settings</a>
          </div>
        </div>
      </div>

      <style>{`
        .site-footer {
          background: #ffffff;
          padding-top: 80px;
          padding-bottom: 40px;
          border-top: 1px solid var(--neutral-100);
        }
        .footer-top-grid {
          display: grid;
          grid-template-columns: 1.2fr 1.8fr;
          gap: 60px;
          padding-bottom: 60px;
          border-bottom: 1px solid var(--neutral-100);
        }
        .footer-brand-col {
          max-width: 440px;
        }
        .footer-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 16px;
        }
        .footer-logo-text {
          font-family: var(--font-heading);
          font-size: 24px;
          font-weight: 700;
          color: var(--neutral-950);
          letter-spacing: -0.5px;
        }
        .newsletter-prompt {
          font-size: 14px;
          color: var(--neutral-600);
          line-height: 1.6;
          margin-bottom: 24px;
        }
        .newsletter-form {
          display: flex;
          align-items: center;
          background: #ffffff;
          border: 1px solid var(--neutral-200);
          border-radius: 9999px;
          padding: 4px 6px 4px 18px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
          margin-bottom: 12px;
          transition: border-color 0.2s ease;
        }
        .newsletter-form:focus-within {
          border-color: var(--primary-500);
        }
        .newsletter-input {
          border: none;
          outline: none;
          flex: 1;
          font-size: 14px;
          color: var(--neutral-900);
          background: transparent;
        }
        .newsletter-input::placeholder {
          color: var(--neutral-400);
        }
        .newsletter-submit-btn {
          padding: 8px 24px;
          font-size: 13px;
        }
        .newsletter-disclaimer {
          font-size: 12px;
          color: var(--neutral-400);
          line-height: 1.5;
        }
        .newsletter-disclaimer a {
          text-decoration: underline;
          color: var(--neutral-600);
        }
        .newsletter-success-msg {
          font-size: 13px;
          color: #10b981;
          font-weight: 600;
          margin-bottom: 10px;
        }

        /* Link columns */
        .footer-links-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
        }
        .footer-group-title {
          font-size: 16px;
          font-weight: 700;
          color: var(--neutral-950);
          margin-bottom: 20px;
        }
        .footer-links-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .footer-link {
          font-size: 14px;
          color: var(--neutral-600);
          transition: color 0.2s ease, transform 0.2s ease;
          display: inline-block;
        }
        .footer-link:hover {
          color: var(--primary-600);
          transform: translateX(3px);
        }

        /* Bottom bar */
        .footer-bottom-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 32px;
          font-size: 14px;
          color: var(--neutral-500);
        }
        .legal-links {
          display: flex;
          align-items: center;
          gap: 24px;
        }
        .legal-link {
          color: var(--neutral-500);
          transition: color 0.2s ease;
        }
        .legal-link:hover {
          color: var(--neutral-900);
        }

        @media (max-width: 900px) {
          .footer-top-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .footer-bottom-bar {
            flex-direction: column;
            gap: 16px;
            text-align: center;
          }
        }
        @media (max-width: 600px) {
          .footer-links-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          .legal-links {
            flex-direction: column;
            gap: 12px;
          }
        }
      `}</style>
    </footer>
  );
}
