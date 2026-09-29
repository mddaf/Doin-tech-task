import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { CREATOR_BENEFITS } from '../data/content';

export default function FeatureTwo() {
  return (
    <section className="feature-section feature-two" id="creator">
      <div className="container">
        <div className="feature-grid feature-reversed">
          {/* Left Column: Creator Visual with Revenue Badges */}
          <div className="feature-visual-col">
            <div className="visual-container">
              <img 
                src="/figma_graphics/33_683.png" 
                alt="Create & Manage Courses with ByteSpace"
                className="feature-composite-img"
              />
            </div>
          </div>

          {/* Right Column: Benefits list */}
          <div className="feature-text-col">
            <h2 className="feature-heading">
              Create & Manage <br /> Courses Easily.
            </h2>
            <p className="feature-paragraph">
              <strong>ByteSpace</strong> supports individuals or entities in the creation, publication, and administration of educational courses.
            </p>

            {/* Checklist */}
            <div className="benefits-checklist">
              {CREATOR_BENEFITS.map((benefit, idx) => (
                <div key={idx} className="benefit-item">
                  <CheckCircle2 size={22} className="check-icon" />
                  <span className="benefit-text">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .feature-two {
          padding: 80px 0 100px;
          background: #ffffff;
        }
        .feature-reversed {
          direction: ltr;
        }
        .benefits-checklist {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .benefit-item {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .check-icon {
          color: var(--primary-600);
          fill: var(--primary-50);
          flex-shrink: 0;
        }
        .benefit-text {
          font-family: var(--font-heading);
          font-size: 17px;
          font-weight: 600;
          color: var(--neutral-900);
        }
      `}</style>
    </section>
  );
}
