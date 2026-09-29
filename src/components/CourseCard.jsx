import React from 'react';
import { Star, BarChart2 } from 'lucide-react';

export default function CourseCard({ course, onSelectCourse }) {
  return (
    <div 
      className="course-card" 
      onClick={() => onSelectCourse && onSelectCourse(course)}
      id={`course-card-${course.id}`}
    >
      {/* Thumbnail with overlay badges */}
      <div className="card-thumbnail-wrapper">
        <img 
          src={course.thumbnail} 
          alt={course.title} 
          className="card-thumbnail"
          loading="lazy"
        />
        
        {/* Figma Badges on image */}
        <div className="card-pill-badges">
          <span className="pill-badge">{course.lessons} Lessons</span>
          <span className="pill-badge">{course.duration}</span>
          <span className="pill-badge">{course.comments} Comments</span>
        </div>
      </div>

      {/* Card Content */}
      <div className="card-content">
        <div className="card-header-row">
          <h3 className="course-title" title={course.fullTitle || course.title}>
            {course.title}
          </h3>
          <div className="course-rating">
            <span className="rating-num">{course.rating}</span>
            <Star size={15} fill="#ffb800" color="#ffb800" />
          </div>
        </div>

        <div className="course-instructor">
          by {course.instructor}
        </div>

        {/* Level and Enrolled Avatars */}
        <div className="course-meta-row">
          <div className="level-badge">
            <BarChart2 size={15} color="#666973" />
            <span>{course.level}</span>
          </div>

          <div className="enrolled-group">
            <img src="/figma_images/0577f0e9b7fca2f32639871454da0de95f951709.png" alt="Avatar" className="enroll-avatar" />
            <img src="/figma_images/63c4be83222c85e6c852819bc5d4b24a87a87fb6.png" alt="Avatar" className="enroll-avatar" />
            <img src="/figma_images/728c3b1d33fe647a46f9bf668322f8c1d94ed937.png" alt="Avatar" className="enroll-avatar" />
            <span className="enroll-more">{course.enrolledCount}</span>
          </div>
        </div>

        {/* Price & Action */}
        <div className="card-footer-row">
          <div className="course-price">
            <span className="price-amount">${course.price}</span>
            <span className="price-period">/lifetime</span>
          </div>
          <button 
            type="button" 
            className="card-action-btn"
            onClick={(e) => {
              e.stopPropagation();
              onSelectCourse && onSelectCourse(course);
            }}
          >
            Preview
          </button>
        </div>
      </div>

      <style>{`
        .course-card {
          background: #ffffff;
          border: 1px solid var(--neutral-100);
          border-radius: 20px;
          padding: 14px;
          display: flex;
          flex-direction: column;
          transition: transform 0.25s cubic-bezier(0.2, 0, 0, 1), box-shadow 0.25s ease, border-color 0.25s ease;
          cursor: pointer;
          position: relative;
        }
        .course-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
          border-color: var(--primary-300);
        }
        .card-thumbnail-wrapper {
          position: relative;
          width: 100%;
          height: 190px;
          border-radius: 14px;
          overflow: hidden;
          background: var(--neutral-100);
        }
        .card-thumbnail {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }
        .course-card:hover .card-thumbnail {
          transform: scale(1.04);
        }
        .card-pill-badges {
          position: absolute;
          bottom: 10px;
          left: 10px;
          right: 10px;
          display: flex;
          align-items: center;
          gap: 6px;
          flex-wrap: wrap;
        }
        .pill-badge {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(8px);
          padding: 3px 8px;
          border-radius: 9999px;
          font-size: 11px;
          font-weight: 600;
          color: var(--neutral-800);
          box-shadow: 0 2px 6px rgba(0,0,0,0.1);
        }
        .card-content {
          padding: 16px 6px 6px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        .card-header-row {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 12px;
        }
        .course-title {
          font-size: 17px;
          font-weight: 700;
          color: var(--neutral-950);
          line-height: 1.35;
          margin: 0;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .course-rating {
          display: flex;
          align-items: center;
          gap: 4px;
          flex-shrink: 0;
        }
        .rating-num {
          font-size: 14px;
          font-weight: 700;
          color: var(--neutral-900);
        }
        .course-instructor {
          font-size: 13px;
          color: var(--primary-600);
          font-weight: 500;
          margin-top: 4px;
          margin-bottom: 16px;
        }
        .course-meta-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 14px;
          border-bottom: 1px solid var(--neutral-100);
          margin-bottom: 14px;
        }
        .level-badge {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          color: var(--neutral-600);
          font-weight: 500;
        }
        .enrolled-group {
          display: flex;
          align-items: center;
        }
        .enroll-avatar {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          border: 1.5px solid #ffffff;
          margin-left: -6px;
          object-fit: cover;
        }
        .enroll-avatar:first-child {
          margin-left: 0;
        }
        .enroll-more {
          margin-left: -4px;
          background: var(--secondary-500);
          color: var(--neutral-950);
          font-size: 10px;
          font-weight: 700;
          padding: 2px 5px;
          border-radius: 9999px;
          border: 1.5px solid #ffffff;
        }
        .card-footer-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: auto;
        }
        .course-price {
          display: flex;
          align-items: baseline;
          gap: 2px;
        }
        .price-amount {
          font-family: var(--font-heading);
          font-size: 20px;
          font-weight: 700;
          color: var(--primary-600);
        }
        .price-period {
          font-size: 12px;
          color: var(--neutral-500);
        }
        .card-action-btn {
          font-size: 13px;
          font-weight: 600;
          color: var(--neutral-700);
          background: var(--neutral-50);
          padding: 6px 14px;
          border-radius: 9999px;
          border: 1px solid var(--neutral-200);
          transition: all 0.2s ease;
        }
        .card-action-btn:hover {
          background: var(--secondary-500);
          color: var(--neutral-950);
          border-color: var(--secondary-500);
        }
      `}</style>
    </div>
  );
}
