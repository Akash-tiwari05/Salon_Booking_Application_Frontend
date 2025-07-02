import { Card } from "@mui/material";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import { useDispatch } from "react-redux";
import { markNotificationAsRead } from "../../Redux/Notifications/action";
import { useNavigate } from "react-router-dom";

const NotificationCard = ({ item }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleReadNotification = () => {
    dispatch(
      markNotificationAsRead({
        jwt: localStorage.getItem("jwt"),
        notificationId: item.id,
      })
    );
    navigate("/bookings");
  };
  return (
    <Card
      onClick={handleReadNotification}
      sx={{ bgcolor: item.isRead ? "white" : "#EAF0F1" }}
      className={"cursor-pointer p-5 flex items-center gap-5"}
    >
      <NotificationsActiveIcon />
      <div>
        <p>{item.description}</p>
        <h1 className="space-x-3">salon Id:{item.salonId}</h1>
      </div>
    </Card>
  );
};

export default NotificationCard;
