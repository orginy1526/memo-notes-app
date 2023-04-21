import { Button, TextField, Typography } from "@mui/material";
// Card component
import Card from "./mui/Card";
import LoginForm from "./LoginForm";
const Home = () => {
  return (
    <div>
      {/* Header */}
      <Typography
        textAlign={"center"}
        variant="h4"
        margin={2}
        fontFamily={"sans-serif"}
        color={"GrayText"}
        gutterBottom
      >
        Welcome
      </Typography>
      {/* Note Header */}
      <TextField fullWidth label="Header" id="Header" />
      {/* Note body */}
      <Card />
      {/* Sign in Button */}
      <Button variant="contained" fullWidth>
        Sign In
      </Button>
      {/* OR */}
      <Typography
        textAlign={"center"}
        variant="h6"
        margin={2}
        fontFamily={"sans-serif"}
        color={"GrayText"}
        gutterBottom
      >
        Or
      </Typography>
      {/* Login Form */}
      <LoginForm />
      {/* Login Button */}
      <Button variant="contained" fullWidth>
        Login
      </Button>
    </div>
  );
};

export default Home;
