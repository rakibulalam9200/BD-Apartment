import { Container, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import ApartmentButton from "../../../StyledComponent/ApartmentButton";
const Contact = () => {
  return (
    <div style={{ backgroundColor: "#EDEFEF", padding: "10px" }}>
      <Container sx={{ mt: 5 }}>
        <Typography variant="h4" sx={{ color: "#494E62", mb: 1 }}>
          Contact With Us
        </Typography>
        <br />
        <form>
          <Box sx={{ display: "flex", justifyContent: "center", my: 2 }}>
            <TextField
              style={{ width: "60%" }}
              label="Enter Your Name"
              id="name"
              name="name"
            />
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center",my:2 }}>
            <TextField
              style={{ width: "60%" }}
              label="Enter Your Email"
              id="name"
              name="name"
            />
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center",my:2 }}>
            <TextareaAutosize
              aria-label="minimum height"
              minRows={5}
              style={{ width: "60%",fontSize:'20px' }}
              placeholder="Enter Your Comments"
              id="comment"
              name="comment"
            />
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center",my:2 }}>
            <ApartmentButton style={{ width: "60%",fontSize:'18px' }}variant="contained">Submit</ApartmentButton>
          </Box>
          
        </form>
      </Container>
    </div>
  );
};

export default Contact;
