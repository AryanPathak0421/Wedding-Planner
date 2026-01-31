import { theme } from '../../../../shared/styles/theme.js';

function EventDetail() {
  return (
    <div 
      className="min-h-screen px-6 py-8"
      style={{ backgroundColor: theme.colors.background }}
    >
      <div className="max-w-md mx-auto">
        <h1 
          className="text-2xl font-bold mb-8"
          style={{ color: theme.colors.textPrimary }}
        >
          Event Details
        </h1>
        <div 
          className="p-6 rounded-lg shadow-sm"
          style={{ 
            backgroundColor: theme.colors.white,
            borderRadius: theme.radius.lg
          }}
        >
          <p 
            className="text-center"
            style={{ color: theme.colors.textSecondary }}
          >
            Event details page coming soon...
          </p>
        </div>
      </div>
    </div>
  );
}

export default EventDetail;