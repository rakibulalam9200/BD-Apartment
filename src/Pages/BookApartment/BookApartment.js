import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import ApartmentButton from "../../StyledComponent/ApartmentButton";
import "./BookApartment.css";

const BookApartment = () => {
  const { apartmentId } = useParams();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [apartment, setApartment] = useState({});
  const { user } = useAuth();
  useEffect(() => {
    const url = `https://fathomless-anchorage-68450.herokuapp.com/apartments/${apartmentId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setApartment(data);
      });
  }, [apartmentId]);

  const onSubmit = (data) => {
    let { _id, ...apartmentBooked } = apartment;
    data = { ...data, ...apartmentBooked };
    data.status = "pending";
    axios
      .post("https://fathomless-anchorage-68450.herokuapp.com/book", data)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your Booked will be Processed..!!!",
            showConfirmButton: false,
            timer: 1500,
          });
          reset();
        }
      });
  };
  return (
    <Container sx={{ mt: 10 }}>
      <Typography
        variant="h4"
        gutterBottom
        component="div"
        sx={{ color: "#494E62", fontWeight: "bold", my: 2 }}
      >
        Book the Apartment
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6}>
          <Card sx={{ maxWidth: 500 }}>
            <CardMedia component="img" image={apartment.img} alt="" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {apartment.name}
              </Typography>
              <Typography variant="h6" color="text.primary">
                Location:{" "}
                <span style={{ color: "#A24E36" }}>{apartment.location}</span>
              </Typography>
              <Typography
                variant="body1"
                color="text.primary"
                sx={{ fontWeight: "bold" }}
              >
                Selling amount:{" "}
                <span style={{ color: "#A24E36" }}>{apartment.price}</span>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {apartment.des}
              </Typography>
              <Typography variant="body1" color="text.primary">
                {apartment.features}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <div>
            <form className="book-form" onSubmit={handleSubmit(onSubmit)}>
              <input
                defaultValue={user.displayName}
                {...register("displayName")}
              />

              <input
                defaultValue={user.email}
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="error">This field is required</span>
              )}
              <input
                placeholder="Address"
                defaultValue=""
                {...register("address")}
              />
              <input placeholder="City" defaultValue="" {...register("city")} />
              <input
                placeholder="phone number"
                defaultValue=""
                {...register("phone")}
              />
              <ApartmentButton
                style={{ fontWeight: "bold", width: "70%" }}
                type="submit"
              >
                Booked the Apartment
              </ApartmentButton>
            </form>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default BookApartment;
