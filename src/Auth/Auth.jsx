import { useLocation, useNavigate } from "react-router-dom";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import { Button } from "@mui/material";

const Auth = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-10 rounded-xl shadow-2xl w-full max-w-md">
        {location.pathname === "/register" ? (
          <>
            <SignupForm />
            <div className="text-center pt-5">
              Already Have a Account?
              <Button onClick={() => navigate("/login")}>Login</Button>
            </div>
          </>
        ) : (
          <>
            <LoginForm />
            <div className="text-center pt-5">
              Not Have a Account?
              <Button onClick={() => navigate("/register")}>Signup</Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Auth;
