import { Button, Divider } from "@mui/material";
import CreateReviewForm from "../../Review/CreateReviewForm";
import Review from "../../Review/Review";
import SalonDetail from "./SalonDetail";
import SalonServiceDetails from "./SalonServiceDetails";
import { useState } from "react";

const tabs = [
  { name: "All services" },
  { name: "Reviews" },
  { name: "Create Review" },
];

const SalonDetails = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const handleActiveTab = (tab) => () => setActiveTab(tab);

  return (
    <div className="px-5 lg:px-20">
      <SalonDetail />
      <div className="space-y-4">
        <div className="flex gap-2">
          {tabs.map((tab) => (
            <Button
              onClick={handleActiveTab(tab)}
              variant={tab.name == activeTab.name ? "contained" : "outlined"}
            >
              {tab.name}
            </Button>
          ))}
        </div>
        <Divider />
      </div>
      <div>
        {activeTab.name === "Create Review" ? (
          <div className="flex justify-center">
            <CreateReviewForm />
          </div>
        ) : activeTab.name === "Reviews" ? (
          <div>
            <Review />
          </div>
        ) : (
          <div>
            <SalonServiceDetails />
          </div>
        )}
      </div>
    </div>
  );
};

export default SalonDetails;
