import React, { useState } from 'react';

export default function Hero({ onSearchSubmit }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearchSubmit) onSearchSubmit(searchTerm);
    document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero-root" id="home">
      {/* Grid overlay */}
      <div className="hero-grid-overlay" />

      {/* ── Big lime stroke circle (the giant ring behind the student) ── */}
      <div className="hero-lime-ring" />

      {/* ── 3D Ornament circles (matching Figma "3d ornament" group) ── */}
      {/* Bottom-left: large lime blob (imageRef e3b559…) – 385×385 at x:0,y:0 relative to group at x:-118,y:221 */}
      <div className="hero-orb orb-bl-large animate-float">
        <img src="/figma_images/e3b55902d605bfc37a0809e6dc6dfe61b6701897.png" alt="" />
      </div>
      {/* Mid-left: small blob (imageRef e3b559…) – 175×175 at +301,+256 */}
      <div className="hero-orb orb-ml-sm animate-float-delayed">
        <img src="/figma_images/e3b55902d605bfc37a0809e6dc6dfe61b6701897.png" alt="" />
      </div>
      {/* Bottom-left mid: cone 342×342 (imageRef 8670b8…) at +136,+461 */}
      <div className="hero-orb orb-cone-bl animate-float">
        <img src="/figma_images/8670b841eac7883ecb790f84eb349c6c01db588b.png" alt="" />
      </div>
      {/* Right: student circle 330×330 (imageRef cda676…) at +1245,+451 */}
      <div className="hero-orb orb-circle-r animate-float-delayed">
        <img src="/figma_images/cda676feaf7fba8b0f81b47c5ea2707d7acb5217.png" alt="" />
      </div>
      {/* Top-right: cone 370×370 (imageRef 92fc70…) at +1349,0 */}
      <div className="hero-orb orb-cone-tr animate-float">
        <img src="/figma_images/92fc70a39c36138c0e55699b18b3e88bd1f86a59.png" alt="" />
      </div>
      {/* Top-right small: cone 188×188 (imageRef f9c0e0…) at +1224,+243 */}
      <div className="hero-orb orb-cone-tr-sm animate-float-delayed">
        <img src="/figma_images/f9c0e0fd05db48405aa72287b20d04b9a01feb51.png" alt="" />
      </div>

      {/* ── Hero content column ── */}
      <div className="hero-inner">
        {/* Title + subtitle */}
        <div className="hero-text-block">
          <h1 className="hero-title">
            Get Access to Hundreds<br />Courses Available
          </h1>
          <p className="hero-subtitle">
            Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
          </p>
        </div>

        {/* Search bar */}
        <form className="hero-search-bar" onSubmit={handleSubmit} id="hero-search-form">
          <div className="hero-search-input-wrap">
            {/* Search icon SVG */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="hero-search-icon">
              <path d="M21 21L15.0001 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="#82868E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <input
              type="text"
              placeholder="Course, topic, creator"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="hero-search-input"
              id="hero-search-input"
            />
          </div>
          <button type="submit" className="hero-search-btn" id="hero-search-btn">
            Search
          </button>
        </form>
      </div>

      {/* ── Student image (absolute, below search bar area) ── */}
      <img
        src="/figma_images/29a52a24e51266edcd7d57d73392ee5fc4833220.png"
        alt="ByteSpace Student"
        className="hero-student-img"
      />

      {/* ── UI/UX Design badge (left of student, x:404,y:639) ── */}
      <div className="hero-badge badge-uiux">
        <div className="badge-row-title">UI/UX Design</div>
        <div className="badge-row-sub">
          <span>200 Courses</span>
          <span className="badge-dot">•</span>
          <span>1000+ Students</span>
        </div>
      </div>

      {/* ── Learning Progress badge (right of student, x:842,y:651) ── */}
      <div className="hero-badge badge-progress">
        <div className="badge-label-sm">Learning Progress</div>
        <div className="badge-pct">55%</div>
        <div className="badge-progress-track">
          <div className="badge-progress-fill" />
        </div>
      </div>

      {/* ── Happy Students badge (below student, x:328,y:837) ── */}
      <div className="hero-badge badge-students">
        <div className="students-header">
          <span className="badge-row-title">Happy Students</span>
          <span className="students-rating">
            <span className="students-score">4.5 (240)</span>
            <span className="students-star">★</span>
          </span>
        </div>
        <div className="students-avatars">
          <img src="/figma_images/9ef8cb329b949267cc8214b6727067c4a13af4b4.png" alt="" className="s-avatar" />
          <img src="/figma_images/b44979e1c98ecb3ec92ac86805fe55581fbeaa60.png" alt="" className="s-avatar" />
          <img src="/figma_images/83fb3e04056cc892636460bee5791aa3f243854c.png" alt="" className="s-avatar" />
          <img src="/figma_images/f3cf29a8fed39589ceb38423e65b26b8d6c93123.png" alt="" className="s-avatar" />
          <img src="/figma_images/5824acacb3b76175bc84084ec18597109498f96d.png" alt="" className="s-avatar" />
          <img src="/figma_images/7fdccc783264eedc4fb989984eecbc4058a219f2.png" alt="" className="s-avatar" />
          <img src="/figma_images/1e078348a54489bfd231d82fe1944770883c8d80.png" alt="" className="s-avatar" />
          <span className="students-more">2K+</span>
        </div>
      </div>

      <style>{`
        /* ── ROOT ── */
        .hero-root {
          position: relative;
          width: 100%;
          background-color: #003BE2;
          overflow: hidden;
          /* The hero frame is 1440×1024 in Figma; we use min-height to scale it */
          min-height: 700px;
          padding-bottom: 0;
        }

        /* ── Grid overlay ── */
        .hero-grid-overlay {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.09) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.09) 1px, transparent 1px);
          background-size: 60px 60px;
          opacity: 0.12;
          z-index: 0;
          pointer-events: none;
        }

        /* ── Big lime stroke ring ── */
        /* Figma: ellipse 1149×1149, stroke #CBFC01, strokeWeight 320px, at x:145,y:582 */
        /* Visually this creates a large green ring visible at the bottom of the hero */
        .hero-lime-ring {
          position: absolute;
          width: 1149px;
          height: 1149px;
          left: 145px;
          top: 582px;
          border-radius: 50%;
          border: 320px solid #CBFC01;
          z-index: 1;
          pointer-events: none;
        }

        /* ── 3D Ornament circles ── */
        .hero-orb {
          position: absolute;
          border-radius: 50%;
          overflow: hidden;
          pointer-events: none;
          z-index: 2;
        }
        .hero-orb img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        /* Group offset x:-118, y:221; individual coords are relative to that */
        /* Large lime blob: 385×385, at group x:0+(-118)=-118, y:0+221=221 */
        .orb-bl-large {
          width: 385px;
          height: 385px;
          left: -118px;
          top: 221px;
        }
        /* Small lime blob: 175×175, at +301,+256 relative → x:183, y:477 */
        .orb-ml-sm {
          width: 175px;
          height: 175px;
          left: 183px;
          top: 477px;
        }
        /* Mid-left cone: 342×342, at +136,+461 → x:18, y:682 */
        .orb-cone-bl {
          width: 342px;
          height: 342px;
          left: 18px;
          top: 682px;
        }
        /* Right student circle: 330×330, at +1245,+451 → x:1127, y:672 */
        .orb-circle-r {
          width: 330px;
          height: 330px;
          left: 1127px;
          top: 672px;
        }
        /* Top-right large cone: 370×370, at +1349,0 → x:1231, y:221 */
        .orb-cone-tr {
          width: 370px;
          height: 370px;
          left: 1231px;
          top: 221px;
        }
        /* Top-right small cone: 188×188, at +1224,+243 → x:1106, y:464 */
        .orb-cone-tr-sm {
          width: 188px;
          height: 188px;
          left: 1106px;
          top: 464px;
        }

        /* ── Hero inner (content column) ── */
        /* Figma: Hero frame at x:120,y:169, width:1200, column, center, gap:60px */
        .hero-inner {
          position: relative;
          z-index: 5;
          width: 1200px;
          max-width: 100%;
          margin: 0 auto;
          padding: 169px 0 60px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 60px;
          padding-left: 24px;
          padding-right: 24px;
        }

        /* ── Text block: column, center, gap:32px ── */
        .hero-text-block {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 32px;
          text-align: center;
        }

        /* Title: Poppins SemiBold 72px, white */
        .hero-title {
          font-family: var(--font-heading);
          font-size: 72px;
          font-weight: 600;
          color: #FFFFFF;
          line-height: 1.2;
          letter-spacing: -0.01em;
          max-width: 935px;
          text-align: center;
        }

        /* Subtitle: Satoshi Regular 18px, #E5E6E8 */
        .hero-subtitle {
          font-family: var(--font-body);
          font-size: 18px;
          font-weight: 400;
          color: #E5E6E8;
          line-height: 1.6;
          text-align: center;
        }

        /* ── Search bar ── */
        /* Figma: row, gap:16px */
        .hero-search-bar {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 16px;
        }
        /* Input wrapper: row, 461×52, white, border-radius:24px, padding:12px 24px */
        .hero-search-input-wrap {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 8px;
          width: 461px;
          height: 52px;
          background: #FFFFFF;
          border-radius: 24px;
          padding: 12px 24px;
          box-sizing: border-box;
        }
        .hero-search-icon {
          flex-shrink: 0;
          width: 24px;
          height: 24px;
        }
        .hero-search-input {
          flex: 1;
          border: none;
          outline: none;
          font-family: var(--font-body);
          font-size: 18px;
          font-weight: 400;
          color: #242528;
          background: transparent;
          line-height: 1.6;
        }
        .hero-search-input::placeholder {
          color: #82868E;
        }
        /* Search button: Electric Lime/400 (#D4FB20), row, padding:12px 24px, border-radius:24px */
        .hero-search-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
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
          white-space: nowrap;
          transition: background 0.2s ease, transform 0.2s ease;
          height: 52px;
        }
        .hero-search-btn:hover {
          background: #c8f200;
          transform: translateY(-1px);
        }

        /* ── Student image ── */
        /* Figma: x:431, y:512, 578×541 */
        .hero-student-img {
          position: absolute;
          left: 431px;
          top: 512px;
          width: 578px;
          height: 541px;
          object-fit: cover;
          z-index: 4;
          border-radius: 4px;
          box-shadow:
            0.52px 0.74px 3.04px 0px rgba(0,0,0,0.04),
            2.23px 3.19px 5.72px 0px rgba(0,0,0,0.06),
            5.38px 7.69px 9.57px 0px rgba(0,0,0,0.07),
            10.21px 14.58px 16.09px 0px rgba(0,0,0,0.08),
            16.95px 24.21px 24px 0px rgba(0,0,0,0.09),
            25.84px 36.91px 36px 0px rgba(0,0,0,0.10),
            37.12px 53.03px 56px 0px rgba(0,0,0,0.11),
            51.04px 72.91px 72px 0px rgba(0,0,0,0.13);
        }

        /* ── Shared badge base ── */
        .hero-badge {
          position: absolute;
          background: rgba(255,255,255,1);
          border-radius: 16px;
          padding: 16px;
          z-index: 6;
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }

        /* ── UI/UX Design badge ── */
        /* Figma: x:404, y:639 */
        .badge-uiux {
          left: 404px;
          top: 639px;
        }
        .badge-row-title {
          font-family: var(--font-body);
          font-size: 16px;
          font-weight: 500;
          color: #242528;
          line-height: 1.2;
          margin-bottom: 4px;
        }
        .badge-row-sub {
          display: flex;
          flex-direction: row;
          gap: 8px;
          font-family: var(--font-body);
          font-size: 12px;
          font-weight: 400;
          color: #82868E;
          line-height: 1.6;
        }
        .badge-dot {
          color: #82868E;
        }

        /* ── Learning Progress badge ── */
        /* Figma: x:842, y:651, width 200+padding=232 */
        .badge-progress {
          left: 842px;
          top: 651px;
          min-width: 232px;
        }
        .badge-label-sm {
          font-family: var(--font-body);
          font-size: 14px;
          font-weight: 500;
          color: #242528;
          line-height: 1.2;
          margin-bottom: 8px;
        }
        .badge-pct {
          font-family: var(--font-heading);
          font-size: 48px;
          font-weight: 600;
          color: #242528;
          line-height: 1.2;
          letter-spacing: -0.01em;
          margin-bottom: 8px;
        }
        .badge-progress-track {
          width: 200px;
          height: 8px;
          background: #E5E6E8;
          border-radius: 24px;
          overflow: hidden;
        }
        .badge-progress-fill {
          width: 55%;
          height: 100%;
          background: #D4FB20;
          border-radius: 24px;
        }

        /* ── Happy Students badge ── */
        /* Figma: x:328, y:837, width:258 */
        .badge-students {
          left: 328px;
          top: 837px;
          width: 258px;
        }
        .students-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 8px;
        }
        .students-rating {
          display: flex;
          align-items: center;
          gap: 2px;
        }
        .students-score {
          font-family: var(--font-body);
          font-size: 12px;
          font-weight: 400;
          color: #242528;
          line-height: 1.6;
        }
        .students-star {
          color: #D4FB20;
          font-size: 14px;
          line-height: 1;
        }
        .students-avatars {
          display: flex;
          flex-direction: row;
          align-items: center;
        }
        .s-avatar {
          width: 43px;
          height: 43px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid #FFFFFF;
          margin-left: -16px;
        }
        .s-avatar:first-child { margin-left: 0; }
        .students-more {
          width: 43px;
          height: 43px;
          border-radius: 50%;
          background: #D4FB20;
          color: #242528;
          font-family: var(--font-body);
          font-size: 12px;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid #FFFFFF;
          margin-left: -16px;
          flex-shrink: 0;
        }

        /* ── Animations ── */
        @keyframes floatGentle {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        .animate-float {
          animation: floatGentle 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: floatGentle 7s ease-in-out infinite 1.8s;
        }

        /* ── Responsive ── */
        @media (max-width: 1440px) {
          /* Scale the absolute elements with the viewport */
          .hero-root {
            min-height: clamp(600px, 71vw, 1024px);
          }
          .hero-lime-ring {
            width: clamp(500px, 80vw, 1149px);
            height: clamp(500px, 80vw, 1149px);
            left: clamp(50px, 10vw, 145px);
            border-width: clamp(100px, 22vw, 320px);
          }
          .hero-student-img {
            left: clamp(200px, 30vw, 431px);
            top: clamp(350px, 36vw, 512px);
            width: clamp(280px, 40vw, 578px);
            height: auto;
          }
          .badge-uiux {
            left: clamp(180px, 28vw, 404px);
            top: clamp(440px, 44vw, 639px);
          }
          .badge-progress {
            left: clamp(500px, 58vw, 842px);
            top: clamp(440px, 45vw, 651px);
          }
          .badge-students {
            left: clamp(160px, 23vw, 328px);
            top: clamp(560px, 58vw, 837px);
          }
          .orb-bl-large { left: clamp(-118px, -8vw, -20px); }
          .orb-circle-r { left: clamp(700px, 78vw, 1127px); }
          .orb-cone-tr { left: clamp(900px, 85vw, 1231px); }
          .orb-cone-tr-sm { left: clamp(750px, 77vw, 1106px); }
        }
        @media (max-width: 900px) {
          .hero-root { min-height: 520px; }
          .hero-title { font-size: 44px; }
          .hero-inner { padding-top: 120px; gap: 40px; }
          .hero-search-input-wrap { width: 280px; }
          .hero-student-img {
            position: relative;
            left: auto;
            top: auto;
            width: 80%;
            max-width: 400px;
            display: block;
            margin: 0 auto;
            z-index: 4;
          }
          .hero-badge { display: none; }
          .hero-lime-ring { width: 600px; height: 600px; border-width: 140px; left: 50%; transform: translateX(-50%); }
          .hero-orb { display: none; }
        }
        @media (max-width: 600px) {
          .hero-title { font-size: 32px; }
          .hero-subtitle { font-size: 15px; }
          .hero-search-bar { flex-direction: column; width: 100%; }
          .hero-search-input-wrap { width: 100%; }
          .hero-search-btn { width: 100%; }
        }
      `}</style>
    </section>
  );
}
