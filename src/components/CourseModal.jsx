import React from 'react';
import { X, Star, BarChart2, Clock, BookOpen, MessageSquare, Check } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function CourseModal({ course, onClose, onEnroll }) {
  if (!course) return null;

  const handleEnroll = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
    if (onEnroll) onEnroll(course);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        <div className="modal-media-wrapper">
          <img src={course.thumbnail} alt={course.title} className="modal-thumbnail" />
        </div>

        <div className="modal-body">
          <div className="modal-category-tag">{course.category}</div>
          <h2 className="modal-title">{course.fullTitle || course.title}</h2>
          <p className="modal-instructor">Created by <strong>{course.instructor}</strong></p>

          <p className="modal-description">{course.description}</p>

          <div className="modal-stats-grid">
            <div className="modal-stat-box">
              <BookOpen size={18} color="var(--primary-600)" />
              <span>{course.lessons} Lessons</span>
            </div>
            <div className="modal-stat-box">
              <Clock size={18} color="var(--primary-600)" />
              <span>{course.duration}</span>
            </div>
            <div className="modal-stat-box">
              <BarChart2 size={18} color="var(--primary-600)" />
              <span>{course.level}</span>
            </div>
            <div className="modal-stat-box">
              <Star size={18} fill="#ffb800" color="#ffb800" />
              <span>{course.rating} ({course.reviewsCount} reviews)</span>
            </div>
          </div>

          <div className="modal-curriculum">
            <h4 className="curriculum-title">What you'll learn</h4>
            <ul className="curriculum-list">
              <li><Check size={16} color="#10b981" /> Practical step-by-step masterclass with real world projects</li>
              <li><Check size={16} color="#10b981" /> Reusable design system templates and downloadable assets</li>
              <li><Check size={16} color="#10b981" /> Certificate of completion and lifetime community access</li>
            </ul>
          </div>

          <div className="modal-footer-row">
            <div className="modal-price">
              <span className="price-big">${course.price}</span>
              <span className="price-sub">Lifetime Access</span>
            </div>
            <button type="button" className="btn btn-lime modal-enroll-btn" onClick={handleEnroll}>
              Enroll Now
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .modal-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.65);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 20px;
        }
        .modal-card {
          background: #ffffff;
          border-radius: 28px;
          max-width: 640px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.3);
          animation: modalPop 0.25s ease-out;
        }
        @keyframes modalPop {
          from {
            opacity: 0;
            transform: scale(0.94);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .modal-close-btn {
          position: absolute;
          top: 18px;
          right: 18px;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.4);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
          transition: background 0.2s ease;
        }
        .modal-close-btn:hover {
          background: rgba(0, 0, 0, 0.7);
        }
        .modal-media-wrapper {
          width: 100%;
          height: 240px;
          background: var(--neutral-100);
          overflow: hidden;
        }
        .modal-thumbnail {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .modal-body {
          padding: 32px;
        }
        .modal-category-tag {
          display: inline-block;
          font-size: 12px;
          font-weight: 700;
          color: var(--primary-600);
          background: var(--primary-50);
          padding: 4px 12px;
          border-radius: 9999px;
          margin-bottom: 12px;
        }
        .modal-title {
          font-size: 26px;
          font-weight: 700;
          color: var(--neutral-950);
          line-height: 1.25;
          margin-bottom: 6px;
        }
        .modal-instructor {
          font-size: 14px;
          color: var(--neutral-600);
          margin-bottom: 20px;
        }
        .modal-description {
          font-size: 15px;
          color: var(--neutral-700);
          line-height: 1.6;
          margin-bottom: 24px;
        }
        .modal-stats-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
          margin-bottom: 28px;
        }
        .modal-stat-box {
          display: flex;
          align-items: center;
          gap: 10px;
          background: var(--neutral-50);
          padding: 10px 14px;
          border-radius: 12px;
          font-size: 13px;
          font-weight: 600;
          color: var(--neutral-800);
        }
        .modal-curriculum {
          border-top: 1px solid var(--neutral-100);
          padding-top: 20px;
          margin-bottom: 28px;
        }
        .curriculum-title {
          font-size: 15px;
          font-weight: 700;
          color: var(--neutral-950);
          margin-bottom: 12px;
        }
        .curriculum-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .curriculum-list li {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          color: var(--neutral-700);
        }
        .modal-footer-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 20px;
          border-top: 1px solid var(--neutral-100);
        }
        .modal-price {
          display: flex;
          flex-direction: column;
        }
        .price-big {
          font-family: var(--font-heading);
          font-size: 32px;
          font-weight: 700;
          color: var(--primary-600);
          line-height: 1;
        }
        .price-sub {
          font-size: 12px;
          color: var(--neutral-500);
          margin-top: 4px;
        }
        .modal-enroll-btn {
          padding: 14px 36px;
          font-size: 16px;
        }
      `}</style>
    </div>
  );
}
