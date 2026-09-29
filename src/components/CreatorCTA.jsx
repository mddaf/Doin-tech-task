import React from 'react';

export default function CreatorCTA({ onJoinCreator }) {
  return (
    <section className="creator-cta-section" id="creator">
      <div className="cta-banner">
        {/* Grid pattern overlay - full section background */}
        <div className="cta-grid-overlay" />

        {/* Floating 3D ornaments */}
        {/* Bottom-left: large lime blob shape */}
        <div className="cta-shape cta-shape-large-bl animate-float">
          <img
            src="/figma_images/e3b55902d605bfc37a0809e6dc6dfe61b6701897.png"
            alt=""
            onError={(e) => e.target.style.display = 'none'}
          />
        </div>
        {/* Top-left: small white shape */}
        <div className="cta-shape cta-shape-sm-tl animate-float-delayed">
          <img
            src="/figma_images/5b3686bc5eadc510e3e04da588f9299d8bd3194c.png"
            alt=""
            onError={(e) => e.target.style.display = 'none'}
          />
        </div>
        {/* Bottom-left: medium cone */}
        <div className="cta-shape cta-shape-med-bl animate-float">
          <img
            src="/figma_images/8670b841eac7883ecb790f84eb349c6c01db588b.png"
            alt=""
            onError={(e) => e.target.style.display = 'none'}
          />
        </div>
        {/* Top-right: cone */}
        <div className="cta-shape cta-shape-cone-tr animate-float-delayed">
          <img
            src="/figma_images/f9c0e0fd05db48405aa72287b20d04b9a01feb51.png"
            alt=""
            onError={(e) => e.target.style.display = 'none'}
          />
        </div>
        {/* Top-right: student circle */}
        <div className="cta-shape cta-shape-circle-tr animate-float">
          <img
            src="/figma_images/cda676feaf7fba8b0f81b47c5ea2707d7acb5217.png"
            alt=""
            onError={(e) => e.target.style.display = 'none'}
          />
        </div>
        {/* Mid-right: cone */}
        <div className="cta-shape cta-shape-cone-mr animate-float-delayed">
          <img
            src="/figma_images/92fc70a39c36138c0e55699b18b3e88bd1f86a59.png"
            alt=""
            onError={(e) => e.target.style.display = 'none'}
          />
        </div>

        {/* Main content */}
        <div className="cta-content">
          <h2 className="cta-title">
            Unlock Your Potential as a{' '}
            <span className="cta-creator-highlight">Creator</span>{' '}
            with ByteSpace
          </h2>
          <p className="cta-description">
            Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
          </p>
          <button
            type="button"
            className="btn btn-lime cta-btn"
            onClick={onJoinCreator}
            id="cta-join-creator-btn"
          >
            Join as Creator
          </button>
        </div>
      </div>

      <style>{`
        .creator-cta-section {
          background: #ffffff;
        }
        .cta-banner {
          background-color: var(--primary-800);
          position: relative;
          overflow: hidden;
          min-height: 488px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .cta-grid-overlay {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255, 255, 255, 0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.07) 1px, transparent 1px);
          background-size: 60px 60px;
          opacity: 0.12;
          z-index: 1;
        }
        .cta-content {
          position: relative;
          z-index: 3;
          text-align: center;
          max-width: 964px;
          padding: 85px 238px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 40px;
        }
        .cta-title {
          font-family: var(--font-heading);
          font-size: 44px;
          font-weight: 600;
          color: #F5F5F6;
          line-height: 1.2;
          letter-spacing: -0.01em;
          max-width: 710px;
        }
        .cta-creator-highlight {
          color: #F5F5F6;
        }
        .cta-description {
          font-family: var(--font-body);
          font-size: 18px;
          color: #F5F5F6;
          line-height: 1.6;
          text-align: center;
          max-width: 964px;
          opacity: 0.9;
        }
        .cta-btn {
          padding: 12px 24px;
          font-size: 18px;
          font-weight: 500;
          font-family: var(--font-body);
          border-radius: 24px;
        }

        /* Decorative shapes */
        .cta-shape {
          position: absolute;
          z-index: 2;
          pointer-events: none;
          overflow: hidden;
          border-radius: 50%;
        }
        .cta-shape img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        /* Bottom-left big lime blob */
        .cta-shape-large-bl {
          width: 385px;
          height: 385px;
          left: -3px;
          bottom: -80px;
        }
        /* Top-left small white shape */
        .cta-shape-sm-tl {
          width: 176px;
          height: 176px;
          left: 296px;
          top: 20%;
        }
        /* Mid bottom-left medium cone */
        .cta-shape-med-bl {
          width: 342px;
          height: 342px;
          left: 138px;
          bottom: -60px;
        }
        /* Top-right cone */
        .cta-shape-cone-tr {
          width: 188px;
          height: 188px;
          right: 242px;
          top: -26px;
        }
        /* Right circle (student) */
        .cta-shape-circle-tr {
          width: 330px;
          height: 330px;
          right: 90px;
          bottom: 0;
        }
        /* Mid-right cone */
        .cta-shape-cone-mr {
          width: 370px;
          height: 370px;
          right: 26px;
          top: 30px;
        }

        @media (max-width: 1024px) {
          .cta-content {
            padding: 80px 80px;
          }
          .cta-title {
            font-size: 36px;
          }
          .cta-shape {
            display: none;
          }
        }
        @media (max-width: 768px) {
          .cta-content {
            padding: 60px 24px;
            gap: 28px;
          }
          .cta-title {
            font-size: 28px;
          }
          .cta-description {
            font-size: 16px;
          }
        }
      `}</style>
    </section>
  );
}
