import { useLocation } from 'react-router-dom';
import BottomNav from './BottomNav.jsx';
import { theme } from '../../../shared/styles/theme.js';

function UserLayout({ children }) {
  const location = useLocation();

  // Pages that should not show bottom navigation
  const hideBottomNavPaths = ['/', '/login', '/signup'];
  const shouldShowBottomNav = !hideBottomNavPaths.includes(location.pathname);

  return (
    <div 
      className="min-h-screen w-full"
      style={{ backgroundColor: theme.colors.background }}
    >
      {/* Main Content - Mobile-first with proper spacing */}
      <main className={`w-full ${shouldShowBottomNav ? 'pb-24 md:pb-28' : ''}`}>
        <div className="w-full max-w-md mx-auto md:max-w-2xl lg:max-w-4xl">
          {children}
        </div>
      </main>

      {/* Bottom Navigation - Mobile Only (hidden on desktop) */}
      {shouldShowBottomNav && (
        <div className="md:hidden">
          <BottomNav />
        </div>
      )}
    </div>
  );
}

export default UserLayout;