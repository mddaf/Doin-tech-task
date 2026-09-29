import React from 'react';
import { STATS } from '../data/content';

export default function FeatureOne() {
  return (
    <section className="features-wrapper" id="about">
      {/* Decorative background elements */}
      <div className="features-bg-decoration">
        <div className="features-glow features-glow-lime" />
        <div className="features-glow features-glow-blue" />
      </div>

      <div className="container">
        {/* ── SECTION 1: Professional Growth ── */}
        <div className="feature-grid feature-grid-1">
          {/* Left: Text + Stats */}
          <div className="feature-text-col">
            <h2 className="feature-heading">
              Your Path to Professional<br />Growth Starts Here!
            </h2>
            <p className="feature-paragraph">
              Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.
            </p>

            {/* Stats */}
            <div className="stats-row">
              {STATS.map((stat, idx) => (
                <div key={idx} className="stat-item">
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Student image with overlaid badges */}
          <div className="feature-visual-col">
            <div className="feature1-visual">
              {/* Main course card */}
              <div className="f1-course-card">
                <img
                  src="/figma_images/93ad9f9e6bdb3c7f3c478820624ee19ad7320072.png"
                  alt="Learn Figma Course"
                  className="f1-course-thumb"
                />
                <div className="f1-course-info">
                  <div className="f1-course-title">Learn Figma from Basic</div>
                  <div className="f1-course-meta">$25.00</div>
                </div>
              </div>

              {/* Student photo */}
              <img
                src="/figma_images/29a52a24e51266edcd7d57d73392ee5fc4833220.png"
                alt="ByteSpace Student"
                className="f1-student-img"
              />

              {/* Learning Progress badge */}
              <div className="f1-badge f1-badge-progress">
                <div className="f1-badge-label">Learning Progress</div>
                <div className="f1-badge-pct">55%</div>
                <div className="f1-progress-track">
                  <div className="f1-progress-fill" style={{ width: '55%' }} />
                </div>
              </div>

              {/* Happy Students badge */}
              <div className="f1-badge f1-badge-students">
                <div className="f1-students-label">Happy Students</div>
                <div className="f1-avatars">
                  <img src="/figma_images/0577f0e9b7fca2f32639871454da0de95f951709.png" alt="" className="f1-avatar" />
                  <img src="/figma_images/63c4be83222c85e6c852819bc5d4b24a87a87fb6.png" alt="" className="f1-avatar" />
                  <img src="/figma_images/728c3b1d33fe647a46f9bf668322f8c1d94ed937.png" alt="" className="f1-avatar" />
                  <img src="/figma_images/853767f40f2b236e768652174f76aa081e7d5cf2.png" alt="" className="f1-avatar" />
                  <span className="f1-more">2K+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .features-wrapper {
          background: #FAFAFA;
          padding: 100px 0;
          position: relative;
          overflow: hidden;
        }
        .features-bg-decoration {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 0;
        }
        .features-glow {
          position: absolute;
          border-radius: 50%;
          filter: blur(20px);
        }
        .features-glow-lime {
          width: 672px;
          height: 672px;
          left: -287px;
          bottom: 0;
          background: radial-gradient(circle at 50% 50%, rgba(203, 252, 1, 0.6) 0%, rgba(203, 252, 1, 0.14) 53%, rgba(203, 252, 1, 0.04) 75%, rgba(203, 252, 1, 0) 100%);
        }
        .features-glow-blue {
          width: 500px;
          height: 500px;
          right: -100px;
          top: -100px;
          background: radial-gradient(circle at 50% 50%, rgba(0, 59, 226, 0.12) 0%, rgba(0, 59, 226, 0.02) 70%, rgba(0, 59, 226, 0) 100%);
        }
        .feature-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 63px;
          align-items: center;
          position: relative;
          z-index: 1;
        }
        .feature-grid-1 {
          margin-bottom: 100px;
        }
        .feature-text-col {
          display: flex;
          flex-direction: column;
          gap: 40px;
        }
        .feature-heading {
          font-family: var(--font-heading);
          font-size: 44px;
          font-weight: 600;
          color: #242528;
          line-height: 1.2;
          letter-spacing: -0.01em;
        }
        .feature-paragraph {
          font-family: var(--font-body);
          font-size: 18px;
          color: #4B4C53;
          line-height: 1.6;
          margin-top: -16px;
        }
        .stats-row {
          display: flex;
          align-items: flex-end;
          gap: 56px;
        }
        .stat-item {
          display: flex;
          flex-direction: column;
        }
        .stat-value {
          font-family: var(--font-heading);
          font-size: 36px;
          font-weight: 500;
          color: var(--primary-800);
          line-height: 44px;
          letter-spacing: -0.01em;
        }
        .stat-label {
          font-family: var(--font-body);
          font-size: 18px;
          color: #4B4C53;
          line-height: 1.6;
        }

        /* Feature 1 Right Visual */
        .feature-visual-col {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .feature1-visual {
          position: relative;
          width: 621px;
          height: 552px;
        }
        .f1-student-img {
          position: absolute;
          left: 0;
          top: 12px;
          width: 377px;
          height: 540px;
          object-fit: cover;
          border-radius: 16px;
          box-shadow: 0.52px 0.74px 3.04px 0px rgba(0,0,0,0.04), 2.23px 3.19px 5.72px 0px rgba(0,0,0,0.06), 5.38px 7.69px 9.57px 0px rgba(0,0,0,0.07), 10.21px 14.58px 16.09px 0px rgba(0,0,0,0.08);
        }
        .f1-course-card {
          position: absolute;
          right: 0;
          top: 0;
          width: 373px;
          background: #ffffff;
          border: 1px solid #CED0D3;
          border-radius: 24px;
          overflow: hidden;
          z-index: 2;
        }
        .f1-course-thumb {
          width: 100%;
          height: 195px;
          object-fit: cover;
          border-radius: 12px;
          display: block;
          margin: 16px;
          margin-bottom: 0;
          width: calc(100% - 32px);
        }
        .f1-course-info {
          padding: 16px;
        }
        .f1-course-title {
          font-family: var(--font-heading);
          font-size: 16px;
          font-weight: 600;
          color: #242528;
          margin-bottom: 8px;
        }
        .f1-course-meta {
          font-family: var(--font-body);
          font-size: 16px;
          font-weight: 600;
          color: var(--primary-800);
        }

        /* Learning Progress badge */
        .f1-badge {
          position: absolute;
          background: rgba(255,255,255,0.9);
          backdrop-filter: blur(10px);
          border-radius: 16px;
          padding: 16px;
          z-index: 4;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }
        .f1-badge-progress {
          right: 345px;
          top: 213px;
          min-width: 200px;
        }
        .f1-badge-label {
          font-family: var(--font-body);
          font-size: 14px;
          font-weight: 500;
          color: #242528;
          margin-bottom: 8px;
        }
        .f1-badge-pct {
          font-family: var(--font-heading);
          font-size: 48px;
          font-weight: 600;
          color: #242528;
          line-height: 1.2;
          letter-spacing: -0.01em;
          margin-bottom: 8px;
        }
        .f1-progress-track {
          width: 200px;
          height: 6px;
          background: #E5E6E8;
          border-radius: 24px;
          overflow: hidden;
        }
        .f1-progress-fill {
          height: 100%;
          background: var(--secondary-500);
          border-radius: 24px;
        }

        /* Happy Students badge */
        .f1-badge-students {
          right: 0;
          bottom: 41px;
          min-width: 258px;
          padding: 16px;
        }
        .f1-students-label {
          font-family: var(--font-body);
          font-size: 16px;
          font-weight: 500;
          color: #242528;
          margin-bottom: 8px;
        }
        .f1-avatars {
          display: flex;
          align-items: center;
          gap: -16px;
        }
        .f1-avatar {
          width: 43px;
          height: 43px;
          border-radius: 50%;
          border: 2px solid #fff;
          object-fit: cover;
          margin-left: -10px;
        }
        .f1-avatar:first-child { margin-left: 0; }
        .f1-more {
          margin-left: 4px;
          font-size: 12px;
          font-weight: 700;
          color: var(--neutral-950);
          background: var(--neutral-100);
          border-radius: 9999px;
          padding: 4px 8px;
        }

        @media (max-width: 1024px) {
          .feature1-visual {
            width: 100%;
            height: 420px;
          }
          .f1-student-img {
            width: 280px;
            height: auto;
          }
          .f1-course-card {
            width: 280px;
          }
        }
        @media (max-width: 900px) {
          .feature-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .feature-grid-1 {
            margin-bottom: 60px;
          }
          .feature-heading {
            font-size: 34px;
          }
          .feature1-visual {
            height: 380px;
          }
          .f1-badge-progress {
            right: 10px;
            top: auto;
            bottom: 120px;
          }
        }
      `}</style>
    </section>
  );
}
