import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ApartmentButton from "../../StyledComponent/ApartmentButton";
import { Link } from "react-router-dom";
const Apartment = ({ apartment }) => {
  const { name, img, des, price, _id } = apartment;
  return (
    <Card sx={{ maxWidht: 500 }}>
      <CardMedia component="img" image={img} alt="" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="h6" color="text.primary">
          Selling amount: <span style={{ color: "#A24E36" }}>{price}</span>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {des.slice(0, 150)}
        </Typography>
      </CardContent>
      <CardActions sx={{ mb: 2, ml: "25%" }}>
        <Link to={`/apartments/${_id}`} style={{ textDecoration: "none" }}>
          <ApartmentButton><AddShoppingCartIcon/>Add to Purchase</ApartmentButton>
        </Link>
      </CardActions>
    </Card>
  );
};

export default Apartment;
