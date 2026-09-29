import React from 'react';
import { STATS } from '../data/content';

export default function FeatureOne() {
  return (
    <section className="features-wrapper" id="about">
      {/* Decorative background glows */}
      <div className="features-bg-deco">
        <div className="fbg-glow fbg-glow-lime" />
        <div className="fbg-glow fbg-glow-blue" />
      </div>

      <div className="container">
        {/* ── Feature Row 1: Your Path to Professional Growth ── */}
        <div className="f1-grid">
          {/* Left: Text + Stats */}
          <div className="f1-text-col">
            <h2 className="f1-heading">
              Your Path to Professional Growth Starts Here!
            </h2>
            <p className="f1-body">
              Explore our curated selection of courses tailored to enhance your
              capabilities and accelerate your career journey. Whether you are
              looking to sharpen specific skills, gain industry expertise, or
              embark on a new career path entirely, we have the resources you need.
            </p>
            <div className="f1-stats">
              {STATS.map((stat, i) => (
                <div key={i} className="f1-stat">
                  <div className="f1-stat-val">{stat.value}</div>
                  <div className="f1-stat-lbl">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual composite (621×552) */}
          {/*
            Figma layout (#34:1155, 621×552):
            - Course card (#34:1055): x:0, y:0, 373×384 — bottom layer
            - Student image (#34:971): x:0, y:12, 577×540 — above card
            - Lime blob 1 (#34:981): x:406, y:67, 215×215
            - Lime blob 2 (#34:1006): x:305, y:114, 215×215
            - Learning Progress badge (#34:1031): x:345, y:213
            - Happy Students badge (#34:1038): x:283, y:413, w:258
          */}
          <div className="f1-visual-col">
            <div className="f1-visual">
              {/* Course card (bottom-left layer) */}
              <div className="f1-course-card">
                <div className="f1-card-img-wrap">
                  <img
                    src="/figma_images/93ad9f9e6bdb3c7f3c478820624ee19ad7320072.png"
                    alt="Learn Figma from Basic"
                    className="f1-card-thumb"
                  />
                  <div className="f1-card-pills">
                    <span className="f1-pill">17 Lessons</span>
                    <span className="f1-pill">2 hours 16 mins</span>
                  </div>
                </div>
                <div className="f1-card-body">
                  <div className="f1-card-title">Learn Figma from Basic</div>
                  <div className="f1-card-by">by purepearl studio</div>
                  <div className="f1-card-level">
                    <span className="f1-level-badge">Beginner</span>
                  </div>
                  <div className="f1-card-price">$25</div>
                </div>
              </div>

              {/* Student image (main, sits over card) */}
              <img
                src="/figma_images/29a52a24e51266edcd7d57d73392ee5fc4833220.png"
                alt="ByteSpace Student"
                className="f1-student"
              />

              {/* Lime blob 1 — x:406, y:67 (upper-right) */}
              <img
                src="/feature_orbs/feature_lime_blob1.png"
                alt=""
                className="f1-blob f1-blob1 animate-float"
              />
              {/* Lime blob 2 — x:305, y:114 (mid-right) */}
              <img
                src="/feature_orbs/feature_lime_blob2.png"
                alt=""
                className="f1-blob f1-blob2 animate-float-delayed"
              />

              {/* Learning Progress badge — x:345, y:213 */}
              <div className="f1-badge f1-badge-progress animate-float-delayed">
                <div className="f1-badge-lbl">Learning Progress</div>
                <div className="f1-badge-pct">55%</div>
                <div className="f1-prog-track">
                  <div className="f1-prog-fill" />
                </div>
              </div>

              {/* Happy Students badge — x:283, y:413, w:258 */}
              <div className="f1-badge f1-badge-students animate-float">
                <div className="f1-stu-header">
                  <span className="f1-stu-title">Happy Students</span>
                </div>
                <div className="f1-stu-row">
                  <div className="f1-avatars">
                    <img src="/figma_images/9ef8cb329b949267cc8214b6727067c4a13af4b4.png" alt="" className="f1-av" />
                    <img src="/figma_images/b44979e1c98ecb3ec92ac86805fe55581fbeaa60.png" alt="" className="f1-av" />
                    <img src="/figma_images/83fb3e04056cc892636460bee5791aa3f243854c.png" alt="" className="f1-av" />
                    <img src="/figma_images/f3cf29a8fed39589ceb38423e65b26b8d6c93123.png" alt="" className="f1-av" />
                    <img src="/figma_images/5824acacb3b76175bc84084ec18597109498f96d.png" alt="" className="f1-av" />
                    <img src="/figma_images/7fdccc783264eedc4fb989984eecbc4058a219f2.png" alt="" className="f1-av" />
                    <img src="/figma_images/1e078348a54489bfd231d82fe1944770883c8d80.png" alt="" className="f1-av" />
                    <span className="f1-av-more">2K+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        /* ── Wrapper ── */
        .features-wrapper {
          background: #FAFAFA;
          padding: 100px 0 0;
          position: relative;
          overflow: hidden;
        }
        .features-bg-deco {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 0;
        }
        .fbg-glow {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
        }
        /* Lime glow — left side */
        .fbg-glow-lime {
          width: 600px;
          height: 600px;
          left: -200px;
          top: 50px;
          background: radial-gradient(circle, rgba(203,252,1,0.35) 0%, rgba(203,252,1,0.05) 70%, transparent 100%);
        }
        /* Blue glow — right side */
        .fbg-glow-blue {
          width: 500px;
          height: 500px;
          right: -150px;
          top: -100px;
          background: radial-gradient(circle, rgba(0,59,226,0.08) 0%, transparent 70%);
        }

        /* ── Grid ── */
        .f1-grid {
          display: grid;
          grid-template-columns: 574px 1fr;
          gap: 63px;
          align-items: center;
          position: relative;
          z-index: 1;
        }

        /* ── Text column ── */
        .f1-text-col {
          display: flex;
          flex-direction: column;
          gap: 40px;
        }
        .f1-heading {
          font-family: var(--font-heading);
          font-size: 44px;
          font-weight: 600;
          color: #242528;
          line-height: 1.2;
          letter-spacing: -0.01em;
        }
        .f1-body {
          font-family: var(--font-body);
          font-size: 18px;
          color: #4B4C53;
          line-height: 1.6;
          margin-top: -16px;
        }
        .f1-stats {
          display: flex;
          align-items: flex-end;
          gap: 56px;
        }
        .f1-stat { display: flex; flex-direction: column; }
        .f1-stat-val {
          font-family: var(--font-heading);
          font-size: 36px;
          font-weight: 500;
          color: #003BE2;
          line-height: 44px;
          letter-spacing: -0.01em;
        }
        .f1-stat-lbl {
          font-family: var(--font-body);
          font-size: 18px;
          color: #4B4C53;
          line-height: 1.6;
        }

        /* ── Visual column ── */
        .f1-visual-col {
          display: flex;
          justify-content: flex-start;
          align-items: center;
        }
        /* Container: 621×552 matching Figma */
        .f1-visual {
          position: relative;
          width: 621px;
          height: 552px;
          flex-shrink: 0;
        }

        /* Course card: x:0, y:0, 373×384 (behind student) */
        .f1-course-card {
          position: absolute;
          right: 0;
          top: 0;
          width: 310px;
          background: #ffffff;
          border: 1px solid #CED0D3;
          border-radius: 24px;
          overflow: hidden;
          z-index: 2;
          box-shadow: 0 8px 30px rgba(0,0,0,0.07);
        }
        .f1-card-img-wrap {
          position: relative;
        }
        .f1-card-thumb {
          width: 100%;
          height: 170px;
          object-fit: cover;
          display: block;
          border-radius: 12px;
          margin: 12px;
          width: calc(100% - 24px);
        }
        .f1-card-pills {
          position: absolute;
          bottom: 10px;
          left: 20px;
          display: flex;
          gap: 8px;
        }
        .f1-pill {
          background: rgba(0,0,0,0.55);
          color: #fff;
          font-family: var(--font-body);
          font-size: 11px;
          font-weight: 500;
          padding: 3px 8px;
          border-radius: 20px;
        }
        .f1-card-body {
          padding: 12px 16px 16px;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .f1-card-title {
          font-family: var(--font-heading);
          font-size: 15px;
          font-weight: 600;
          color: #242528;
        }
        .f1-card-by {
          font-family: var(--font-body);
          font-size: 12px;
          color: #82868E;
        }
        .f1-card-level {
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .f1-level-badge {
          background: #f0f5ff;
          color: #003BE2;
          font-family: var(--font-body);
          font-size: 11px;
          font-weight: 500;
          padding: 2px 8px;
          border-radius: 20px;
        }
        .f1-card-price {
          font-family: var(--font-heading);
          font-size: 14px;
          font-weight: 600;
          color: #003BE2;
        }

        /* Student image: x:0, y:12, 577×540 — centered, on top of card */
        .f1-student {
          position: absolute;
          left: 0;
          top: 12px;
          width: 62%;
          height: calc(100% - 12px);
          object-fit: cover;
          object-position: center top;
          z-index: 3;
          border-radius: 8px;
          box-shadow:
            0.52px 0.74px 3.04px rgba(0,0,0,0.04),
            2.23px 3.19px 5.72px rgba(0,0,0,0.06),
            5.38px 7.69px 9.57px rgba(0,0,0,0.07),
            10.21px 14.58px 16.09px rgba(0,0,0,0.08);
        }

        /* Lime blobs: x:406, y:67 and x:305, y:114 */
        .f1-blob {
          position: absolute;
          object-fit: contain;
          z-index: 4;
          pointer-events: none;
        }
        .f1-blob1 {
          right: -10px;
          top: 30px;
          width: 130px;
        }
        .f1-blob2 {
          right: 80px;
          top: 80px;
          width: 100px;
        }

        /* Learning Progress badge: x:345, y:213 */
        .f1-badge {
          position: absolute;
          background: rgba(255,255,255,0.95);
          border-radius: 16px;
          padding: 14px 16px;
          z-index: 6;
          backdrop-filter: blur(10px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.10);
        }
        .f1-badge-progress {
          right: 0;
          top: 180px;
          min-width: 175px;
        }
        .f1-badge-lbl {
          font-family: var(--font-body);
          font-size: 12px;
          font-weight: 500;
          color: #242528;
          margin-bottom: 6px;
        }
        .f1-badge-pct {
          font-family: var(--font-heading);
          font-size: 44px;
          font-weight: 600;
          color: #242528;
          line-height: 1.2;
          letter-spacing: -0.01em;
          margin-bottom: 8px;
        }
        .f1-prog-track {
          width: 140px;
          height: 7px;
          background: #E5E6E8;
          border-radius: 24px;
          overflow: hidden;
        }
        .f1-prog-fill {
          width: 55%;
          height: 100%;
          background: #D4FB20;
          border-radius: 24px;
        }

        /* Happy Students badge: x:283, y:413, w:258 */
        .f1-badge-students {
          right: 0;
          bottom: 10px;
          min-width: 220px;
        }
        .f1-stu-header {
          margin-bottom: 8px;
        }
        .f1-stu-title {
          font-family: var(--font-body);
          font-size: 14px;
          font-weight: 500;
          color: #242528;
        }
        .f1-stu-row { display: flex; align-items: center; }
        .f1-avatars { display: flex; align-items: center; }
        .f1-av {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid #fff;
          margin-left: -10px;
        }
        .f1-av:first-child { margin-left: 0; }
        .f1-av-more {
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
          flex-shrink: 0;
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
          .f1-grid { grid-template-columns: 1fr 1fr; gap: 40px; }
          .f1-visual { width: 100%; height: 480px; }
          .f1-course-card { width: 260px; }
        }
        @media (max-width: 900px) {
          .f1-grid { grid-template-columns: 1fr; }
          .f1-heading { font-size: 34px; }
          .f1-visual { height: 380px; }
          .f1-blob { display: none; }
        }
      `}</style>
    </section>
  );
}
