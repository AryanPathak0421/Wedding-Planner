import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { theme } from '../../../../shared/styles/theme.js';

function VendorDetail() {
  const { vendorId } = useParams();
  const navigate = useNavigate();
  const [showFullDescription, setShowFullDescription] = useState(false);

  // Mock vendor data with real images - in real app this would come from API based on vendorId
  const vendor = {
    id: vendorId,
    name: 'Elegant Decorations',
    rating: 4.8,
    reviews: 124,
    price: '₹25,000',
    originalPrice: '₹30,000',
    location: 'Mumbai, Maharashtra',
    bannerImage: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&h=600&fit=crop&crop=center',
    verified: true,
    description: 'We specialize in creating magical wedding experiences with our exquisite decoration services. With over 10 years of experience in the wedding industry, we have transformed countless venues into dream wedding destinations. Our team of creative designers works closely with couples to bring their vision to life, ensuring every detail reflects their unique love story. From intimate ceremonies to grand celebrations, we handle every aspect of wedding decoration with precision and creativity.',
    shortDescription: 'We specialize in creating magical wedding experiences with our exquisite decoration services. With over 10 years of experience in the wedding industry...',
    specialties: ['Wedding Decor', 'Floral Arrangements', 'Stage Setup', 'Lighting Design'],
    gallery: [
      'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=300&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=400&h=300&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=400&h=300&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=400&h=300&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400&h=300&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?w=400&h=300&fit=crop&crop=center'
    ],
    contact: {
      phone: '+91 98765 43210',
      whatsapp: '+91 98765 43210',
      email: 'info@elegantdecorations.com'
    },
    features: [
      { 
        icon: (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill={theme.colors.primary}>
            <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z"/>
          </svg>
        ), 
        title: 'Custom Designs', 
        description: 'Personalized decoration themes' 
      },
      { 
        icon: (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill={theme.colors.primary}>
            <path d="M3 4H21V6H20L19 17H5L4 6H3V4ZM6.2 6L6.8 15H17.2L17.8 6H6.2ZM8 8V13H10V8H8ZM14 8V13H16V8H14Z"/>
          </svg>
        ), 
        title: 'Free Setup', 
        description: 'Complete venue setup included' 
      },
      { 
        icon: (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill={theme.colors.primary}>
            <path d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5C20.55 15.5 21 15.95 21 16.5V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z"/>
          </svg>
        ), 
        title: '24/7 Support', 
        description: 'Round the clock assistance' 
      },
      { 
        icon: (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill={theme.colors.primary}>
            <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H9L3 7V9H21ZM12 10C8.13 10 5 13.13 5 17S8.13 24 12 24 19 20.87 19 17 15.87 10 12 10Z"/>
          </svg>
        ), 
        title: 'Quality Assured', 
        description: 'Premium materials only' 
      }
    ],
    packages: [
      { name: 'Basic', price: '₹25,000', popular: false, description: 'Essential decoration package' },
      { name: 'Premium', price: '₹40,000', popular: true, description: 'Complete wedding decoration' },
      { name: 'Luxury', price: '₹60,000', popular: false, description: 'Premium luxury experience' }
    ]
  };

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    const stars = [];

    // Full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg key={`full-${i}`} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }

    // Half star
    if (hasHalfStar) {
      stars.push(
        <svg key="half" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
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
        <svg key={`empty-${i}`} className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }

    return stars;
  };

  const handleBookNow = () => {
    navigate('/booking/summary');
  };

  const handleContact = (type) => {
    // Handle different contact methods
    console.log(`Contact via ${type}`);
  };

  return (
    <div 
      className="min-h-screen relative overflow-hidden"
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

      {/* Header Banner Section */}
      <div className="relative z-10">
        {/* Banner Image */}
        <div className="h-80 relative overflow-hidden">
          <img 
            src={vendor.bannerImage} 
            alt={vendor.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          <div 
            className="absolute inset-0 hidden items-center justify-center"
            style={{ 
              background: `linear-gradient(135deg, ${theme.colors.primary}40, ${theme.colors.secondary})`
            }}
          >
            <svg className="w-20 h-20" viewBox="0 0 24 24" fill={theme.colors.primary}>
              <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z"/>
            </svg>
          </div>
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
          
          {/* Back Button */}
          <button 
            onClick={() => navigate(-1)}
            className="absolute top-12 left-6 w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-105 bg-white/80 backdrop-blur-sm"
          >
            <svg className="w-6 h-6" style={{ color: theme.colors.textPrimary }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Favorite Button */}
          <button 
            className="absolute top-12 right-6 w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-105 bg-white/80 backdrop-blur-sm"
          >
            <svg className="w-6 h-6" style={{ color: theme.colors.primary }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
        </div>

        {/* Rounded Bottom Card - Overlapping Banner */}
        <div 
          className="relative -mt-8 mx-4 p-6 shadow-xl mb-6 bg-white/95 backdrop-blur-sm border border-white/20"
          style={{ 
            borderRadius: theme.radius.xl
          }}
        >
          {/* Vendor Header Info */}
          <div className="mb-6">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <div className="flex items-center mb-2">
                  <h1 
                    className="text-2xl font-bold mr-2"
                    style={{ color: theme.colors.textPrimary }}
                  >
                    {vendor.name}
                  </h1>
                  {vendor.verified && (
                    <div className="bg-blue-500 rounded-full p-1">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                </div>
                
                <div className="flex items-center mb-2">
                  <div className="flex items-center mr-3">
                    {renderStars(vendor.rating)}
                  </div>
                  <span 
                    className="text-lg font-semibold mr-2"
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
                
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2" style={{ color: theme.colors.textSecondary }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span 
                    className="text-sm"
                    style={{ color: theme.colors.textSecondary }}
                  >
                    {vendor.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Price Section */}
            <div className="flex items-center justify-between p-4 rounded-lg" style={{ backgroundColor: theme.colors.secondary }}>
              <div>
                <div className="flex items-center">
                  <span 
                    className="text-2xl font-bold mr-2"
                    style={{ color: theme.colors.primary }}
                  >
                    {vendor.price}
                  </span>
                  <span 
                    className="text-lg line-through"
                    style={{ color: theme.colors.textSecondary }}
                  >
                    {vendor.originalPrice}
                  </span>
                </div>
                <p 
                  className="text-sm"
                  style={{ color: theme.colors.textSecondary }}
                >
                  Starting price • Save ₹5,000
                </p>
              </div>
              <div className="w-10 h-10 rounded-full flex items-center justify-center" 
                   style={{ backgroundColor: theme.colors.primary + '20' }}>
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill={theme.colors.primary}>
                  <path d="M7 15H9C9 16.08 10.37 17 12 17C13.63 17 15 16.08 15 15C15 13.9 13.96 13.5 11.76 12.97C9.64 12.44 7 11.78 7 9C7 7.21 8.47 5.69 10.5 5.18V3H13.5V5.18C15.53 5.69 17 7.21 17 9H15C15 7.92 13.63 7 12 7C10.37 7 9 7.92 9 9C9 10.1 10.04 10.5 12.24 11.03C14.36 11.56 17 12.22 17 15C17 16.79 15.53 18.31 13.5 18.82V21H10.5V18.82C8.47 18.31 7 16.79 7 15Z"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Description Section */}
          <div className="mb-6">
            <h3 
              className="text-lg font-bold mb-3"
              style={{ color: theme.colors.textPrimary }}
            >
              About This Vendor
            </h3>
            <p 
              className="text-sm leading-relaxed"
              style={{ color: theme.colors.textSecondary }}
            >
              {showFullDescription ? vendor.description : vendor.shortDescription}
            </p>
            <button
              onClick={() => setShowFullDescription(!showFullDescription)}
              className="text-sm font-medium mt-2 hover:underline transition-all"
              style={{ color: theme.colors.primary }}
            >
              {showFullDescription ? 'Show Less' : 'Read More'}
            </button>
          </div>

          {/* Specialties */}
          <div className="mb-6">
            <h3 
              className="text-lg font-bold mb-3"
              style={{ color: theme.colors.textPrimary }}
            >
              Specialties
            </h3>
            <div className="flex flex-wrap gap-2">
              {vendor.specialties.map((specialty, index) => (
                <span
                  key={index}
                  className="px-3 py-2 text-sm font-medium rounded-full"
                  style={{
                    backgroundColor: theme.colors.secondary,
                    color: theme.colors.primary
                  }}
                >
                  {specialty}
                </span>
              ))}
            </div>
          </div>

          {/* Features Grid */}
          <div className="mb-6">
            <h3 
              className="text-lg font-bold mb-3"
              style={{ color: theme.colors.textPrimary }}
            >
              What's Included
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {vendor.features.map((feature, index) => (
                <div
                  key={index}
                  className="p-3 rounded-lg border border-gray-200 bg-white/80"
                  style={{ borderRadius: theme.radius.md }}
                >
                  <div className="mb-2">{feature.icon}</div>
                  <h4 
                    className="font-semibold text-sm mb-1"
                    style={{ color: theme.colors.textPrimary }}
                  >
                    {feature.title}
                  </h4>
                  <p 
                    className="text-xs"
                    style={{ color: theme.colors.textSecondary }}
                  >
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Package Options */}
          <div className="mb-6">
            <h3 
              className="text-lg font-bold mb-4"
              style={{ color: theme.colors.textPrimary }}
            >
              Choose Your Package
            </h3>
            <div className="space-y-3">
              {vendor.packages.map((pkg, index) => (
                <button
                  key={index}
                  className={`w-full p-4 rounded-lg border-2 transition-all hover:scale-[1.02] text-left ${
                    pkg.popular ? 'border-2 shadow-lg' : 'border border-gray-200'
                  }`}
                  style={{
                    backgroundColor: pkg.popular ? theme.colors.secondary : theme.colors.white,
                    borderColor: pkg.popular ? theme.colors.primary : '#E5E7EB',
                    borderRadius: theme.radius.lg
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      {pkg.popular && (
                        <div 
                          className="text-xs font-bold mb-2 inline-block px-2 py-1 rounded-full"
                          style={{ 
                            color: theme.colors.primary,
                            backgroundColor: theme.colors.primary + '20'
                          }}
                        >
                          MOST POPULAR
                        </div>
                      )}
                      <div className="flex items-center justify-between mb-2">
                        <h4 
                          className="font-bold text-lg"
                          style={{ color: theme.colors.textPrimary }}
                        >
                          {pkg.name}
                        </h4>
                        <div 
                          className="text-xl font-bold"
                          style={{ color: theme.colors.primary }}
                        >
                          {pkg.price}
                        </div>
                      </div>
                      <p 
                        className="text-sm"
                        style={{ color: theme.colors.textSecondary }}
                      >
                        {pkg.description}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Image Gallery Slider */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h3 
                className="text-lg font-bold"
                style={{ color: theme.colors.textPrimary }}
              >
                Gallery
              </h3>
              <button 
                className="text-sm font-medium hover:underline transition-all"
                style={{ color: theme.colors.primary }}
              >
                View All ({vendor.gallery.length})
              </button>
            </div>
            <div className="flex space-x-3 overflow-x-auto pb-2 scrollbar-hide">
              {vendor.gallery.map((image, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden shadow-lg cursor-pointer transition-all hover:scale-105"
                  style={{ borderRadius: theme.radius.md }}
                  onClick={() => {
                    // Handle image view/modal
                    console.log('View image:', image);
                  }}
                >
                  <img 
                    src={image} 
                    alt={`${vendor.name} gallery ${index + 1}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div 
                    className="w-full h-full hidden items-center justify-center"
                    style={{ backgroundColor: theme.colors.secondary }}
                  >
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill={theme.colors.primary}>
                      <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z"/>
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Options */}
          <div className="mb-8">
            <h3 
              className="text-lg font-bold mb-3"
              style={{ color: theme.colors.textPrimary }}
            >
              Get In Touch
            </h3>
            <div className="flex space-x-3">
              <button
                onClick={() => handleContact('phone')}
                className="flex-1 p-3 rounded-lg border border-gray-300 flex items-center justify-center transition-all hover:scale-105 bg-white/80"
                style={{ 
                  borderRadius: theme.radius.md,
                  minHeight: '48px'
                }}
              >
                <svg className="w-5 h-5 mr-2" style={{ color: theme.colors.primary }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span 
                  className="font-medium"
                  style={{ color: theme.colors.textPrimary }}
                >
                  Call
                </span>
              </button>
              <button
                onClick={() => handleContact('whatsapp')}
                className="flex-1 p-3 rounded-lg border border-gray-300 flex items-center justify-center transition-all hover:scale-105 bg-white/80"
                style={{ 
                  borderRadius: theme.radius.md,
                  minHeight: '48px'
                }}
              >
                <svg className="w-5 h-5 mr-2" style={{ color: theme.colors.primary }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <span 
                  className="font-medium"
                  style={{ color: theme.colors.textPrimary }}
                >
                  WhatsApp
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Bottom CTA */}
      <div 
        className="fixed bottom-0 left-0 right-0 p-4 border-t border-gray-200 safe-area-pb bg-white/95 backdrop-blur-sm z-20"
      >
        <button
          onClick={handleBookNow}
          className="w-full py-4 px-6 text-white text-lg font-bold rounded-full transition-all hover:scale-105 active:scale-95 shadow-xl hover:shadow-2xl"
          style={{ 
            background: `linear-gradient(135deg, ${theme.colors.primary} 0%, #E91E63 100%)`,
            borderRadius: theme.radius.xl,
            minHeight: '56px'
          }}
        >
          Book Now - {vendor.price}
        </button>
      </div>

      {/* Bottom Spacer for Fixed CTA */}
      <div className="h-24"></div>
    </div>
  );
}

export default VendorDetail;