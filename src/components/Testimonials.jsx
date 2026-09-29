import React from 'react';
import { TESTIMONIALS } from '../data/content';

export default function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="container">
        {/* Header with two columns */}
        <div className="testimonials-header-grid">
          <h2 className="testimonials-title">
            Discover What Our <br /> Community Is Saying
          </h2>
          <p className="testimonials-header-desc">
            At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>

        {/* 3 Testimonial Cards */}
        <div className="testimonials-cards-grid">
          {TESTIMONIALS.map((item) => (
            <div key={item.id} className="testimonial-card">
              <div className="testimonial-author">
                <img 
                  src={item.avatar} 
                  alt={item.name} 
                  className="author-avatar"
                />
                <div className="author-info">
                  <h3 className="author-name">{item.name}</h3>
                  <span className="author-role">{item.role}</span>
                </div>
              </div>
              <p className="testimonial-quote">
                "{item.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .testimonials-section {
          padding: 100px 0 120px;
          background: linear-gradient(180deg, #ffffff 0%, #f7fff0 60%, #ffffff 100%);
          position: relative;
        }
        .testimonials-header-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: center;
          margin-bottom: 60px;
        }
        .testimonials-title {
          font-size: 44px;
          font-weight: 700;
          color: var(--neutral-950);
          line-height: 1.2;
          letter-spacing: -0.8px;
        }
        .testimonials-header-desc {
          font-size: 16px;
          color: var(--neutral-600);
          line-height: 1.7;
        }
        .testimonials-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
        }
        .testimonial-card {
          background: #ffffff;
          border-radius: 24px;
          padding: 36px 30px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
          border: 1px solid var(--neutral-100);
          display: flex;
          flex-direction: column;
          gap: 24px;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .testimonial-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
          border-color: var(--secondary-500);
        }
        .testimonial-author {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .author-avatar {
          width: 54px;
          height: 54px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid var(--neutral-100);
        }
        .author-info {
          display: flex;
          flex-direction: column;
        }
        .author-name {
          font-family: var(--font-heading);
          font-size: 18px;
          font-weight: 700;
          color: var(--neutral-950);
          line-height: 1.2;
        }
        .author-role {
          font-size: 14px;
          font-weight: 600;
          color: var(--primary-600);
          margin-top: 4px;
        }
        .testimonial-quote {
          font-size: 15px;
          color: var(--neutral-700);
          line-height: 1.7;
          font-style: italic;
        }

        @media (max-width: 900px) {
          .testimonials-header-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          .testimonials-cards-grid {
            grid-template-columns: 1fr;
          }
          .testimonials-title {
            font-size: 34px;
          }
        }
      `}</style>
    </section>
  );
}
