import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { theme } from '../../../../shared/styles/theme.js';

function VenueList() {
  const navigate = useNavigate();
  const { category } = useParams();
  const [venues, setVenues] = useState([]);
  const [loading, setLoading] = useState(true);

  // Mock venue data - in real app this would come from API
  const mockVenues = {
    'banquet-halls': [
      {
        id: 1,
        name: 'Grand Ballroom',
        rating: 4.8,
        reviews: 156,
        location: 'Mumbai, Maharashtra',
        price: '₹2,00,000 - ₹5,00,000',
        capacity: '200-500 guests',
        image: 'https://images.unsplash.com/photo-1519167758481-83f29c8e8d4b?w=400&h=300&fit=crop&crop=center',
        verified: true,
        amenities: ['AC Halls', 'Parking', 'Catering', 'Decoration']
      },
      {
        id: 2,
        name: 'Royal Palace Banquets',
        rating: 4.9,
        reviews: 203,
        location: 'Delhi, NCR',
        price: '₹3,00,000 - ₹8,00,000',
        capacity: '300-800 guests',
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop&crop=center',
        verified: true,
        amenities: ['Luxury Interiors', 'Valet Parking', 'In-house Catering', 'Bridal Room']
      }
    ],
    'marriage-garden-lawns': [
      {
        id: 3,
        name: 'Garden Paradise',
        rating: 4.7,
        reviews: 89,
        location: 'Bangalore, Karnataka',
        price: '₹1,50,000 - ₹4,00,000',
        capacity: '150-400 guests',
        image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=400&h=300&fit=crop&crop=center',
        verified: true,
        amenities: ['Open Lawn', 'Garden Setting', 'Outdoor Catering', 'Parking']
      }
    ],
    'wedding-resorts': [
      {
        id: 4,
        name: 'Luxury Wedding Resort',
        rating: 4.9,
        reviews: 124,
        location: 'Goa',
        price: '₹5,00,000 - ₹15,00,000',
        capacity: '100-300 guests',
        image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop&crop=center',
        verified: true,
        amenities: ['Beach Access', 'Accommodation', 'Spa Services', 'Multiple Venues']
      }
    ],
    'goa': [
      {
        id: 5,
        name: 'Beachside Paradise Resort',
        rating: 4.8,
        reviews: 167,
        location: 'North Goa',
        price: '₹4,00,000 - ₹12,00,000',
        capacity: '80-250 guests',
        image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=400&h=300&fit=crop&crop=center',
        verified: true,
        amenities: ['Beach Wedding', 'Resort Stay', 'Water Sports', 'Sunset Views']
      },
      {
        id: 6,
        name: 'Tropical Beach Villa',
        rating: 4.7,
        reviews: 98,
        location: 'South Goa',
        price: '₹3,00,000 - ₹8,00,000',
        capacity: '50-150 guests',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop&crop=center',
        verified: true,
        amenities: ['Private Beach', 'Villa Accommodation', 'Poolside Venue', 'Catering']
      }
    ],
    'mumbai': [
      {
        id: 7,
        name: 'Mumbai Grand Palace',
        rating: 4.8,
        reviews: 234,
        location: 'Bandra, Mumbai',
        price: '₹4,00,000 - ₹10,00,000',
        capacity: '200-600 guests',
        image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=400&h=300&fit=crop&crop=center',
        verified: true,
        amenities: ['Sea View', 'Valet Parking', 'Multiple Halls', 'Rooftop Venue']
      }
    ],
    'jaipur': [
      {
        id: 8,
        name: 'Heritage Palace Hotel',
        rating: 4.9,
        reviews: 189,
        location: 'Jaipur, Rajasthan',
        price: '₹6,00,000 - ₹20,00,000',
        capacity: '150-500 guests',
        image: 'https://images.unsplash.com/photo-1599661046827-dacde6976549?w=400&h=300&fit=crop&crop=center',
        verified: true,
        amenities: ['Royal Architecture', 'Palace Grounds', 'Traditional Decor', 'Heritage Experience']
      }
    ]
  };

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setVenues(mockVenues[category] || []);
      setLoading(false);
    }, 1000);
  }, [category]);

  const getCategoryTitle = (category) => {
    const titles = {
      'banquet-halls': 'Banquet Halls',
      'marriage-garden-lawns': 'Marriage Garden / Lawns',
      'wedding-resorts': 'Wedding Resorts',
      'small-function-party-halls': 'Small Function / Party Halls',
      'destination-wedding-venues': 'Destination Wedding Venues',
      'kalyana-mandapams': 'Kalyana Mandapams',
      '4-star-above-hotels': '4 Star & Above Hotels',
      '5-star-luxury-hotels': '5 Star Luxury Hotels',
      'wedding-farmhouses': 'Wedding Farmhouses',
      'mumbai': 'Mumbai Venues',
      'bangalore': 'Bangalore Venues',
      'pune': 'Pune Venues',
      'kolkata': 'Kolkata Venues',
      'jaipur': 'Jaipur Venues',
      'lucknow': 'Lucknow Venues',
      'hyderabad': 'Hyderabad Venues',
      'more-cities': 'More Cities',
      'goa': 'Goa Venues',
      'jaipur-destination': 'Jaipur Destination Venues',
      'udaipur': 'Udaipur Venues',
      'jodhpur': 'Jodhpur Venues',
      'thailand': 'Thailand Venues',
      'jim-corbett': 'Jim Corbett Venues'
    };
    return titles[category] || 'Venues';
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

  if (loading) {
    return (
      <div 
        className="min-h-screen flex items-center justify-center"
        style={{ backgroundColor: theme.colors.background }}
      >
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 mx-auto mb-4" 
               style={{ borderColor: theme.colors.primary }}></div>
          <p style={{ color: theme.colors.textSecondary }}>Loading venues...</p>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="min-h-screen pb-24"
      style={{ backgroundColor: theme.colors.background }}
    >
      {/* Header */}
      <div className="flex items-center px-6 pt-12 pb-6">
        <button 
          onClick={() => navigate('/venues')}
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <div>
            <h1 
              className="text-2xl font-bold"
              style={{ color: theme.colors.textPrimary }}
            >
              {getCategoryTitle(category)}
            </h1>
            <p 
              className="text-sm"
              style={{ color: theme.colors.textSecondary }}
            >
              {venues.length} venues found
            </p>
          </div>
        </div>
      </div>

      {/* Venues List */}
      <div className="px-6">
        {venues.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center"
                 style={{ backgroundColor: theme.colors.secondary }}>
              <svg className="w-10 h-10" style={{ color: theme.colors.primary }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 
              className="text-xl font-bold mb-2"
              style={{ color: theme.colors.textPrimary }}
            >
              No venues found
            </h3>
            <p 
              className="text-sm mb-6"
              style={{ color: theme.colors.textSecondary }}
            >
              We're working on adding more venues in this category
            </p>
            <button
              onClick={() => navigate('/venues')}
              className="px-6 py-3 text-white font-bold rounded-full transition-all hover:scale-105"
              style={{ 
                background: `linear-gradient(135deg, ${theme.colors.primary} 0%, #E91E63 100%)`,
                borderRadius: theme.radius.lg
              }}
            >
              Browse Other Categories
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {venues.map((venue) => (
              <div
                key={venue.id}
                onClick={() => navigate(`/venue/${venue.id}`)}
                className="p-6 shadow-xl bg-white/95 backdrop-blur-sm border border-white/20 transition-all hover:scale-105 active:scale-95 cursor-pointer"
                style={{ 
                  borderRadius: theme.radius.xl
                }}
              >
                <div className="flex items-start">
                  {/* Venue Image */}
                  <div className="w-20 h-20 rounded-lg mr-4 overflow-hidden shadow-lg flex-shrink-0">
                    <img 
                      src={venue.image} 
                      alt={venue.name}
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
                        <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                      </svg>
                    </div>
                  </div>

                  {/* Venue Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center mb-2">
                      <h3 
                        className="font-bold text-lg mr-2 truncate"
                        style={{ color: theme.colors.textPrimary }}
                      >
                        {venue.name}
                      </h3>
                      {venue.verified && (
                        <div className="bg-blue-500 rounded-full p-1 flex-shrink-0">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      )}
                    </div>
                    
                    <div className="flex items-center mb-2">
                      <div className="flex items-center mr-2">
                        {renderStars(venue.rating)}
                      </div>
                      <span 
                        className="text-sm font-semibold mr-1"
                        style={{ color: theme.colors.textPrimary }}
                      >
                        {venue.rating}
                      </span>
                      <span 
                        className="text-sm"
                        style={{ color: theme.colors.textSecondary }}
                      >
                        ({venue.reviews} reviews)
                      </span>
                    </div>
                    
                    <div className="flex items-center mb-2">
                      <svg className="w-4 h-4 mr-1 flex-shrink-0" style={{ color: theme.colors.textSecondary }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span 
                        className="text-sm truncate mr-4"
                        style={{ color: theme.colors.textSecondary }}
                      >
                        {venue.location}
                      </span>
                      <svg className="w-4 h-4 mr-1 flex-shrink-0" style={{ color: theme.colors.textSecondary }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      <span 
                        className="text-sm"
                        style={{ color: theme.colors.textSecondary }}
                      >
                        {venue.capacity}
                      </span>
                    </div>

                    <div className="mb-3">
                      <p 
                        className="text-sm font-semibold"
                        style={{ color: theme.colors.primary }}
                      >
                        {venue.price}
                      </p>
                    </div>

                    {/* Amenities */}
                    <div className="flex flex-wrap gap-2">
                      {venue.amenities.slice(0, 3).map((amenity, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 text-xs font-medium rounded-full"
                          style={{
                            backgroundColor: theme.colors.secondary,
                            color: theme.colors.primary
                          }}
                        >
                          {amenity}
                        </span>
                      ))}
                      {venue.amenities.length > 3 && (
                        <span
                          className="px-2 py-1 text-xs font-medium rounded-full"
                          style={{
                            backgroundColor: theme.colors.secondary,
                            color: theme.colors.primary
                          }}
                        >
                          +{venue.amenities.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default VenueList;