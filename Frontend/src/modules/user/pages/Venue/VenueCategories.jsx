import { useNavigate } from 'react-router-dom';
import { theme } from '../../../../shared/styles/theme.js';

function VenueCategories() {
  const navigate = useNavigate();

  const venueCategories = [
    {
      group: 'BY TYPE',
      items: [
        {
          id: 'banquet-halls',
          name: 'Banquet Halls',
          description: 'Elegant indoor wedding venues',
          image: 'https://images.unsplash.com/photo-1519167758481-83f29c8e8d4b?w=400&h=300&fit=crop&crop=center',
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          )
        },
        {
          id: 'marriage-garden-lawns',
          name: 'Marriage Garden / Lawns',
          description: 'Beautiful outdoor garden venues',
          image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=400&h=300&fit=crop&crop=center',
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          )
        },
        {
          id: 'wedding-resorts',
          name: 'Wedding Resorts',
          description: 'Luxury resort wedding venues',
          image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop&crop=center',
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          )
        },
        {
          id: 'small-function-party-halls',
          name: 'Small Function / Party Halls',
          description: 'Intimate venues for smaller gatherings',
          image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=300&fit=crop&crop=center',
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          )
        },
        {
          id: 'destination-wedding-venues',
          name: 'Destination Wedding Venues',
          description: 'Exotic destination wedding locations',
          image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop&crop=center',
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          )
        },
        {
          id: 'kalyana-mandapams',
          name: 'Kalyana Mandapams',
          description: 'Traditional South Indian wedding halls',
          image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=400&h=300&fit=crop&crop=center',
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          )
        },
        {
          id: '4-star-above-hotels',
          name: '4 Star & Above Hotels',
          description: 'Premium hotel wedding venues',
          image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop&crop=center',
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          )
        },
        {
          id: '5-star-luxury-hotels',
          name: '5 Star Luxury Hotels',
          description: 'Ultra-luxury hotel wedding venues',
          image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop&crop=center',
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
          )
        },
        {
          id: 'wedding-farmhouses',
          name: 'Wedding Farmhouses',
          description: 'Rustic farmhouse wedding venues',
          image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop&crop=center',
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          )
        }
      ]
    },
    {
      group: 'BY CITY',
      items: [
        {
          id: 'mumbai',
          name: 'Mumbai',
          description: 'Wedding venues in Mumbai',
          image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=400&h=300&fit=crop&crop=center',
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          )
        },
        {
          id: 'bangalore',
          name: 'Bangalore',
          description: 'Wedding venues in Bangalore',
          image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=400&h=300&fit=crop&crop=center',
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          )
        },
        {
          id: 'pune',
          name: 'Pune',
          description: 'Wedding venues in Pune',
          image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop&crop=center',
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          )
        },
        {
          id: 'kolkata',
          name: 'Kolkata',
          description: 'Wedding venues in Kolkata',
          image: 'https://images.unsplash.com/photo-1558431382-27e303142255?w=400&h=300&fit=crop&crop=center',
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          )
        },
        {
          id: 'jaipur',
          name: 'Jaipur',
          description: 'Wedding venues in Jaipur',
          image: 'https://images.unsplash.com/photo-1599661046827-dacde6976549?w=400&h=300&fit=crop&crop=center',
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          )
        },
        {
          id: 'lucknow',
          name: 'Lucknow',
          description: 'Wedding venues in Lucknow',
          image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=400&h=300&fit=crop&crop=center',
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          )
        },
        {
          id: 'hyderabad',
          name: 'Hyderabad',
          description: 'Wedding venues in Hyderabad',
          image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&crop=center',
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          )
        },
        {
          id: 'more-cities',
          name: 'More',
          description: 'Explore venues in other cities',
          image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=400&h=300&fit=crop&crop=center',
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          )
        }
      ]
    },
    {
      group: 'DESTINATION WEDDING VENUES',
      items: [
        {
          id: 'goa',
          name: 'Goa',
          description: 'Beach wedding destinations in Goa',
          image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=400&h=300&fit=crop&crop=center',
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          )
        },
        {
          id: 'jaipur-destination',
          name: 'Jaipur',
          description: 'Royal palace weddings in Jaipur',
          image: 'https://images.unsplash.com/photo-1599661046827-dacde6976549?w=400&h=300&fit=crop&crop=center',
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          )
        },
        {
          id: 'udaipur',
          name: 'Udaipur',
          description: 'Lake palace weddings in Udaipur',
          image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&crop=center',
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          )
        },
        {
          id: 'jodhpur',
          name: 'Jodhpur',
          description: 'Desert palace weddings in Jodhpur',
          image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=400&h=300&fit=crop&crop=center',
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          )
        },
        {
          id: 'thailand',
          name: 'Thailand',
          description: 'Exotic beach weddings in Thailand',
          image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop&crop=center',
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          )
        },
        {
          id: 'jim-corbett',
          name: 'Jim Corbett',
          description: 'Wildlife resort weddings in Jim Corbett',
          image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop&crop=center',
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          )
        }
      ]
    }
  ];

  const handleCategoryClick = (categoryId) => {
    navigate(`/venues/${categoryId}`);
  };

  return (
    <div 
      className="min-h-screen pb-24"
      style={{ backgroundColor: theme.colors.background }}
    >
      {/* Header */}
      <div className="flex items-center px-6 pt-12 pb-6">
        <button 
          onClick={() => navigate('/home')}
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
              Venue Categories
            </h1>
            <p 
              className="text-sm"
              style={{ color: theme.colors.textSecondary }}
            >
              Find the perfect venue for your wedding
            </p>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="px-6">
        {venueCategories.map((group, groupIndex) => (
          <div key={groupIndex} className="mb-8">
            {/* Group Header */}
            <div className="flex items-center mb-4">
              <div className="w-1 h-6 rounded-full mr-3"
                   style={{ backgroundColor: theme.colors.primary }} />
              <h2 
                className="text-lg font-bold"
                style={{ color: theme.colors.textPrimary }}
              >
                {group.group}
              </h2>
            </div>

            {/* Group Items - Special layout for Destination Wedding Venues */}
            {group.group === 'DESTINATION WEDDING VENUES' ? (
              <div className="grid grid-cols-2 gap-4">
                {group.items.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleCategoryClick(item.id)}
                    className="relative overflow-hidden rounded-xl border border-white/20 transition-all hover:scale-105 active:scale-95 shadow-xl bg-white/95 backdrop-blur-sm"
                    style={{ 
                      borderRadius: theme.radius.xl,
                      height: '160px'
                    }}
                  >
                    {/* Background Image with Overlay */}
                    <div 
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ 
                        backgroundImage: `url(${item.image})`,
                        filter: 'brightness(0.7)'
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    
                    {/* Content */}
                    <div className="relative z-10 flex flex-col justify-end h-full p-4">
                      <div className="w-8 h-8 rounded-full mb-2 flex items-center justify-center bg-white/20 backdrop-blur-sm">
                        <div style={{ color: 'white' }}>
                          {item.icon}
                        </div>
                      </div>
                      <h3 className="font-bold text-white text-lg mb-1">
                        {item.name}
                      </h3>
                      <p className="text-white/90 text-xs">
                        {item.description}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-4">
                {group.items.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleCategoryClick(item.id)}
                    className="relative overflow-hidden rounded-xl border border-white/20 transition-all hover:scale-105 active:scale-95 shadow-xl bg-white/95 backdrop-blur-sm"
                    style={{ borderRadius: theme.radius.xl }}
                  >
                    <div className="flex items-center p-4">
                      {/* Category Image */}
                      <div className="w-16 h-16 rounded-lg mr-4 overflow-hidden shadow-lg flex-shrink-0">
                        <img 
                          src={item.image} 
                          alt={item.name}
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
                          <div style={{ color: theme.colors.primary }}>
                            {item.icon}
                          </div>
                        </div>
                      </div>

                      {/* Category Info */}
                      <div className="flex-1 text-left">
                        <h3 
                          className="font-bold text-lg mb-1"
                          style={{ color: theme.colors.textPrimary }}
                        >
                          {item.name}
                        </h3>
                        <p 
                          className="text-sm"
                          style={{ color: theme.colors.textSecondary }}
                        >
                          {item.description}
                        </p>
                      </div>

                      {/* Arrow Icon */}
                      <div className="w-8 h-8 rounded-full flex items-center justify-center ml-4"
                           style={{ backgroundColor: theme.colors.secondary }}>
                        <svg className="w-4 h-4" style={{ color: theme.colors.primary }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default VenueCategories;