import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { CREATOR_BENEFITS } from '../data/content';

export default function FeatureTwo() {
  return (
    <div className="f2-wrapper">
      <div className="container">
        {/* ── Feature Row 2: Create & Manage Courses Easily ── */}
        {/*
          Figma layout (#34:1156, 541×596):
          - Total Revenue badge (#34:987): x:0, y:44 — blue
          - Year to Date badge (#34:998): x:0, y:194 — blue
          - Creator image (#34:1011): x:28, y:0, 435×596
          - Lime blob 1 (#34:981): x:406, y:67, 215×215 (top-right)
          - Lime blob 2 (#34:1006): x:305, y:114, 215×215 (mid-right)
          - Happy Students badge (#34:1038): x:283, y:413, w:258
        */}
        <div className="f2-grid">
          {/* Left: Creator visual */}
          <div className="f2-visual-col">
            <div className="f2-visual">
              {/* Lime blob 1 — top-right of visual (x:406, y:67) */}
              <img
                src="/feature_orbs/feature_lime_blob1.png"
                alt=""
                className="f2-blob f2-blob-tr animate-float"
              />
              {/* Lime blob 2 — mid-right (x:305, y:114) */}
              <img
                src="/feature_orbs/feature_lime_blob2.png"
                alt=""
                className="f2-blob f2-blob-mr animate-float-delayed"
              />

              {/* Total Revenue badge — x:0, y:44 */}
              <div className="f2-badge f2-badge-revenue-total">
                <div className="f2-rev-meta">
                  <span className="f2-rev-title">Total Revenue</span>
                  <span className="f2-rev-sub">July 1-28</span>
                </div>
                <div className="f2-rev-row">
                  <span className="f2-rev-amount">$120.29</span>
                  <span className="f2-rev-chip">+12$</span>
                </div>
                <div className="f2-sparkline" />
              </div>

              {/* Year to Date badge — x:0, y:194 */}
              <div className="f2-badge f2-badge-ytd">
                <div className="f2-rev-meta">
                  <span className="f2-rev-title">Year to Date</span>
                  <span className="f2-rev-sub">2023</span>
                </div>
                <div className="f2-ytd-amount">$1,200.38</div>
                <span className="f2-rev-chip f2-chip-sm">+12$</span>
              </div>

              {/* Creator photo — x:28, y:0, 435×596 */}
              <img
                src="/figma_images/0d6596fb1df66aaf843ee85722f439fada233946.png"
                alt="ByteSpace Creator"
                className="f2-creator-img"
                onError={(e) => {
                  e.target.src = '/figma_images/29a52a24e51266edcd7d57d73392ee5fc4833220.png';
                }}
              />

              {/* Happy Students badge — x:283, y:413, w:258 */}
              <div className="f2-badge f2-badge-students">
                <div className="f2-stu-title">Happy Students</div>
                <div className="f2-stu-rating">
                  <span className="f2-stu-score">4.8</span>
                  <span className="f2-stu-star">★</span>
                </div>
                <div className="f2-avatars">
                  <img src="/figma_images/9ef8cb329b949267cc8214b6727067c4a13af4b4.png" alt="" className="f2-av" />
                  <img src="/figma_images/b44979e1c98ecb3ec92ac86805fe55581fbeaa60.png" alt="" className="f2-av" />
                  <img src="/figma_images/83fb3e04056cc892636460bee5791aa3f243854c.png" alt="" className="f2-av" />
                  <img src="/figma_images/f3cf29a8fed39589ceb38423e65b26b8d6c93123.png" alt="" className="f2-av" />
                  <img src="/figma_images/5824acacb3b76175bc84084ec18597109498f96d.png" alt="" className="f2-av" />
                  <img src="/figma_images/7fdccc783264eedc4fb989984eecbc4058a219f2.png" alt="" className="f2-av" />
                  <img src="/figma_images/1e078348a54489bfd231d82fe1944770883c8d80.png" alt="" className="f2-av" />
                  <span className="f2-av-more">2K+</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Text + benefits */}
          <div className="f2-text-col">
            <h2 className="f2-heading">
              Create &amp; Manage<br />Courses Easily.
            </h2>
            <p className="f2-body">
              <strong>ByteSpace</strong> supports individuals or entities in the creation,
              publication, and administration of educational courses.
            </p>
            <div className="f2-checklist">
              {CREATOR_BENEFITS.map((b, i) => (
                <div key={i} className="f2-check-item">
                  <CheckCircle2 size={22} className="f2-check-icon" />
                  <span className="f2-check-text">{b}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .f2-wrapper {
          background: #FAFAFA;
          padding: 80px 0 100px;
          position: relative;
          z-index: 1;
        }

        /* ── Grid ── */
        .f2-grid {
          display: grid;
          grid-template-columns: 541px 1fr;
          gap: 79px;
          align-items: center;
        }

        /* ── Visual column ── */
        .f2-visual-col {
          display: flex;
          justify-content: flex-start;
        }
        /* 541×596 container matching Figma */
        .f2-visual {
          position: relative;
          width: 541px;
          height: 596px;
          flex-shrink: 0;
        }

        /* Lime blobs — top-right & mid-right */
        .f2-blob {
          position: absolute;
          object-fit: contain;
          z-index: 4;
          pointer-events: none;
        }
        /* #34:981 at x:406, y:67 — right edge */
        .f2-blob-tr {
          right: -15px;
          top: 60px;
          width: 130px;
        }
        /* #34:1006 at x:305, y:114 */
        .f2-blob-mr {
          right: 80px;
          top: 105px;
          width: 100px;
        }

        /* Revenue badges (blue background) */
        .f2-badge {
          position: absolute;
          border-radius: 16px;
          padding: 16px;
          z-index: 5;
        }
        .f2-badge-revenue-total {
          left: 0;
          top: 44px;
          background: #003BE2;
          min-width: 216px;
          backdrop-filter: blur(10px);
        }
        .f2-badge-ytd {
          left: 0;
          top: 194px;
          background: #003BE2;
          min-width: 134px;
          backdrop-filter: blur(10px);
        }
        .f2-rev-meta {
          display: flex;
          flex-direction: column;
          gap: 2px;
          margin-bottom: 8px;
        }
        .f2-rev-title {
          font-family: var(--font-body);
          font-size: 16px;
          font-weight: 500;
          color: #F5F5F6;
          line-height: 1.2;
        }
        .f2-rev-sub {
          font-family: var(--font-body);
          font-size: 10px;
          color: #F5F5F6;
          opacity: 0.7;
        }
        .f2-rev-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
        }
        .f2-rev-amount {
          font-family: var(--font-heading);
          font-size: 24px;
          font-weight: 600;
          color: #F5F5F6;
          line-height: 32px;
          letter-spacing: -0.01em;
        }
        .f2-ytd-amount {
          font-family: var(--font-heading);
          font-size: 24px;
          font-weight: 600;
          color: #F5F5F6;
          letter-spacing: -0.01em;
          margin-bottom: 6px;
        }
        .f2-rev-chip {
          background: #D4FB20;
          color: #242528;
          font-family: var(--font-body);
          font-size: 10px;
          font-weight: 500;
          padding: 2px 8px;
          border-radius: 24px;
          display: inline-block;
        }
        .f2-chip-sm { display: inline-block; margin-top: 4px; }
        .f2-sparkline {
          width: 100%;
          height: 8px;
          background: rgba(255,255,255,0.2);
          border-radius: 24px;
          margin-top: 8px;
        }

        /* Creator photo: x:28, y:0, 435×596 */
        .f2-creator-img {
          position: absolute;
          left: 28px;
          top: 0;
          width: 435px;
          height: 596px;
          object-fit: cover;
          object-position: center top;
          border-radius: 8px;
          z-index: 3;
          box-shadow:
            0.52px 0.74px 3.04px rgba(0,0,0,0.04),
            2.23px 3.19px 5.72px rgba(0,0,0,0.06),
            5.38px 7.69px 9.57px rgba(0,0,0,0.07),
            10.21px 14.58px 16.09px rgba(0,0,0,0.08);
        }

        /* Happy Students badge: x:283, y:413 */
        .f2-badge-students {
          left: 283px;
          bottom: 10px;
          background: rgba(255,255,255,0.95);
          min-width: 220px;
          box-shadow: 0 8px 24px rgba(0,0,0,0.10);
          backdrop-filter: blur(10px);
          z-index: 6;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .f2-stu-title {
          font-family: var(--font-body);
          font-size: 14px;
          font-weight: 500;
          color: #242528;
        }
        .f2-stu-rating {
          display: flex;
          align-items: center;
          gap: 3px;
        }
        .f2-stu-score {
          font-family: var(--font-body);
          font-size: 12px;
          color: #242528;
          font-weight: 600;
        }
        .f2-stu-star { color: #D4FB20; font-size: 13px; }
        .f2-avatars { display: flex; align-items: center; }
        .f2-av {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid #fff;
          margin-left: -10px;
        }
        .f2-av:first-child { margin-left: 0; }
        .f2-av-more {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: #D4FB20;
          color: #242528;
          font-family: var(--font-body);
          font-size: 10px;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid #fff;
          margin-left: -10px;
        }

        /* ── Text column ── */
        .f2-text-col {
          display: flex;
          flex-direction: column;
          gap: 40px;
        }
        .f2-heading {
          font-family: var(--font-heading);
          font-size: 44px;
          font-weight: 600;
          color: #242528;
          line-height: 1.2;
          letter-spacing: -0.01em;
        }
        .f2-body {
          font-family: var(--font-body);
          font-size: 18px;
          color: #4B4C53;
          line-height: 1.6;
          margin-top: -16px;
        }
        .f2-body strong { font-weight: 700; color: #242528; }
        .f2-checklist {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .f2-check-item {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .f2-check-icon {
          color: #003BE2;
          fill: transparent;
          flex-shrink: 0;
        }
        .f2-check-text {
          font-family: var(--font-body);
          font-size: 18px;
          font-weight: 500;
          color: #242528;
        }

        /* ── Animations ── */
        @keyframes floatGentle {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        .animate-float { animation: floatGentle 5s ease-in-out infinite; }
        .animate-float-delayed { animation: floatGentle 6s ease-in-out infinite 1.5s; }

        /* ── Responsive ── */
        @media (max-width: 1100px) {
          .f2-grid { grid-template-columns: 1fr 1fr; gap: 40px; }
          .f2-visual { width: 100%; height: 480px; }
          .f2-creator-img { width: 80%; height: 100%; left: 0; }
          .f2-badge-students { left: auto; right: 0; }
          .f2-blob { display: none; }
        }
        @media (max-width: 900px) {
          .f2-grid { grid-template-columns: 1fr; }
          .f2-heading { font-size: 34px; }
          .f2-visual { height: 380px; }
        }
      `}</style>
    </div>
  );
}
