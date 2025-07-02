import { Button, Container, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../Redux/Auth/action";

const SignupForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
      role: "CUSTOMER",
    },
    // 36:44 timestamp
    onSubmit: (values) => {
      console.log("submitting", values);
      values.userName = values.fullName;
      dispatch(registerUser({ userData: values, navigate }));
    },
  });
  return (
    <Container component={"main"} maxWidth="xs">
      <div className="space-y-5">
        <Typography className="text-center " variant="h5">
          Signup
        </Typography>
        <form onSubmit={formik.handleSubmit} className="space-y-5">
          <div>
            <TextField
              variant="outlined"
              fullWidth
              name="fullName"
              id="fullName"
              label="Full Name"
              onChange={formik.handleChange}
              value={formik.values.fullName}
              required
            />
          </div>
          <div>
            <TextField
              variant="outlined"
              fullWidth
              name="email"
              id="email"
              label="Email address"
              onChange={formik.handleChange}
              value={formik.values.email}
              required
            />
          </div>
          <div>
            <TextField
              variant="outlined"
              fullWidth
              name="password"
              id="password"
              label="Password address"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              required
            />
          </div>

          <Button
            sx={{ py: ".8rem" }}
            fullWidth
            variant="contained"
            type="submit"
          >
            Signup
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default SignupForm;
