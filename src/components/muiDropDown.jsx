import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { boolean } from "yup";

export default function DropDown(props) {
  const dropdownOptions = [
    { label: "Option one" },
    { label: "Option two" },
    { label: "Option three" },
    { label: "Option four" },
  ];
  console.log(props.disable);
  return (
    <Autocomplete
      sx={{ bgcolor: "#ffffffda", mb: 2, width: "180px" }}
      // sx={{ width: "180px", mr: 1 }}
      disablePortal
      id=""
      // (props.disable)?disabled:null

      options={dropdownOptions}
      renderInput={(params) => <TextField {...params} label={props.label} />}
      size="small"
    />
  );
}
