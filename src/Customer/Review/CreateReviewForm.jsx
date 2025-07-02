import { Box, Button, InputLabel, Rating, TextField } from "@mui/material";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { createReview } from "../../Redux/Review/action";

const CreateReviewForm = () => {
  const dispatch = useDispatch();
  const { review } = useSelector((store) => store);
  const { id } = useParams();
  const formik = useFormik({
    initialValues: { reviewText: "", rating: 0 },
    onSubmit: (values) => {
      console.log("submitting", values);
      dispatch(
        createReview({
          salonId: id,
          jwt: localStorage.getItem("jwt"),
          reviewData: values,
        })
      );
    },
  });
  return (
    <Box
      component={"form"}
      onSubmit={formik.handleSubmit}
      sx={{ mt: 3 }}
      className="space-y-5 w-full lg:w-1/2"
    >
      <TextField
        fullWidth
        id="reviewText"
        name="reviewText"
        label="review"
        variant="outlined"
        multiline
        rows={4}
        value={formik.values.reviewText}
        onChange={formik.handleChange}
      />
      <div className="space-y-2">
        <InputLabel>Rating</InputLabel>
        <Rating
          id="rating"
          name="rating"
          value={formik.values.rating}
          onChange={(event, newValue) =>
            formik.setFieldValue("rating", newValue)
          }
          precision={0.5}
        />
      </div>
      <Button variant="contained" color="primary" type="submit">
        Submit
      </Button>
    </Box>
  );
};

export default CreateReviewForm;
