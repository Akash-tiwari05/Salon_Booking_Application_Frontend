import { AddPhotoAlternate, Close } from "@mui/icons-material";
import {
  CircularProgress,
  Container,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { LocalizationProvider, TimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useState } from "react";
import { uploadToCloudinary } from "../../util/uploadToCloudinary";

const SalonDetailsForm = ({ formik }) => {
  const [uploadImage, setUploadImage] = useState(false);
  const handleImageChange = async (event) => {
    const file = event.target.files[0];
    setUploadImage[true];
    const image = await uploadToCloudinary(file);
    formik.setFieldValue("salonDetails.images", [
      ...formik.values.salonDetails.images,
      image,
    ]);
    setUploadImage[false];
  };
  const handleRemoveImage = (index) => () => {
    const updatedImages = [...formik.values.salonDetails.images];
    updatedImages.splice(index, 1);
    formik.setFieldValue("salonDetails.images", updatedImages);
  };
  return (
    <Container component={"main"}>
      <div className="space-y-5">
        <Typography className="text-center " variant="h5">
          Salon Details
        </Typography>
        <form onSubmit={formik.handleSubmit} className="space-y-5">
          <div className="flex gap-2 flex-wrap">
            {formik.values.salonDetails.images.map((image, index) => (
              <div className="relative border">
                <img className="w-24 h-24 object-cover" src={image} alt="" />
                <IconButton
                  onClick={handleRemoveImage(index)}
                  className=""
                  size="small"
                  color="error"
                  sx={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                  }}
                >
                  <Close sx={{ fontSize: "1rem" }} />
                </IconButton>
              </div>
            ))}
            <>
              <input
                type="file"
                accept="image/*"
                id="fileInput"
                style={{ display: "none" }}
                onChange={handleImageChange}
              />
              <label className="relative" htmlFor="fileInput">
                <span className="w-24 h-24 cursor-pointer flex items-center justify-center p-3 border rounded-md border-gray-400">
                  <AddPhotoAlternate className="text-gray-700" />
                </span>
                {uploadImage && (
                  <div className="absolute left-0 right-0 top-0 bottom-0 w-24 h-24 flex items-center justify-center">
                    <CircularProgress />
                  </div>
                )}
              </label>
            </>
          </div>
          <div>
            <TextField
              variant="outlined"
              fullWidth
              name="salonDetails.name"
              id="Salon Name"
              label="Full Name"
              onChange={formik.handleChange}
              value={formik.values.salonDetails.name}
              required
            />
          </div>
          <div>
            <LocalizationProvider fullWidth dateAdapter={AdapterDayjs}>
              <TimePicker
                sx={{ width: "100%" }}
                fullWidth
                onChange={(value) => {
                  if (value) {
                    formik.setFieldValue("salonDetails.openTime", dayjs(value));
                  }
                }}
                label="Select Open Time"
              />
            </LocalizationProvider>
          </div>
          <div>
            <LocalizationProvider fullWidth dateAdapter={AdapterDayjs}>
              <TimePicker
                sx={{ width: "100%" }}
                fullWidth
                onChange={(value) => {
                  if (value) {
                    formik.setFieldValue("salonDetails.closeTime", value);
                  }
                }}
                label="Select Close Time "
              />
            </LocalizationProvider>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default SalonDetailsForm;
