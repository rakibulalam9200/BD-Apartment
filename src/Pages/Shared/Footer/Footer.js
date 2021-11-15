import {
  Grid,
  IconButton,
  List,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import { makeStyles } from "@mui/styles";
import ApartmentButton from "../../../StyledComponent/ApartmentButton";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import logo from "../../../images/logo.png";

const footerStyle = makeStyles({
  socialIcon: {
    color: "whitesmoke !important",
    border: "2px solid whitesmoke !important",
    margin: "20px 10px 30px 0 !important",
    "&:hover": {
      background: "whitesmoke !important",
      color: "#494E62 !important",
    },
  },
});
const Footer = () => {
  const { socialIcon } = footerStyle();
  return (
    <footer style={{marginTop:'50px'}}>
      <div style={{ backgroundColor: "#494E62" }}>
        <Grid container spacing={3} sx={{ my: 3 }}>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <List>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img src={logo} alt="" />
                <Typography
                  sx={{ color: "whitesmoke", mb: 1, ml: 2 }}
                  variant="h5"
                >
                  BD Apartment
                </Typography>
              </div>

              <ListItemText>
                We focus on good habitant for our clients.
              </ListItemText>
              <div  style={{
                display: "flex",
                justifyContent:'center',
                alignItems:'center'
              }}>
                <IconButton>
                  <MailOutlineIcon />
                </IconButton>
                <Typography>bdapartment@gmail.com</Typography>
              </div>
            </List>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <List>
              <Typography sx={{ color: "whitesmoke", mb: 1 }} variant="h5">
                Our Services
              </Typography>
              <ListItemText>Small Flat Sale</ListItemText>
              <ListItemText>Large Flat Sale</ListItemText>
              <ListItemText>Duplex Flat Sale</ListItemText>
              <ListItemText>Whole Apartment Building Sale</ListItemText>
            </List>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <List>
              <Typography sx={{ color: "whitesmoke", mb: 1 }} variant="h5">
                Contact With Us
              </Typography>
              <ListItemText>House No. 43/J,Bonani-15</ListItemText>
              <ListItemText>Dhaka, Bangladesh </ListItemText>
            </List>
            <IconButton className={socialIcon}>
              <GoogleIcon />
            </IconButton>
            <IconButton className={socialIcon}>
              <TwitterIcon />
            </IconButton>
            <IconButton className={socialIcon}>
              <InstagramIcon />
            </IconButton>
            <IconButton className={socialIcon}>
              <FacebookIcon />
            </IconButton>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <IconButton className={socialIcon}>
                <LocalPhoneIcon />
              </IconButton>
              <ApartmentButton sx={{ ml: 2 }} variant="contained">
                01815667823
              </ApartmentButton>
            </div>
          </Grid>
        </Grid>
        <Typography sx={{ textAlign: "center", py: 2 }} variant="subtitle2">
          Copyright &copy; {new Date().getFullYear()} All Rights Reserved
          (BDApartment)
        </Typography>
      </div>
    </footer>
  );
};

export default Footer;
