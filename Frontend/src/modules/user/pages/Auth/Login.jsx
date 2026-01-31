import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { theme } from '../../../../shared/styles/theme.js';

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);

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
      <div className="absolute top-10 right-10 w-16 h-16 rounded-full opacity-10" 
           style={{ backgroundColor: theme.colors.primary }}></div>
      <div className="absolute bottom-20 left-10 w-12 h-12 rounded-full opacity-15" 
           style={{ backgroundColor: theme.colors.primary }}></div>
      <div className="absolute top-1/3 left-8 w-8 h-8 rounded-full opacity-8" 
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
              <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H9L3 7V9H21ZM12 10C8.13 10 5 13.13 5 17S8.13 24 12 24 19 20.87 19 17 15.87 10 12 10Z"/>
            </svg>
          </div>
          <h1 
            className="text-3xl font-bold mb-3"
            style={{ color: theme.colors.textPrimary }}
          >
            Welcome Back
          </h1>
          <p 
            className="text-base opacity-80 leading-relaxed"
            style={{ color: theme.colors.textSecondary }}
          >
            Sign in to continue planning your perfect wedding day
          </p>
        </div>

        {/* Login form card */}
        <div 
          className="p-8 shadow-xl mb-6 bg-white/95 backdrop-blur-sm border border-white/20"
          style={{ 
            borderRadius: theme.radius.xl
          }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email input with icon */}
            <div>
              <label 
                className="block text-sm font-semibold mb-3"
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
                  className="w-full pl-12 pr-4 py-4 border border-gray-200 focus:outline-none focus:ring-2 focus:border-transparent transition-all bg-white/80 text-base"
                  style={{ 
                    borderRadius: theme.radius.lg,
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
                className="block text-sm font-semibold mb-3"
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
                  placeholder="Enter your password"
                  className="w-full pl-12 pr-12 py-4 border border-gray-200 focus:outline-none focus:ring-2 focus:border-transparent transition-all bg-white/80 text-base"
                  style={{ 
                    borderRadius: theme.radius.lg,
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

            {/* Forgot password link */}
            <div className="text-right">
              <button 
                type="button"
                className="text-sm font-semibold hover:underline transition-all"
                style={{ color: theme.colors.primary }}
              >
                Forgot Password?
              </button>
            </div>

            {/* Login button - Large CTA */}
            <button
              type="submit"
              className="w-full py-4 px-6 text-white font-bold text-lg transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl hover:shadow-2xl"
              style={{ 
                background: `linear-gradient(135deg, ${theme.colors.primary} 0%, #E91E63 100%)`,
                borderRadius: theme.radius.lg,
                minHeight: '56px'
              }}
            >
              Sign In to Your Account
            </button>
          </form>
        </div>

        {/* Sign up link */}
        <div className="text-center">
          <p className="text-base" style={{ color: theme.colors.textSecondary }}>
            Don't have an account?{' '}
            <Link 
              to="/signup"
              className="font-bold hover:underline transition-all text-lg"
              style={{ color: theme.colors.primary }}
            >
              Create Account
            </Link>
          </p>
        </div>
      </div>

      {/* Bottom decorative elements */}
      <div className="flex justify-center space-x-6 mt-8 opacity-60 z-10">
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

        {/* Flower Icon */}
        <div className="w-10 h-10 rounded-full flex items-center justify-center shadow-sm" 
             style={{ backgroundColor: theme.colors.primary + '20' }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill={theme.colors.primary}>
            <path d="M12 22C17.5 22 22 17.5 22 12S17.5 2 12 2 2 6.5 2 12 6.5 22 12 22ZM12 20C7.6 20 4 16.4 4 12S7.6 4 12 4 20 7.6 20 12 16.4 20 12 20ZM12 6C9.8 6 8 7.8 8 10S9.8 14 12 14 16 12.2 16 10 14.2 6 12 6Z"/>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Login;