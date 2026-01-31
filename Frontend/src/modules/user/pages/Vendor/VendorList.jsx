import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { theme } from '../../../../shared/styles/theme.js';

function VendorList() {
  const navigate = useNavigate();
  const { category } = useParams();
  const [vendors, setVendors] = useState([]);
  const [loading, setLoading] = useState(true);

  // Mock vendor data - in real app this would come from API
  const mockVendors = {
    'photographers': [
      {
        id: 1,
        name: 'Candid Captures',
        rating: 4.8,
        reviews: 156,
        location: 'Mumbai, Maharashtra',
        price: '₹50,000 - ₹1,50,000',
        image: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=400&h=300&fit=crop&crop=center',
        verified: true,
        specialties: ['Wedding Photography', 'Pre-wedding Shoots', 'Candid Photography']
      },
      {
        id: 2,
        name: 'Royal Wedding Films',
        rating: 4.9,
        reviews: 203,
        location: 'Delhi, NCR',
        price: '₹75,000 - ₹2,00,000',
        image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=300&fit=crop&crop=center',
        verified: true,
        specialties: ['Cinematic Videos', 'Traditional Photography', 'Drone Shots']
      },
      {
        id: 3,
        name: 'Moments Studio',
        rating: 4.7,
        reviews: 89,
        location: 'Bangalore, Karnataka',
        price: '₹40,000 - ₹1,20,000',
        image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=400&h=300&fit=crop&crop=center',
        verified: false,
        specialties: ['Portrait Photography', 'Event Coverage', 'Photo Albums']
      }
    ],
    'bridal-makeup-artists': [
      {
        id: 4,
        name: 'Glamour by Priya',
        rating: 4.9,
        reviews: 124,
        location: 'Mumbai, Maharashtra',
        price: '₹25,000 - ₹75,000',
        image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400&h=300&fit=crop&crop=center',
        verified: true,
        specialties: ['Bridal Makeup', 'HD Makeup', 'Traditional Look']
      },
      {
        id: 5,
        name: 'Beauty Bliss',
        rating: 4.8,
        reviews: 98,
        location: 'Delhi, NCR',
        price: '₹30,000 - ₹80,000',
        image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=300&fit=crop&crop=center',
        verified: true,
        specialties: ['Airbrush Makeup', 'Party Makeup', 'Hair Styling']
      }
    ],
    'wedding-planners': [
      {
        id: 6,
        name: 'Dream Weddings',
        rating: 4.9,
        reviews: 87,
        location: 'Mumbai, Maharashtra',
        price: '₹1,00,000 - ₹5,00,000',
        image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=300&fit=crop&crop=center',
        verified: true,
        specialties: ['Full Wedding Planning', 'Destination Weddings', 'Budget Management']
      }
    ],
    'decorators': [
      {
        id: 7,
        name: 'Elegant Decorations',
        rating: 4.8,
        reviews: 156,
        location: 'Delhi, NCR',
        price: '₹75,000 - ₹3,00,000',
        image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=400&h=300&fit=crop&crop=center',
        verified: true,
        specialties: ['Mandap Decoration', 'Floral Arrangements', 'Theme Decoration']
      }
    ],
    'djs': [
      {
        id: 8,
        name: 'DJ Beats',
        rating: 4.7,
        reviews: 134,
        location: 'Mumbai, Maharashtra',
        price: '₹15,000 - ₹50,000',
        image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop&crop=center',
        verified: true,
        specialties: ['Wedding DJ', 'Sound System', 'Live Music']
      }
    ],
    'catering-services': [
      {
        id: 9,
        name: 'Royal Caterers',
        rating: 4.8,
        reviews: 245,
        location: 'Mumbai, Maharashtra',
        price: '₹800 - ₹2,000 per plate',
        image: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=400&h=300&fit=crop&crop=center',
        verified: true,
        specialties: ['Multi-cuisine', 'Live Counters', 'Traditional Food']
      }
    ]
  };

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setVendors(mockVendors[category] || []);
      setLoading(false);
    }, 1000);
  }, [category]);

  const getCategoryTitle = (category) => {
    const titles = {
      'photographers': 'Photographers',
      'bridal-makeup-artists': 'Bridal Makeup Artists',
      'family-makeup': 'Family Makeup',
      'wedding-planners': 'Wedding Planners',
      'decorators': 'Decorators',
      'virtual-planning': 'Virtual Planning',
      'mehndi-artists': 'Mehndi Artists',
      'djs': 'DJs',
      'sangeet-choreographers': 'Sangeet Choreographers',
      'wedding-entertainment': 'Wedding Entertainment',
      'invitations': 'Invitations',
      'favors': 'Favors',
      'trousseau-packers': 'Trousseau Packers',
      'invitation-gifts': 'Invitation Gifts',
      'mehndi-favors': 'Mehndi Favors',
      'catering-services': 'Catering Services',
      'cake': 'Cake',
      'chaat-food-stalls': 'Chaat & Food Stalls',
      'bartenders': 'Bartenders'
    };
    return titles[category] || 'Vendors';
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
          <p style={{ color: theme.colors.textSecondary }}>Loading vendors...</p>
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
          onClick={() => navigate('/vendors')}
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
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
              {vendors.length} vendors found
            </p>
          </div>
        </div>
      </div>

      {/* Vendors List */}
      <div className="px-6">
        {vendors.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center"
                 style={{ backgroundColor: theme.colors.secondary }}>
              <svg className="w-10 h-10" style={{ color: theme.colors.primary }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 
              className="text-xl font-bold mb-2"
              style={{ color: theme.colors.textPrimary }}
            >
              No vendors found
            </h3>
            <p 
              className="text-sm mb-6"
              style={{ color: theme.colors.textSecondary }}
            >
              We're working on adding more vendors in this category
            </p>
            <button
              onClick={() => navigate('/vendors')}
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
            {vendors.map((vendor) => (
              <div
                key={vendor.id}
                onClick={() => navigate(`/vendor/${vendor.id}`)}
                className="p-6 shadow-xl bg-white/95 backdrop-blur-sm border border-white/20 transition-all hover:scale-105 active:scale-95 cursor-pointer"
                style={{ 
                  borderRadius: theme.radius.xl
                }}
              >
                <div className="flex items-start">
                  {/* Vendor Image */}
                  <div className="w-20 h-20 rounded-lg mr-4 overflow-hidden shadow-lg flex-shrink-0">
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
                      style={{ backgroundColor: theme.colors.secondary }}
                    >
                      <svg className="w-8 h-8" viewBox="0 0 24 24" fill={theme.colors.primary}>
                        <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z"/>
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
                    
                    <div className="flex items-center mb-3">
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

                    <div className="mb-3">
                      <p 
                        className="text-sm font-semibold"
                        style={{ color: theme.colors.primary }}
                      >
                        {vendor.price}
                      </p>
                    </div>

                    {/* Specialties */}
                    <div className="flex flex-wrap gap-2">
                      {vendor.specialties.slice(0, 3).map((specialty, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 text-xs font-medium rounded-full"
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
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default VendorList;