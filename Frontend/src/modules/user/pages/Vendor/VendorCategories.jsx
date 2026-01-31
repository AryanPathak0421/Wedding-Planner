import { useNavigate } from 'react-router-dom';
import { theme } from '../../../../shared/styles/theme.js';

function VendorCategories() {
  const navigate = useNavigate();

  const vendorCategories = [
    {
      group: 'PHOTOGRAPHERS',
      items: [
        {
          id: 'photographers',
          name: 'Photographers',
          description: 'Professional wedding photographers',
          image: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=400&h=300&fit=crop&crop=center',
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          )
        }
      ]
    },
    {
      group: 'MAKEUP',
      items: [
        {
          id: 'bridal-makeup-artists',
          name: 'Bridal Makeup Artists',
          description: 'Professional bridal makeup services',
          image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400&h=300&fit=crop&crop=center',
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v7a4 4 0 004 4h4V5z" />
            </svg>
          )
        },
        {
          id: 'family-makeup',
          name: 'Family Makeup',
          description: 'Makeup services for family members',
          image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=300&fit=crop&crop=center',
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          )
        }
      ]
    },
    {
      group: 'PLANNING & DECOR',
      items: [
        {
          id: 'wedding-planners',
          name: 'Wedding Planners',
          description: 'Complete wedding planning services',
          image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=300&fit=crop&crop=center',
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          )
        },
        {
          id: 'decorators',
          name: 'Decorators',
          description: 'Wedding decoration specialists',
          image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=400&h=300&fit=crop&crop=center',
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          )
        }
      ]
    },
    {
      group: 'VIRTUAL PLANNING',
      items: [
        {
          id: 'virtual-planning',
          name: 'Virtual Planning',
          description: 'Online wedding planning services',
          image: 'https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=400&h=300&fit=crop&crop=center',
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          )
        }
      ]
    },
    {
      group: 'MEHNDI',
      items: [
        {
          id: 'mehndi-artists',
          name: 'Mehndi Artists',
          description: 'Professional mehndi artists',
          image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=400&h=300&fit=crop&crop=center',
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v7a4 4 0 004 4h4V5z" />
            </svg>
          )
        }
      ]
    },
    {
      group: 'MUSIC & DANCE',
      items: [
        {
          id: 'djs',
          name: 'DJs',
          description: 'Professional wedding DJs',
          image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop&crop=center',
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
            </svg>
          )
        },
        {
          id: 'sangeet-choreographers',
          name: 'Sangeet Choreographers',
          description: 'Dance choreographers for sangeet',
          image: 'https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=400&h=300&fit=crop&crop=center',
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          )
        },
        {
          id: 'wedding-entertainment',
          name: 'Wedding Entertainment',
          description: 'Live entertainment for weddings',
          image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&h=300&fit=crop&crop=center',
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          )
        }
      ]
    },
    {
      group: 'INVITES & GIFTS',
      items: [
        {
          id: 'invitations',
          name: 'Invitations',
          description: 'Wedding invitation cards',
          image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop&crop=center',
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          )
        },
        {
          id: 'favors',
          name: 'Favors',
          description: 'Wedding favor gifts',
          image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=400&h=300&fit=crop&crop=center',
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
            </svg>
          )
        },
        {
          id: 'trousseau-packers',
          name: 'Trousseau Packers',
          description: 'Professional trousseau packing',
          image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop&crop=center',
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
          )
        },
        {
          id: 'invitation-gifts',
          name: 'Invitation Gifts',
          description: 'Gifts for wedding invitations',
          image: 'https://images.unsplash.com/photo-1607344645866-009c7d0f2e8d?w=400&h=300&fit=crop&crop=center',
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
            </svg>
          )
        },
        {
          id: 'mehndi-favors',
          name: 'Mehndi Favors',
          description: 'Special favors for mehndi ceremony',
          image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&crop=center',
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          )
        }
      ]
    },
    {
      group: 'FOOD',
      items: [
        {
          id: 'catering-services',
          name: 'Catering Services',
          description: 'Professional wedding catering',
          image: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=400&h=300&fit=crop&crop=center',
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17M17 13v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
            </svg>
          )
        },
        {
          id: 'cake',
          name: 'Cake',
          description: 'Wedding cake specialists',
          image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop&crop=center',
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0A2.704 2.704 0 003 15.546V6.454c0-.365.093-.718.267-1.028.174-.31.267-.682.267-1.026 0-.365-.093-.718-.267-1.028C3.093 3.062 3 2.708 3 2.343A2.704 2.704 0 015.704 0c.365 0 .718.093 1.028.267.31.174.682.267 1.026.267.365 0 .718-.093 1.028-.267C9.096.093 9.45 0 9.815 0c.365 0 .718.093 1.028.267.31.174.682.267 1.026.267.365 0 .718-.093 1.028-.267C13.207.093 13.561 0 13.926 0c.365 0 .718.093 1.028.267.31.174.682.267 1.026.267.365 0 .718-.093 1.028-.267C17.318.093 17.672 0 18.037 0A2.704 2.704 0 0121 2.704v12.842z" />
            </svg>
          )
        },
        {
          id: 'chaat-food-stalls',
          name: 'Chaat & Food Stalls',
          description: 'Street food and chaat counters',
          image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop&crop=center',
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          )
        },
        {
          id: 'bartenders',
          name: 'Bartenders',
          description: 'Professional bartending services',
          image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400&h=300&fit=crop&crop=center',
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h18M9 3v18m6-18v18M9 9h6" />
            </svg>
          )
        }
      ]
    }
  ];

  const handleCategoryClick = (categoryId) => {
    navigate(`/vendors/${categoryId}`);
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <div>
            <h1 
              className="text-2xl font-bold"
              style={{ color: theme.colors.textPrimary }}
            >
              Vendor Categories
            </h1>
            <p 
              className="text-sm"
              style={{ color: theme.colors.textSecondary }}
            >
              Find the perfect vendors for your wedding
            </p>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="px-6">
        {vendorCategories.map((group, groupIndex) => (
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

            {/* Group Items */}
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
          </div>
        ))}
      </div>
    </div>
  );
}

export default VendorCategories;