import "./App.css";
import { ThemeProvider } from "@mui/material";
import greenTheme from "./theme/greenTheme";
import { Route, Routes } from "react-router-dom";
import SalonDashboard from "./Salon/SalonDashboard";
import CustomerRoutes from "./Routes/CustomerRoutes";
import Auth from "./Auth/Auth";
import BecomePartner from "./Salon/BecomePartner/BecomePartner";

function App() {
  return (
    <ThemeProvider theme={greenTheme}>
      <Routes>
        <Route path="/salon-dashboard/*" element={<SalonDashboard />} />
        <Route path="/register" element={<Auth />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/become-partner" element={<BecomePartner />} />
        <Route path="*" element={<CustomerRoutes />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
