import { Delete } from "@mui/icons-material";
import { Avatar, Box, Grid, IconButton, Rating } from "@mui/material";
import { red } from "@mui/material/colors";
import { useDispatch, useSelector } from "react-redux";
import { deleteReview } from "../../Redux/Review/action";

const ReviewCard = ({ item }) => {
  const dispatch = useDispatch();
  const { auth } = useSelector((store) => store);
  const handleDeleteReview = () => {
    dispatch(
      deleteReview({
        reviewId: item.id,
        jwt: localStorage.getItem("jwt"),
      })
    );
  };
  return (
    <div className="flex justify-between">
      <div className="w-[80%]">
        <Grid container>
          <Grid size={{ xs: 3, lg: 1.5 }}>
            <Box>
              <Avatar
                className="text-white"
                sx={{ width: 56, height: 56, bgcolor: "#9155FD" }}
              >
                {item.user.fullName[0]}
              </Avatar>
            </Box>
          </Grid>
          <Grid size={9}>
            <div className="space-y-2">
              <p className="font-semibold text-lg">{item.user.fullName}</p>
              <p className="opacity-70">2024-12-01 To 9:51:18.321553</p>
            </div>
            <div>
              <Rating
                readOnly
                value={item.rating}
                name="half-rating"
                defaultValue={4.5}
                precision={0.5}
              />
            </div>
            <p>{item.reviewText}</p>
          </Grid>
        </Grid>
      </div>

      {item.user.id === auth.user?.id && (
        <IconButton onClick={handleDeleteReview}>
          <Delete sx={{ color: red[700] }} />
        </IconButton>
      )}
    </div>
  );
};

export default ReviewCard;
