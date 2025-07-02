import { RemoveShoppingCart, ShoppingCart } from "@mui/icons-material";
import { Button, Divider, Modal } from "@mui/material";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { createBooking } from "../../../Redux/Booking/action";
import { fetchServicesBySalonId } from "../../../Redux/Salon Services/action";
import CategoryCard from "./CategoryCard";
import SelectedServiceList from "./SelectedServiceList";
import ServiceCard from "./ServiceCard";

const SalonServiceDetails = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const [open, setOpen] = useState(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const [bookingData, setBookingData] = useState({
    services: [],
    time: null,
  });

  const dispatch = useDispatch();
  const { id } = useParams();
  const { salon, service, category } = useSelector((store) => store);

  const handleCategoryClick = (category) => () => {
    setSelectedCategory(category.id);
  };

  const handleSelectService = (service) => {
    setBookingData((prevState) => ({
      ...prevState,
      services: [...prevState.services, service],
    }));
  };

  const handleRemoveService = (id) => {
    setBookingData((prevState) => ({
      ...prevState,
      services: prevState.services.filter((service) => service.id !== id),
    }));
  };

  useEffect(() => {
    dispatch(
      fetchServicesBySalonId({
        salonId: id,
        jwt: localStorage.getItem("jwt"),
        categoryId: selectedCategory,
      })
    );
  }, [id, selectedCategory]);

  const handleModalClose = () => {
    setOpen(false);
  };
  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleBooking = () => {
    const serviceIds = bookingData.services.map((service) => service.id);
    dispatch(
      createBooking({
        jwt: localStorage.getItem("jwt"),
        salonId: id,
        bookingData: { serviceIds, startTime: bookingData.time },
      })
    );
  };

  return (
    <div className="lg:flex gap-5 h-[90vh] mt-10">
      <section className="space-y-5 border-r lg:w-[25%] pr-5">
        {category.categories.map((item, index) => (
          <CategoryCard
            selectedCategory={selectedCategory}
            item={item}
            handleCategoryClick={handleCategoryClick(item)}
          />
        ))}
      </section>
      <section className="space-y-2 lg:w-[50%] px-5 lg:px-20 overflow-y-auto">
        {service.services.map((item) => (
          <div className="space-y-4">
            <ServiceCard
              onSelect={handleSelectService}
              onRemove={handleRemoveService}
              item={item}
            />
            <Divider />
          </div>
        ))}
      </section>
      <section className="lg:w-[25%]">
        <div className="border rounded-md p-5">
          {true ? (
            <div>
              <div className="flex items-center gap-2">
                <ShoppingCart sx={{ fontSize: "30px", color: "green" }} />
                <h1 className="font-thin text-sm">Selected Service</h1>
              </div>
              <SelectedServiceList
                selectedServices={bookingData.services}
                onRemove={handleRemoveService}
              />
              <Button
                onClick={handleOpenModal}
                sx={{ py: ".7rem" }}
                fullWidth
                variant="contained"
              >
                Book Now
              </Button>
            </div>
          ) : (
            <div className="flex flex-col gap-3 items-center justify-center">
              <RemoveShoppingCart sx={{ fontSize: "30px", color: "green" }} />
              <h1>not selected</h1>
            </div>
          )}
        </div>
      </section>
      <Modal
        open={open}
        onClose={handleModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] lg:w-[600px] bg-secondary-color shadow-lg lg:flex gap-5 p-4">
          <div className="w-[50%] border-r pr-5">
            <h1 className="text-xl font-semibold">Time Slot Not Available</h1>
          </div>
          <div className="space-y-5">
            <SelectedServiceList
              onRemove={handleRemoveService}
              selectedServices={bookingData.services}
            />
            <LocalizationProvider fullWidth dateAdapter={AdapterDayjs}>
              <DateTimePicker
                sx={{ width: "100%" }}
                fullWidth
                onChange={(value) => {
                  if (value) {
                    const localDate = value.format("YYYY-MM-DDTHH:mm:ss");
                    setBookingData((prevState) => ({
                      ...prevState,
                      time: localDate,
                    }));
                  }
                }}
                label="Select Time Slot"
              />
            </LocalizationProvider>
            <div>
              <Button fullWidth variant="outlined" onClick={handleBooking}>
                Book
              </Button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default SalonServiceDetails;
