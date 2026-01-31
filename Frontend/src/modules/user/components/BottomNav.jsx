import { useNavigate, useLocation } from 'react-router-dom';
import { theme } from '../../../shared/styles/theme.js';

function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    {
      path: '/home',
      label: 'Home',
      icon: (isActive) => (
        <svg 
          className="w-6 h-6" 
          fill={isActive ? 'currentColor' : 'none'} 
          stroke="currentColor" 
          strokeWidth={isActive ? 0 : 2}
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" 
          />
        </svg>
      )
    },
    {
      path: '/event/dashboard',
      label: 'Events',
      icon: (isActive) => (
        <svg 
          className="w-6 h-6" 
          fill={isActive ? 'currentColor' : 'none'} 
          stroke="currentColor" 
          strokeWidth={isActive ? 0 : 2}
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" 
          />
        </svg>
      )
    },
    {
      path: '/profile',
      label: 'Profile',
      icon: (isActive) => (
        <svg 
          className="w-6 h-6" 
          fill={isActive ? 'currentColor' : 'none'} 
          stroke="currentColor" 
          strokeWidth={isActive ? 0 : 2}
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" 
          />
        </svg>
      )
    }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 safe-area-pb z-50 w-full">
      {/* Rounded Container with Glass Effect - Mobile-first design */}
      <div 
        className="mx-4 mb-4 px-2 py-2 backdrop-blur-lg border border-white/20 w-auto"
        style={{ 
          background: 'rgba(255, 255, 255, 0.95)',
          borderRadius: theme.radius.xl,
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
        }}
      >
        <div className="flex justify-around items-center">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path || 
                           (item.path === '/event/dashboard' && location.pathname.startsWith('/event/'));
            
            return (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className={`flex flex-col items-center justify-center py-2 px-3 rounded-xl transition-all duration-200 hover:scale-105 active:scale-95 flex-1 max-w-none ${
                  isActive ? 'shadow-lg' : ''
                }`}
                style={{
                  color: isActive ? theme.colors.white : theme.colors.textSecondary,
                  background: isActive 
                    ? `linear-gradient(135deg, ${theme.colors.primary} 0%, #E91E63 100%)`
                    : 'transparent',
                  minHeight: '44px', // Accessibility requirement - minimum touch target
                  minWidth: '44px'   // Accessibility requirement - minimum touch target
                }}
              >
                <div className="mb-1 flex items-center justify-center">
                  {item.icon(isActive)}
                </div>
                <span className="text-xs font-medium leading-tight text-center">
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default BottomNav;