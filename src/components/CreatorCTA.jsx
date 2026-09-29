import React from 'react';

/**
 * CTA_Frame #34:1161
 * Figma: 1440×488, fills Persian Blue/800 (#003BE2)
 * Content: column, center, gap:40px at x:238, y:85 → max-width 964px
 *
 * Ornament group #46:78 at offset x:-118, y:-162 (1714×803)
 * Children positions are relative to the group, so absolute to banner:
 *   group_x = -118, group_y = -162 (above/left of banner top-left)
 *
 * Ornament absolute positions (group offset + child offset):
 * - #34:1206 (lime large, 385×385): child x:0, y:0 → banner x:-118, y:-162
 * - #34:1236 (white sm, 175×175): child x:296, y:167 → banner x:178, y:5
 * - #46:55 (white cone, 188×188): child x:70, y:387 → banner x:-48, y:225
 * - #46:67 (lime cone large, 342×342): child x:138, y:461 → banner x:20, y:299
 * - #46:61 (small cone, 188×188): child x:1198, y:162 → banner x:1080, y:0
 * - #34:1221 (circle white, 330×330): child x:1228, y:451 → banner x:1110, y:289
 * - #46:73 (cone large tr, 370×370): child x:1344, y:168 → banner x:1226, y:6
 */
export default function CreatorCTA({ onJoinCreator }) {
  return (
    <section className="cta-section" id="creator">
      <div className="cta-banner">
        {/* ── Grid overlay (12% opacity) ── */}
        <div className="cta-grid-overlay" />

        {/* ── LEFT ornaments ── */}
        {/* Large lime blob: #34:1206 — banner x:-118, y:-162 → visually bottom-left */}
        <img src="/cta_ornaments/cta_lime_large_bl.png" alt="" className="cta-orb cta-orb-lime-large animate-float" />
        {/* Small white blob: #34:1236 — banner x:178, y:5 */}
        <img src="/cta_ornaments/cta_white_sm_ml.png" alt="" className="cta-orb cta-orb-white-sm animate-float-delayed" />
        {/* White cone: #46:55 — banner x:-48, y:225 → lower-left */}
        <img src="/cta_ornaments/cta_cone_white_bl.png" alt="" className="cta-orb cta-orb-cone-wbl animate-float" />
        {/* Large lime cone: #46:67 — banner x:20, y:299 → bottom-left */}
        <img src="/cta_ornaments/cta_cone_lime_bl2.png" alt="" className="cta-orb cta-orb-cone-lbl animate-float-delayed" />

        {/* ── RIGHT ornaments ── */}
        {/* Small top-right cone: #46:61 — banner x:1080, y:0 */}
        <img src="/cta_ornaments/cta_cone_sm_tr.png" alt="" className="cta-orb cta-orb-cone-str animate-float-delayed" />
        {/* White circle: #34:1221 — banner x:1110, y:289 */}
        <img src="/cta_ornaments/cta_circle_white_r.png" alt="" className="cta-orb cta-orb-circle-wr animate-float" />
        {/* Large cone top-right: #46:73 — banner x:1226, y:6 */}
        <img src="/cta_ornaments/cta_cone_large_tr.png" alt="" className="cta-orb cta-orb-cone-ltr animate-float-delayed" />

        {/* ── Main content ── */}
        {/* Figma: column, alignItems:center, gap:40px, x:238, y:85, max-width:964px */}
        <div className="cta-content">
          <h2 className="cta-title">
            Unlock Your Potential as a Creator with ByteSpace
          </h2>
          <p className="cta-desc">
            Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
          </p>
          <button
            type="button"
            className="cta-btn"
            onClick={onJoinCreator}
            id="cta-join-creator-btn"
          >
            Join as Creator
          </button>
        </div>
      </div>

      <style>{`
        /* ── Section ── */
        .cta-section {
          background: #ffffff;
        }

        /* ── Banner: full-width, 488px height, blue ── */
        .cta-banner {
          position: relative;
          width: 100%;
          min-height: 488px;
          background-color: #003BE2;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Grid overlay (12% opacity matching Figma SVG at 0.12 opacity) */
        .cta-grid-overlay {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.09) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.09) 1px, transparent 1px);
          background-size: 60px 60px;
          opacity: 0.12;
          z-index: 1;
          pointer-events: none;
        }

        /* ── Ornament images ── */
        .cta-orb {
          position: absolute;
          object-fit: contain;
          pointer-events: none;
          z-index: 2;
        }

        /* LEFT side ornaments */
        /* Large lime blob — #34:1206, 385×385, absolute x:-118, y:-162 relative to banner
           = extends off left edge and slightly above top */
        .cta-orb-lime-large {
          width: 260px;
          left: -80px;
          bottom: -40px;
        }
        /* Small white blob — #34:1236, 175×175, x:178, y:5 */
        .cta-orb-white-sm {
          width: 110px;
          left: 178px;
          top: 5px;
        }
        /* White cone — #46:55, 188×188, x:-48, y:225 → x:48 left, y:225 */
        .cta-orb-cone-wbl {
          width: 120px;
          left: 10px;
          bottom: 20px;
        }
        /* Large lime cone — #46:67, 342×342, x:20, y:299 → partially off bottom */
        .cta-orb-cone-lbl {
          width: 220px;
          left: 100px;
          bottom: -60px;
        }

        /* RIGHT side ornaments */
        /* Small cone top-right — #46:61, 188×188, x:1080+, y:0 */
        .cta-orb-cone-str {
          width: 130px;
          right: 330px;
          top: -10px;
        }
        /* White circle — #34:1221, 330×330, x:1110, y:289 */
        .cta-orb-circle-wr {
          width: 220px;
          right: 80px;
          bottom: -40px;
        }
        /* Large cone top-right — #46:73, 370×370, x:1226, y:6 */
        .cta-orb-cone-ltr {
          width: 250px;
          right: -30px;
          top: -10px;
        }

        /* ── Content ── */
        /* Figma: column, center, gap:40px, max-w 964px */
        .cta-content {
          position: relative;
          z-index: 5;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 40px;
          text-align: center;
          max-width: 964px;
          padding: 80px 140px;
        }

        /* Title: Poppins SemiBold 44px, #F5F5F6, centered, max-w 710px */
        .cta-title {
          font-family: var(--font-heading);
          font-size: 44px;
          font-weight: 600;
          color: #F5F5F6;
          line-height: 1.2;
          letter-spacing: -0.01em;
          text-align: center;
          max-width: 710px;
        }

        /* Description: Satoshi Regular 18px, #F5F5F6, centered */
        .cta-desc {
          font-family: var(--font-body);
          font-size: 18px;
          font-weight: 400;
          color: #F5F5F6;
          line-height: 1.6;
          text-align: center;
          opacity: 0.9;
        }

        /* Button: Electric Lime/400, row, padding:12px 24px, border-radius:24px */
        .cta-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 12px 24px;
          background: #D4FB20;
          border-radius: 24px;
          border: none;
          cursor: pointer;
          font-family: var(--font-body);
          font-size: 18px;
          font-weight: 500;
          color: #242528;
          line-height: 1.2;
          transition: background 0.18s ease, transform 0.18s ease;
          white-space: nowrap;
        }
        .cta-btn:hover {
          background: #c8f200;
          transform: translateY(-2px);
        }

        /* ── Animations ── */
        @keyframes floatGentle {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float { animation: floatGentle 5s ease-in-out infinite; }
        .animate-float-delayed { animation: floatGentle 6.5s ease-in-out infinite 1.5s; }

        /* ── Responsive ── */
        @media (max-width: 1100px) {
          .cta-content { padding: 80px 60px; }
          .cta-title { font-size: 36px; }
          .cta-orb-lime-large { width: 200px; }
          .cta-orb-cone-ltr { width: 180px; }
          .cta-orb-circle-wr { width: 160px; }
        }
        @media (max-width: 768px) {
          .cta-banner { min-height: 400px; }
          .cta-content { padding: 60px 24px; gap: 28px; }
          .cta-title { font-size: 28px; }
          .cta-desc { font-size: 16px; }
          .cta-orb { display: none; }
        }
      `}</style>
    </section>
  );
}
