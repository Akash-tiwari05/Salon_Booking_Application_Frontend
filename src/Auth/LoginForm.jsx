import { Button, Container, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../Redux/Auth/action";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log("submitting", values);
      dispatch(loginUser({ data: values, navigate }));
    },
  });
  return (
    <Container component={"main"} maxWidth="xs">
      <div className="space-y-5">
        <Typography className="text-center " variant="h5">
          Login
        </Typography>
        <form onSubmit={formik.handleSubmit} className="space-y-5">
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
            Login
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default LoginForm;
