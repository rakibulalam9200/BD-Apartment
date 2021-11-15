import React, { useEffect, useState } from "react";
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
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import axios from "axios";
const ManageBookings = () => {
  const [booked, setBooked] = useState([]);
  const [status, setStatus] = useState("");
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => setStatus(data);

  useEffect(() => {
    const url = `https://fathomless-anchorage-68450.herokuapp.com/allBooking`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBooked(data));
  }, []);

  const handleUpdate = (id) => {
    axios
      .put(
        `https://fathomless-anchorage-68450.herokuapp.com/updateBooking/${id}`,
        { status }
      )
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Booking Status Updated Successfully.",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

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
      <Typography variant="h4" sx={{ color: "#494E62", mb: 1 }}>
        Manage Booking
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="My booked Apartments">
          <TableHead>
            <TableRow>
              <TableCell>Apartment Name</TableCell>
              <TableCell align="center">email</TableCell>
              <TableCell align="center">Client Name</TableCell>
              <TableCell align="center">Phone</TableCell>
              <TableCell align="center">Address</TableCell>
              <TableCell align="center">City</TableCell>
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
                <TableCell align="center">{row.email}</TableCell>
                <TableCell align="center">{row.displayName}</TableCell>
                <TableCell align="center">{row.phone}</TableCell>
                <TableCell align="center">{row.address}</TableCell>
                <TableCell align="center">{row.city}</TableCell>
                <TableCell align="center">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <select {...register("status")}>
                      <option value={row.status}>{row.status}</option>
                      <option value="approved">approved</option>
                      <option value="shifting">shifting</option>
                    </select>
                    <input type="submit" />
                  </form>
                </TableCell>
                <TableCell align="center">
                  <Button
                    onClick={() => handleBookingDelete(row._id)}
                    variant="text"
                  >
                    <DeleteIcon sx={{ color: "#494E62" }} />
                  </Button>
                  <Button onClick={() => handleUpdate(row._id)} variant="text">
                    <EditIcon sx={{ color: "#494E62" }} />
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

export default ManageBookings;
