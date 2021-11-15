import { Typography } from "@mui/material";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import axios from "axios";

import React, { useState } from "react";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import ApartmentButton from "../../../StyledComponent/ApartmentButton";
const Review = () => {
  const { user } = useAuth();
  const [reviewData, setReviewData] = useState({});
  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newReviewData = { ...reviewData };
    newReviewData[field] = value;
    setReviewData(newReviewData);
  };

  const handleReviewSumit = (e) => {
    reviewData.displayName = user.displayName;
    reviewData.email = user.email;
    axios
      .post(
        "https://fathomless-anchorage-68450.herokuapp.com/addReview",
        reviewData
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
      <Typography variant="h4" gutterBottom component="div">
        Add Your Review
      </Typography>
      <form onSubmit={handleReviewSumit}>
        <TextareaAutosize
          aria-label="empty textarea"
          placeholder="Enter image link"
          name="img"
          onChange={handleOnChange}
          style={{ width: 400, marginBottom: "10px", fontSize: "20px" }}
        />
        <br />
        <TextareaAutosize
          aria-label="minimum height"
          minRows={4}
          placeholder="Write your Review"
          name="detials"
          onChange={handleOnChange}
          style={{ width: 400, marginBottom: "10px", fontSize: "20px" }}
        />
        <br />
        <ApartmentButton type="Submit" sx={{ width: "30%", m: 2 }}>
          Add Review
        </ApartmentButton>
      </form>
    </div>
  );
};

export default Review;
