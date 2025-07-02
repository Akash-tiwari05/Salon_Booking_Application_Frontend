import { Route, Routes } from "react-router-dom";
import ServiceTables from "../Salon/Services/ServiceTables";
import CreateServiceForm from "../Salon/Services/CreateServiceForm";
import BookingTables from "../Salon/Booking/BookingTables";
import Category from "../Salon/Category/Category";
import TransactionTables from "../Salon/Transaction/TransactionTables";
import Notifications from "../Customer/Notification/Notifications";
import Payment from "../Salon/Payment/payment";
import Profile from "../Salon/Profile/Profile";
import HomePage from "../Salon/Salon Dashboard/HomePage";

const SalonRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/services" element={<ServiceTables />} />
      <Route path="/add-services" element={<CreateServiceForm />} />
      <Route path="/bookings" element={<BookingTables />} />
      <Route path="/category" element={<Category />} />
      <Route path="/transaction" element={<TransactionTables />} />
      <Route path="/notifications" element={<Notifications />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/account" element={<Profile />} />
    </Routes>
  );
};

export default SalonRoutes;
