import { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { theme } from '../../../../shared/styles/theme.js';

function PhotoGallery() {
  const navigate = useNavigate();
  const { category } = useParams();
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  // Mock photo data - in real app this would come from API
  const mockPhotos = {
    'bridal-lehenga': [
      {
        id: 1,
        url: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&h=800&fit=crop&crop=center',
        thumbnail: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=300&h=400&fit=crop&crop=center',
        title: 'Red Bridal Lehenga',
        description: 'Traditional red bridal lehenga with gold embroidery'
      },
      {
        id: 2,
        url: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&h=800&fit=crop&crop=center',
        thumbnail: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=300&h=400&fit=crop&crop=center',
        title: 'Pink Bridal Lehenga',
        description: 'Elegant pink lehenga with intricate work'
      },
      {
        id: 3,
        url: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=600&h=800&fit=crop&crop=center',
        thumbnail: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=300&h=400&fit=crop&crop=center',
        title: 'Golden Bridal Lehenga',
        description: 'Stunning golden lehenga for wedding day'
      },
      {
        id: 4,
        url: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&h=800&fit=crop&crop=center',
        thumbnail: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=300&h=400&fit=crop&crop=center',
        title: 'Maroon Bridal Lehenga',
        description: 'Rich maroon lehenga with heavy embellishments'
      },
      {
        id: 5,
        url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=800&fit=crop&crop=center',
        thumbnail: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop&crop=center',
        title: 'Orange Bridal Lehenga',
        description: 'Vibrant orange lehenga with mirror work'
      },
      {
        id: 6,
        url: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&h=800&fit=crop&crop=center',
        thumbnail: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=300&h=400&fit=crop&crop=center',
        title: 'Green Bridal Lehenga',
        description: 'Beautiful green lehenga with floral motifs'
      }
    ],
    'wedding-decor': [
      {
        id: 7,
        url: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&h=800&fit=crop&crop=center',
        thumbnail: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=300&h=400&fit=crop&crop=center',
        title: 'Floral Wedding Decor',
        description: 'Elegant floral arrangements for wedding'
      },
      {
        id: 8,
        url: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=800&fit=crop&crop=center',
        thumbnail: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=300&h=400&fit=crop&crop=center',
        title: 'Mandap Decoration',
        description: 'Traditional mandap with beautiful decorations'
      },
      {
        id: 9,
        url: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&h=800&fit=crop&crop=center',
        thumbnail: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=300&h=400&fit=crop&crop=center',
        title: 'Reception Decor',
        description: 'Luxurious reception decoration setup'
      }
    ],
    'pre-wedding-shoot': [
      {
        id: 10,
        url: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600&h=800&fit=crop&crop=center',
        thumbnail: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=300&h=400&fit=crop&crop=center',
        title: 'Romantic Pre-wedding',
        description: 'Beautiful couple pre-wedding photoshoot'
      },
      {
        id: 11,
        url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&h=800&fit=crop&crop=center',
        thumbnail: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=300&h=400&fit=crop&crop=center',
        title: 'Outdoor Pre-wedding',
        description: 'Outdoor pre-wedding shoot in natural setting'
      }
    ],
    'arabic': [
      {
        id: 12,
        url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=800&fit=crop&crop=center',
        thumbnail: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop&crop=center',
        title: 'Arabic Mehndi Design',
        description: 'Intricate Arabic mehndi patterns'
      },
      {
        id: 13,
        url: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&h=800&fit=crop&crop=center',
        thumbnail: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=300&h=400&fit=crop&crop=center',
        title: 'Bridal Arabic Mehndi',
        description: 'Beautiful Arabic mehndi for brides'
      }
    ]
  };

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setPhotos(mockPhotos[category] || []);
      setLoading(false);
    }, 1000);
  }, [category]);

  const getCategoryTitle = (category) => {
    const titles = {
      'bridal-lehenga': 'Bridal Lehenga',
      'wedding-sarees': 'Wedding Sarees',
      'engagement': 'Engagement Outfits',
      'mehndi': 'Mehndi Outfits',
      'blouse-designs': 'Blouse Designs',
      'wedding-decor': 'Wedding Decor',
      'bridal-entry': 'Bridal Entry Ideas',
      'groom-entry': 'Groom Entry Ideas',
      'wedding-games': 'Wedding Games',
      'wedding-cards': 'Wedding Cards',
      'wedding-invitations': 'Wedding Invitations',
      'wedding-gifts': 'Wedding Gifts',
      'pre-wedding-shoot': 'Pre Wedding Shoot',
      'wedding': 'Wedding Photography',
      'wedding-photoshoot-poses': 'Wedding Poses',
      'arabic': 'Arabic Mehndi',
      'mehndi-designs': 'Mehndi Designs',
      'simple': 'Simple Mehndi',
      'unique': 'Unique Mehndi'
    };
    return titles[category] || 'Photos';
  };

  // Lazy loading component for images
  const LazyImage = ({ src, thumbnail, alt, onClick, className }) => {
    const [imageSrc, setImageSrc] = useState(thumbnail);
    const [imageRef, setImageRef] = useState();
    const imgRef = useRef();

    useEffect(() => {
      setImageRef(imgRef.current);
    }, []);

    useEffect(() => {
      let observer;
      if (imageRef && imageSrc === thumbnail) {
        observer = new IntersectionObserver(
          entries => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                setImageSrc(src);
                observer.unobserve(imageRef);
              }
            });
          },
          { threshold: 0.1 }
        );
        observer.observe(imageRef);
      }
      return () => {
        if (observer && observer.unobserve) {
          observer.unobserve(imageRef);
        }
      };
    }, [imageRef, src, thumbnail, imageSrc]);

    return (
      <img
        ref={imgRef}
        src={imageSrc}
        alt={alt}
        onClick={onClick}
        className={className}
        loading="lazy"
      />
    );
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
          <p style={{ color: theme.colors.textSecondary }}>Loading photos...</p>
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
          onClick={() => navigate('/photos')}
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
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
              {photos.length} photos
            </p>
          </div>
        </div>
      </div>

      {/* Photo Gallery */}
      <div className="px-6">
        {photos.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center"
                 style={{ backgroundColor: theme.colors.secondary }}>
              <svg className="w-10 h-10" style={{ color: theme.colors.primary }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 
              className="text-xl font-bold mb-2"
              style={{ color: theme.colors.textPrimary }}
            >
              No photos found
            </h3>
            <p 
              className="text-sm mb-6"
              style={{ color: theme.colors.textSecondary }}
            >
              We're working on adding more photos in this category
            </p>
            <button
              onClick={() => navigate('/photos')}
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
          <div className="grid grid-cols-2 gap-4">
            {photos.map((photo) => (
              <div
                key={photo.id}
                className="relative overflow-hidden rounded-xl shadow-xl bg-white/95 backdrop-blur-sm border border-white/20 transition-all hover:scale-105 active:scale-95 cursor-pointer"
                style={{ 
                  borderRadius: theme.radius.lg,
                  aspectRatio: '3/4'
                }}
                onClick={() => setSelectedPhoto(photo)}
              >
                <LazyImage
                  src={photo.url}
                  thumbnail={photo.thumbnail}
                  alt={photo.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay with title */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <h3 className="text-white font-bold text-sm mb-1">
                      {photo.title}
                    </h3>
                    <p className="text-white/80 text-xs">
                      {photo.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Photo Modal */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/70 transition-colors z-10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <img
              src={selectedPhoto.url}
              alt={selectedPhoto.title}
              className="max-w-full max-h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
              <h3 className="text-white font-bold text-xl mb-2">
                {selectedPhoto.title}
              </h3>
              <p className="text-white/80">
                {selectedPhoto.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PhotoGallery;