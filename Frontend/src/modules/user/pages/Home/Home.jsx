import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { theme } from '../../../../shared/styles/theme.js';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

function Home() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Vendor');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('Mumbai, Maharashtra');

  const locations = [
    'Mumbai, Maharashtra',
    'Delhi, NCR',
    'Bangalore, Karnataka',
    'Chennai, Tamil Nadu',
    'Pune, Maharashtra',
    'Hyderabad, Telangana'
  ];

  const categories = [
    {
      name: 'Vendor',
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    {
      name: 'Venue',
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 3L2 12H5V20H19V12H22L12 3ZM12 5.69L17 10.19V18H15V12H9V18H7V10.19L12 5.69Z" />
        </svg>
      )
    },
    {
      name: 'Dress',
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H9L3 7V9H21ZM12 10C8.13 10 5 13.13 5 17S8.13 24 12 24 19 20.87 19 17 15.87 10 12 10Z" />
        </svg>
      )
    },
    {
      name: 'Makeup',
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C13.1 2 14 2.9 14 4V8C14 9.1 13.1 10 12 10S10 9.1 10 8V4C10 2.9 10.9 2 12 2ZM19 8C20.1 8 21 8.9 21 10V14C21 15.1 20.1 16 19 16H17V18C17 19.1 16.1 20 15 20H9C7.9 20 7 19.1 7 18V16H5C3.9 16 3 15.1 3 14V10C3 8.9 3.9 8 5 8H19Z" />
        </svg>
      )
    }
  ];

  const services = [
    {
      name: 'Vendors',
      type: 'vendors',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="white">
          <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      gradient: 'from-blue-400 to-cyan-400'
    },
    {
      name: 'Venues',
      type: 'venues',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="white">
          <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      gradient: 'from-green-400 to-emerald-400'
    },
    {
      name: 'Photos',
      type: 'photos',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="white">
          <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      gradient: 'from-purple-400 to-violet-400'
    },
    {
      name: 'Decoration',
      type: 'decoration',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="white">
          <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H9L3 7V9H21ZM12 10C8.13 10 5 13.13 5 17S8.13 24 12 24 19 20.87 19 17 15.87 10 12 10Z" />
        </svg>
      ),
      gradient: 'from-pink-400 to-rose-400'
    },
    {
      name: 'Photography',
      type: 'photography',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="white">
          <path d="M4 4H7L9 2H15L17 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4ZM12 7C9.24 7 7 9.24 7 12S9.24 17 12 17 17 14.76 17 12 14.76 7 12 7ZM12 9C13.66 9 15 10.34 15 12S13.66 15 12 15 9 13.66 9 12 10.34 9 12 9Z" />
        </svg>
      ),
      gradient: 'from-indigo-400 to-blue-400'
    },
    {
      name: 'Makeup',
      type: 'makeup',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="white">
          <path d="M12 2C13.1 2 14 2.9 14 4V8C14 9.1 13.1 10 12 10S10 9.1 10 8V4C10 2.9 10.9 2 12 2ZM19 8C20.1 8 21 8.9 21 10V14C21 15.1 20.1 16 19 16H17V18C17 19.1 16.1 20 15 20H9C7.9 20 7 19.1 7 18V16H5C3.9 16 3 15.1 3 14V10C3 8.9 3.9 8 5 8H19Z" />
        </svg>
      ),
      gradient: 'from-pink-400 to-red-400'
    },
    {
      name: 'Catering',
      type: 'catering',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="white">
          <path d="M8.1 13.34L2.91 8.15C2.35 7.59 2.35 6.66 2.91 6.1L6.1 2.91C6.66 2.35 7.59 2.35 8.15 2.91L13.34 8.1L8.1 13.34ZM14.88 11.53C14.32 10.97 13.39 10.97 12.83 11.53L11.41 12.95L12.83 14.37L14.25 12.95C14.81 12.39 14.81 11.46 14.25 10.9L14.88 11.53ZM5.61 16.61L7.03 15.19L8.45 16.61L7.03 18.03L5.61 16.61Z" />
        </svg>
      ),
      gradient: 'from-orange-400 to-yellow-400'
    },
    {
      name: 'Mandap',
      type: 'mandap',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="white">
          <path d="M12 3L2 12H5V20H19V12H22L12 3ZM12 5.69L17 10.19V18H15V12H9V18H7V10.19L12 5.69ZM11 13H13V16H11V13Z" />
        </svg>
      ),
      gradient: 'from-emerald-400 to-teal-400'
    },
    {
      name: 'Invitation',
      type: 'invitation',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="white">
          <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" />
        </svg>
      ),
      gradient: 'from-violet-400 to-purple-400'
    }
  ];

  // Featured wedding images for slider with more variety
  const featuredWeddings = [
    {
      id: 1,
      title: "Elegant Garden Wedding",
      location: "Mumbai, Maharashtra",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop&crop=center",
      description: "Beautiful outdoor ceremony with floral arrangements"
    },
    {
      id: 2,
      title: "Royal Palace Ceremony",
      location: "Rajasthan, India",
      image: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&h=600&fit=crop&crop=center",
      description: "Traditional Indian wedding with royal grandeur"
    },
    {
      id: 3,
      title: "Beach Destination Wedding",
      location: "Goa, India",
      image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&h=600&fit=crop&crop=center",
      description: "Romantic beachside celebration at sunset"
    },
    {
      id: 4,
      title: "Modern City Wedding",
      location: "Bangalore, Karnataka",
      image: "https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?w=800&h=600&fit=crop&crop=center",
      description: "Contemporary wedding with urban elegance"
    },
    {
      id: 5,
      title: "Traditional Temple Wedding",
      location: "Chennai, Tamil Nadu",
      image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&h=600&fit=crop&crop=center",
      description: "Sacred ceremony with cultural traditions"
    }
  ];

  const handleServiceClick = (serviceType) => {
    if (serviceType === 'vendors') {
      navigate('/vendors');
    } else if (serviceType === 'venues') {
      navigate('/venues');
    } else if (serviceType === 'photos') {
      navigate('/photos');
    } else {
      navigate(`/service/${serviceType}`);
    }
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleLocationChange = (location) => {
    setSelectedLocation(location);
  };

  return (
    <div
      className="min-h-screen relative overflow-hidden"
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

      {/* Header Section */}
      <div className="px-6 pt-12 pb-6 z-10 relative">
        {/* Top Header with Location and Notification */}
        <div className="flex items-center justify-between mb-6">
          {/* Location Selector */}
          <div className="flex items-center">
            <svg className="w-5 h-5 mr-2" style={{ color: theme.colors.primary }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <select
              value={selectedLocation}
              onChange={(e) => handleLocationChange(e.target.value)}
              className="text-sm font-medium bg-transparent border-none outline-none cursor-pointer"
              style={{ color: theme.colors.textPrimary }}
            >
              {locations.map((location) => (
                <option key={location} value={location}>
                  {location}
                </option>
              ))}
            </select>
          </div>

          {/* Notification Icon */}
          <button className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-105 bg-white/80 backdrop-blur-sm shadow-sm">
            <svg className="w-5 h-5" style={{ color: theme.colors.primary }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM12 22C13.1 22 14 21.1 14 20H10C10 21.1 10.9 22 12 22ZM18 16V11C18 7.93 16.36 5.36 13.5 4.68V4C13.5 3.17 12.83 2.5 12 2.5S10.5 3.17 10.5 4V4.68C7.63 5.36 6 7.92 6 11V16L4 18V19H20V18L18 16Z" />
            </svg>
          </button>
        </div>

        {/* Title Text */}
        <div className="mb-6">
          <h1
            className="text-3xl font-bold mb-2"
            style={{ color: theme.colors.textPrimary }}
          >
            Perfect Weddings,
          </h1>
          <h1
            className="text-3xl font-bold"
            style={{ color: theme.colors.primary }}
          >
            Personalized
          </h1>
          <p
            className="text-sm mt-2"
            style={{ color: theme.colors.textSecondary }}
          >
            Plan your dream wedding with expert guidance
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Search vendors, venues, services..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full pl-12 pr-4 py-4 border border-gray-200 focus:outline-none focus:ring-2 transition-all bg-white/90 backdrop-blur-sm shadow-sm"
              style={{
                borderRadius: theme.radius.xl,
                focusRingColor: theme.colors.primary + '40',
                minHeight: '56px'
              }}
            />
            <svg
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6"
              style={{ color: theme.colors.textSecondary }}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* Category Tabs - Pill Style with Icons and Active Indicator */}
        <div className="mb-6">
          <div className="relative">
            {/* Tab Container */}
            <div className="flex space-x-1 overflow-x-auto pb-2 scrollbar-hide">
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setActiveTab(category.name)}
                  className={`relative px-6 py-3 rounded-full text-sm font-medium whitespace-nowrap transition-all flex items-center space-x-2 ${activeTab === category.name
                      ? 'text-white shadow-lg transform scale-105'
                      : 'border bg-white/90 backdrop-blur-sm hover:scale-105'
                    }`}
                  style={{
                    background: activeTab === category.name
                      ? `linear-gradient(135deg, ${theme.colors.primary} 0%, #E91E63 100%)`
                      : 'transparent',
                    color: activeTab === category.name
                      ? theme.colors.white
                      : theme.colors.textPrimary,
                    borderColor: activeTab === category.name
                      ? 'transparent'
                      : '#E5E7EB',
                    borderRadius: theme.radius.xl,
                    minHeight: '48px'
                  }}
                >
                  {category.icon}
                  <span>{category.name}</span>

                  {/* Active Indicator - Pink Underline */}
                  {activeTab === category.name && (
                    <div
                      className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-1 rounded-full transition-all duration-300 ease-out"
                      style={{
                        backgroundColor: theme.colors.primary,
                        width: '60%',
                        boxShadow: `0 0 8px ${theme.colors.primary}40`
                      }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Alternative Underline Indicator System */}
            <div className="relative mt-2">
              <div
                className="absolute top-0 h-0.5 rounded-full transition-all duration-300 ease-out"
                style={{
                  backgroundColor: theme.colors.primary,
                  width: `${100 / categories.length}%`,
                  left: `${(categories.findIndex(cat => cat.name === activeTab) * 100) / categories.length}%`,
                  boxShadow: `0 0 8px ${theme.colors.primary}40`
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Image Slider / Carousel */}
      <div className="px-6 mb-8 z-10 relative">
        <div className="mb-4">
          <h2
            className="text-xl font-bold"
            style={{ color: theme.colors.textPrimary }}
          >
            Featured Wedding Highlights
          </h2>
          <p
            className="text-sm"
            style={{ color: theme.colors.textSecondary }}
          >
            Get inspired by real weddings and celebrations
          </p>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={16}
          slidesPerView={1.3}
          pagination={{
            clickable: true,
            dynamicBullets: true
          }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false
          }}
          loop={true}
          className="featured-weddings-slider"
        >
          {featuredWeddings.map((wedding) => (
            <SwiperSlide key={wedding.id}>
              <div
                className="relative h-56 overflow-hidden shadow-xl bg-white/95 backdrop-blur-sm border border-white/20"
                style={{ borderRadius: theme.radius.xl }}
              >
                <img
                  src={wedding.image}
                  alt={wedding.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="font-bold text-lg mb-1">{wedding.title}</h3>
                  <div className="flex items-center mb-2">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm opacity-90">{wedding.location}</span>
                  </div>
                  <p className="text-xs opacity-80 leading-relaxed">{wedding.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Services Grid - 2 columns on mobile */}
      <div className="px-6 pb-8 z-10 relative">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2
              className="text-xl font-bold"
              style={{ color: theme.colors.textPrimary }}
            >
              Wedding Services
            </h2>
            <p
              className="text-sm"
              style={{ color: theme.colors.textSecondary }}
            >
              Everything you need for your perfect day
            </p>
          </div>
          <button
            className="text-sm font-medium hover:underline transition-all"
            style={{ color: theme.colors.primary }}
          >
            View All
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {services.map((service) => (
            <button
              key={service.type}
              onClick={() => handleServiceClick(service.type)}
              className="p-5 text-center shadow-xl transition-all hover:scale-105 active:scale-95 bg-white/95 backdrop-blur-sm border border-white/20"
              style={{
                borderRadius: theme.radius.xl,
                minHeight: '120px'
              }}
            >
              <div
                className={`w-14 h-14 rounded-full mx-auto mb-3 flex items-center justify-center bg-gradient-to-br ${service.gradient} shadow-lg`}
              >
                {service.icon}
              </div>
              <h3
                className="text-sm font-bold"
                style={{ color: theme.colors.textPrimary }}
              >
                {service.name}
              </h3>
            </button>
          ))}
        </div>
      </div>

      {/* Quick Access to Planning Tools */}
      <div className="px-6 pb-8 z-10 relative">
        <button
          onClick={() => navigate('/event/create')}
          className="w-full p-6 rounded-xl shadow-xl transition-all hover:scale-105 active:scale-95 flex items-center justify-between bg-white/95 backdrop-blur-sm border border-white/20 mb-4"
          style={{
            borderRadius: theme.radius.xl,
            minHeight: '80px'
          }}
        >
          <div className="flex items-center">
            <div
              className="w-14 h-14 rounded-full mr-4 flex items-center justify-center shadow-lg"
              style={{
                background: `linear-gradient(135deg, ${theme.colors.primary} 0%, #E91E63 100%)`
              }}
            >
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <div className="text-left">
              <h3
                className="font-bold text-lg"
                style={{ color: theme.colors.textPrimary }}
              >
                Start Planning Your Wedding
              </h3>
              <p
                className="text-sm"
                style={{ color: theme.colors.textSecondary }}
              >
                Create your event and get personalized recommendations
              </p>
            </div>
          </div>
          <svg className="w-6 h-6" style={{ color: theme.colors.primary }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <button
          onClick={() => navigate('/event/checklist')}
          className="w-full p-6 rounded-xl shadow-xl transition-all hover:scale-105 active:scale-95 flex items-center justify-between bg-white/95 backdrop-blur-sm border border-white/20"
          style={{
            borderRadius: theme.radius.xl,
            minHeight: '80px'
          }}
        >
          <div className="flex items-center">
            <div
              className="w-14 h-14 rounded-full mr-4 flex items-center justify-center shadow-lg"
              style={{ backgroundColor: theme.colors.secondary }}
            >
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill={theme.colors.primary}>
                <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" />
              </svg>
            </div>
            <div className="text-left">
              <h3
                className="font-bold text-lg"
                style={{ color: theme.colors.textPrimary }}
              >
                Wedding Planning Checklist
              </h3>
              <p
                className="text-sm"
                style={{ color: theme.colors.textSecondary }}
              >
                Track your progress and stay organized
              </p>
            </div>
          </div>
          <svg className="w-6 h-6" style={{ color: theme.colors.primary }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Home;