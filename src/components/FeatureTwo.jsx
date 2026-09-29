import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { CREATOR_BENEFITS } from '../data/content';

export default function FeatureTwo() {
  return (
    <div className="feature-grid-2-wrapper">
      <div className="container">
        <div className="feature-grid feature-grid-2">
          {/* Left Column: Creator visual with revenue badges */}
          <div className="feature-visual-col">
            <div className="feature2-visual">
              {/* Total Revenue badge (blue, top-left) */}
              <div className="f2-badge f2-badge-revenue-total">
                <div className="f2-revenue-header">
                  <div className="f2-revenue-title">Total Revenue</div>
                  <div className="f2-revenue-subtitle">July 1-28</div>
                </div>
                <div className="f2-revenue-row">
                  <span className="f2-revenue-amount">$120.29</span>
                  <span className="f2-revenue-change f2-lime">+12$</span>
                </div>
                <div className="f2-sparkline" />
              </div>

              {/* Year to Date badge */}
              <div className="f2-badge f2-badge-revenue-ytd">
                <div className="f2-revenue-title">Year to Date</div>
                <div className="f2-revenue-subtitle">2023</div>
                <div className="f2-revenue-amount f2-amount-large">$1,200.38</div>
                <div className="f2-revenue-change f2-lime">+12$</div>
              </div>

              {/* Creator/instructor photo */}
              <img
                src="/figma_images/0d6596fb1df66aaf843ee85722f439fada233946.png"
                alt="ByteSpace Creator"
                className="f2-creator-img"
                onError={(e) => {
                  e.target.src = '/figma_images/29a52a24e51266edcd7d57d73392ee5fc4833220.png';
                }}
              />

              {/* Happy Students badge (white, bottom right) */}
              <div className="f2-badge f2-badge-students">
                <div className="f2-students-label">Happy Students</div>
                <div className="f2-avatars">
                  <img src="/figma_images/0577f0e9b7fca2f32639871454da0de95f951709.png" alt="" className="f2-avatar" />
                  <img src="/figma_images/63c4be83222c85e6c852819bc5d4b24a87a87fb6.png" alt="" className="f2-avatar" />
                  <img src="/figma_images/728c3b1d33fe647a46f9bf668322f8c1d94ed937.png" alt="" className="f2-avatar" />
                  <img src="/figma_images/853767f40f2b236e768652174f76aa081e7d5cf2.png" alt="" className="f2-avatar" />
                  <img src="/figma_images/b44979e1c98ecb3ec92ac86805fe55581fbeaa60.png" alt="" className="f2-avatar" />
                </div>
              </div>

              {/* Decorative lime circle behind creator */}
              <div className="f2-lime-blob f2-lime-blob-tl" />
              <div className="f2-lime-blob f2-lime-blob-br" />
            </div>
          </div>

          {/* Right Column: Text & checklist */}
          <div className="feature-text-col">
            <h2 className="feature-heading">
              Create &amp; Manage <br />Courses Easily.
            </h2>
            <p className="feature-paragraph">
              <strong>ByteSpace</strong> supports individuals or entities in the creation, publication, and administration of educational courses.
            </p>

            {/* Checklist */}
            <div className="benefits-checklist">
              {CREATOR_BENEFITS.map((benefit, idx) => (
                <div key={idx} className="benefit-item">
                  <CheckCircle2 size={24} className="check-icon" />
                  <span className="benefit-text">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .feature-grid-2-wrapper {
          position: relative;
          z-index: 1;
        }
        .feature-grid-2 {
          padding-bottom: 0;
        }

        /* Feature 2 Visual */
        .feature2-visual {
          position: relative;
          width: 541px;
          height: 596px;
        }
        .f2-creator-img {
          position: absolute;
          left: 28px;
          top: 0;
          width: 435px;
          height: 596px;
          object-fit: fill;
          border-radius: 16px;
          box-shadow: 0.52px 0.74px 3.04px 0px rgba(0,0,0,0.04), 2.23px 3.19px 5.72px 0px rgba(0,0,0,0.06), 5.38px 7.69px 9.57px 0px rgba(0,0,0,0.07);
          z-index: 1;
        }

        /* Revenue badges */
        .f2-badge {
          position: absolute;
          border-radius: 16px;
          padding: 16px;
          z-index: 3;
          backdrop-filter: blur(10px);
        }
        .f2-badge-revenue-total {
          top: 44px;
          left: 0;
          background: var(--primary-800);
          color: #F5F5F6;
          min-width: 216px;
        }
        .f2-badge-revenue-ytd {
          top: 194px;
          left: 0;
          background: var(--primary-800);
          color: #F5F5F6;
          min-width: 134px;
        }
        .f2-revenue-header {
          display: flex;
          flex-direction: column;
          margin-bottom: 8px;
        }
        .f2-revenue-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
        }
        .f2-revenue-title {
          font-family: var(--font-body);
          font-size: 16px;
          font-weight: 500;
          color: #F5F5F6;
          line-height: 1.2;
        }
        .f2-revenue-subtitle {
          font-family: var(--font-body);
          font-size: 10px;
          font-weight: 400;
          color: #F5F5F6;
          opacity: 0.7;
          line-height: 1.2;
        }
        .f2-revenue-amount {
          font-family: var(--font-heading);
          font-size: 24px;
          font-weight: 600;
          color: #F5F5F6;
          line-height: 32px;
          letter-spacing: -0.01em;
        }
        .f2-amount-large {
          font-size: 24px;
          display: block;
          margin: 4px 0;
        }
        .f2-revenue-change {
          font-family: var(--font-body);
          font-size: 10px;
          font-weight: 500;
          line-height: 20px;
          text-align: center;
          border-radius: 24px;
          padding: 2px 8px;
          display: inline-block;
        }
        .f2-lime {
          background: var(--secondary-500);
          color: #242528;
        }
        .f2-sparkline {
          width: 200px;
          height: 8px;
          background: rgba(255,255,255,0.2);
          border-radius: 24px;
          margin-top: 8px;
        }

        /* Happy Students badge */
        .f2-badge-students {
          right: 0;
          bottom: 41px;
          background: rgba(255,255,255,0.9);
          min-width: 216px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }
        .f2-students-label {
          font-family: var(--font-body);
          font-size: 16px;
          font-weight: 500;
          color: #242528;
          margin-bottom: 8px;
        }
        .f2-avatars {
          display: flex;
          align-items: center;
        }
        .f2-avatar {
          width: 43px;
          height: 43px;
          border-radius: 50%;
          border: 2px solid #fff;
          object-fit: cover;
          margin-left: -10px;
        }
        .f2-avatar:first-child { margin-left: 0; }

        /* Decorative lime blobs */
        .f2-lime-blob {
          position: absolute;
          border-radius: 50%;
          z-index: 0;
        }
        .f2-lime-blob-tl {
          width: 215px;
          height: 215px;
          top: 67px;
          right: 0;
          background: linear-gradient(135deg, var(--secondary-500) 0%, var(--secondary-400) 100%);
        }
        .f2-lime-blob-br {
          width: 215px;
          height: 215px;
          left: 305px;
          top: 114px;
          background: linear-gradient(135deg, var(--secondary-300) 0%, var(--secondary-400) 100%);
        }

        /* Shared checklist */
        .benefits-checklist {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .benefit-item {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .check-icon {
          color: var(--primary-800);
          fill: transparent;
          flex-shrink: 0;
        }
        .benefit-text {
          font-family: var(--font-body);
          font-size: 18px;
          font-weight: 500;
          color: #242528;
          line-height: 1.2;
        }

        @media (max-width: 1024px) {
          .feature2-visual {
            width: 100%;
            height: 450px;
          }
          .f2-creator-img {
            width: 300px;
            height: 430px;
          }
        }
        @media (max-width: 900px) {
          .feature-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .feature2-visual {
            height: 380px;
            width: 100%;
          }
          .f2-creator-img {
            width: 240px;
            height: 340px;
          }
          .f2-lime-blob {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
