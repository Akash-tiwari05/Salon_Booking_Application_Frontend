import Button from "@mui/material/Button";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import React, { useState } from "react";
import OwnerDetailsForm from "./OwnerDetailsForm";
import { useFormik } from "formik";
import SalonDetailsForm from "./SalonDetailsForm";
import SalonAddressForm from "./SalonAddressForm";
import { useDispatch } from "react-redux";
import { createSalon } from "../../Redux/Salon/action";
import { useNavigate } from "react-router-dom";

const getLocalTime = (time) => {
  let hour = time?.$H;
  let minute = time?.$m;
  let second = time?.$s;

  const localTime = `${String(hour).padStart(2, "0")}:${String(minute).padStart(
    2,
    "0"
  )}:${String(second).padStart(2, "0")}`;
  return localTime;
};

const steps = ["Owner Details", "Salon Details", "Salon Address"];
const SalonAccountForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [activeStep, setActiveStep] = useState(0);
  const handleActiveStep = (value) => () => {
    setActiveStep(activeStep + value);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      fullName: "",
      password: "",
      salonAddress: {
        phoneNumber: "",
        pincode: "",
        address: "",
        city: "",
        email: "",
      },
      salonDetails: {
        name: "",
        openTime: "",
        closeTime: "",
        images: [],
      },
    },
    onSubmit: (values) => {
      console.log("Formik", values);
      const openTime = getLocalTime(values.salonDetails.openTime);
      const closeTime = getLocalTime(values.salonDetails.closeTime);
      const ownerDetails = {
        fullName: values.fullName,
        email: values.email,
        password: values.password,
        role: "SALON_OWNER",
        userName: values.email.split("@")[0],
      };
      const salonDetails = {
        ...values.salonDetails,
        openTime,
        closeTime,
        ...values.salonAddress,
      };
      dispatch(createSalon({ salonDetails, ownerDetails }));
    },
  });

  return (
    <div>
      <Stepper activeStep={activeStep}>
        {steps.map((item) => (
          <Step key={item}>
            <StepLabel>{item}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div className="mt-20 space-y-10">
        <div>
          {activeStep == 0 ? (
            <OwnerDetailsForm formik={formik} />
          ) : activeStep == 1 ? (
            <SalonDetailsForm formik={formik} />
          ) : (
            <div>
              <SalonAddressForm formik={formik} />
            </div>
          )}
        </div>
        <div className="flex items-center justify-between">
          <Button
            disabled={activeStep < 1}
            onClick={handleActiveStep(-1)}
            variant="contained"
          >
            Back
          </Button>
          <Button
            onClick={
              activeStep === 2 ? formik.handleSubmit : handleActiveStep(1)
            }
            variant="contained"
          >
            {activeStep === 2 ? "Create Account" : "Continue"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SalonAccountForm;
