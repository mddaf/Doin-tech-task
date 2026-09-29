import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function RegisterPage({ onNavigate }) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 }
      });
      alert(`Welcome to ByteSpace, ${fullName}! Your account has been created.`);
      onNavigate('/');
    }, 800);
  };

  return (
    <div className="auth-page-wrapper bg-grid-blue">
      <div className="auth-container">
        {/* Left Column: Visual & Info */}
        <div className="auth-left-col">
          <a 
            href="/" 
            onClick={(e) => { e.preventDefault(); onNavigate('/'); }} 
            className="auth-brand-logo"
            id="register-auth-logo"
          >
            <img 
              src="/figma_svgs/1_1787.svg" 
              alt="ByteSpace" 
              className="logo-mark"
            />
            <span className="logo-text">ByteSpace</span>
          </a>

          <div className="auth-hero-text">
            <h1 className="auth-hero-title">Sign up and come in</h1>
            <p className="auth-hero-desc">
              The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost
            </p>
          </div>

          <div className="auth-visual-collage">
            <img 
              src="/figma_graphics/15254_194.png" 
              alt="ByteSpace Courses collage"
              className="auth-collage-img"
            />
          </div>
        </div>

        {/* Right Column: White Registration Card */}
        <div className="auth-right-col">
          <div className="auth-card">
            <div className="auth-card-tag">Create an Account</div>
            <h2 className="auth-card-title">Welcome to ByteSpace</h2>

            <form className="auth-form" onSubmit={handleSubmit} id="register-form">
              <div className="form-group">
                <label className="form-label" htmlFor="register-name">Full Name</label>
                <input
                  type="text"
                  id="register-name"
                  placeholder="Jamie Davis"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="register-email">Email</label>
                <input
                  type="email"
                  id="register-email"
                  placeholder="designer@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="register-password">Password</label>
                <div className="password-input-wrapper">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="register-password"
                    placeholder="********"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="form-input"
                  />
                  <button
                    type="button"
                    className="toggle-password-btn"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label="Toggle password visibility"
                  >
                    {showPassword ? <EyeOff size={18} color="#82868e" /> : <Eye size={18} color="#82868e" />}
                  </button>
                </div>
              </div>

              <div className="auth-btn-row">
                <button 
                  type="submit" 
                  className="btn btn-lime auth-submit-btn" 
                  id="register-submit-btn"
                  disabled={isLoading}
                >
                  {isLoading ? 'Creating Account...' : 'Continue'}
                </button>
              </div>

              <div className="auth-footer-prompt" style={{ marginTop: '20px' }}>
                Already have an account?{' '}
                <a 
                  href="/login" 
                  onClick={(e) => { e.preventDefault(); onNavigate('/login'); }}
                  className="auth-link"
                  id="link-to-login"
                >
                  Login
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        .auth-page-wrapper {
          min-height: 100vh;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px 24px;
        }
        .auth-container {
          width: 100%;
          max-width: 1240px;
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 60px;
          align-items: center;
        }
        .auth-left-col {
          display: flex;
          flex-direction: column;
          color: #ffffff;
        }
        .auth-brand-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 40px;
          text-decoration: none;
        }
        .auth-brand-logo .logo-mark {
          height: 34px;
          width: auto;
        }
        .auth-brand-logo .logo-text {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 26px;
          color: #ffffff;
        }
        .auth-hero-title {
          font-size: 42px;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.2;
          margin-bottom: 14px;
          letter-spacing: -0.8px;
        }
        .auth-hero-desc {
          font-size: 16px;
          color: rgba(255, 255, 255, 0.85);
          line-height: 1.6;
          max-width: 460px;
          margin-bottom: 40px;
        }
        .auth-visual-collage {
          width: 100%;
          max-width: 480px;
        }
        .auth-collage-img {
          width: 100%;
          height: auto;
          object-fit: contain;
          filter: drop-shadow(0 20px 35px rgba(0, 0, 0, 0.25));
        }

        /* Right Card */
        .auth-right-col {
          display: flex;
          justify-content: center;
        }
        .auth-card {
          background: #ffffff;
          border-radius: 36px;
          padding: 50px 44px;
          width: 100%;
          max-width: 460px;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.25);
        }
        .auth-card-tag {
          font-size: 14px;
          font-weight: 600;
          color: var(--primary-600);
          margin-bottom: 8px;
        }
        .auth-card-title {
          font-size: 36px;
          font-weight: 700;
          color: var(--neutral-950);
          line-height: 1.2;
          margin-bottom: 32px;
          letter-spacing: -0.5px;
        }
        .auth-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .form-label {
          font-size: 14px;
          font-weight: 600;
          color: var(--neutral-800);
        }
        .form-input {
          width: 100%;
          padding: 14px 18px;
          border-radius: 12px;
          border: 1px solid var(--neutral-200);
          background: #ffffff;
          font-size: 15px;
          color: var(--neutral-950);
          outline: none;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }
        .form-input:focus {
          border-color: var(--primary-500);
          box-shadow: 0 0 0 3px rgba(4, 69, 255, 0.1);
        }
        .form-input::placeholder {
          color: var(--neutral-400);
        }
        .password-input-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }
        .toggle-password-btn {
          position: absolute;
          right: 14px;
          background: transparent;
          display: flex;
          align-items: center;
        }
        .auth-btn-row {
          display: flex;
          justify-content: flex-end;
          margin-top: 10px;
        }
        .auth-submit-btn {
          padding: 12px 32px;
          font-size: 15px;
        }
        .auth-footer-prompt {
          text-align: center;
          font-size: 14px;
          color: var(--neutral-600);
        }
        .auth-link {
          color: var(--primary-600);
          font-weight: 600;
          margin-left: 4px;
        }
        .auth-link:hover {
          text-decoration: underline;
        }

        @media (max-width: 992px) {
          .auth-container {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .auth-left-col {
            align-items: center;
            text-align: center;
          }
          .auth-visual-collage {
            display: none;
          }
        }
        @media (max-width: 480px) {
          .auth-card {
            padding: 36px 24px;
            border-radius: 24px;
          }
          .auth-card-title {
            font-size: 28px;
          }
        }
      `}</style>
    </div>
  );
}
