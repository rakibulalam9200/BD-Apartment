import { InputAdornment, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import EmailIcon from "@mui/icons-material/Email";
import ApartmentButton from "../../../StyledComponent/ApartmentButton";
import axios from "axios";
import Swal from "sweetalert2";
const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };
  const handleAdminSubmit = (e) => {
    const user = { email };
    axios
      .put("https://fathomless-anchorage-68450.herokuapp.com/users/admin", user)
      .then((res) => {
        if (res.data.modifiedCount) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "The User Role added Admin Successfully.",
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "To get Admin, First need to Register as a user!",
          });
        }
      });

    e.preventDefault();
  };
  return (
    <div>
      <Typography
        variant="h4"
        sx={{ mt: 10, color: "#494E62", textAlign: "center" }}
      >
        Make Admin
      </Typography>
      <form onSubmit={handleAdminSubmit}>
        <TextField
          sx={{ width: "30%", m: 2 }}
          id="input-with-icon-textfield"
          placeholder="Admin Email"
          type="email"
          name="email"
          onBlur={handleOnBlur}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailIcon />
              </InputAdornment>
            ),
          }}
          variant="standard"
          required
        />
        <br />
        <ApartmentButton type="Submit" sx={{ width: "30%", m: 2 }}>
          Add Admin
        </ApartmentButton>
      </form>
    </div>
  );
};

export default MakeAdmin;
