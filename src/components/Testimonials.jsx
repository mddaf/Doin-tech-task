import React from 'react';
import { TESTIMONIALS } from '../data/content';

export default function Testimonials() {
  return (
    <section className="testimonials-section" id="testimonials">
      {/* Background glow decorations */}
      <div className="t-glow t-glow-top-right" />
      <div className="t-glow t-glow-top-mid" />
      <div className="t-glow t-glow-left" />

      <div className="container">
        {/* Header row: Title left | Description right */}
        <div className="testimonials-header-row">
          <h2 className="testimonials-title">
            Discover What Our<br />Community Is Saying
          </h2>
          <p className="testimonials-header-desc">
            At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>

        {/* 3 testimonial cards in a row */}
        <div className="testimonials-cards-row">
          {TESTIMONIALS.map((item) => (
            <div key={item.id} className="testimonial-card">
              {/* Avatar */}
              <img
                src={item.avatar}
                alt={item.name}
                className="t-avatar"
              />

              {/* Name + Role */}
              <div className="t-author-info">
                <h3 className="t-author-name">{item.name}</h3>
                <span className="t-author-role">{item.role}</span>
              </div>

              {/* Quote */}
              <p className="t-quote">
                &ldquo;{item.quote}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .testimonials-section {
          background: #FAFAFA;
          padding: 80px 0 100px;
          position: relative;
          overflow: hidden;
        }
        /* Glow decorations */
        .t-glow {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
        }
        .t-glow-top-right {
          width: 1137px;
          height: 1137px;
          right: -442px;
          top: -241px;
          background: radial-gradient(circle at 50% 50%, rgba(203, 252, 1, 0.4) 0%, rgba(203, 252, 1, 0.09) 53%, rgba(203, 252, 1, 0.02) 75%, rgba(203, 252, 1, 0) 100%);
          filter: blur(20px);
        }
        .t-glow-top-mid {
          width: 672px;
          height: 672px;
          left: 395px;
          top: -138px;
          background: radial-gradient(circle at 50% 50%, rgba(203, 252, 1, 0.6) 0%, rgba(203, 252, 1, 0.14) 53%, rgba(203, 252, 1, 0.04) 75%, rgba(203, 252, 1, 0) 100%);
          filter: blur(20px);
        }
        .t-glow-left {
          width: 1137px;
          height: 1137px;
          left: -442px;
          bottom: -500px;
          background: radial-gradient(circle at 50% 50%, rgba(0, 59, 226, 0.24) 0%, rgba(0, 59, 226, 0.06) 53%, rgba(0, 59, 226, 0.01) 75%, rgba(0, 59, 226, 0) 100%);
          filter: blur(20px);
        }

        /* Header */
        .testimonials-header-row {
          display: flex;
          flex-direction: row;
          align-items: flex-end;
          gap: 43px;
          margin-bottom: 72px;
          position: relative;
          z-index: 1;
        }
        .testimonials-title {
          font-family: var(--font-heading);
          font-size: 44px;
          font-weight: 600;
          color: #000000;
          line-height: 1.2;
          letter-spacing: -0.01em;
          flex-shrink: 0;
          min-width: 400px;
          max-width: 577px;
        }
        .testimonials-header-desc {
          font-family: var(--font-body);
          font-size: 18px;
          color: #4F4F4F;
          line-height: 1.6;
          max-width: 580px;
        }

        /* Cards */
        .testimonials-cards-row {
          display: flex;
          flex-direction: row;
          gap: 41px;
          position: relative;
          z-index: 1;
        }
        .testimonial-card {
          flex: 1;
          background: #ffffff;
          border-radius: 24px;
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 24px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .testimonial-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.08);
        }
        .t-avatar {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          object-fit: cover;
          flex-shrink: 0;
        }
        .t-author-info {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .t-author-name {
          font-family: var(--font-heading);
          font-size: 20px;
          font-weight: 600;
          color: #000000;
          line-height: 1.2;
          letter-spacing: -0.01em;
        }
        .t-author-role {
          font-family: var(--font-body);
          font-size: 18px;
          font-weight: 400;
          color: var(--primary-800);
          line-height: 1.6;
        }
        .t-quote {
          font-family: var(--font-body);
          font-size: 18px;
          font-weight: 400;
          color: #4F4F4F;
          line-height: 1.6;
          max-width: 326px;
        }

        @media (max-width: 1024px) {
          .testimonials-header-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 24px;
          }
          .testimonials-title {
            min-width: unset;
            font-size: 36px;
          }
        }
        @media (max-width: 900px) {
          .testimonials-cards-row {
            flex-direction: column;
          }
          .testimonial-card {
            max-width: 500px;
          }
        }
      `}</style>
    </section>
  );
}
