import React from 'react';
import { STATS } from '../data/content';

export default function FeatureOne() {
  return (
    <section className="feature-section feature-one">
      <div className="container">
        <div className="feature-grid">
          {/* Left Column: Text & Stats */}
          <div className="feature-text-col">
            <h2 className="feature-heading">
              Your Path to Professional Growth Starts Here!
            </h2>
            <p className="feature-paragraph">
              Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.
            </p>

            {/* Stat Counters */}
            <div className="stats-row">
              {STATS.map((stat, idx) => (
                <div key={idx} className="stat-item">
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Visual Composite */}
          <div className="feature-visual-col">
            <div className="visual-container">
              {/* Composite Image from Figma */}
              <img 
                src="/figma_graphics/34_684.png" 
                alt="Professional Growth at ByteSpace"
                className="feature-composite-img"
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .feature-section {
          padding: 80px 0;
          background: #ffffff;
        }
        .feature-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }
        .feature-heading {
          font-size: 44px;
          font-weight: 700;
          color: var(--neutral-950);
          line-height: 1.2;
          margin-bottom: 20px;
          letter-spacing: -0.8px;
        }
        .feature-paragraph {
          font-size: 16px;
          color: var(--neutral-600);
          line-height: 1.7;
          margin-bottom: 40px;
        }
        .stats-row {
          display: flex;
          align-items: center;
          gap: 48px;
        }
        .stat-item {
          display: flex;
          flex-direction: column;
        }
        .stat-value {
          font-family: var(--font-heading);
          font-size: 40px;
          font-weight: 700;
          color: var(--primary-600);
          line-height: 1.1;
        }
        .stat-label {
          font-size: 15px;
          color: var(--neutral-600);
          font-weight: 500;
          margin-top: 4px;
        }
        .feature-visual-col {
          display: flex;
          justify-content: center;
          position: relative;
        }
        .visual-container {
          position: relative;
          width: 100%;
          max-width: 520px;
        }
        .feature-composite-img {
          width: 100%;
          height: auto;
          object-fit: contain;
          filter: drop-shadow(0 15px 30px rgba(0, 0, 0, 0.08));
        }

        @media (max-width: 900px) {
          .feature-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .feature-heading {
            font-size: 34px;
          }
        }
      `}</style>
    </section>
  );
}
