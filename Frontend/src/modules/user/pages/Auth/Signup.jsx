import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { theme } from '../../../../shared/styles/theme.js';

function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Navigate to home for now (no backend logic)
    navigate('/home');
  };

  return (
    <div 
      className="min-h-screen flex flex-col px-6 py-8 relative overflow-hidden"
      style={{ 
        background: `linear-gradient(135deg, ${theme.colors.background} 0%, #FFF0F5 50%, ${theme.colors.secondary} 100%)`
      }}
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-10 left-10 w-16 h-16 rounded-full opacity-10" 
           style={{ backgroundColor: theme.colors.primary }}></div>
      <div className="absolute bottom-20 right-10 w-12 h-12 rounded-full opacity-15" 
           style={{ backgroundColor: theme.colors.primary }}></div>
      <div className="absolute top-1/2 right-8 w-8 h-8 rounded-full opacity-8" 
           style={{ backgroundColor: theme.colors.primary }}></div>

      {/* Header with back navigation */}
      <div className="flex items-center mb-8 z-10">
        <button 
          onClick={() => navigate('/')}
          className="p-3 rounded-full transition-all hover:scale-105 bg-white/80 backdrop-blur-sm shadow-sm"
        >
          <svg className="w-6 h-6" style={{ color: theme.colors.textPrimary }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col justify-center max-w-sm mx-auto w-full z-10">
        {/* Welcome illustration */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center shadow-lg"
               style={{ 
                 background: `linear-gradient(135deg, ${theme.colors.secondary} 0%, #FFF0F5 100%)`,
                 border: `2px solid ${theme.colors.primary}20`
               }}>
            <svg className="w-10 h-10" viewBox="0 0 24 24" fill={theme.colors.primary}>
              <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z"/>
            </svg>
          </div>
          <h1 
            className="text-3xl font-bold mb-3"
            style={{ color: theme.colors.textPrimary }}
          >
            Create Account
          </h1>
          <p 
            className="text-base opacity-80 leading-relaxed"
            style={{ color: theme.colors.textSecondary }}
          >
            Join us and start planning your dream wedding
          </p>
        </div>

        {/* Signup form card */}
        <div 
          className="p-8 shadow-xl mb-6 bg-white/95 backdrop-blur-sm border border-white/20"
          style={{ 
            borderRadius: theme.radius.xl
          }}
        >
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name inputs row */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label 
                  className="block text-sm font-semibold mb-2"
                  style={{ color: theme.colors.textPrimary }}
                >
                  First Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="w-4 h-4" style={{ color: theme.colors.textSecondary }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="First name"
                    className="w-full pl-10 pr-3 py-3 border border-gray-200 focus:outline-none focus:ring-2 focus:border-transparent transition-all bg-white/80 text-sm"
                    style={{ 
                      borderRadius: theme.radius.md,
                      focusRingColor: theme.colors.primary + '40',
                      minHeight: '48px'
                    }}
                    required
                  />
                </div>
              </div>
              <div>
                <label 
                  className="block text-sm font-semibold mb-2"
                  style={{ color: theme.colors.textPrimary }}
                >
                  Last Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="w-4 h-4" style={{ color: theme.colors.textSecondary }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Last name"
                    className="w-full pl-10 pr-3 py-3 border border-gray-200 focus:outline-none focus:ring-2 focus:border-transparent transition-all bg-white/80 text-sm"
                    style={{ 
                      borderRadius: theme.radius.md,
                      focusRingColor: theme.colors.primary + '40',
                      minHeight: '48px'
                    }}
                    required
                  />
                </div>
              </div>
            </div>

            {/* Email input with icon */}
            <div>
              <label 
                className="block text-sm font-semibold mb-2"
                style={{ color: theme.colors.textPrimary }}
              >
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg className="w-5 h-5" style={{ color: theme.colors.textSecondary }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                  </svg>
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email address"
                  className="w-full pl-12 pr-4 py-4 border border-gray-200 focus:outline-none focus:ring-2 focus:border-transparent transition-all bg-white/80"
                  style={{ 
                    borderRadius: theme.radius.md,
                    focusRingColor: theme.colors.primary + '40',
                    minHeight: '56px'
                  }}
                  required
                />
              </div>
            </div>

            {/* Password input with icon */}
            <div>
              <label 
                className="block text-sm font-semibold mb-2"
                style={{ color: theme.colors.textPrimary }}
              >
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg className="w-5 h-5" style={{ color: theme.colors.textSecondary }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Create a password"
                  className="w-full pl-12 pr-12 py-4 border border-gray-200 focus:outline-none focus:ring-2 focus:border-transparent transition-all bg-white/80"
                  style={{ 
                    borderRadius: theme.radius.md,
                    focusRingColor: theme.colors.primary + '40',
                    minHeight: '56px'
                  }}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center"
                >
                  <svg className="w-5 h-5" style={{ color: theme.colors.textSecondary }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {showPassword ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    )}
                  </svg>
                </button>
              </div>
            </div>

            {/* Confirm Password input with icon */}
            <div>
              <label 
                className="block text-sm font-semibold mb-2"
                style={{ color: theme.colors.textPrimary }}
              >
                Confirm Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg className="w-5 h-5" style={{ color: theme.colors.textSecondary }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  placeholder="Confirm your password"
                  className="w-full pl-12 pr-12 py-4 border border-gray-200 focus:outline-none focus:ring-2 focus:border-transparent transition-all bg-white/80"
                  style={{ 
                    borderRadius: theme.radius.md,
                    focusRingColor: theme.colors.primary + '40',
                    minHeight: '56px'
                  }}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center"
                >
                  <svg className="w-5 h-5" style={{ color: theme.colors.textSecondary }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {showConfirmPassword ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    )}
                  </svg>
                </button>
              </div>
            </div>

            {/* Terms and conditions */}
            <div className="flex items-start space-x-3 py-2">
              <input
                type="checkbox"
                id="terms"
                className="mt-1 w-4 h-4 rounded"
                style={{ accentColor: theme.colors.primary }}
                required
              />
              <label 
                htmlFor="terms"
                className="text-sm leading-relaxed"
                style={{ color: theme.colors.textSecondary }}
              >
                I agree to the{' '}
                <button 
                  type="button"
                  className="font-semibold hover:underline transition-all"
                  style={{ color: theme.colors.primary }}
                >
                  Terms of Service
                </button>
                {' '}and{' '}
                <button 
                  type="button"
                  className="font-semibold hover:underline transition-all"
                  style={{ color: theme.colors.primary }}
                >
                  Privacy Policy
                </button>
              </label>
            </div>

            {/* Signup button - Large CTA */}
            <button
              type="submit"
              className="w-full py-4 px-6 text-white font-bold text-lg transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl hover:shadow-2xl"
              style={{ 
                background: `linear-gradient(135deg, ${theme.colors.primary} 0%, #E91E63 100%)`,
                borderRadius: theme.radius.lg,
                minHeight: '56px'
              }}
            >
              Create Your Account
            </button>
          </form>
        </div>

        {/* Login link */}
        <div className="text-center">
          <p className="text-base" style={{ color: theme.colors.textSecondary }}>
            Already have an account?{' '}
            <Link 
              to="/login"
              className="font-bold hover:underline transition-all text-lg"
              style={{ color: theme.colors.primary }}
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>

      {/* Bottom decorative elements */}
      <div className="flex justify-center space-x-6 mt-8 opacity-60 z-10">
        {/* Celebration Icon */}
        <div className="w-10 h-10 rounded-full flex items-center justify-center shadow-sm" 
             style={{ backgroundColor: theme.colors.primary + '20' }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill={theme.colors.primary}>
            <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z"/>
          </svg>
        </div>

        {/* Wedding Ring Icon */}
        <div className="w-10 h-10 rounded-full flex items-center justify-center shadow-sm" 
             style={{ backgroundColor: theme.colors.primary + '20' }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill={theme.colors.primary}>
            <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H9L3 7V9H21ZM12 10C8.13 10 5 13.13 5 17S8.13 24 12 24 19 20.87 19 17 15.87 10 12 10Z"/>
          </svg>
        </div>

        {/* Heart Icon */}
        <div className="w-10 h-10 rounded-full flex items-center justify-center shadow-sm" 
             style={{ backgroundColor: theme.colors.primary + '20' }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill={theme.colors.primary}>
            <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z"/>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Signup;