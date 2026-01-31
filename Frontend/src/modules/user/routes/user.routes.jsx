import { Routes, Route } from 'react-router-dom';
import UserLayout from '../components/UserLayout.jsx';

// Import pages
import Welcome from '../pages/Welcome/Welcome.jsx';
import Login from '../pages/Auth/Login.jsx';
import Signup from '../pages/Auth/Signup.jsx';
import Home from '../pages/Home/Home.jsx';
import CreateEvent from '../pages/Event/CreateEvent.jsx';
import EventDashboard from '../pages/Event/EventDashboard.jsx';
import Checklist from '../pages/Event/Checklist.jsx';
import EventDetail from '../pages/Event/EventDetail.jsx';
import ServiceList from '../pages/Service/ServiceList.jsx';
import VendorCategories from '../pages/Vendor/VendorCategories.jsx';
import VendorList from '../pages/Vendor/VendorList.jsx';
import VendorDetail from '../pages/Vendor/VendorDetail.jsx';
import VenueCategories from '../pages/Venue/VenueCategories.jsx';
import VenueList from '../pages/Venue/VenueList.jsx';
import PhotoCategories from '../pages/Photo/PhotoCategories.jsx';
import PhotoGallery from '../pages/Photo/PhotoGallery.jsx';
import BookingSummary from '../pages/Booking/BookingSummary.jsx';
import Profile from '../pages/Profile/Profile.jsx';

function UserRoutes() {
  return (
    <UserLayout>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/event/create" element={<CreateEvent />} />
        <Route path="/event/dashboard" element={<EventDashboard />} />
        <Route path="/event/checklist" element={<Checklist />} />
        <Route path="/event/:eventId" element={<EventDetail />} />
        <Route path="/service/:type" element={<ServiceList />} />
        <Route path="/vendors" element={<VendorCategories />} />
        <Route path="/vendors/:category" element={<VendorList />} />
        <Route path="/vendor/:vendorId" element={<VendorDetail />} />
        <Route path="/venues" element={<VenueCategories />} />
        <Route path="/venues/:category" element={<VenueList />} />
        <Route path="/photos" element={<PhotoCategories />} />
        <Route path="/photos/:category" element={<PhotoGallery />} />
        <Route path="/booking/summary" element={<BookingSummary />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </UserLayout>
  );
}

export default UserRoutes;