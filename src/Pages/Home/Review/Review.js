import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';

const Review = ({review}) => {
    const {displayName,email,img,detials} = review;
    return (
        <Card sx={{ maxWidht: 500 }}>
      <CardMedia component="img" image={img} alt="" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {displayName}
        </Typography>
        <Typography variant="h6" color="text.primary">
           <span style={{ color: "#A24E36" }}>{email}</span>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {detials}
        </Typography>
      </CardContent>
      
    </Card>
    );
};

export default Review;