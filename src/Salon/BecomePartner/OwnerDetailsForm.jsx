import { Button, Container, TextField, Typography } from "@mui/material";

const OwnerDetailsForm = ({ formik }) => {
  return (
    <Container component={"main"}>
      <div className="space-y-5">
        <Typography className="text-center " variant="h5">
          Owner Details
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
        </form>
      </div>
    </Container>
  );
};

export default OwnerDetailsForm;
