import { AccountBalance } from "@mui/icons-material";
import EarningCharts from "./Chart/EarningCharts";
import ReportCard from "./ReportCard";
import BookingCharts from "./Chart/BookingCharts";

const HomePage = () => {
  return (
    <div className="space-y-5">
      <div className="lg:flex gap-5">
        <div className="space-y-10 rounded-md w-full lg:w-[70%]">
          <div className="border rounded-lg p-5 w-full">
            <h1 className="text-lg font-bold pb-5 text-primary-color">
              Total Revenue
            </h1>
            <EarningCharts />
          </div>
        </div>
        <section className="space-y-5 w-full lg:w-[30%]">
          <ReportCard
            icon={<AccountBalance />}
            value={"$" + 499}
            title={"total Earnings"}
          />
          <ReportCard
            icon={<AccountBalance />}
            value={"$" + 499}
            title={"total Bookings"}
          />
          <ReportCard
            icon={<AccountBalance />}
            value={"$" + 499}
            title={"total Refunds"}
          />
          <ReportCard
            icon={<AccountBalance />}
            value={"$" + 499}
            title={"Cancel Bookings"}
          />
        </section>
      </div>
      <div className="space-y-10 rounded-md w-full">
        <div className="border rounded-lg p-5 w-full">
          <h1 className="text-lg font-bold pb-5 text-primary-color">
            Total Booking
          </h1>
          <BookingCharts />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
