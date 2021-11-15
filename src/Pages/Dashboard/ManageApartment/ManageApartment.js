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
import { NavLink } from "react-router-dom";
const ManageApartment = () => {
  const [apartments, setApartments] = useState([]);
  useEffect(() => {
    const url = `https://fathomless-anchorage-68450.herokuapp.com/apartments`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setApartments(data));
  }, []);

  const handleApartmentDelete = (id) => {
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
        const url = `https://fathomless-anchorage-68450.herokuapp.com/apartments/${id}`;
        fetch(url, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const reaminingApartments = apartments.filter(
                (apartment) => apartment._id !== id
              );
              setApartments(reaminingApartments);
            }
          });
      }
    });
  };
  return (
    <div>
      <Typography variant="h4" sx={{ color: "#494E62", mb: 1 }}>
        Manage Apartment
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="Manage Apartments">
          <TableHead>
            <TableRow>
              <TableCell>Apartment Name</TableCell>
              <TableCell align="center">Features</TableCell>
              <TableCell align="center">Price</TableCell>
              <TableCell align="center">Location</TableCell>
              <TableCell align="center">des</TableCell>
              <TableCell align="center">Image Link</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {apartments.map((row) => (
              <TableRow
                key={row._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="center">{row.features}</TableCell>
                <TableCell align="center">{row.price}</TableCell>
                <TableCell align="center">{row.location}</TableCell>
                <TableCell align="center">{row.des}</TableCell>
                <TableCell align="center">{row.img}</TableCell>

                <TableCell align="center">
                  <Button
                    onClick={() => handleApartmentDelete(row._id)}
                    variant="text"
                  >
                    <DeleteIcon sx={{ color: "#494E62" }} />
                  </Button>
                  <NavLink to={`/dashboard/UpdateApartment/${row._id}`}>
                    <Button variant="text">
                      <EditIcon sx={{ color: "#494E62" }} />
                    </Button>
                  </NavLink>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ManageApartment;
