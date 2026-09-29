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
      {/* ── Grid dot overlay (12% opacity) ── */}
      <div className="hero-grid-overlay" />

      {/* ── Floating 3D ornaments (properly colored from Figma) ── */}

      {/* LEFT SIDE ornaments */}
      {/* Large lime blob – bottom-left, imageRef e3b559 masked lime */}
      <img src="/hero_ornaments/orb_lime_large.png"   alt="" className="h-orb orb-lime-large   animate-float" />
      {/* Small white/grey cone blob – mid left */}
      <img src="/hero_ornaments/orb_white_sm.png"     alt="" className="h-orb orb-white-sm     animate-float-delayed" />
      {/* White cone – lower-left */}
      <img src="/hero_ornaments/orb_cone_white_bl.png" alt="" className="h-orb orb-cone-wbl   animate-float" />

      {/* RIGHT SIDE ornaments */}
      {/* Lime cone – top-right */}
      <img src="/hero_ornaments/orb_cone_lime_tr.png"  alt="" className="h-orb orb-cone-ltr   animate-float-delayed" />
      {/* Small white cone – mid-right */}
      <img src="/hero_ornaments/orb_cone_white_sm.png" alt="" className="h-orb orb-cone-wsm   animate-float" />
      {/* White circle/ring – far right lower */}
      <img src="/hero_ornaments/orb_circle_white_r.png" alt="" className="h-orb orb-circle-wr animate-float-delayed" />

      {/* ── Big lime filled circle behind the student ── */}
      {/* In Figma: ellipse at x:145, y:582, 1149×1149 with #CBFC01 320px stroke
          Visually this looks like the solid lime semicircle at the bottom */}
      <div className="hero-lime-circle" />

      {/* ── Top content block (title + subtitle + search) ── */}
      <div className="hero-inner">
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

      {/* ── Bottom visual area (student + badges) ── */}
      <div className="hero-visual-area">
        {/* Floating badges */}
        {/* UI/UX Design – left of student */}
        <div className="h-badge badge-uiux animate-float">
          <div className="h-badge-title">UI/UX Design</div>
          <div className="h-badge-sub">
            <span>200 Courses</span>
            <span className="h-badge-dot">•</span>
            <span>1000+ Students</span>
          </div>
        </div>

        {/* Student photo – center */}
        <img
          src="/figma_images/29a52a24e51266edcd7d57d73392ee5fc4833220.png"
          alt="ByteSpace Student"
          className="hero-student-img"
        />

        {/* Learning Progress – right of student */}
        <div className="h-badge badge-progress animate-float-delayed">
          <div className="h-badge-label-sm">Learning Progress</div>
          <div className="h-badge-pct">55%</div>
          <div className="h-progress-track">
            <div className="h-progress-fill" />
          </div>
        </div>

        {/* Happy Students – below-left */}
        <div className="h-badge badge-students animate-float">
          <div className="h-students-header">
            <span className="h-badge-title">Happy Students</span>
            <span className="h-students-rating">
              4.5 <span className="h-star">★</span>
            </span>
          </div>
          <div className="h-avatars">
            <img src="/figma_images/9ef8cb329b949267cc8214b6727067c4a13af4b4.png" alt="" className="h-av" />
            <img src="/figma_images/b44979e1c98ecb3ec92ac86805fe55581fbeaa60.png" alt="" className="h-av" />
            <img src="/figma_images/83fb3e04056cc892636460bee5791aa3f243854c.png" alt="" className="h-av" />
            <img src="/figma_images/f3cf29a8fed39589ceb38423e65b26b8d6c93123.png" alt="" className="h-av" />
            <img src="/figma_images/5824acacb3b76175bc84084ec18597109498f96d.png" alt="" className="h-av" />
            <img src="/figma_images/7fdccc783264eedc4fb989984eecbc4058a219f2.png" alt="" className="h-av" />
            <span className="h-av-more">2K+</span>
          </div>
        </div>
      </div>

      <style>{`
        /* ────────────────────────────────────── */
        /* ROOT                                   */
        /* ────────────────────────────────────── */
        .hero-root {
          position: relative;
          width: 100%;
          min-height: 620px;
          background-color: #003BE2;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        /* Grid overlay */
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

        /* ────────────────────────────────────── */
        /* ORNAMENTS                              */
        /* ────────────────────────────────────── */
        .h-orb {
          position: absolute;
          pointer-events: none;
          z-index: 2;
          object-fit: contain;
        }

        /* LEFT ornaments */
        .orb-lime-large  { width: 180px; left: -30px;  top: 140px; }
        .orb-white-sm    { width: 80px;  left: 130px;  top: 320px; }
        .orb-cone-wbl    { width: 140px; left: 30px;   top: 380px; }

        /* RIGHT ornaments */
        .orb-cone-ltr    { width: 150px; right: 30px;  top: 100px; }
        .orb-cone-wsm    { width: 100px; right: 160px; top: 300px; }
        .orb-circle-wr   { width: 130px; right: 0px;   top: 340px; }

        /* ────────────────────────────────────── */
        /* LIME CIRCLE                            */
        /* ────────────────────────────────────── */
        /* The large lime-green filled circle behind the student */
        .hero-lime-circle {
          position: absolute;
          bottom: -60px;
          left: 50%;
          transform: translateX(-50%);
          width: 520px;
          height: 520px;
          border-radius: 50%;
          background: #CBFC01;
          z-index: 3;
          pointer-events: none;
        }

        /* ────────────────────────────────────── */
        /* TOP CONTENT (title + search)           */
        /* ────────────────────────────────────── */
        .hero-inner {
          position: relative;
          z-index: 5;
          max-width: 1200px;
          width: 100%;
          margin: 0 auto;
          padding: 160px 24px 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 48px;
        }
        .hero-text-block {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
          text-align: center;
        }
        .hero-title {
          font-family: var(--font-heading);
          font-size: clamp(40px, 5.5vw, 72px);
          font-weight: 600;
          color: #FFFFFF;
          line-height: 1.2;
          letter-spacing: -0.01em;
          max-width: 880px;
          text-align: center;
        }
        .hero-subtitle {
          font-family: var(--font-body);
          font-size: 18px;
          font-weight: 400;
          color: #E5E6E8;
          line-height: 1.6;
          text-align: center;
          max-width: 680px;
        }

        /* Search bar */
        .hero-search-bar {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 16px;
        }
        .hero-search-input-wrap {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 8px;
          width: 430px;
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
          font-size: 16px;
          color: #242528;
          background: transparent;
        }
        .hero-search-input::placeholder { color: #82868E; }
        .hero-search-btn {
          height: 52px;
          padding: 0 28px;
          background: #D4FB20;
          border-radius: 24px;
          border: none;
          cursor: pointer;
          font-family: var(--font-body);
          font-size: 16px;
          font-weight: 500;
          color: #242528;
          transition: background 0.18s ease, transform 0.18s ease;
          white-space: nowrap;
        }
        .hero-search-btn:hover {
          background: #c8f200;
          transform: translateY(-2px);
        }

        /* ────────────────────────────────────── */
        /* VISUAL AREA (student + badges)         */
        /* ────────────────────────────────────── */
        .hero-visual-area {
          position: relative;
          z-index: 5;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          height: 420px;
          margin-top: 32px;
          flex-shrink: 0;
        }

        /* Student photo */
        .hero-student-img {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 360px;
          height: auto;
          object-fit: contain;
          z-index: 5;
          filter: drop-shadow(0 20px 40px rgba(0,0,0,0.3));
        }

        /* ────────────────────────────────────── */
        /* FLOATING BADGES                        */
        /* ────────────────────────────────────── */
        .h-badge {
          position: absolute;
          background: rgba(255,255,255,0.97);
          border-radius: 16px;
          padding: 14px 18px;
          z-index: 7;
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.12);
        }
        .h-badge-title {
          font-family: var(--font-body);
          font-size: 14px;
          font-weight: 500;
          color: #242528;
          line-height: 1.2;
          margin-bottom: 4px;
        }
        .h-badge-sub {
          display: flex;
          gap: 6px;
          font-family: var(--font-body);
          font-size: 11px;
          color: #82868E;
        }
        .h-badge-dot { color: #82868E; }

        /* UI/UX badge */
        .badge-uiux {
          left: calc(50% - 340px);
          bottom: 140px;
        }

        /* Progress badge */
        .badge-progress {
          right: calc(50% - 380px);
          bottom: 160px;
          min-width: 180px;
        }
        .h-badge-label-sm {
          font-family: var(--font-body);
          font-size: 12px;
          font-weight: 500;
          color: #242528;
          margin-bottom: 6px;
        }
        .h-badge-pct {
          font-family: var(--font-heading);
          font-size: 44px;
          font-weight: 600;
          color: #242528;
          line-height: 1.2;
          letter-spacing: -0.01em;
          margin-bottom: 8px;
        }
        .h-progress-track {
          width: 160px;
          height: 7px;
          background: #E5E6E8;
          border-radius: 24px;
          overflow: hidden;
        }
        .h-progress-fill {
          width: 55%;
          height: 100%;
          background: #D4FB20;
          border-radius: 24px;
        }

        /* Happy Students badge */
        .badge-students {
          left: calc(50% - 380px);
          bottom: 30px;
          min-width: 240px;
        }
        .h-students-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 8px;
        }
        .h-students-rating {
          font-family: var(--font-body);
          font-size: 12px;
          font-weight: 600;
          color: #242528;
          display: flex;
          align-items: center;
          gap: 2px;
        }
        .h-star { color: #D4FB20; font-size: 13px; }
        .h-avatars {
          display: flex;
          flex-direction: row;
          align-items: center;
        }
        .h-av {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid #fff;
          margin-left: -12px;
        }
        .h-av:first-child { margin-left: 0; }
        .h-av-more {
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
          margin-left: -12px;
          flex-shrink: 0;
        }

        /* ────────────────────────────────────── */
        /* ANIMATIONS                             */
        /* ────────────────────────────────────── */
        @keyframes floatGentle {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float { animation: floatGentle 5s ease-in-out infinite; }
        .animate-float-delayed { animation: floatGentle 6s ease-in-out infinite 1.5s; }

        /* ────────────────────────────────────── */
        /* RESPONSIVE                             */
        /* ────────────────────────────────────── */
        @media (max-width: 1100px) {
          .badge-uiux   { left: 2%; }
          .badge-progress { right: 2%; }
          .badge-students { left: 2%; }
        }
        @media (max-width: 900px) {
          .hero-inner { padding-top: 120px; gap: 36px; }
          .hero-title { font-size: 36px; }
          .hero-search-input-wrap { width: 280px; }
          .hero-visual-area { height: 340px; }
          .hero-student-img { width: 260px; }
          .hero-lime-circle { width: 360px; height: 360px; }
          .h-orb { display: none; }
          .badge-uiux, .badge-students { display: none; }
          .badge-progress { right: 8%; }
        }
        @media (max-width: 600px) {
          .hero-title { font-size: 28px; }
          .hero-subtitle { font-size: 15px; }
          .hero-search-bar { flex-direction: column; width: 90%; }
          .hero-search-input-wrap { width: 100%; }
          .hero-search-btn { width: 100%; }
          .hero-visual-area { height: 280px; }
          .hero-student-img { width: 200px; }
          .hero-lime-circle { width: 260px; height: 260px; }
          .h-badge { display: none; }
        }
      `}</style>
    </section>
  );
}
