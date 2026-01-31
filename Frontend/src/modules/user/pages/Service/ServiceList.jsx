import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { theme } from '../../../../shared/styles/theme.js';

function ServiceList() {
  const { type } = useParams();
  const navigate = useNavigate();
  const [sortBy, setSortBy] = useState('rating');

  // Service type mapping for display
  const serviceInfo = {
    decoration: {
      name: 'Decoration',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="white">
          <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H9L3 7V9H21ZM12 10C8.13 10 5 13.13 5 17S8.13 24 12 24 19 20.87 19 17 15.87 10 12 10Z" />
        </svg>
      ),
      color: '#F472B6'
    },
    photography: {
      name: 'Photography',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="white">
          <path d="M4 4H7L9 2H15L17 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4ZM12 7C9.24 7 7 9.24 7 12S9.24 17 12 17 17 14.76 17 12 14.76 7 12 7ZM12 9C13.66 9 15 10.34 15 12S13.66 15 12 15 9 13.66 9 12 10.34 9 12 9Z" />
        </svg>
      ),
      color: '#8B5CF6'
    },
    makeup: {
      name: 'Makeup',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="white">
          <path d="M12 2C13.1 2 14 2.9 14 4V8C14 9.1 13.1 10 12 10S10 9.1 10 8V4C10 2.9 10.9 2 12 2ZM19 8C20.1 8 21 8.9 21 10V14C21 15.1 20.1 16 19 16H17V18C17 19.1 16.1 20 15 20H9C7.9 20 7 19.1 7 18V16H5C3.9 16 3 15.1 3 14V10C3 8.9 3.9 8 5 8H19Z" />
        </svg>
      ),
      color: '#EC4899'
    },
    catering: {
      name: 'Catering',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="white">
          <path d="M8.1 13.34L2.91 8.15C2.35 7.59 2.35 6.66 2.91 6.1L6.1 2.91C6.66 2.35 7.59 2.35 8.15 2.91L13.34 8.1L8.1 13.34ZM14.88 11.53C14.32 10.97 13.39 10.97 12.83 11.53L11.41 12.95L12.83 14.37L14.25 12.95C14.81 12.39 14.81 11.46 14.25 10.9L14.88 11.53ZM5.61 16.61L7.03 15.19L8.45 16.61L7.03 18.03L5.61 16.61Z" />
        </svg>
      ),
      color: '#F59E0B'
    },
    mandap: {
      name: 'Mandap',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="white">
          <path d="M12 3L2 12H5V20H19V12H22L12 3ZM12 5.69L17 10.19V18H15V12H9V18H7V10.19L12 5.69ZM11 13H13V16H11V13Z" />
        </svg>
      ),
      color: '#10B981'
    },
    invitation: {
      name: 'Invitation',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="white">
          <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" />
        </svg>
      ),
      color: '#EF4444'
    }
  };

  const currentService = serviceInfo[type] || {
    name: 'Service',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="white">
        <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z" />
      </svg>
    ),
    color: theme.colors.primary
  };

  // Mock vendor data with real images - in real app this would come from API
  const vendors = [
    {
      id: 1,
      name: 'Elegant Decorations',
      rating: 4.8,
      reviews: 124,
      price: '₹25,000 - ₹50,000',
      location: 'Mumbai, Maharashtra',
      image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=400&h=400&fit=crop&crop=center',
      specialties: ['Wedding Decor', 'Floral Arrangements', 'Stage Setup'],
      verified: true
    },
    {
      id: 2,
      name: 'Royal Wedding Decor',
      rating: 4.6,
      reviews: 89,
      price: '₹30,000 - ₹75,000',
      location: 'Delhi, NCR',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=400&fit=crop&crop=center',
      specialties: ['Luxury Decor', 'Theme Weddings', 'Mandap Decoration'],
      verified: true
    },
    {
      id: 3,
      name: 'Bloom & Blossom',
      rating: 4.7,
      reviews: 156,
      price: '₹20,000 - ₹40,000',
      location: 'Bangalore, Karnataka',
      image: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=400&h=400&fit=crop&crop=center',
      specialties: ['Floral Decor', 'Garden Weddings', 'Eco-friendly'],
      verified: false
    },
    {
      id: 4,
      name: 'Dream Decorators',
      rating: 4.9,
      reviews: 203,
      price: '₹35,000 - ₹80,000',
      location: 'Pune, Maharashtra',
      image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=400&h=400&fit=crop&crop=center',
      specialties: ['Premium Decor', 'Destination Weddings', 'Custom Themes'],
      verified: true
    },
    {
      id: 5,
      name: 'Artistic Arrangements',
      rating: 4.5,
      reviews: 67,
      price: '₹18,000 - ₹35,000',
      location: 'Chennai, Tamil Nadu',
      image: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=400&h=400&fit=crop&crop=center',
      specialties: ['Traditional Decor', 'South Indian Weddings', 'Budget Friendly'],
      verified: true
    },
    {
      id: 6,
      name: 'Majestic Events',
      rating: 4.4,
      reviews: 98,
      price: '₹22,000 - ₹45,000',
      location: 'Hyderabad, Telangana',
      image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400&h=400&fit=crop&crop=center',
      specialties: ['Modern Decor', 'Destination Events', 'Corporate Weddings'],
      verified: true
    }
  ];

  const sortOptions = [
    { value: 'rating', label: 'Highest Rated' },
    { value: 'price', label: 'Price: Low to High' },
    { value: 'reviews', label: 'Most Reviews' }
  ];

  const handleVendorClick = (vendorId) => {
    navigate(`/vendor/${vendorId}`);
  };

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    const stars = [];

    // Full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg key={`full-${i}`} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }

    // Half star
    if (hasHalfStar) {
      stars.push(
        <svg key="half" className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <defs>
            <linearGradient id="half-star">
              <stop offset="50%" stopColor="currentColor" />
              <stop offset="50%" stopColor="#E5E7EB" />
            </linearGradient>
          </defs>
          <path fill="url(#half-star)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }

    // Empty stars
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <svg key={`empty-${i}`} className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }

    return stars;
  };

  return (
    <div
      className="min-h-screen pb-20 relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${theme.colors.background} 0%, #FFF0F5 50%, ${theme.colors.secondary} 100%)`
      }}
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-10 left-10 w-16 h-16 rounded-full opacity-10"
        style={{ backgroundColor: theme.colors.primary }}></div>
      <div className="absolute bottom-20 right-10 w-12 h-12 rounded-full opacity-15"
        style={{ backgroundColor: theme.colors.primary }}></div>
      <div className="absolute top-1/3 right-8 w-8 h-8 rounded-full opacity-8"
        style={{ backgroundColor: theme.colors.primary }}></div>

      {/* Header */}
      <div className="px-6 pt-12 pb-6 z-10 relative">
        <div className="flex items-center mb-6">
          <button
            onClick={() => navigate('/home')}
            className="w-12 h-12 rounded-full flex items-center justify-center transition-all hover:scale-105 mr-4 bg-white/80 backdrop-blur-sm shadow-sm"
          >
            <svg className="w-6 h-6" style={{ color: theme.colors.textPrimary }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div className="flex items-center flex-1">
            <div className="w-12 h-12 rounded-full flex items-center justify-center mr-3 shadow-lg"
              style={{ backgroundColor: currentService.color }}>
              {currentService.icon}
            </div>
            <div>
              <h1
                className="text-2xl font-bold leading-tight"
                style={{ color: theme.colors.textPrimary }}
              >
                {currentService.name}
              </h1>
              <p
                className="text-sm leading-tight"
                style={{ color: theme.colors.textSecondary }}
              >
                {vendors.length} vendors available
              </p>
            </div>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="space-y-4">
          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder={`Search ${currentService.name.toLowerCase()} vendors...`}
              className="w-full pl-12 pr-4 py-3 border border-gray-200 focus:outline-none focus:ring-2 transition-all bg-white/80 backdrop-blur-sm"
              style={{
                borderRadius: theme.radius.md,
                focusRingColor: theme.colors.primary + '40',
                minHeight: '52px'
              }}
            />
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 flex items-center justify-center">
              <svg
                className="w-5 h-5"
                style={{ color: theme.colors.textSecondary }}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* Sort Options */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-2">
            <span
              className="text-sm font-medium whitespace-nowrap"
              style={{ color: theme.colors.textSecondary }}
            >
              Sort by:
            </span>
            {sortOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => setSortBy(option.value)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all flex items-center justify-center ${sortBy === option.value
                    ? 'text-white shadow-lg'
                    : 'border bg-white/80 backdrop-blur-sm'
                  }`}
                style={{
                  background: sortBy === option.value
                    ? `linear-gradient(135deg, ${theme.colors.primary} 0%, #E91E63 100%)`
                    : 'transparent',
                  color: sortBy === option.value
                    ? theme.colors.white
                    : theme.colors.textPrimary,
                  borderColor: sortBy === option.value
                    ? 'transparent'
                    : '#E5E7EB',
                  borderRadius: theme.radius.lg,
                  minHeight: '44px'
                }}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Vendor Cards - Vertical Layout */}
      <div className="px-6 space-y-4 z-10 relative">
        {vendors.map((vendor) => (
          <div
            key={vendor.id}
            onClick={() => handleVendorClick(vendor.id)}
            className="p-4 shadow-xl transition-all hover:scale-[1.02] active:scale-95 cursor-pointer bg-white/95 backdrop-blur-sm border border-white/20"
            style={{
              borderRadius: theme.radius.lg
            }}
          >
            {/* Vendor Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center flex-1">
                {/* Vendor Image */}
                <div className="w-16 h-16 rounded-full mr-4 shadow-lg overflow-hidden bg-gray-100 flex-shrink-0">
                  <img 
                    src={vendor.image} 
                    alt={vendor.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div 
                    className="w-full h-full hidden items-center justify-center"
                    style={{ backgroundColor: currentService.color + '20' }}
                  >
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill={currentService.color}>
                      <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" />
                    </svg>
                  </div>
                </div>

                {/* Vendor Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center mb-2">
                    <h3
                      className="font-bold text-lg mr-2 truncate"
                      style={{ color: theme.colors.textPrimary }}
                    >
                      {vendor.name}
                    </h3>
                    {vendor.verified && (
                      <div className="bg-blue-500 rounded-full p-1 flex-shrink-0">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    )}
                  </div>

                  {/* Rating with Stars */}
                  <div className="flex items-center mb-2">
                    <div className="flex items-center mr-2">
                      {renderStars(vendor.rating)}
                    </div>
                    <span
                      className="text-sm font-semibold mr-1"
                      style={{ color: theme.colors.textPrimary }}
                    >
                      {vendor.rating}
                    </span>
                    <span
                      className="text-sm"
                      style={{ color: theme.colors.textSecondary }}
                    >
                      ({vendor.reviews} reviews)
                    </span>
                  </div>

                  {/* Location */}
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-1 flex-shrink-0" style={{ color: theme.colors.textSecondary }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span
                      className="text-sm truncate"
                      style={{ color: theme.colors.textSecondary }}
                    >
                      {vendor.location}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Specialties */}
            <div className="mb-4">
              <div className="flex flex-wrap gap-2">
                {vendor.specialties.slice(0, 3).map((specialty, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-xs font-medium rounded-full"
                    style={{
                      backgroundColor: currentService.color + '20',
                      color: currentService.color
                    }}
                  >
                    {specialty}
                  </span>
                ))}
              </div>
            </div>

            {/* Price and CTA */}
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <p
                  className="text-lg font-bold"
                  style={{ color: theme.colors.primary }}
                >
                  {vendor.price}
                </p>
                <p
                  className="text-xs"
                  style={{ color: theme.colors.textSecondary }}
                >
                  Starting price
                </p>
              </div>

              <div className="flex space-x-2 flex-shrink-0">
                <button
                  className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium transition-all hover:scale-105 bg-white/80"
                  style={{
                    color: theme.colors.textPrimary,
                    borderRadius: theme.radius.md,
                    minHeight: '44px'
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    // Handle contact action
                  }}
                >
                  Contact
                </button>
                <button
                  className="px-4 py-2 text-white text-sm font-medium rounded-lg transition-all hover:scale-105 shadow-lg"
                  style={{
                    background: `linear-gradient(135deg, ${theme.colors.primary} 0%, #E91E63 100%)`,
                    borderRadius: theme.radius.md,
                    minHeight: '44px'
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleVendorClick(vendor.id);
                  }}
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      <div className="px-6 mt-6 z-10 relative">
        <button
          className="w-full py-3 px-6 border border-gray-300 rounded-lg font-medium transition-all hover:scale-105 bg-white/80 backdrop-blur-sm"
          style={{
            color: theme.colors.textPrimary,
            borderRadius: theme.radius.md,
            minHeight: '48px'
          }}
        >
          Load More Vendors
        </button>
      </div>
    </div>
  );
}

export default ServiceList;