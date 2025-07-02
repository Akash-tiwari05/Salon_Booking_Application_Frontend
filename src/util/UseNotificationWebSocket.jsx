import { useState } from "react";
import { useDispatch } from "react-redux";
import SockJS from "sockjs-client";
import Stomp from "stompjs";
import { addNotification } from "../Redux/Notifications/action";

const UseNotificationWebSocket = (userId, type) => {
  const dispatch = useDispatch();
  const [stompClient, setStompClient] = useState(null);

  useEffect(() => {
    if (userId) {
      const sock = new SockJS("http://localhost:5000/api/notifications/ws");
      const stomp = Stomp.over(sock);
      setStompClient(stomp);
    }
  }, [userId]);

  useEffect(() => {
    if (stompClient) {
      setStompClient.connect(
        {},
        () => {
          stompClient.subscribe(
            `/notification/${type}/${userId}`,
            (message) => {
              const receivedMessage = JSON.parse(message.body);
              console.log("received notification from server", receivedMessage);
              dispatch(addNotification(receivedMessage));
            }
          );
        },
        (error) => console.log("subscription error", error)
      );
    }
  }, [stompClient, userId]);
};

export default UseNotificationWebSocket;
