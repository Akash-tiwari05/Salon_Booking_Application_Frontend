import { useSelector } from "react-redux";
import ProfileFieldCard from "./ProfileFieldCard";
import { Divider } from "@mui/material";

const Profile = () => {
  const { salon, auth } = useSelector((store) => store);
  return (
    <div className="lg:px-20 lg:bottom-20 space-y-20">
      <div className="w-full lg:w-[70%]">
        <h1 className=" text-5xl font-bold pb-5">{salon.salon?.name}</h1>
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
      </div>
      <div className="mt-10 lg:w-[70%]">
        <div className="flex items-center pb-3 justify-between">
          <h1 className="text-2xl font-bold text-gray-600">Owner Details</h1>
        </div>
        <div>
          <ProfileFieldCard keys={"owner name"} value={auth.user?.fullName} />
          <Divider />
          <ProfileFieldCard keys={"email"} value={auth.user?.email} />
          <Divider />
          <ProfileFieldCard keys={"role"} value={"Salon_Owner"} />
        </div>
      </div>
      <div className="mt-10 lg:w-[70%]">
        <div className="flex items-center pb-3 justify-between">
          <h1 className="text-2xl font-bold text-gray-600">Salon Details</h1>
        </div>
        <div>
          <ProfileFieldCard keys={"salon name"} value={salon.salon?.name} />
          <Divider />
          <ProfileFieldCard
            keys={"salon address"}
            value={salon.salon?.address}
          />
          <Divider />
          <ProfileFieldCard
            keys={"open time"}
            value={salon.salon?.openTime + " AM"}
          />
          <Divider />
          <ProfileFieldCard
            keys={"close time"}
            value={salon.salon?.closeTime}
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
