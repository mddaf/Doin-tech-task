import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function LoginPage({ onNavigate }) {
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
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 }
      });
      alert(`Welcome back! You have successfully signed in as ${email}.`);
      onNavigate('/');
    }, 800);
  };

  return (
    <div className="auth-page-wrapper bg-grid-blue">
      <div className="auth-container">
        {/* Left Column: Visual & Info */}
        <div className="auth-left-col">
          {/* Header Logo */}
          <a 
            href="/" 
            onClick={(e) => { e.preventDefault(); onNavigate('/'); }} 
            className="auth-brand-logo"
            id="auth-logo"
          >
            <img 
              src="/figma_svgs/1_1787.svg" 
              alt="ByteSpace" 
              className="logo-mark"
            />
            <span className="logo-text">ByteSpace</span>
          </a>

          {/* Headings */}
          <div className="auth-hero-text">
            <h1 className="auth-hero-title">Sign in with ease</h1>
            <p className="auth-hero-desc">
              Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.
            </p>
          </div>

          {/* Visual Collage from Figma */}
          <div className="auth-visual-collage">
            <img 
              src="/figma_graphics/15254_194.png" 
              alt="ByteSpace Courses collage"
              className="auth-collage-img"
            />
          </div>
        </div>

        {/* Right Column: White Auth Card */}
        <div className="auth-right-col">
          <div className="auth-card">
            <div className="auth-card-tag">Sign In</div>
            <h2 className="auth-card-title">Welcome Back</h2>

            <form className="auth-form" onSubmit={handleSubmit} id="login-form">
              <div className="form-group">
                <label className="form-label" htmlFor="login-email">Email</label>
                <input
                  type="email"
                  id="login-email"
                  placeholder="designer@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="login-password">Password</label>
                <div className="password-input-wrapper">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="login-password"
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
                  id="login-submit-btn"
                  disabled={isLoading}
                >
                  {isLoading ? 'Signing In...' : 'Sign In'}
                </button>
              </div>

              <div className="auth-divider">
                <span>or</span>
              </div>

              {/* Social Login */}
              <div className="social-auth-row">
                <button 
                  type="button" 
                  className="social-btn" 
                  aria-label="Sign in with Facebook"
                  onClick={() => alert('Social Facebook sign in triggered')}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </button>

                <button 
                  type="button" 
                  className="social-btn" 
                  aria-label="Sign in with Google"
                  onClick={() => alert('Social Google sign in triggered')}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"/>
                    <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.34 24 12 24z"/>
                    <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.97 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
                    <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
                  </svg>
                </button>
              </div>

              <div className="auth-footer-prompt">
                New user?{' '}
                <a 
                  href="/register" 
                  onClick={(e) => { e.preventDefault(); onNavigate('/register'); }}
                  className="auth-link"
                  id="link-to-register"
                >
                  Create an account
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
        .auth-divider {
          display: flex;
          align-items: center;
          text-align: center;
          margin: 16px 0;
          color: var(--neutral-400);
          font-size: 14px;
        }
        .auth-divider::before,
        .auth-divider::after {
          content: '';
          flex: 1;
          border-bottom: 1px solid var(--neutral-200);
        }
        .auth-divider span {
          padding: 0 14px;
        }
        .social-auth-row {
          display: flex;
          justify-content: center;
          gap: 16px;
          margin-bottom: 24px;
        }
        .social-btn {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          border: 1px solid var(--neutral-200);
          background: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--neutral-950);
          transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
        }
        .social-btn:hover {
          transform: translateY(-2px);
          border-color: var(--neutral-400);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.06);
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
