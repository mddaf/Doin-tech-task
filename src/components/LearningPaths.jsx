import React from 'react';
import { LEARNING_PATHS } from '../data/content';

export default function LearningPaths({ onSelectCategory }) {
  return (
    <section className="learning-paths-section" id="categories">
      <div className="container">
        <div className="section-header-centered">
          <h2 className="section-title">
            Explore Diverse Learning Paths at Bytespace
          </h2>
          <p className="section-desc">
            At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories.
          </p>
        </div>

        <div className="categories-grid">
          {LEARNING_PATHS.map((item) => (
            <div 
              key={item.id} 
              className="category-card"
              onClick={() => onSelectCategory && onSelectCategory(item.title)}
              id={`cat-card-${item.id}`}
            >
              <div className="category-icon-wrapper">
                <img 
                  src={item.iconUrl} 
                  alt={item.title} 
                  className="category-svg-icon"
                />
              </div>
              <h3 className="category-name">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .learning-paths-section {
          padding: 80px 0 100px;
          background-color: #ffffff;
        }
        .categories-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 20px;
          margin-top: 48px;
        }
        .category-card {
          background: #ffffff;
          border: 1px solid var(--neutral-100);
          border-radius: 20px;
          padding: 32px 16px 28px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          cursor: pointer;
          transition: transform 0.2s cubic-bezier(0.2, 0, 0, 1), box-shadow 0.2s ease, border-color 0.2s ease;
        }
        .category-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 32px rgba(0, 0, 0, 0.08);
          border-color: var(--secondary-500);
        }
        .category-icon-wrapper {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          box-shadow: 0 8px 18px rgba(0, 0, 0, 0.06);
          border: 1px solid var(--neutral-100);
          transition: transform 0.3s ease;
        }
        .category-card:hover .category-icon-wrapper {
          transform: scale(1.1);
        }
        .category-svg-icon {
          width: 48px;
          height: 48px;
          object-fit: contain;
        }
        .category-name {
          font-family: var(--font-heading);
          font-size: 16px;
          font-weight: 700;
          color: var(--neutral-950);
          line-height: 1.3;
          margin: 0;
        }

        @media (max-width: 1024px) {
          .categories-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 16px;
          }
        }
        @media (max-width: 640px) {
          .categories-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </section>
  );
}
