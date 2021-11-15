import { CircularProgress, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import useReviews from '../../../hooks/useReviews';
import Review from '../Review/Review';

const Reviews = () => {
    const [isLoading,reviews] = useReviews();
    return (
        <Container sx={{ mt: 13,mb:4 }}>
      <Typography variant="h3" sx={{ color: "#494E62",mb:4 }}>
        Our Client Reviews
      </Typography>
      
      { isLoading? <CircularProgress />
       :
      <Grid
        container
        spacing={{ xs: 1, md: 2 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      > 
       {
        reviews.map((review,index) => (
          <Grid item xs={6} sm={3} md={3} key={index}>
              <Review
              review = {review}
              ></Review>
          </Grid>
        ))

        } 
      </Grid>}
    </Container>
    );
};

export default Reviews;