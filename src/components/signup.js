import { useState } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Signup = () => {
  const [state, setState] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };

  const submit = async () => {
    await axios({
      method: "post",
      url: "https://pizzaapi.herokuapp.com/users/Register",
      data: {
        username: state.email,
        firstname: state.firstname,
        lastname: state.lastname,
        password: state.password,
      },
    })
      .then((result) => setSuccessMessage(result.data.message))
      .then((error) => setErrorMessage(error));
  };
  return (
    <>
      <h3>Register</h3>
      <Box
        component="form"
        onSubmit={submit}
        sx={{
          "& > :not(style)": { m: 2, width: "90%", marginLeft: "5%" },
        }}
        autoComplete="off"
        className="inner"
      >
        <TextField
          name="firstname"
          label="First Name"
          variant="outlined"
          value={state.firstname}
          required
          onChange={handleChange}
        />
        <TextField
          name="lastname"
          label="Last Name"
          variant="outlined"
          value={state.lastname}
          required
          onChange={handleChange}
        />
        <TextField
          name="email"
          label="Email"
          variant="outlined"
          value={state.email}
          required
          onChange={handleChange}
        />
        <TextField
          type={"password"}
          name="password"
          label="Password"
          variant="outlined"
          value={state.password}
          required
          onChange={handleChange}
        />
        <Button variant="contained" type="button" onClick={submit}>
          Register
        </Button>

        <p className="forgot-password text-right">
          Already registered <a href="/login">log in?</a>
        </p>
        {errorMessage && <div className="error"> {errorMessage} </div>}
        {successMessage && <div className="success"> {successMessage} </div>}
      </Box>
    </>
  );
};

export default Signup;
