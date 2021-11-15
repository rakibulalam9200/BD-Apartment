import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import DeleteIcon from "@mui/icons-material/Delete";
import Swal from "sweetalert2";
const BookedApartments = () => {
  const { user } = useAuth();
  const [booked, setBooked] = useState([]);

  useEffect(() => {
    const url = `https://fathomless-anchorage-68450.herokuapp.com/booking?email=${user.email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBooked(data));
  }, [user.email]);

  const handleBookingDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const url = `https://fathomless-anchorage-68450.herokuapp.com/booking/${id}`;
        fetch(url, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const reaminingBooked = booked.filter((book) => book._id !== id);
              setBooked(reaminingBooked);
            }
          });
      }
    });
  };
  return (
    <div>
      <Typography variant="h4" gutterBottom component="div">
        My Booked Apartments
      </Typography>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="My booked Apartments">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="center">Price</TableCell>
              <TableCell align="center">Location</TableCell>
              <TableCell align="center">Phone</TableCell>
              <TableCell align="center">Status</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {booked.map((row) => (
              <TableRow
                key={row._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="center">{row.price}</TableCell>
                <TableCell align="center">{row.location}</TableCell>
                <TableCell align="center">{row.phone}</TableCell>
                <TableCell align="center">{row.status}</TableCell>
                <TableCell align="center">
                  <Button
                    variant="text"
                    onClick={() => handleBookingDelete(row._id)}
                  >
                    <DeleteIcon sx={{ color: "#494E62" }} />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default BookedApartments;
