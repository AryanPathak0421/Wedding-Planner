import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { theme } from '../../../../shared/styles/theme.js';

function BookingSummary() {
  const navigate = useNavigate();
  const [isConfirming, setIsConfirming] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);

  // Mock booking data with real images - in real app this would come from state/context
  const bookingData = {
    service: {
      type: 'Wedding Decoration',
      package: 'Premium Package',
      image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=400&h=300&fit=crop&crop=center'
    },
    vendor: {
      name: 'Elegant Decorations',
      rating: 4.8,
      reviews: 124,
      location: 'Mumbai, Maharashtra',
      verified: true,
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=400&fit=crop&crop=center'
    },
    event: {
      date: '2024-12-15',
      location: 'Grand Ballroom, Mumbai',
      guests: 200
    },
    pricing: {
      basePrice: 40000,
      taxes: 7200,
      discount: 5000,
      total: 42200
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const formatPrice = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const handleConfirmBooking = async () => {
    setIsConfirming(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsConfirming(false);
      setIsConfirmed(true);
      
      // Navigate to success page after a brief delay
      setTimeout(() => {
        navigate('/event/dashboard');
      }, 2000);
    }, 2000);
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

  if (isConfirmed) {
    return (
      <div 
        className="min-h-screen flex items-center justify-center px-6"
        style={{ 
          background: `linear-gradient(135deg, ${theme.colors.background} 0%, #FFF0F5 50%, ${theme.colors.secondary} 100%)`
        }}
      >
        <div 
          className="w-full max-w-sm p-8 text-center shadow-xl bg-white/95 backdrop-blur-sm border border-white/20"
          style={{ 
            borderRadius: theme.radius.xl
          }}
        >
          {/* Success Icon */}
          <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center shadow-lg"
               style={{ 
                 background: `linear-gradient(135deg, ${theme.colors.primary} 0%, #E91E63 100%)`
               }}>
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          
          <h2 
            className="text-2xl font-bold mb-4"
            style={{ color: theme.colors.textPrimary }}
          >
            Booking Confirmed!
          </h2>
          <p 
            className="text-sm mb-6 leading-relaxed"
            style={{ color: theme.colors.textSecondary }}
          >
            Your wedding service has been successfully booked. {bookingData.vendor.name} will contact you within 24 hours to discuss the details.
          </p>
          
          {/* Booking Reference */}
          <div 
            className="p-3 rounded-lg mb-6"
            style={{ backgroundColor: theme.colors.secondary }}
          >
            <p 
              className="text-xs font-medium mb-1"
              style={{ color: theme.colors.textSecondary }}
            >
              Booking Reference
            </p>
            <p 
              className="font-bold"
              style={{ color: theme.colors.primary }}
            >
              #WED{Math.random().toString(36).substring(2, 8).toUpperCase()}
            </p>
          </div>
          
          <div className="animate-pulse">
            <div 
              className="w-2 h-2 rounded-full mx-auto"
              style={{ backgroundColor: theme.colors.primary }}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="min-h-screen"
      style={{ backgroundColor: theme.colors.background }}
    >
      {/* Header */}
      <div className="flex items-center px-6 pt-12 pb-6">
        <button 
          onClick={() => navigate(-1)}
          className="w-12 h-12 rounded-full flex items-center justify-center transition-all hover:scale-105 mr-4 bg-white/80 backdrop-blur-sm shadow-sm"
        >
          <svg className="w-6 h-6" style={{ color: theme.colors.textPrimary }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full mr-3 flex items-center justify-center shadow-lg"
               style={{ 
                 background: `linear-gradient(135deg, ${theme.colors.primary} 0%, #E91E63 100%)`
               }}>
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h1 
            className="text-2xl font-bold"
            style={{ color: theme.colors.textPrimary }}
          >
            Booking Summary
          </h1>
        </div>
      </div>

      <div className="px-6 pb-32">
        {/* Selected Service Details */}
        <div 
          className="p-6 mb-6 shadow-xl bg-white/95 backdrop-blur-sm border border-white/20"
          style={{ 
            borderRadius: theme.radius.xl
          }}
        >
          <h3 
            className="text-lg font-bold mb-4"
            style={{ color: theme.colors.textPrimary }}
          >
            Selected Service
          </h3>
          
          <div className="flex items-center mb-4">
            <div className="w-16 h-16 rounded-lg mr-4 overflow-hidden shadow-lg flex-shrink-0">
              <img 
                src={bookingData.service.image} 
                alt={bookingData.service.type}
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
            <div className="flex-1">
              <h4 
                className="text-lg font-bold mb-1"
                style={{ color: theme.colors.textPrimary }}
              >
                {bookingData.service.type}
              </h4>
              <p 
                className="text-sm font-medium"
                style={{ color: theme.colors.primary }}
              >
                {bookingData.service.package}
              </p>
            </div>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between py-2">
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-3" style={{ color: theme.colors.textSecondary }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span 
                  className="text-sm font-medium"
                  style={{ color: theme.colors.textSecondary }}
                >
                  Event Date
                </span>
              </div>
              <span 
                className="font-semibold"
                style={{ color: theme.colors.textPrimary }}
              >
                {formatDate(bookingData.event.date)}
              </span>
            </div>
            
            <div className="flex items-center justify-between py-2">
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-3" style={{ color: theme.colors.textSecondary }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span 
                  className="text-sm font-medium"
                  style={{ color: theme.colors.textSecondary }}
                >
                  Venue
                </span>
              </div>
              <span 
                className="font-semibold text-right"
                style={{ color: theme.colors.textPrimary }}
              >
                {bookingData.event.location}
              </span>
            </div>
            
            <div className="flex items-center justify-between py-2">
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-3" style={{ color: theme.colors.textSecondary }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span 
                  className="text-sm font-medium"
                  style={{ color: theme.colors.textSecondary }}
                >
                  Expected Guests
                </span>
              </div>
              <span 
                className="font-semibold"
                style={{ color: theme.colors.textPrimary }}
              >
                {bookingData.event.guests} people
              </span>
            </div>
          </div>
        </div>

        {/* Vendor Details */}
        <div 
          className="p-6 mb-6 shadow-xl bg-white/95 backdrop-blur-sm border border-white/20"
          style={{ 
            borderRadius: theme.radius.xl
          }}
        >
          <h3 
            className="text-lg font-bold mb-4"
            style={{ color: theme.colors.textPrimary }}
          >
            Vendor Details
          </h3>
          
          <div className="flex items-center">
            <div className="w-16 h-16 rounded-full mr-4 overflow-hidden shadow-lg flex-shrink-0">
              <img 
                src={bookingData.vendor.image} 
                alt={bookingData.vendor.name}
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
            <div className="flex-1 min-w-0">
              <div className="flex items-center mb-2">
                <h4 
                  className="font-bold text-lg mr-2 truncate"
                  style={{ color: theme.colors.textPrimary }}
                >
                  {bookingData.vendor.name}
                </h4>
                {bookingData.vendor.verified && (
                  <div className="bg-blue-500 rounded-full p-1 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </div>
              
              <div className="flex items-center mb-2">
                <div className="flex items-center mr-2">
                  {renderStars(bookingData.vendor.rating)}
                </div>
                <span 
                  className="text-sm font-semibold mr-1"
                  style={{ color: theme.colors.textPrimary }}
                >
                  {bookingData.vendor.rating}
                </span>
                <span 
                  className="text-sm"
                  style={{ color: theme.colors.textSecondary }}
                >
                  ({bookingData.vendor.reviews} reviews)
                </span>
              </div>
              
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-1 flex-shrink-0" style={{ color: theme.colors.textSecondary }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span 
                  className="text-sm truncate"
                  style={{ color: theme.colors.textSecondary }}
                >
                  {bookingData.vendor.location}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Price Summary */}
        <div 
          className="p-6 shadow-xl bg-white/95 backdrop-blur-sm border border-white/20"
          style={{ 
            borderRadius: theme.radius.xl
          }}
        >
          <h3 
            className="text-lg font-bold mb-4"
            style={{ color: theme.colors.textPrimary }}
          >
            Price Breakdown
          </h3>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between py-2">
              <span 
                className="text-sm font-medium"
                style={{ color: theme.colors.textSecondary }}
              >
                {bookingData.service.package}
              </span>
              <span 
                className="font-semibold"
                style={{ color: theme.colors.textPrimary }}
              >
                {formatPrice(bookingData.pricing.basePrice)}
              </span>
            </div>
            
            <div className="flex items-center justify-between py-2">
              <span 
                className="text-sm font-medium"
                style={{ color: theme.colors.textSecondary }}
              >
                Taxes & Service Fees
              </span>
              <span 
                className="font-semibold"
                style={{ color: theme.colors.textPrimary }}
              >
                {formatPrice(bookingData.pricing.taxes)}
              </span>
            </div>
            
            <div className="flex items-center justify-between py-2">
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
                <span 
                  className="text-sm font-medium text-green-600"
                >
                  Early Bird Discount
                </span>
              </div>
              <span 
                className="font-semibold text-green-600"
              >
                -{formatPrice(bookingData.pricing.discount)}
              </span>
            </div>
            
            <div className="border-t border-gray-200 pt-4">
              <div className="flex items-center justify-between">
                <span 
                  className="text-lg font-bold"
                  style={{ color: theme.colors.textPrimary }}
                >
                  Total Amount
                </span>
                <span 
                  className="text-2xl font-bold"
                  style={{ color: theme.colors.primary }}
                >
                  {formatPrice(bookingData.pricing.total)}
                </span>
              </div>
            </div>
          </div>
          
          {/* Savings Highlight */}
          <div 
            className="mt-6 p-4 rounded-lg border-2 border-green-200"
            style={{ backgroundColor: '#10B98110' }}
          >
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center mr-3 flex-shrink-0">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p 
                  className="text-sm font-bold text-green-700 mb-1"
                >
                  Great Deal!
                </p>
                <p 
                  className="text-xs text-green-600"
                >
                  You save {formatPrice(bookingData.pricing.discount)} with this booking
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Bottom CTA */}
      <div 
        className="fixed bottom-0 left-0 right-0 p-6 border-t border-gray-200"
        style={{ backgroundColor: theme.colors.white }}
      >
        <button
          onClick={handleConfirmBooking}
          disabled={isConfirming}
          className={`w-full py-4 px-6 text-white text-lg font-bold rounded-full transition-all ${
            isConfirming 
              ? 'opacity-75 cursor-not-allowed' 
              : 'hover:scale-105 active:scale-95'
          }`}
          style={{ 
            backgroundColor: theme.colors.primary,
            borderRadius: theme.radius.xl
          }}
        >
          {isConfirming ? (
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
              Confirming Booking...
            </div>
          ) : (
            `Confirm Booking - ${formatPrice(bookingData.pricing.total)}`
          )}
        </button>
        
        <p 
          className="text-center text-xs mt-3"
          style={{ color: theme.colors.textSecondary }}
        >
          By confirming, you agree to our Terms of Service and Privacy Policy
        </p>
      </div>
    </div>
  );
}

export default BookingSummary;