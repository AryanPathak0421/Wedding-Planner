import { useNavigate, Link } from 'react-router-dom';
import { theme } from '../../../../shared/styles/theme.js';

function Welcome() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/home');
  };

  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center px-6 py-8 relative overflow-hidden"
      style={{ 
        background: `linear-gradient(135deg, ${theme.colors.background} 0%, #FFF0F5 50%, ${theme.colors.secondary} 100%)`
      }}
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 rounded-full opacity-20" 
           style={{ backgroundColor: theme.colors.primary }}></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 rounded-full opacity-15" 
           style={{ backgroundColor: theme.colors.primary }}></div>
      <div className="absolute top-1/3 right-8 w-12 h-12 rounded-full opacity-10" 
           style={{ backgroundColor: theme.colors.primary }}></div>

      {/* Wedding Illustration */}
      <div className="mb-12 relative">
        {/* Main Illustration Container */}
        <div className="w-80 h-80 relative flex items-center justify-center">
          {/* Wedding Couple Silhouette */}
          <div className="relative">
            {/* Bride */}
            <div className="absolute left-0 top-0">
              <svg width="120" height="200" viewBox="0 0 120 200" fill="none">
                {/* Bride Dress */}
                <path d="M60 80 L40 200 L80 200 Z" fill={theme.colors.primary} opacity="0.8"/>
                {/* Bride Body */}
                <rect x="50" y="40" width="20" height="40" rx="10" fill={theme.colors.primary} opacity="0.9"/>
                {/* Bride Head */}
                <circle cx="60" cy="25" r="15" fill={theme.colors.primary} opacity="0.9"/>
                {/* Veil */}
                <path d="M45 15 Q60 5 75 15 L75 60 Q60 50 45 60 Z" fill="white" opacity="0.7"/>
              </svg>
            </div>
            
            {/* Groom */}
            <div className="absolute left-16 top-0">
              <svg width="120" height="200" viewBox="0 0 120 200" fill="none">
                {/* Groom Suit */}
                <rect x="50" y="40" width="20" height="160" rx="5" fill="#2D3748" opacity="0.8"/>
                {/* Groom Body */}
                <rect x="50" y="40" width="20" height="40" rx="10" fill="#2D3748" opacity="0.9"/>
                {/* Groom Head */}
                <circle cx="60" cy="25" r="15" fill="#2D3748" opacity="0.9"/>
              </svg>
            </div>
          </div>

          {/* Floating Hearts */}
          <div className="absolute top-10 left-20 animate-bounce">
            <svg width="20" height="18" viewBox="0 0 20 18" fill={theme.colors.primary} opacity="0.6">
              <path d="M10 17.5L8.5 16.1C3.4 11.4 0 8.4 0 4.5C0 2 2 0 4.5 0C5.9 0 7.3 0.7 8 1.8C8.7 0.7 10.1 0 11.5 0C14 0 16 2 16 4.5C16 8.4 12.6 11.4 7.5 16.1L6 17.5H10Z"/>
            </svg>
          </div>
          
          <div className="absolute top-16 right-16 animate-pulse">
            <svg width="16" height="14" viewBox="0 0 20 18" fill={theme.colors.primary} opacity="0.4">
              <path d="M10 17.5L8.5 16.1C3.4 11.4 0 8.4 0 4.5C0 2 2 0 4.5 0C5.9 0 7.3 0.7 8 1.8C8.7 0.7 10.1 0 11.5 0C14 0 16 2 16 4.5C16 8.4 12.6 11.4 7.5 16.1L6 17.5H10Z"/>
            </svg>
          </div>

          <div className="absolute bottom-20 left-10 animate-bounce" style={{ animationDelay: '1s' }}>
            <svg width="18" height="16" viewBox="0 0 20 18" fill={theme.colors.primary} opacity="0.5">
              <path d="M10 17.5L8.5 16.1C3.4 11.4 0 8.4 0 4.5C0 2 2 0 4.5 0C5.9 0 7.3 0.7 8 1.8C8.7 0.7 10.1 0 11.5 0C14 0 16 2 16 4.5C16 8.4 12.6 11.4 7.5 16.1L6 17.5H10Z"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="text-center mb-12 max-w-sm z-10">
        <h1 
          className="text-3xl sm:text-4xl font-bold mb-4 leading-tight"
          style={{ color: theme.colors.textPrimary }}
        >
          Plan Your Perfect Wedding
        </h1>
        <p 
          className="text-lg leading-relaxed opacity-80"
          style={{ color: theme.colors.textSecondary }}
        >
          From vendors to venues, manage every detail of your special day with elegance and ease
        </p>
      </div>

      {/* CTA Buttons */}
      <div className="w-full max-w-sm space-y-4 mb-8 z-10">
        {/* Primary CTA - Get Started */}
        <button
          onClick={handleGetStarted}
          className="w-full py-4 px-8 text-lg font-semibold text-white rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
          style={{ 
            background: `linear-gradient(135deg, ${theme.colors.primary} 0%, #E91E63 100%)`,
            borderRadius: theme.radius.xl
          }}
        >
          Get Started
        </button>

        {/* Secondary CTA - Sign In */}
        <Link
          to="/login"
          className="block w-full py-4 px-8 text-lg font-semibold text-center border-2 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 bg-white/80 backdrop-blur-sm"
          style={{ 
            color: theme.colors.primary,
            borderColor: theme.colors.primary,
            borderRadius: theme.radius.xl
          }}
        >
          Sign In
        </Link>
      </div>

      {/* Sign up link */}
      <div className="text-center mb-8 z-10">
        <p style={{ color: theme.colors.textSecondary }}>
          New to Wedding Planner?{' '}
          <Link 
            to="/signup"
            className="font-semibold hover:underline transition-all"
            style={{ color: theme.colors.primary }}
          >
            Create Account
          </Link>
        </p>
      </div>

      {/* Decorative Elements at Bottom */}
      <div className="flex space-x-6 opacity-60 z-10">
        {/* Wedding Ring Icon */}
        <div className="w-8 h-8 rounded-full flex items-center justify-center" 
             style={{ backgroundColor: theme.colors.primary + '20' }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill={theme.colors.primary}>
            <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H9L3 7V9H21ZM12 10C8.13 10 5 13.13 5 17S8.13 24 12 24 19 20.87 19 17 15.87 10 12 10ZM12 22C9.24 22 7 19.76 7 17S9.24 12 12 12 17 14.24 17 17 14.76 22 12 22Z"/>
          </svg>
        </div>

        {/* Flower Icon */}
        <div className="w-8 h-8 rounded-full flex items-center justify-center" 
             style={{ backgroundColor: theme.colors.primary + '20' }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill={theme.colors.primary}>
            <path d="M12 22C17.5 22 22 17.5 22 12S17.5 2 12 2 2 6.5 2 12 6.5 22 12 22ZM12 20C7.6 20 4 16.4 4 12S7.6 4 12 4 20 7.6 20 12 16.4 20 12 20ZM12 6C9.8 6 8 7.8 8 10S9.8 14 12 14 16 12.2 16 10 14.2 6 12 6ZM12 12C10.9 12 10 11.1 10 10S10.9 8 12 8 14 8.9 14 10 13.1 12 12 12Z"/>
          </svg>
        </div>

        {/* Heart Icon */}
        <div className="w-8 h-8 rounded-full flex items-center justify-center" 
             style={{ backgroundColor: theme.colors.primary + '20' }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill={theme.colors.primary}>
            <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z"/>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Welcome;