import React, { useState } from 'react';
import { Search, Star } from 'lucide-react';

export default function Hero({ onSearchSubmit, onExploreCourses }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearchSubmit) {
      onSearchSubmit(searchTerm);
    }
    const coursesElem = document.getElementById('courses');
    if (coursesElem) {
      coursesElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section bg-grid-blue">
      {/* 3D Floating Decorative Ornaments */}
      <div className="hero-ornament ornament-top-left animate-float">
        <img src="/figma_images/f9c0e0fd05db48405aa72287b20d04b9a01feb51.png" alt="3D Ring" />
      </div>
      <div className="hero-ornament ornament-top-right animate-float-delayed">
        <img src="/figma_images/92fc70a39c36138c0e55699b18b3e88bd1f86a59.png" alt="3D Cone" />
      </div>
      <div className="hero-ornament ornament-left-squiggle animate-float">
        <img src="/figma_images/4557999be35f4bf82b01da42a1ef24a1236fbddc.png" alt="3D Ribbon" onError={(e) => e.target.style.display = 'none'} />
      </div>
      <div className="hero-ornament ornament-bottom-ring animate-float-delayed">
        <img src="/figma_images/b2ff07b46d7e2dc3b306b453a258810c9c7f66a8.png" alt="3D Ring" onError={(e) => e.target.style.display = 'none'} />
      </div>

      <div className="container hero-content-container">
        {/* Main Title & Subtitle */}
        <div className="hero-headings">
          <h1 className="hero-title">
            Get Access to Hundreds <br /> Courses Available
          </h1>
          <p className="hero-subtitle">
            Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
          </p>

          {/* Search Bar */}
          <form className="hero-search-bar" onSubmit={handleSubmit} id="hero-search-form">
            <div className="search-input-wrapper">
              <Search size={18} color="#82868e" className="search-icon" />
              <input
                type="text"
                placeholder="Course, topic, creator"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
                id="hero-search-input"
              />
            </div>
            <button type="submit" className="btn btn-lime search-submit-btn" id="hero-search-btn">
              Search
            </button>
          </form>
        </div>

        {/* Centerpiece Visual with Student & Floating Badges */}
        <div className="hero-visual-wrapper">
          <div className="hero-lime-circle"></div>

          {/* Student Portrait */}
          <img
            src="/figma_images/29a52a24e51266edcd7d57d73392ee5fc4833220.png"
            alt="ByteSpace Student"
            className="hero-student-img"
          />

          {/* Floating Badge 1: UI/UX Design */}
          <div className="hero-badge badge-uiux animate-float">
            <div className="badge-title">UI/UX Design</div>
            <div className="badge-subtitle">200 Courses • 1000+ Students</div>
          </div>

          {/* Floating Badge 2: Learning Progress */}
          <div className="hero-badge badge-progress animate-float-delayed">
            <div className="progress-label">Learning Progress</div>
            <div className="progress-percentage">55%</div>
            <div className="progress-bar-track">
              <div className="progress-bar-fill" style={{ width: '55%' }}></div>
            </div>
          </div>

          {/* Floating Badge 3: Happy Students */}
          <div className="hero-badge badge-students animate-float">
            <div className="students-header">
              <span className="badge-title">Happy Students</span>
              <span className="rating-pill">
                4.5 <span className="star-icon">★</span>
              </span>
            </div>
            <div className="avatars-group">
              <img src="/figma_images/0577f0e9b7fca2f32639871454da0de95f951709.png" alt="Avatar" className="student-avatar" />
              <img src="/figma_images/63c4be83222c85e6c852819bc5d4b24a87a87fb6.png" alt="Avatar" className="student-avatar" />
              <img src="/figma_images/728c3b1d33fe647a46f9bf668322f8c1d94ed937.png" alt="Avatar" className="student-avatar" />
              <img src="/figma_images/853767f40f2b236e768652174f76aa081e7d5cf2.png" alt="Avatar" className="student-avatar" onError={(e) => e.target.style.display = 'none'} />
              <span className="more-count">2K+</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          padding-top: 140px;
          padding-bottom: 80px;
          overflow: hidden;
          position: relative;
        }
        .hero-content-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          z-index: 2;
        }
        .hero-headings {
          text-align: center;
          max-width: 780px;
          margin-bottom: 50px;
        }
        .hero-title {
          font-size: 58px;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.15;
          margin-bottom: 20px;
          letter-spacing: -1.2px;
        }
        .hero-subtitle {
          font-size: 18px;
          color: rgba(255, 255, 255, 0.85);
          line-height: 1.6;
          margin-bottom: 36px;
        }
        .hero-search-bar {
          display: flex;
          align-items: center;
          background: #ffffff;
          border-radius: 9999px;
          padding: 6px 8px 6px 20px;
          max-width: 520px;
          margin: 0 auto;
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.2);
        }
        .search-input-wrapper {
          display: flex;
          align-items: center;
          flex: 1;
          gap: 12px;
        }
        .search-icon {
          flex-shrink: 0;
        }
        .search-input {
          border: none;
          outline: none;
          font-size: 15px;
          color: var(--neutral-900);
          width: 100%;
          background: transparent;
        }
        .search-input::placeholder {
          color: var(--neutral-400);
        }
        .search-submit-btn {
          padding: 10px 26px;
          font-size: 14px;
        }

        /* Centerpiece */
        .hero-visual-wrapper {
          position: relative;
          width: 100%;
          max-width: 540px;
          height: 480px;
          display: flex;
          justify-content: center;
          align-items: flex-end;
          margin-top: 20px;
        }
        .hero-lime-circle {
          position: absolute;
          width: 380px;
          height: 380px;
          border-radius: 50%;
          background: var(--secondary-500);
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          z-index: 1;
        }
        .hero-student-img {
          position: relative;
          z-index: 2;
          width: 440px;
          height: auto;
          object-fit: contain;
          margin-bottom: 0;
          filter: drop-shadow(0 20px 30px rgba(0, 0, 0, 0.25));
        }

        /* Badges */
        .hero-badge {
          position: absolute;
          z-index: 4;
          background: #ffffff;
          border-radius: 16px;
          padding: 14px 18px;
          box-shadow: 0 16px 35px rgba(0, 0, 0, 0.15);
          backdrop-filter: blur(8px);
        }
        .badge-uiux {
          top: 80px;
          left: -40px;
        }
        .badge-title {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 14px;
          color: var(--neutral-950);
        }
        .badge-subtitle {
          font-size: 12px;
          color: var(--neutral-500);
          margin-top: 4px;
        }
        .badge-progress {
          top: 70px;
          right: -40px;
          min-width: 170px;
        }
        .progress-label {
          font-size: 12px;
          color: var(--neutral-500);
          font-weight: 500;
        }
        .progress-percentage {
          font-family: var(--font-heading);
          font-size: 28px;
          font-weight: 700;
          color: var(--neutral-950);
          line-height: 1.1;
          margin: 4px 0 8px;
        }
        .progress-bar-track {
          width: 100%;
          height: 6px;
          background: var(--neutral-100);
          border-radius: 3px;
          overflow: hidden;
        }
        .progress-bar-fill {
          height: 100%;
          background: var(--secondary-500);
          border-radius: 3px;
        }
        .badge-students {
          bottom: 30px;
          left: -60px;
          min-width: 190px;
        }
        .students-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          margin-bottom: 8px;
        }
        .rating-pill {
          display: flex;
          align-items: center;
          gap: 3px;
          font-size: 12px;
          font-weight: 700;
          color: var(--neutral-900);
        }
        .star-icon {
          color: #ffb800;
        }
        .avatars-group {
          display: flex;
          align-items: center;
        }
        .student-avatar {
          width: 26px;
          height: 26px;
          border-radius: 50%;
          border: 2px solid #ffffff;
          margin-left: -6px;
          object-fit: cover;
        }
        .student-avatar:first-child {
          margin-left: 0;
        }
        .more-count {
          margin-left: -4px;
          background: var(--neutral-950);
          color: #ffffff;
          font-size: 10px;
          font-weight: 700;
          padding: 3px 6px;
          border-radius: 9999px;
          border: 2px solid #ffffff;
        }

        /* Floating 3D Ornaments */
        .hero-ornament {
          position: absolute;
          z-index: 2;
          pointer-events: none;
        }
        .hero-ornament img {
          width: 100%;
          height: auto;
          filter: drop-shadow(0 15px 25px rgba(0, 0, 0, 0.2));
        }
        .ornament-top-left {
          top: 90px;
          left: 4%;
          width: 140px;
        }
        .ornament-top-right {
          top: 80px;
          right: 3%;
          width: 150px;
        }
        .ornament-left-squiggle {
          bottom: 120px;
          left: 2%;
          width: 90px;
        }
        .ornament-bottom-ring {
          bottom: 100px;
          right: 2%;
          width: 130px;
        }

        @media (max-width: 992px) {
          .hero-title {
            font-size: 44px;
          }
          .badge-uiux {
            left: 0;
          }
          .badge-progress {
            right: 0;
          }
          .badge-students {
            left: 0;
          }
        }
        @media (max-width: 600px) {
          .hero-title {
            font-size: 34px;
          }
          .hero-visual-wrapper {
            height: 380px;
          }
          .hero-student-img {
            width: 320px;
          }
          .hero-lime-circle {
            width: 280px;
            height: 280px;
          }
          .badge-uiux, .badge-progress {
            display: none;
          }
          .ornament-top-left, .ornament-top-right {
            width: 80px;
          }
        }
      `}</style>
    </section>
  );
}
