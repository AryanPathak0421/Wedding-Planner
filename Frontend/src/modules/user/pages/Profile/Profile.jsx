import { useNavigate } from 'react-router-dom';
import { theme } from '../../../../shared/styles/theme.js';

function Profile() {
  const navigate = useNavigate();

  // Mock user data
  const user = {
    name: 'Priya Sharma',
    email: 'priya.sharma@email.com',
    phone: '+91 98765 43210',
    location: 'Mumbai, Maharashtra',
    avatar: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill={theme.colors.primary}>
        <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H9L3 7V9H21ZM12 10C8.13 10 5 13.13 5 17S8.13 24 12 24 19 20.87 19 17 15.87 10 12 10Z"/>
      </svg>
    ),
    memberSince: '2024',
    upcomingEvents: 2,
    completedBookings: 5
  };

  const menuItems = [
    {
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill={theme.colors.primary}>
          <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V8H19V19ZM7 10H12V15H7V10Z"/>
        </svg>
      ),
      title: 'My Events',
      subtitle: `${user.upcomingEvents} upcoming events`,
      action: () => navigate('/event/dashboard')
    },
    {
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill={theme.colors.primary}>
          <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"/>
        </svg>
      ),
      title: 'My Bookings',
      subtitle: `${user.completedBookings} completed bookings`,
      action: () => navigate('/booking/summary')
    },
    {
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill={theme.colors.primary}>
          <path d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z"/>
        </svg>
      ),
      title: 'Payment Methods',
      subtitle: 'Manage your payment options',
      action: () => {}
    },
    {
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill={theme.colors.primary}>
          <path d="M12 22C13.1 22 14 21.1 14 20H10C10 21.1 10.9 22 12 22ZM18 16V11C18 7.93 16.36 5.36 13.5 4.68V4C13.5 3.17 12.83 2.5 12 2.5S10.5 3.17 10.5 4V4.68C7.63 5.36 6 7.92 6 11V16L4 18V19H20V18L18 16Z"/>
        </svg>
      ),
      title: 'Notifications',
      subtitle: 'Manage your preferences',
      action: () => {}
    },
    {
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill={theme.colors.primary}>
          <path d="M11 18H13V16H11V18ZM12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20ZM12 6C9.79 6 8 7.79 8 10H10C10 8.9 10.9 8 12 8S14 8.9 14 10C14 12 11 11.75 11 15H13C13 12.75 16 12.5 16 10C16 7.79 14.21 6 12 6Z"/>
        </svg>
      ),
      title: 'Help & Support',
      subtitle: 'Get help with your bookings',
      action: () => {}
    },
    {
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill={theme.colors.primary}>
          <path d="M19.14 12.94C19.73 12.94 20.2 12.47 20.2 11.88C20.2 11.29 19.73 10.82 19.14 10.82C18.55 10.82 18.08 11.29 18.08 11.88C18.08 12.47 18.55 12.94 19.14 12.94ZM19.14 9.94C20.18 9.94 21.03 10.79 21.03 11.83C21.03 12.87 20.18 13.72 19.14 13.72C18.1 13.72 17.25 12.87 17.25 11.83C17.25 10.79 18.1 9.94 19.14 9.94ZM15.5 4C16.88 4 18 5.12 18 6.5S16.88 9 15.5 9 13 7.88 13 6.5 14.12 4 15.5 4ZM4 8.5C4 7.12 5.12 6 6.5 6S9 7.12 9 8.5 7.88 11 6.5 11 4 9.88 4 8.5ZM12 1L21.5 6.5L12 12L2.5 6.5L12 1ZM12 3.311L6.26 6.5L12 9.689L17.74 6.5L12 3.311Z"/>
        </svg>
      ),
      title: 'Settings',
      subtitle: 'App preferences and privacy',
      action: () => {}
    }
  ];

  return (
    <div 
      className="min-h-screen pb-20 relative overflow-hidden"
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

      {/* Header */}
      <div className="px-6 pt-12 pb-6 z-10 relative">
        <h1 
          className="text-2xl font-bold"
          style={{ color: theme.colors.textPrimary }}
        >
          Profile
        </h1>
      </div>

      {/* User Info Card */}
      <div className="px-6 mb-6 z-10 relative">
        <div 
          className="p-6 shadow-xl bg-white/95 backdrop-blur-sm border border-white/20"
          style={{ 
            borderRadius: theme.radius.lg
          }}
        >
          <div className="flex items-center mb-4">
            <div 
              className="w-16 h-16 rounded-full flex items-center justify-center mr-4 shadow-lg"
              style={{ 
                background: `linear-gradient(135deg, ${theme.colors.secondary} 0%, #FFF0F5 100%)`,
                border: `2px solid ${theme.colors.primary}20`
              }}
            >
              {user.avatar}
            </div>
            <div className="flex-1">
              <h2 
                className="text-xl font-bold"
                style={{ color: theme.colors.textPrimary }}
              >
                {user.name}
              </h2>
              <p 
                className="text-sm"
                style={{ color: theme.colors.textSecondary }}
              >
                Member since {user.memberSince}
              </p>
            </div>
            <button
              className="p-2 rounded-full transition-all hover:scale-105"
              style={{ backgroundColor: theme.colors.secondary }}
            >
              <svg className="w-5 h-5" style={{ color: theme.colors.primary }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
            </button>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2" style={{ color: theme.colors.textSecondary }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
              </svg>
              <span 
                className="text-sm"
                style={{ color: theme.colors.textSecondary }}
              >
                {user.email}
              </span>
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2" style={{ color: theme.colors.textSecondary }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span 
                className="text-sm"
                style={{ color: theme.colors.textSecondary }}
              >
                {user.phone}
              </span>
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2" style={{ color: theme.colors.textSecondary }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span 
                className="text-sm"
                style={{ color: theme.colors.textSecondary }}
              >
                {user.location}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="px-6 mb-6 z-10 relative">
        <div className="grid grid-cols-2 gap-4">
          <div 
            className="p-4 text-center shadow-xl bg-white/95 backdrop-blur-sm border border-white/20"
            style={{ 
              borderRadius: theme.radius.lg
            }}
          >
            <div className="w-10 h-10 rounded-full mx-auto mb-2 flex items-center justify-center" 
                 style={{ backgroundColor: theme.colors.primary + '20' }}>
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill={theme.colors.primary}>
                <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V8H19V19ZM7 10H12V15H7V10Z"/>
              </svg>
            </div>
            <div 
              className="text-2xl font-bold"
              style={{ color: theme.colors.primary }}
            >
              {user.upcomingEvents}
            </div>
            <p 
              className="text-sm"
              style={{ color: theme.colors.textSecondary }}
            >
              Upcoming Events
            </p>
          </div>
          
          <div 
            className="p-4 text-center shadow-xl bg-white/95 backdrop-blur-sm border border-white/20"
            style={{ 
              borderRadius: theme.radius.lg
            }}
          >
            <div className="w-10 h-10 rounded-full mx-auto mb-2 flex items-center justify-center" 
                 style={{ backgroundColor: theme.colors.primary + '20' }}>
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill={theme.colors.primary}>
                <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"/>
              </svg>
            </div>
            <div 
              className="text-2xl font-bold"
              style={{ color: theme.colors.primary }}
            >
              {user.completedBookings}
            </div>
            <p 
              className="text-sm"
              style={{ color: theme.colors.textSecondary }}
            >
              Completed Bookings
            </p>
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <div className="px-6 z-10 relative">
        <div 
          className="shadow-xl overflow-hidden bg-white/95 backdrop-blur-sm border border-white/20"
          style={{ 
            borderRadius: theme.radius.lg
          }}
        >
          {menuItems.map((item, index) => (
            <button
              key={index}
              onClick={item.action}
              className={`w-full p-4 flex items-center justify-between transition-all hover:bg-gray-50/50 ${
                index !== menuItems.length - 1 ? 'border-b border-gray-100' : ''
              }`}
            >
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full mr-4 flex items-center justify-center" 
                     style={{ backgroundColor: theme.colors.primary + '20' }}>
                  {item.icon}
                </div>
                <div className="text-left">
                  <h3 
                    className="font-semibold"
                    style={{ color: theme.colors.textPrimary }}
                  >
                    {item.title}
                  </h3>
                  <p 
                    className="text-sm"
                    style={{ color: theme.colors.textSecondary }}
                  >
                    {item.subtitle}
                  </p>
                </div>
              </div>
              <svg className="w-5 h-5" style={{ color: theme.colors.textSecondary }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          ))}
        </div>
      </div>

      {/* Logout Button */}
      <div className="px-6 mt-6 z-10 relative">
        <button
          onClick={() => navigate('/')}
          className="w-full p-4 rounded-lg border border-red-300 transition-all hover:scale-105 active:scale-95 bg-white/95 backdrop-blur-sm"
          style={{ 
            color: '#EF4444',
            borderRadius: theme.radius.md,
            minHeight: '56px'
          }}
        >
          <div className="flex items-center justify-center">
            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            <span className="font-semibold">Sign Out</span>
          </div>
        </button>
      </div>
    </div>
  );
}

export default Profile;