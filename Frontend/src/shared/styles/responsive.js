// Responsive utility classes following strict mobile-first rules
export const responsive = {
  // Container classes
  container: 'w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto',
  
  // Grid systems - Mobile first (360px base)
  grid: {
    // Default 2 columns on mobile, scales up
    cards: 'grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4',
    // Single column that becomes 2 on larger screens
    list: 'grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-6',
    // Full width single column
    single: 'grid grid-cols-1 gap-4 sm:gap-6'
  },
  
  // Button classes with minimum 44px height
  button: {
    primary: 'w-full px-4 py-3 text-white font-semibold rounded-lg transition-all hover:scale-105 active:scale-95',
    secondary: 'w-full px-4 py-3 border-2 font-semibold rounded-lg transition-all hover:scale-105 active:scale-95',
    icon: 'p-3 rounded-full transition-all hover:scale-105 active:scale-95',
    // Minimum height enforcement
    minHeight: 'min-h-[44px]'
  },
  
  // Input classes
  input: {
    base: 'w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 transition-all min-h-[44px]',
    search: 'w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 transition-all min-h-[44px]'
  },
  
  // Card classes
  card: {
    base: 'bg-white rounded-lg shadow-sm p-4 sm:p-6',
    interactive: 'bg-white rounded-lg shadow-sm p-4 sm:p-6 transition-all hover:scale-105 active:scale-95 cursor-pointer',
    highlight: 'bg-white rounded-lg shadow-sm p-6 relative overflow-hidden'
  },
  
  // Typography classes
  text: {
    heading: 'text-xl sm:text-2xl lg:text-3xl font-bold',
    subheading: 'text-lg sm:text-xl font-semibold',
    body: 'text-sm sm:text-base',
    caption: 'text-xs sm:text-sm'
  },
  
  // Spacing classes
  spacing: {
    section: 'px-6 py-8',
    card: 'p-4 sm:p-6',
    tight: 'px-4 py-2',
    loose: 'px-8 py-12'
  },
  
  // Layout classes
  layout: {
    page: 'min-h-screen',
    content: 'px-6 pb-8',
    header: 'px-6 pt-12 pb-6',
    bottomSafe: 'pb-20' // Safe area for bottom navigation
  }
};

// Breakpoint utilities
export const breakpoints = {
  sm: '640px',   // Small devices (landscape phones)
  md: '768px',   // Medium devices (tablets)
  lg: '1024px',  // Large devices (laptops)
  xl: '1280px',  // Extra large devices (desktops)
  '2xl': '1536px' // 2X large devices (large desktops)
};

// Media query helpers
export const mediaQuery = {
  sm: `@media (min-width: ${breakpoints.sm})`,
  md: `@media (min-width: ${breakpoints.md})`,
  lg: `@media (min-width: ${breakpoints.lg})`,
  xl: `@media (min-width: ${breakpoints.xl})`,
  '2xl': `@media (min-width: ${breakpoints['2xl']})`
};