import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { theme } from '../../../../shared/styles/theme.js';

function CreateEvent() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [eventData, setEventData] = useState({
    type: '',
    date: '',
    location: '',
    budget: ''
  });

  const totalSteps = 4;

  const eventTypes = [
    { 
      id: 'wedding', 
      name: 'Wedding', 
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="white">
          <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H9L3 7V9H21ZM12 10C8.13 10 5 13.13 5 17S8.13 24 12 24 19 20.87 19 17 15.87 10 12 10Z"/>
        </svg>
      ), 
      description: 'Traditional wedding ceremony',
      gradient: 'from-pink-400 to-rose-400',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=300&fit=crop&crop=center'
    },
    { 
      id: 'engagement', 
      name: 'Engagement', 
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="white">
          <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z"/>
        </svg>
      ), 
      description: 'Engagement celebration',
      gradient: 'from-purple-400 to-pink-400',
      image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=400&h=300&fit=crop&crop=center'
    },
    { 
      id: 'reception', 
      name: 'Reception', 
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="white">
          <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2ZM5 16L6.5 21.5L9 19L11.5 21.5L13 16H5ZM19 16L17.5 21.5L15 19L12.5 21.5L11 16H19Z"/>
        </svg>
      ), 
      description: 'Wedding reception party',
      gradient: 'from-orange-400 to-yellow-400',
      image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=400&h=300&fit=crop&crop=center'
    },
    { 
      id: 'sangam', 
      name: 'Sangam', 
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="white">
          <path d="M12 2C13.1 2 14 2.9 14 4V8C14 9.1 13.1 10 12 10S10 9.1 10 8V4C10 2.9 10.9 2 12 2ZM19 8C20.1 8 21 8.9 21 10V14C21 15.1 20.1 16 19 16H17V18C17 19.1 16.1 20 15 20H9C7.9 20 7 19.1 7 18V16H5C3.9 16 3 15.1 3 14V10C3 8.9 3.9 8 5 8H19Z"/>
        </svg>
      ), 
      description: 'Pre-wedding celebration',
      gradient: 'from-emerald-400 to-teal-400',
      image: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=400&h=300&fit=crop&crop=center'
    }
  ];

  const budgetRanges = [
    { 
      id: 'budget1', 
      range: '₹1-3 Lakhs', 
      value: '1-3',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill={theme.colors.primary}>
          <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H9L3 7V9H21ZM12 10C8.13 10 5 13.13 5 17S8.13 24 12 24 19 20.87 19 17 15.87 10 12 10Z"/>
        </svg>
      )
    },
    { 
      id: 'budget2', 
      range: '₹3-5 Lakhs', 
      value: '3-5',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill={theme.colors.primary}>
          <path d="M7 15H9C9 16.08 10.37 17 12 17C13.63 17 15 16.08 15 15C15 13.9 13.96 13.5 11.76 12.97C9.64 12.44 7 11.78 7 9C7 7.21 8.47 5.69 10.5 5.18V3H13.5V5.18C15.53 5.69 17 7.21 17 9H15C15 7.92 13.63 7 12 7C10.37 7 9 7.92 9 9C9 10.1 10.04 10.5 12.24 11.03C14.36 11.56 17 12.22 17 15C17 16.79 15.53 18.31 13.5 18.82V21H10.5V18.82C8.47 18.31 7 16.79 7 15Z"/>
        </svg>
      )
    },
    { 
      id: 'budget3', 
      range: '₹5-10 Lakhs', 
      value: '5-10',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill={theme.colors.primary}>
          <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z"/>
        </svg>
      )
    },
    { 
      id: 'budget4', 
      range: '₹10+ Lakhs', 
      value: '10+',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill={theme.colors.primary}>
          <path d="M5 16L3 5H1V3H4L6 14H18L20 6H8L8.25 5H21L19 16H5ZM7 18C6.45 18 6 18.45 6 19S6.45 20 7 20 8 19.45 8 19 7.55 18 7 18ZM17 18C16.45 18 16 18.45 16 19S16.45 20 17 20 18 19.45 18 19 17.55 18 17 18Z"/>
        </svg>
      )
    }
  ];

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      // Navigate to event dashboard on completion
      navigate('/event/dashboard');
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    } else {
      navigate('/home');
    }
  };

  const handleInputChange = (field, value) => {
    setEventData({
      ...eventData,
      [field]: value
    });
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1: return eventData.type !== '';
      case 2: return eventData.date !== '';
      case 3: return eventData.location !== '';
      case 4: return eventData.budget !== '';
      default: return false;
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div>
            <div className="text-center mb-8">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center shadow-lg"
                   style={{ 
                     background: `linear-gradient(135deg, ${theme.colors.secondary} 0%, #FFF0F5 100%)`,
                     border: `2px solid ${theme.colors.primary}20`
                   }}>
                <svg className="w-10 h-10" viewBox="0 0 24 24" fill={theme.colors.primary}>
                  <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z"/>
                </svg>
              </div>
              <h2 
                className="text-2xl font-bold mb-2"
                style={{ color: theme.colors.textPrimary }}
              >
                What type of event?
              </h2>
              <p 
                className="text-sm"
                style={{ color: theme.colors.textSecondary }}
              >
                Choose the type of celebration you're planning
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-4">
              {eventTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => handleInputChange('type', type.id)}
                  className={`relative overflow-hidden rounded-xl border-2 transition-all hover:scale-105 ${
                    eventData.type === type.id ? 'border-2 shadow-xl' : 'border border-gray-200'
                  }`}
                  style={{
                    borderColor: eventData.type === type.id 
                      ? theme.colors.primary 
                      : '#E5E7EB',
                    borderRadius: theme.radius.lg,
                    height: '120px'
                  }}
                >
                  {/* Background Image with Overlay */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ 
                      backgroundImage: `url(${type.image})`,
                      filter: eventData.type === type.id ? 'brightness(0.7)' : 'brightness(0.5)'
                    }}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-r ${type.gradient} ${
                    eventData.type === type.id ? 'opacity-80' : 'opacity-60'
                  }`} />
                  
                  {/* Content */}
                  <div className="relative z-10 flex items-center h-full p-4">
                    <div className="w-12 h-12 rounded-full mr-4 flex items-center justify-center bg-white/20 backdrop-blur-sm">
                      {type.icon}
                    </div>
                    <div className="text-left flex-1">
                      <h3 className="font-bold text-white text-lg mb-1">
                        {type.name}
                      </h3>
                      <p className="text-white/90 text-sm">
                        {type.description}
                      </p>
                    </div>
                    {eventData.type === type.id && (
                      <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
                        <svg className="w-4 h-4" style={{ color: theme.colors.primary }} fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        );

      case 2:
        return (
          <div>
            <div className="text-center mb-8">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center shadow-lg"
                   style={{ 
                     background: `linear-gradient(135deg, ${theme.colors.secondary} 0%, #FFF0F5 100%)`,
                     border: `2px solid ${theme.colors.primary}20`
                   }}>
                <svg className="w-10 h-10" viewBox="0 0 24 24" fill={theme.colors.primary}>
                  <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V8H19V19ZM7 10H12V15H7V10Z"/>
                </svg>
              </div>
              <h2 
                className="text-2xl font-bold mb-2"
                style={{ color: theme.colors.textPrimary }}
              >
                When is your event?
              </h2>
              <p 
                className="text-sm"
                style={{ color: theme.colors.textSecondary }}
              >
                Select your preferred date
              </p>
            </div>
            
            <div>
              <label 
                className="block text-sm font-medium mb-3"
                style={{ color: theme.colors.textPrimary }}
              >
                Event Date
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg className="w-5 h-5" style={{ color: theme.colors.textSecondary }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <input
                  type="date"
                  value={eventData.date}
                  onChange={(e) => handleInputChange('date', e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border border-gray-200 focus:outline-none focus:ring-2 transition-all text-lg bg-white/80"
                  style={{ 
                    borderRadius: theme.radius.md,
                    focusRingColor: theme.colors.primary + '40',
                    minHeight: '56px'
                  }}
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div>
            <div className="text-center mb-8">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center shadow-lg"
                   style={{ 
                     background: `linear-gradient(135deg, ${theme.colors.secondary} 0%, #FFF0F5 100%)`,
                     border: `2px solid ${theme.colors.primary}20`
                   }}>
                <svg className="w-10 h-10" viewBox="0 0 24 24" fill={theme.colors.primary}>
                  <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H9L3 7V9H21ZM12 10C8.13 10 5 13.13 5 17S8.13 24 12 24 19 20.87 19 17 15.87 10 12 10Z"/>
                </svg>
              </div>
              <h2 
                className="text-2xl font-bold mb-2"
                style={{ color: theme.colors.textPrimary }}
              >
                Where will it be?
              </h2>
              <p 
                className="text-sm"
                style={{ color: theme.colors.textSecondary }}
              >
                Enter your event location
              </p>
            </div>
            
            <div>
              <label 
                className="block text-sm font-medium mb-3"
                style={{ color: theme.colors.textPrimary }}
              >
                Event Location
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg className="w-5 h-5" style={{ color: theme.colors.textSecondary }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Enter city or venue name"
                  value={eventData.location}
                  onChange={(e) => handleInputChange('location', e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border border-gray-200 focus:outline-none focus:ring-2 transition-all text-lg bg-white/80"
                  style={{ 
                    borderRadius: theme.radius.md,
                    focusRingColor: theme.colors.primary + '40',
                    minHeight: '56px'
                  }}
                />
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div>
            <div className="text-center mb-8">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center shadow-lg"
                   style={{ 
                     background: `linear-gradient(135deg, ${theme.colors.secondary} 0%, #FFF0F5 100%)`,
                     border: `2px solid ${theme.colors.primary}20`
                   }}>
                <svg className="w-10 h-10" viewBox="0 0 24 24" fill={theme.colors.primary}>
                  <path d="M7 15H9C9 16.08 10.37 17 12 17C13.63 17 15 16.08 15 15C15 13.9 13.96 13.5 11.76 12.97C9.64 12.44 7 11.78 7 9C7 7.21 8.47 5.69 10.5 5.18V3H13.5V5.18C15.53 5.69 17 7.21 17 9H15C15 7.92 13.63 7 12 7C10.37 7 9 7.92 9 9C9 10.1 10.04 10.5 12.24 11.03C14.36 11.56 17 12.22 17 15C17 16.79 15.53 18.31 13.5 18.82V21H10.5V18.82C8.47 18.31 7 16.79 7 15Z"/>
                </svg>
              </div>
              <h2 
                className="text-2xl font-bold mb-2"
                style={{ color: theme.colors.textPrimary }}
              >
                What's your budget?
              </h2>
              <p 
                className="text-sm"
                style={{ color: theme.colors.textSecondary }}
              >
                Choose your budget range
              </p>
            </div>
            
            <div className="space-y-3">
              {budgetRanges.map((budget) => (
                <button
                  key={budget.id}
                  onClick={() => handleInputChange('budget', budget.value)}
                  className={`w-full p-4 rounded-lg border-2 transition-all hover:scale-105 ${
                    eventData.budget === budget.value ? 'border-2 shadow-lg' : 'border border-gray-200'
                  }`}
                  style={{
                    backgroundColor: eventData.budget === budget.value 
                      ? theme.colors.secondary 
                      : theme.colors.white,
                    borderColor: eventData.budget === budget.value 
                      ? theme.colors.primary 
                      : '#E5E7EB',
                    borderRadius: theme.radius.lg
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full mr-4 flex items-center justify-center" 
                           style={{ backgroundColor: theme.colors.primary + '20' }}>
                        {budget.icon}
                      </div>
                      <span 
                        className="font-semibold"
                        style={{ color: theme.colors.textPrimary }}
                      >
                        {budget.range}
                      </span>
                    </div>
                    <svg className="w-6 h-6" style={{ color: theme.colors.primary }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </button>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div 
      className="min-h-screen flex flex-col"
      style={{ 
        background: `linear-gradient(135deg, ${theme.colors.background} 0%, #FFF0F5 50%, ${theme.colors.secondary} 100%)`
      }}
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-10 right-10 w-16 h-16 rounded-full opacity-10 z-0" 
           style={{ backgroundColor: theme.colors.primary }}></div>
      <div className="absolute bottom-20 left-10 w-12 h-12 rounded-full opacity-15 z-0" 
           style={{ backgroundColor: theme.colors.primary }}></div>
      <div className="absolute top-1/3 left-8 w-8 h-8 rounded-full opacity-8 z-0" 
           style={{ backgroundColor: theme.colors.primary }}></div>

      {/* Header - Fixed Height */}
      <div className="flex items-center justify-between px-6 pt-12 pb-6 z-10 relative flex-shrink-0">
        <button 
          onClick={handleBack}
          className="w-12 h-12 rounded-full flex items-center justify-center transition-all hover:scale-105 bg-white/80 backdrop-blur-sm shadow-sm"
        >
          <svg className="w-6 h-6" style={{ color: theme.colors.textPrimary }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <div className="flex-1 mx-4">
          <div className="flex items-center justify-between mb-3">
            <span 
              className="text-sm font-medium"
              style={{ color: theme.colors.textSecondary }}
            >
              Step {currentStep} of {totalSteps}
            </span>
            <span 
              className="text-sm font-bold"
              style={{ color: theme.colors.primary }}
            >
              {Math.round((currentStep / totalSteps) * 100)}%
            </span>
          </div>
          
          {/* Step Indicators */}
          <div className="flex items-center justify-between mb-3">
            {Array.from({ length: totalSteps }, (_, index) => (
              <div key={index} className="flex items-center">
                <div 
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                    index + 1 <= currentStep ? 'text-white shadow-lg' : 'text-gray-400'
                  }`}
                  style={{
                    background: index + 1 <= currentStep 
                      ? `linear-gradient(135deg, ${theme.colors.primary} 0%, #E91E63 100%)`
                      : '#E5E7EB'
                  }}
                >
                  {index + 1 < currentStep ? (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    index + 1
                  )}
                </div>
                {index < totalSteps - 1 && (
                  <div 
                    className="flex-1 h-1 mx-2 rounded-full transition-all"
                    style={{ 
                      backgroundColor: index + 1 < currentStep ? theme.colors.primary : '#E5E7EB',
                      width: '20px'
                    }}
                  />
                )}
              </div>
            ))}
          </div>
          
          {/* Progress Bar */}
          <div 
            className="w-full h-2 rounded-full"
            style={{ backgroundColor: '#E5E7EB' }}
          >
            <div 
              className="h-2 rounded-full transition-all duration-300"
              style={{ 
                backgroundColor: theme.colors.primary,
                width: `${(currentStep / totalSteps) * 100}%`
              }}
            />
          </div>
        </div>
      </div>

      {/* Scrollable Content Area */}
      <div className="flex-1 overflow-y-auto pb-40">
        <div className="px-6 z-10 relative">
          <div 
            className="p-6 shadow-xl bg-white/95 backdrop-blur-sm border border-white/20"
            style={{ 
              borderRadius: theme.radius.xl
            }}
          >
            {renderStepContent()}
          </div>
        </div>
      </div>

      {/* Fixed Bottom CTA - Positioned above bottom navigation */}
      <div 
        className="fixed left-0 right-0 px-6 py-4 bg-white/95 backdrop-blur-sm border-t border-gray-200 z-40 safe-area-pb shadow-lg"
        style={{ 
          backgroundColor: theme.colors.white,
          bottom: '72px' // Height of bottom navigation + margin
        }}
      >
        <button
          onClick={handleNext}
          disabled={!isStepValid()}
          className={`w-full py-4 px-6 text-white font-bold text-lg rounded-full transition-all duration-300 shadow-xl ${
            isStepValid() 
              ? 'hover:scale-105 active:scale-95 hover:shadow-2xl' 
              : 'opacity-50 cursor-not-allowed'
          }`}
          style={{ 
            background: isStepValid() 
              ? `linear-gradient(135deg, ${theme.colors.primary} 0%, #E91E63 100%)`
              : '#9CA3AF',
            borderRadius: theme.radius.lg,
            minHeight: '56px'
          }}
        >
          {currentStep === totalSteps ? 'Create Event' : 'Continue'}
        </button>
      </div>
    </div>
  );
}

export default CreateEvent;