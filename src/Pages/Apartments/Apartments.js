import { CircularProgress, Container, Grid, Typography } from "@mui/material";
import React  from "react";
import useApartments from "../../hooks/useApartments";
import Apartment from "../Apartment/Apartment";

const Apartments = () => {
  const [isLoading,apartments] = useApartments();
  return (
    <Container sx={{ mt: 13,mb:4 }}>
      <Typography variant="h3" sx={{ color: "#494E62",mb:4 }}>
        Our Apartments for Sale
      </Typography>
      
      { isLoading? <CircularProgress />
       :
      <Grid
        container
        spacing={{ xs: 1, md: 2 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      > 
       {
        apartments.map((apartment,index) => (
          <Grid item xs={12} sm={4} md={4} key={index}>
              <Apartment
              apartment = {apartment}
              ></Apartment>
          </Grid>
        ))
        } 
      </Grid>}
    </Container>
  );
};

export default Apartments;
