import { useDispatch, useSelector } from "react-redux";
import BookingCard from "./BookingCard";
import { useEffect } from "react";
import { fetchCustomerBookings } from "../../Redux/Booking/action";

const Bookings = () => {
  const { booking } = useSelector((store) => store);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCustomerBookings(localStorage.getItem("jwt")));
  }, []);
  return (
    <div className="px-5 md:flex flex-col items-center mt-10 min-h-screen">
      <div>
        <h1 className="text-3xl font-bold py-5">My Booking</h1>
      </div>
      <div className="space-y-4 md:w-[35rem]">
        {booking.bookings.map((item) => (
          <BookingCard item={item} />
        ))}
      </div>
    </div>
  );
};

export default Bookings;
