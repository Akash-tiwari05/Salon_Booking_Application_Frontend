import { NotificationsActive, Menu as MenuIcon } from "@mui/icons-material";
import { Badge, Drawer, IconButton } from "@mui/material";
import DrawerList from "./DrawerList";
import { useState } from "react";
import { useDispatch } from "react-redux";

const Navbar = ({ DrawerList }) => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  return (
    <div className="h-[10vh] flex items-center justify-between px-5 border-b">
      <div className="flex items-center gap-3">
        <IconButton onClick={toggleDrawer(true)}>
          <MenuIcon style={{ color: "#019031" }} />
        </IconButton>
        <h1 className="text-xl cursor-pointer font-bold">Salon Booking</h1>
      </div>
      <IconButton>
        <Badge color="primary" variant="dot">
          <NotificationsActive color="primary" />
        </Badge>
      </IconButton>

      <Drawer open={open} onClose={toggleDrawer(false)}>
        <DrawerList toggleDrawer={toggleDrawer} />
      </Drawer>
    </div>
  );
};

export default Navbar;
