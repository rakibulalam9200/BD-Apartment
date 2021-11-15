import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import apartment from "../../../images/Apartment.jpg";
import bg from "../../../images/bg.png";
import ApartmentButton from "../../../StyledComponent/ApartmentButton";
const Banner = () => {
  const bannerStyle = {
    marginTop: "50px",
    paddingTop: "100px",
    minHeight: 520,
    marginBottom: "50px",
    display: "flex",
    alignItems: "center",
    background: `url(${bg})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundColor: "#B5A8A0",
  };
  return (
    <div style={bannerStyle}>
      <Container>
        <Grid container spacing={2} sx={{ alignItems: "center" }}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Typography variant="h4" sx={{ fontWeight: 600 }}>
              <span style={{ color: "#0A0A27" }}>Live With Comport</span> <br />
              <span style={{ color: "#473D35" }}>Stay With Us</span>
            </Typography>
            <Typography
              variant="body1"
              sx={{ lineHeight: 2, my: 3, color: "whitesmoke" }}
            >
              Believe in Customer satisfction, selling various type of aparment
              all over the Bangladesh with best effordable price for our
              clients.
            </Typography>
            <NavLink to="/apartments" style={{textDecoration:'none'}}>
              <ApartmentButton variant="contained">
                Expore Apartment
              </ApartmentButton>
            </NavLink>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <img src={apartment} alt="" width="95%" />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Banner;
