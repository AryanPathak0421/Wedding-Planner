import { useNavigate } from 'react-router-dom';
import { theme } from '../../../../shared/styles/theme.js';

function EventDashboard() {
  const navigate = useNavigate();

  // Mock event data - in real app this would come from state/API
  const eventData = {
    type: 'Wedding',
    date: '2024-12-15',
    location: 'Mumbai, Maharashtra',
    budget: '₹5-10 Lakhs',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill={theme.colors.primary}>
        <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H9L3 7V9H21ZM12 10C8.13 10 5 13.13 5 17S8.13 24 12 24 19 20.87 19 17 15.87 10 12 10Z"/>
      </svg>
    )
  };

  const services = [
    {
      name: 'Decoration',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="white">
          <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z"/>
        </svg>
      ),
      status: 'pending',
      type: 'decoration',
      image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=400&h=300&fit=crop&crop=center',
      gradient: 'from-pink-400 to-rose-400'
    },
    {
      name: 'Photography',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="white">
          <path d="M4 4H7L9 2H15L17 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4ZM12 7C9.24 7 7 9.24 7 12S9.24 17 12 17 17 14.76 17 12 14.76 7 12 7ZM12 9C13.66 9 15 10.34 15 12S13.66 15 12 15 9 13.66 9 12 10.34 9 12 9Z"/>
        </svg>
      ),
      status: 'booked',
      type: 'photography',
      image: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=400&h=300&fit=crop&crop=center',
      gradient: 'from-purple-400 to-pink-400'
    },
    {
      name: 'Makeup',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="white">
          <path d="M12 2C13.1 2 14 2.9 14 4V8C14 9.1 13.1 10 12 10S10 9.1 10 8V4C10 2.9 10.9 2 12 2ZM19 8C20.1 8 21 8.9 21 10V14C21 15.1 20.1 16 19 16H17V18C17 19.1 16.1 20 15 20H9C7.9 20 7 19.1 7 18V16H5C3.9 16 3 15.1 3 14V10C3 8.9 3.9 8 5 8H19Z"/>
        </svg>
      ),
      status: 'pending',
      type: 'makeup',
      image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=300&fit=crop&crop=center',
      gradient: 'from-orange-400 to-yellow-400'
    },
    {
      name: 'Catering',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="white">
          <path d="M8.1 13.34L2.91 8.15C2.35 7.59 2.35 6.66 2.91 6.1L6.1 2.91C6.66 2.35 7.59 2.35 8.15 2.91L13.34 8.1L8.1 13.34ZM14.88 11.53C14.32 10.97 13.39 10.97 12.83 11.53L11.41 12.95L12.83 14.37L14.25 12.95C14.81 12.39 14.81 11.46 14.25 10.9L14.88 11.53ZM5.61 16.61L7.03 15.19L8.45 16.61L7.03 18.03L5.61 16.61Z"/>
        </svg>
      ),
      status: 'pending',
      type: 'catering',
      image: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=400&h=300&fit=crop&crop=center',
      gradient: 'from-emerald-400 to-teal-400'
    },
    {
      name: 'Mandap',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="white">
          <path d="M12 3L2 12H5V20H19V12H22L12 3ZM12 5.69L17 10.19V18H15V12H9V18H7V10.19L12 5.69ZM11 13H13V16H11V13Z"/>
        </svg>
      ),
      status: 'pending',
      type: 'mandap',
      image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=400&h=300&fit=crop&crop=center',
      gradient: 'from-blue-400 to-indigo-400'
    },
    {
      name: 'Invitation',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="white">
          <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z"/>
        </svg>
      ),
      status: 'completed',
      type: 'invitation',
      image: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=400&h=300&fit=crop&crop=center',
      gradient: 'from-red-400 to-pink-400'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return '#10B981';
      case 'booked': return theme.colors.primary;
      case 'pending': return '#F59E0B';
      default: return '#6B7280';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'completed': return 'Completed';
      case 'booked': return 'Booked';
      case 'pending': return 'Pending';
      default: return 'Not Started';
    }
  };

  const handleServiceClick = (serviceType) => {
    navigate(`/service/${serviceType}`);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  return (
    <div 
      className="min-h-screen pb-20"
      style={{ backgroundColor: theme.colors.background }}
    >
      {/* Header */}
      <div className="flex items-center px-6 pt-12 pb-6">
        <button 
          onClick={() => navigate('/home')}
          className="w-12 h-12 rounded-full flex items-center justify-center transition-colors mr-4"
          style={{ backgroundColor: theme.colors.white }}
        >
          <svg className="w-6 h-6" style={{ color: theme.colors.textPrimary }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-full mr-3 flex items-center justify-center shadow-lg"
               style={{ 
                 background: `linear-gradient(135deg, ${theme.colors.secondary} 0%, #FFF0F5 100%)`,
                 border: `2px solid ${theme.colors.primary}20`
               }}>
            {eventData.icon}
          </div>
          <h1 
            className="text-2xl font-bold"
            style={{ color: theme.colors.textPrimary }}
          >
            Event Dashboard
          </h1>
        </div>
      </div>

      {/* Event Summary Card */}
      <div className="px-6 mb-6">
        <div 
          className="relative overflow-hidden shadow-xl"
          style={{ 
            borderRadius: theme.radius.xl,
            height: '200px'
          }}
        >
          {/* Background Image with Overlay */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: 'url(https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=400&fit=crop&crop=center)',
              filter: 'brightness(0.4)'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-pink-400/80 to-rose-400/80" />
          
          {/* Content */}
          <div className="relative z-10 p-6 h-full flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">
                  {eventData.type} Event
                </h2>
                <div className="flex items-center text-white/90 text-sm">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {formatDate(eventData.date)}
                </div>
              </div>
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-white/20 backdrop-blur-sm">
                {eventData.icon}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                <div className="flex items-center text-white/90 text-xs mb-1">
                  <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  Location
                </div>
                <p className="text-white font-medium text-sm truncate">
                  {eventData.location}
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                <div className="flex items-center text-white/90 text-xs mb-1">
                  <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                  Budget
                </div>
                <p className="text-white font-medium text-sm">
                  {eventData.budget}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Overview */}
      <div className="px-6 mb-6">
        <div 
          className="p-5 shadow-lg border border-white/20"
          style={{ 
            background: `linear-gradient(135deg, ${theme.colors.secondary} 0%, #FFF0F5 100%)`,
            borderRadius: theme.radius.lg
          }}
        >
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 
                className="font-bold text-lg mb-1"
                style={{ color: theme.colors.textPrimary }}
              >
                Planning Progress
              </h3>
              <p 
                className="text-sm"
                style={{ color: theme.colors.textSecondary }}
              >
                2 of 6 services completed
              </p>
            </div>
            <div className="text-right">
              <div 
                className="text-3xl font-bold mb-1"
                style={{ color: theme.colors.primary }}
              >
                33%
              </div>
              <div className="w-10 h-10 rounded-full mx-auto flex items-center justify-center shadow-lg" 
                   style={{ 
                     background: `linear-gradient(135deg, ${theme.colors.primary} 0%, #E91E63 100%)`
                   }}>
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z"/>
                </svg>
              </div>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="w-full h-3 rounded-full bg-white/50 overflow-hidden">
            <div 
              className="h-full rounded-full transition-all duration-500"
              style={{ 
                background: `linear-gradient(135deg, ${theme.colors.primary} 0%, #E91E63 100%)`,
                width: '33%'
              }}
            />
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="px-6">
        <div className="flex items-center justify-between mb-4">
          <h2 
            className="text-xl font-bold"
            style={{ color: theme.colors.textPrimary }}
          >
            Wedding Services
          </h2>
          <button 
            className="text-sm font-medium"
            style={{ color: theme.colors.primary }}
          >
            Manage All
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {services.map((service) => (
            <button
              key={service.type}
              onClick={() => handleServiceClick(service.type)}
              className="relative overflow-hidden shadow-lg transition-all hover:scale-105 active:scale-95"
              style={{ 
                borderRadius: theme.radius.lg,
                height: '140px'
              }}
            >
              {/* Background Image with Overlay */}
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ 
                  backgroundImage: `url(${service.image})`,
                  filter: 'brightness(0.6)'
                }}
              />
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-70`} />
              
              {/* Status indicator */}
              <div 
                className="absolute top-3 right-3 w-3 h-3 rounded-full border-2 border-white"
                style={{ backgroundColor: getStatusColor(service.status) }}
              />
              
              {/* Content */}
              <div className="relative z-10 flex flex-col justify-between h-full p-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white/20 backdrop-blur-sm">
                  {service.icon}
                </div>
                
                <div className="text-left">
                  <h3 className="text-white font-bold text-sm mb-1">
                    {service.name}
                  </h3>
                  <p 
                    className="text-xs font-medium"
                    style={{ color: getStatusColor(service.status) === '#10B981' ? '#D1FAE5' : 
                             getStatusColor(service.status) === theme.colors.primary ? '#FCE7F3' : '#FEF3C7' }}
                  >
                    {getStatusText(service.status)}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="px-6 mt-8">
        <h3 
          className="text-lg font-bold mb-4"
          style={{ color: theme.colors.textPrimary }}
        >
          Quick Actions
        </h3>
        <div className="space-y-3">
          <button
            onClick={() => navigate('/event/checklist')}
            className="w-full p-4 rounded-lg shadow-sm transition-all hover:scale-105 active:scale-95 flex items-center justify-between"
            style={{ backgroundColor: theme.colors.white }}
          >
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full mr-4 flex items-center justify-center" 
                   style={{ backgroundColor: theme.colors.primary + '20' }}>
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill={theme.colors.primary}>
                  <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"/>
                </svg>
              </div>
              <div className="text-left">
                <h4 
                  className="font-semibold"
                  style={{ color: theme.colors.textPrimary }}
                >
                  Wedding Checklist
                </h4>
                <p 
                  className="text-sm"
                  style={{ color: theme.colors.textSecondary }}
                >
                  Track your planning progress
                </p>
              </div>
            </div>
            <svg className="w-5 h-5" style={{ color: theme.colors.textSecondary }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          <button
            onClick={() => navigate('/booking/summary')}
            className="w-full p-4 rounded-lg shadow-sm transition-all hover:scale-105 active:scale-95 flex items-center justify-between"
            style={{ backgroundColor: theme.colors.white }}
          >
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full mr-4 flex items-center justify-center" 
                   style={{ backgroundColor: theme.colors.primary + '20' }}>
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill={theme.colors.primary}>
                  <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"/>
                </svg>
              </div>
              <div className="text-left">
                <h4 
                  className="font-semibold"
                  style={{ color: theme.colors.textPrimary }}
                >
                  View Bookings
                </h4>
                <p 
                  className="text-sm"
                  style={{ color: theme.colors.textSecondary }}
                >
                  Check all your bookings
                </p>
              </div>
            </div>
            <svg className="w-5 h-5" style={{ color: theme.colors.textSecondary }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          <button
            onClick={() => navigate('/event/create')}
            className="w-full p-4 rounded-lg shadow-sm transition-all hover:scale-105 active:scale-95 flex items-center justify-between"
            style={{ backgroundColor: theme.colors.white }}
          >
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full mr-4 flex items-center justify-center" 
                   style={{ backgroundColor: theme.colors.primary + '20' }}>
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill={theme.colors.primary}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <div className="text-left">
                <h4 
                  className="font-semibold"
                  style={{ color: theme.colors.textPrimary }}
                >
                  Create New Event
                </h4>
                <p 
                  className="text-sm"
                  style={{ color: theme.colors.textSecondary }}
                >
                  Plan another celebration
                </p>
              </div>
            </div>
            <svg className="w-5 h-5" style={{ color: theme.colors.textSecondary }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default EventDashboard;