import { useDispatch, useSelector } from "react-redux";
import SalonCard from "./SalonCard";
import { useEffect } from "react";
import { fetchSalons } from "../../Redux/Salon/action";

const SalonList = () => {
  const dispatch = useDispatch();
  const { auth, salon } = useSelector((store) => store);
  useEffect(() => {
    dispatch(fetchSalons());
  }, [auth.jwt]);
  return (
    <div className="flex gap-5 flex-wrap">
      {salon.salons.map((item) => (
        <SalonCard item={item} />
      ))}
    </div>
  );
};

export default SalonList;
