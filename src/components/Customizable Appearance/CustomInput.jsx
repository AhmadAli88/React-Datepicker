import { TextField } from "@mui/material";
import PropTypes from "prop-types";

const CustomInput = ({ value, onClick }) => {
  return (
    <TextField
      onClick={onClick}        // Trigger DatePicker on click
      value={value}            // Display the selected date
      label="Select Date"      // Custom label
      variant="outlined"
      readOnly                 // Prevent direct typing
    />
  );
};

CustomInput.propTypes = {
  value: PropTypes.string,     // DatePicker passes the selected date as a string
  onClick: PropTypes.func,     // onClick function to open DatePicker
};

export default CustomInput;
