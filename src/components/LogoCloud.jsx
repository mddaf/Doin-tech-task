import React from 'react';

export default function LogoCloud() {
  return (
    <section className="logo-cloud-section">
      <div className="container logo-cloud-container">
        <img 
          src="/figma_svgs/1_1708.svg" 
          alt="Trusted by leading companies" 
          className="partner-logos-svg"
        />
      </div>

      <style>{`
        .logo-cloud-section {
          background: #ffffff;
          padding: 44px 0;
          border-bottom: 1px solid var(--neutral-100);
        }
        .logo-cloud-container {
          display: flex;
          justify-content: center;
          align-items: center;
          overflow-x: auto;
        }
        .partner-logos-svg {
          width: 100%;
          max-width: 1100px;
          height: auto;
          opacity: 0.85;
          transition: opacity 0.3s ease;
        }
        .partner-logos-svg:hover {
          opacity: 1;
        }
      `}</style>
    </section>
  );
}
