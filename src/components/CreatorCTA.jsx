import React from 'react';

export default function CreatorCTA({ onJoinCreator }) {
  return (
    <section className="creator-cta-section">
      <div className="container">
        <div className="cta-banner bg-grid-blue">
          {/* Floating 3D Shapes */}
          <div className="cta-ornament cta-ornament-left animate-float">
            <img 
              src="/figma_images/4557999be35f4bf82b01da42a1ef24a1236fbddc.png" 
              alt="3D Ribbon" 
              onError={(e) => e.target.style.display = 'none'}
            />
          </div>
          <div className="cta-ornament cta-ornament-right animate-float-delayed">
            <img 
              src="/figma_images/92fc70a39c36138c0e55699b18b3e88bd1f86a59.png" 
              alt="3D Shape" 
              onError={(e) => e.target.style.display = 'none'}
            />
          </div>
          <div className="cta-ornament cta-ornament-ring animate-float">
            <img 
              src="/figma_images/f9c0e0fd05db48405aa72287b20d04b9a01feb51.png" 
              alt="3D Ring" 
              onError={(e) => e.target.style.display = 'none'}
            />
          </div>

          <div className="cta-content">
            <h2 className="cta-title">
              Unlock Your Potential as a <br /> Creator with ByteSpace
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
      </div>

      <style>{`
        .creator-cta-section {
          padding: 40px 0 80px;
          background: #ffffff;
        }
        .cta-banner {
          border-radius: 32px;
          padding: 80px 40px;
          text-align: center;
          position: relative;
          overflow: hidden;
          box-shadow: 0 25px 50px -12px rgba(4, 69, 255, 0.35);
        }
        .cta-content {
          position: relative;
          z-index: 3;
          max-width: 820px;
          margin: 0 auto;
        }
        .cta-title {
          font-size: 44px;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.2;
          margin-bottom: 24px;
          letter-spacing: -0.8px;
        }
        .cta-description {
          font-size: 16px;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.7;
          margin-bottom: 36px;
        }
        .cta-btn {
          padding: 14px 36px;
          font-size: 16px;
        }

        /* 3D Shapes */
        .cta-ornament {
          position: absolute;
          pointer-events: none;
          z-index: 2;
        }
        .cta-ornament img {
          width: 100%;
          height: auto;
          filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.25));
        }
        .cta-ornament-left {
          top: 30px;
          left: 30px;
          width: 110px;
        }
        .cta-ornament-right {
          top: 40px;
          right: 30px;
          width: 120px;
        }
        .cta-ornament-ring {
          bottom: 20px;
          left: 50px;
          width: 90px;
        }

        @media (max-width: 768px) {
          .cta-banner {
            padding: 60px 20px;
            border-radius: 20px;
          }
          .cta-title {
            font-size: 32px;
          }
          .cta-ornament {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
