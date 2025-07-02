import { Close } from "@mui/icons-material";
import { IconButton } from "@mui/material";

const SelectedServiceList = ({ onRemove, selectedServices }) => {
  return (
    <div className="my-5 space-y-2">
      {selectedServices.map((item) => (
        <div className="py-2 px-4 rounded-md bg-slate-100 flex justify-between items-center">
          <h1 className="font-thin">{item.name}</h1>
          <p>₹{item.price}</p>
          <IconButton onClick={() => onRemove(item.id)}>
            <Close />
          </IconButton>
        </div>
      ))}
    </div>
  );
};

export default SelectedServiceList;
