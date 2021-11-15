import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Swal from "sweetalert2";

import axios from "axios";
import { Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import "./UpdateApartment.css";
const UpdateApartment = () => {
  const { id } = useParams();
  const [apartment, setApartment] = useState({});
  const { register, handleSubmit, reset } = useForm({
    defaultValues: apartment,
  });
  useEffect(() => {
    const url = `https://fathomless-anchorage-68450.herokuapp.com/apartments/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setApartment(data);
      });
  }, [id]);

  const onSubmit = (data) => {
    axios
      .put(
        `https://fathomless-anchorage-68450.herokuapp.com/apartments/${id}`,
        data
      )
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          setApartment(res.data);
          reset(res.data);
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your Apartment Updated Successfully.",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div className="updateApartment">
      <Typography variant="h4" sx={{ color: "#494E62", mb: 1 }}>
        Update Apartment Info
      </Typography>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            defaultValue={apartment.name}
            {...register("name", { required: true, maxLength: 20 })}
            placeholder="Enter Apartment Name"
          />
          <input
            defaultValue={apartment.features}
            {...register("features")}
            placeholder="Features"
          />
          <input
            defaultValue={apartment.price}
            {...register("price")}
            placeholder="Price"
          />
          <input
            defaultValue={apartment.location}
            {...register("location")}
            placeholder="Location"
          />

          <textarea
            defaultValue={apartment.des}
            {...register("des")}
            placeholder="Description"
          />
          <input
            defaultValue={apartment.img}
            {...register("img")}
            placeholder="Enter Your Image URL"
          />
          <input type="submit" value="Update Apartment Info" />
        </form>
      </div>
    </div>
  );
};

export default UpdateApartment;
