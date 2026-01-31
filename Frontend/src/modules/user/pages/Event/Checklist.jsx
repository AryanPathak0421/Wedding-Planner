import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { theme } from '../../../../shared/styles/theme.js';

function Checklist() {
  const navigate = useNavigate();
  
  // Mock checklist data with different categories and SVG icons
  const [checklistItems, setChecklistItems] = useState([
    // Venue & Decoration
    {
      id: 1,
      category: 'Venue & Decoration',
      title: 'Book Wedding Venue',
      description: 'Finalize and book your dream wedding venue',
      completed: true,
      priority: 'high',
      icon: 'venue',
      dueDate: '2024-10-15'
    },
    {
      id: 2,
      category: 'Venue & Decoration',
      title: 'Wedding Decoration',
      description: 'Choose and book decoration services',
      completed: true,
      priority: 'high',
      icon: 'decoration',
      dueDate: '2024-11-01'
    },
    {
      id: 3,
      category: 'Venue & Decoration',
      title: 'Mandap Setup',
      description: 'Arrange traditional mandap decoration',
      completed: false,
      priority: 'high',
      icon: 'mandap',
      dueDate: '2024-11-15'
    },
    
    // Photography & Videography
    {
      id: 4,
      category: 'Photography & Videography',
      title: 'Wedding Photography',
      description: 'Book professional wedding photographer',
      completed: true,
      priority: 'high',
      icon: 'camera',
      dueDate: '2024-10-20'
    },
    {
      id: 5,
      category: 'Photography & Videography',
      title: 'Pre-wedding Shoot',
      description: 'Schedule and complete pre-wedding photoshoot',
      completed: false,
      priority: 'medium',
      icon: 'photo',
      dueDate: '2024-11-10'
    },
    
    // Catering & Food
    {
      id: 6,
      category: 'Catering & Food',
      title: 'Catering Services',
      description: 'Finalize menu and book catering',
      completed: false,
      priority: 'high',
      icon: 'catering',
      dueDate: '2024-11-05'
    },
    {
      id: 7,
      category: 'Catering & Food',
      title: 'Wedding Cake',
      description: 'Order custom wedding cake',
      completed: false,
      priority: 'medium',
      icon: 'cake',
      dueDate: '2024-11-20'
    },
    
    // Beauty & Styling
    {
      id: 8,
      category: 'Beauty & Styling',
      title: 'Bridal Makeup',
      description: 'Book makeup artist for wedding day',
      completed: false,
      priority: 'high',
      icon: 'makeup',
      dueDate: '2024-11-25'
    },
    {
      id: 9,
      category: 'Beauty & Styling',
      title: 'Hair Styling',
      description: 'Arrange bridal hair styling',
      completed: false,
      priority: 'medium',
      icon: 'hair',
      dueDate: '2024-11-25'
    },
    
    // Invitations & Stationery
    {
      id: 10,
      category: 'Invitations & Stationery',
      title: 'Wedding Invitations',
      description: 'Design and print wedding invitations',
      completed: true,
      priority: 'high',
      icon: 'invitation',
      dueDate: '2024-10-30'
    },
    {
      id: 11,
      category: 'Invitations & Stationery',
      title: 'Save the Date Cards',
      description: 'Send save the date cards to guests',
      completed: true,
      priority: 'medium',
      icon: 'calendar',
      dueDate: '2024-10-01'
    },
    
    // Music & Entertainment
    {
      id: 12,
      category: 'Music & Entertainment',
      title: 'DJ/Music System',
      description: 'Book DJ or music system for reception',
      completed: false,
      priority: 'medium',
      icon: 'music',
      dueDate: '2024-11-15'
    },
    {
      id: 13,
      category: 'Music & Entertainment',
      title: 'Live Band',
      description: 'Arrange live music for ceremonies',
      completed: false,
      priority: 'low',
      icon: 'band',
      dueDate: '2024-11-20'
    }
  ]);

  const [selectedCategory, setSelectedCategory] = useState('All');
  
  // Get unique categories
  const categories = ['All', ...new Set(checklistItems.map(item => item.category))];
  
  // Filter items based on selected category
  const filteredItems = selectedCategory === 'All' 
    ? checklistItems 
    : checklistItems.filter(item => item.category === selectedCategory);
  
  // Group items by category for display
  const groupedItems = filteredItems.reduce((groups, item) => {
    const category = item.category;
    if (!groups[category]) {
      groups[category] = [];
    }
    groups[category].push(item);
    return groups;
  }, {});

  // Calculate progress
  const totalItems = checklistItems.length;
  const completedItems = checklistItems.filter(item => item.completed).length;
  const progressPercentage = Math.round((completedItems / totalItems) * 100);

  const toggleItemCompletion = (itemId) => {
    setChecklistItems(items =>
      items.map(item =>
        item.id === itemId ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return '#EF4444';
      case 'medium': return '#F59E0B';
      case 'low': return '#10B981';
      default: return theme.colors.textSecondary;
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short'
    });
  };

  const renderIcon = (iconType, completed = false) => {
    const iconColor = completed ? '#10B981' : theme.colors.primary;
    const iconSize = "w-6 h-6";
    
    switch (iconType) {
      case 'venue':
        return (
          <svg className={iconSize} fill={iconColor} viewBox="0 0 24 24">
            <path d="M12 2L2 7V10H22V7L12 2ZM4 11V20H6V11H4ZM8 11V20H10V11H8ZM12 11V20H14V11H12ZM16 11V20H18V11H16ZM20 11V20H22V11H20ZM2 21H22V22H2V21Z"/>
          </svg>
        );
      case 'decoration':
        return (
          <svg className={iconSize} fill={iconColor} viewBox="0 0 24 24">
            <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z"/>
          </svg>
        );
      case 'mandap':
        return (
          <svg className={iconSize} fill={iconColor} viewBox="0 0 24 24">
            <path d="M12 2L2 7V10H22V7L12 2ZM4 11V20H6V11H4ZM8 11V20H10V11H8ZM12 11V20H14V11H12ZM16 11V20H18V11H16ZM20 11V20H22V11H20Z"/>
          </svg>
        );
      case 'camera':
        return (
          <svg className={iconSize} fill="none" stroke={iconColor} strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        );
      case 'photo':
        return (
          <svg className={iconSize} fill="none" stroke={iconColor} strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        );
      case 'catering':
        return (
          <svg className={iconSize} fill="none" stroke={iconColor} strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17M17 13v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
          </svg>
        );
      case 'cake':
        return (
          <svg className={iconSize} fill={iconColor} viewBox="0 0 24 24">
            <path d="M12 6C13.11 6 14 5.11 14 4C14 3.62 13.9 3.27 13.71 2.97L12 1L10.29 2.97C10.1 3.27 10 3.62 10 4C10 5.11 10.9 6 12 6ZM16.5 11H15.36L13.76 9.4L12 11.16L10.24 9.4L8.64 11H7.5C6.67 11 6 11.67 6 12.5V14H18V12.5C18 11.67 17.33 11 16.5 11ZM6 16V19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V16H6Z"/>
          </svg>
        );
      case 'makeup':
        return (
          <svg className={iconSize} fill="none" stroke={iconColor} strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v7a4 4 0 004 4h4V5z" />
          </svg>
        );
      case 'hair':
        return (
          <svg className={iconSize} fill="none" stroke={iconColor} strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        );
      case 'invitation':
        return (
          <svg className={iconSize} fill="none" stroke={iconColor} strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        );
      case 'calendar':
        return (
          <svg className={iconSize} fill="none" stroke={iconColor} strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        );
      case 'music':
        return (
          <svg className={iconSize} fill="none" stroke={iconColor} strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
          </svg>
        );
      case 'band':
        return (
          <svg className={iconSize} fill={iconColor} viewBox="0 0 24 24">
            <path d="M12 3V12.26C11.5 12.09 11 12 10.5 12C8.57 12 7 13.57 7 15.5S8.57 19 10.5 19 14 17.43 14 15.5V7H18V5H12V3Z"/>
          </svg>
        );
      default:
        return (
          <svg className={iconSize} fill={iconColor} viewBox="0 0 24 24">
            <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z"/>
          </svg>
        );
    }
  };

  return (
    <div 
      className="min-h-screen pb-20"
      style={{ backgroundColor: theme.colors.background }}
    >
      {/* Header */}
      <div className="flex items-center px-6 pt-12 pb-6">
        <button 
          onClick={() => navigate('/event/dashboard')}
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <h1 
              className="text-2xl font-bold"
              style={{ color: theme.colors.textPrimary }}
            >
              Wedding Checklist
            </h1>
            <p 
              className="text-sm"
              style={{ color: theme.colors.textSecondary }}
            >
              {completedItems} of {totalItems} tasks completed
            </p>
          </div>
        </div>
      </div>

      {/* Progress Card */}
      <div className="px-6 mb-6">
        <div 
          className="p-6 shadow-xl bg-white/95 backdrop-blur-sm border border-white/20"
          style={{ 
            borderRadius: theme.radius.xl
          }}
        >
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 
                className="text-lg font-bold"
                style={{ color: theme.colors.textPrimary }}
              >
                Overall Progress
              </h3>
              <p 
                className="text-sm"
                style={{ color: theme.colors.textSecondary }}
              >
                Keep going! You're doing great
              </p>
            </div>
            <div className="text-right">
              <div 
                className="text-3xl font-bold"
                style={{ color: theme.colors.primary }}
              >
                {progressPercentage}%
              </div>
              <div className="w-12 h-12 rounded-full flex items-center justify-center mt-2"
                   style={{ 
                     background: `linear-gradient(135deg, ${theme.colors.primary} 0%, #E91E63 100%)`
                   }}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div 
            className="w-full h-3 rounded-full mb-2"
            style={{ backgroundColor: theme.colors.secondary }}
          >
            <div 
              className="h-3 rounded-full transition-all duration-500"
              style={{ 
                background: `linear-gradient(90deg, ${theme.colors.primary} 0%, #E91E63 100%)`,
                width: `${progressPercentage}%`
              }}
            />
          </div>
          
          <div className="flex justify-between text-sm">
            <span style={{ color: theme.colors.textSecondary }}>
              {completedItems} completed
            </span>
            <span style={{ color: theme.colors.textSecondary }}>
              {totalItems - completedItems} remaining
            </span>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="px-6 mb-6">
        <div className="flex space-x-3 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                selectedCategory === category 
                  ? 'text-white shadow-lg' 
                  : 'border bg-white/80 backdrop-blur-sm'
              }`}
              style={{
                background: selectedCategory === category 
                  ? `linear-gradient(135deg, ${theme.colors.primary} 0%, #E91E63 100%)`
                  : 'rgba(255, 255, 255, 0.8)',
                color: selectedCategory === category 
                  ? theme.colors.white 
                  : theme.colors.textPrimary,
                borderColor: selectedCategory === category 
                  ? 'transparent'
                  : 'rgba(255, 255, 255, 0.3)',
                borderRadius: theme.radius.xl
              }}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Checklist Items */}
      <div className="px-6">
        {Object.entries(groupedItems).map(([category, items]) => (
          <div key={category} className="mb-8">
            {selectedCategory === 'All' && (
              <h2 
                className="text-lg font-bold mb-4 flex items-center"
                style={{ color: theme.colors.textPrimary }}
              >
                <div className="w-1 h-6 rounded-full mr-3"
                     style={{ backgroundColor: theme.colors.primary }} />
                {category}
              </h2>
            )}
            
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className={`p-5 shadow-xl bg-white/95 backdrop-blur-sm border border-white/20 transition-all ${
                    item.completed ? 'opacity-75' : 'hover:shadow-2xl'
                  }`}
                  style={{ 
                    borderRadius: theme.radius.xl
                  }}
                >
                  <div className="flex items-start">
                    {/* Status Indicator */}
                    <button
                      onClick={() => toggleItemCompletion(item.id)}
                      className={`flex-shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center mr-4 mt-1 transition-all ${
                        item.completed 
                          ? 'border-green-500 bg-green-500 shadow-lg' 
                          : 'border-gray-300 hover:border-gray-400 bg-white'
                      }`}
                    >
                      {item.completed && (
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </button>

                    {/* Item Content */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center flex-1">
                          <div className="w-12 h-12 rounded-full mr-4 flex items-center justify-center shadow-lg flex-shrink-0"
                               style={{ 
                                 backgroundColor: item.completed ? '#10B98120' : theme.colors.secondary
                               }}>
                            {renderIcon(item.icon, item.completed)}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 
                              className={`font-bold text-lg mb-1 ${
                                item.completed ? 'line-through' : ''
                              }`}
                              style={{ color: theme.colors.textPrimary }}
                            >
                              {item.title}
                            </h3>
                            <p 
                              className="text-sm leading-relaxed"
                              style={{ color: theme.colors.textSecondary }}
                            >
                              {item.description}
                            </p>
                          </div>
                        </div>
                        
                        {/* Priority Indicator */}
                        <div 
                          className="w-4 h-4 rounded-full flex-shrink-0 shadow-sm"
                          style={{ backgroundColor: getPriorityColor(item.priority) }}
                        />
                      </div>
                      
                      {/* Due Date and Priority */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <svg className="w-4 h-4 mr-2" style={{ color: theme.colors.textSecondary }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <span 
                            className="text-sm font-medium"
                            style={{ color: theme.colors.textSecondary }}
                          >
                            Due: {formatDate(item.dueDate)}
                          </span>
                        </div>
                        
                        {/* Priority Label */}
                        <span 
                          className="text-xs font-bold px-3 py-1 rounded-full"
                          style={{
                            backgroundColor: getPriorityColor(item.priority) + '20',
                            color: getPriorityColor(item.priority)
                          }}
                        >
                          {item.priority.toUpperCase()}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="px-6 mt-8">
        <div 
          className="p-6 shadow-xl bg-white/95 backdrop-blur-sm border border-white/20"
          style={{ 
            borderRadius: theme.radius.xl
          }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full mr-4 flex items-center justify-center shadow-lg"
                   style={{ 
                     background: `linear-gradient(135deg, ${theme.colors.primary} 0%, #E91E63 100%)`
                   }}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 
                  className="font-bold text-lg mb-1"
                  style={{ color: theme.colors.textPrimary }}
                >
                  Need Help?
                </h3>
                <p 
                  className="text-sm"
                  style={{ color: theme.colors.textSecondary }}
                >
                  Get expert guidance for your wedding planning
                </p>
              </div>
            </div>
            <button
              className="px-6 py-3 text-white text-sm font-bold rounded-full transition-all hover:scale-105 active:scale-95 shadow-lg"
              style={{ 
                background: `linear-gradient(135deg, ${theme.colors.primary} 0%, #E91E63 100%)`,
                borderRadius: theme.radius.xl
              }}
            >
              Get Help
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checklist;