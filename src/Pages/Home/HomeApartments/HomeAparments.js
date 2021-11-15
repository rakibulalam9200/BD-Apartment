import { CircularProgress, Container, Grid, Typography } from "@mui/material";
import React from "react";
import useApartments from "../../../hooks/useApartments";
import Apartment from "../../Apartment/Apartment";

const HomeAparments = () => {
  const [isLoading,apartments] = useApartments();
   const homeApartments = apartments.slice(0,6);
  return (
    <Container sx={{ mt: 13, mb: 4 }}>
      <Typography variant="h3" sx={{ color: "#494E62", mb: 4 }}>
        Our Top Apartments for Sale
      </Typography>
      {isLoading? <CircularProgress/>
      :<Grid
        container
        spacing={{ xs: 1, md: 2 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {homeApartments.map((apartment,index) => (
          <Grid item xs={12} sm={4} md={4} key={index}>
            <Apartment apartment={apartment}></Apartment>
          </Grid>
        ))}
      </Grid>}
    </Container>
  );
};

export default HomeAparments;
