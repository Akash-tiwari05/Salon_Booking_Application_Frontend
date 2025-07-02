import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCategoriesBySalon } from "../../../Redux/Category/action";
import { fetchSalonById } from "../../../Redux/Salon/action";

const SalonDetail = () => {
  const { id } = useParams();
  const { salon } = useSelector((store) => store);

  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      dispatch(fetchSalonById(id));
      dispatch(
        getCategoriesBySalon({
          jwt: localStorage.getItem("jwt"),
          salonId: id,
        })
      );
    }
  }, [id]);

  return (
    <div className="space-y-20 mb-20">
      <section className="grid grid-cols-2 gap-3">
        <div className="col-span-2">
          <img
            className="w-full rounded-md h-[15rem] object-cover"
            src={salon.salon?.images[0]}
            alt=""
          />
        </div>

        <div className="col-span-1">
          <img
            className="w-full rounded-md h-[15rem] object-cover"
            src={salon.salon?.images[1]}
            alt=""
          />
        </div>

        <div className="col-span-1">
          <img
            className="w-full rounded-md h-[15rem] object-cover"
            src={salon.salon?.images[2]}
            alt=""
          />
        </div>
      </section>
      <section className="space-y-3">
        <h1 className="font-bold text-3xl">{salon.salon?.name}</h1>
        <p>{salon.salon?.address}</p>
        <p>
          <strong>Timing:</strong>
          {salon.salon?.openTime} To {salon.salon?.closeTime}
        </p>
      </section>
    </div>
  );
};

export default SalonDetail;
