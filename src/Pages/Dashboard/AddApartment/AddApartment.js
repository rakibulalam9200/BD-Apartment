import { InputAdornment, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import Swal from "sweetalert2";
import ApartmentButton from "../../../StyledComponent/ApartmentButton";
import ApartmentIcon from "@mui/icons-material/Apartment";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import DetailsIcon from "@mui/icons-material/Details";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import axios from "axios";

const AddApartment = () => {
  const [apartmentData, setApartmentData] = useState({});
  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newApartmentData = { ...apartmentData };
    newApartmentData[field] = value;
    setApartmentData(newApartmentData);
  };
  const handleApartmentSubmit = (e) => {
    //const user = {email};
    axios
      .post(
        "https://fathomless-anchorage-68450.herokuapp.com/addApartment",
        apartmentData
      )
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your Apartment added Successfully.",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });

    e.preventDefault();
  };
  return (
    <div>
      <Typography
        variant="h4"
        sx={{ mt: 5, color: "#494E62", textAlign: "center" }}
      >
        Add an Aparment
      </Typography>
      <form onSubmit={handleApartmentSubmit}>
        <TextField
          sx={{ width: "50%", my: 2 }}
          id="input-with-icon-textfield"
          placeholder="Your Apartment Name"
          type="text"
          name="name"
          onChange={handleOnChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <ApartmentIcon />
              </InputAdornment>
            ),
          }}
          variant="standard"
          required
        />
        <br />
        <TextField
          sx={{ width: "50%", my: 2 }}
          id="input-with-icon-textfield"
          placeholder="Location"
          type="text"
          name="location"
          onChange={handleOnChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LocationOnIcon />
              </InputAdornment>
            ),
          }}
          variant="standard"
          required
        />
        <br />
        <TextField
          sx={{ width: "50%", my: 2 }}
          id="input-with-icon-textfield"
          placeholder="Price"
          type="text"
          name="price"
          onChange={handleOnChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <MonetizationOnIcon />
              </InputAdornment>
            ),
          }}
          variant="standard"
          required
        />
        <br />
        <TextField
          sx={{ width: "50%", my: 2 }}
          id="input-with-icon-textfield"
          placeholder="Apartment Features"
          type="text"
          name="features"
          onChange={handleOnChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AddBusinessIcon />
              </InputAdornment>
            ),
          }}
          variant="standard"
          required
        />
        <br />
        <TextField
          sx={{ width: "50%", my: 2 }}
          id="input-with-icon-textfield"
          placeholder="Apartment Description"
          type="text"
          name="des"
          onChange={handleOnChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <DetailsIcon />
              </InputAdornment>
            ),
          }}
          variant="standard"
          required
        />
        <br />
        <TextField
          sx={{ width: "50%", my: 2 }}
          id="input-with-icon-textfield"
          placeholder="Enter Apartment Image Link"
          type="text"
          name="img"
          onChange={handleOnChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AddPhotoAlternateIcon />
              </InputAdornment>
            ),
          }}
          variant="standard"
          required
        />
        <br />

        <br />
        <ApartmentButton type="Submit" sx={{ width: "30%", m: 2 }}>
          Add Apartment
        </ApartmentButton>
      </form>
    </div>
  );
};

export default AddApartment;
