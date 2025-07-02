import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../AdminSalon/Navbar";
import { getUser } from "../Redux/Auth/action";
import { fetchNotificationsBySalon } from "../Redux/Notifications/action";
import { fetchSalonByOwner } from "../Redux/Salon/action";
import SalonRoutes from "../Routes/SalonRoutes";
import SalonDrawerList from "./Components/SalonDrawerList";
import UseNotificationWebSocket from "../util/UseNotificationWebSocket";

const SalonDashboard = () => {
  const dispatch = useDispatch();
  const { salon } = useSelector((store) => store);
  useEffect(() => {
    dispatch(fetchSalonByOwner(localStorage.getItem("jwt")));
    dispatch(getUser(localStorage.getItem("jwt")));
  }, []);
  useEffect(() => {
    if (salon.salon) {
      dispatch(
        fetchNotificationsBySalon({
          salonId: salon.id,
          jwt: localStorage.getItem("jwt"),
        })
      );
    }
  }, [salon.salon]);
  UseNotificationWebSocket(salon.salon?.id, "salon");
  return (
    <div className="min-h-screen">
      <Navbar DrawerList={SalonDrawerList} />
      <section className="lg:flex lg:h-[90vh]">
        <div className="hidden lg:block h-full">
          <SalonDrawerList />
        </div>
        <div className="p-10 w-full lg:w-[80%] overflow-y-auto">
          <SalonRoutes />
        </div>
      </section>
    </div>
  );
};

export default SalonDashboard;
