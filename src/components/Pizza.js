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

const Pizza = () => {
  const [state, setState] = useState({
    pizzaName: "",
    pizzaDesc: "",
    pizzaPrice: "",
    pizzaType: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    try {
      let response = await axios.post(
        "https://pizzaapi.herokuapp.com/Pizza/Create",
        {
          Name: state.pizzaName,
          Desc: state.pizzaDesc,
          Price: state.pizzaPrice,
          Type: state.pizzaType,
        }
      );
      setSuccessMessage(response.data.message);
    } catch (err) {
      //setErrorMessage(err);
      console.log(err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setState({ ...state, [name]: value });
  };
  return (
    <>
      <h3>Add Pizza </h3>

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
          name="pizzaName"
          label="Name"
          variant="outlined"
          value={state.pizzaName}
          required
          onChange={handleChange}
        />
        <TextField
          name="pizzaDesc"
          label="Description"
          variant="outlined"
          value={state.pizzaDesc}
          required
          onChange={handleChange}
        />
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Type</InputLabel>
          <Select
            name="pizzaType"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={state.pizzaType}
            label="Type"
            onChange={handleChange}
          >
            <MenuItem value="BS">Best Sellers</MenuItem>
            <MenuItem value="V">Veg</MenuItem>
            <MenuItem value="NV">Non-Veg</MenuItem>
          </Select>
        </FormControl>
        <TextField
          name="pizzaPrice"
          label="Price"
          variant="outlined"
          value={state.pizzaPrice}
          required
          onChange={handleChange}
          type="number"
        />
        <Button variant="contained" type="submit" endIcon={<SendIcon />}>
          Submit
        </Button>

        {errorMessage && <div className="error"> {errorMessage} </div>}
        {successMessage && <div className="success"> {successMessage} </div>}
      </Box>
    </>
  );
};
export default Pizza;
