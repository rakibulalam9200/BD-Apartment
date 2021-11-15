import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MoreIcon from "@mui/icons-material/MoreVert";
import { Button } from "@mui/material";
import apartmentIcon from "../../../images/logo.png";
import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";


export default function Navbar() {
  const { user, logOut } = useAuth();
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >

      <NavLink to="/home" style={{ textDecoration: "none", color: "#494E62" }}>
        <MenuItem>
          <Button color="inherit">Home</Button>
        </MenuItem>
      </NavLink>
      <NavLink to="/apartments" style={{ textDecoration: "none", color: "#494E62" }}>
        <MenuItem>
          <Button color="inherit">Apartments</Button>
        </MenuItem>
      </NavLink>
     {user?.email && <NavLink to="/dashboard" style={{ textDecoration: "none", color: "#494E62" }}>
        <MenuItem>
          <Button color="inherit">DashBoard</Button>
        </MenuItem>
      </NavLink>}
      {user?.email? <Box>
        <MenuItem>
          <Button onClick={logOut} color="inherit">Logout</Button>
        </MenuItem>
        <MenuItem>
          <Button color="inherit">{user.email}</Button>
        </MenuItem>

      </Box>
      :<NavLink to="/login" style={{ textDecoration: "none", color: "#494E62" }}>
        <MenuItem>
          <Button color="inherit">Login</Button>
        </MenuItem>
      </NavLink>}
      
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" style={{ backgroundColor: "#494E62" }}>
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" sx={{ mr: 1 }}>
            <img src={apartmentIcon} alt="" />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            BDApartment
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <NavLink
              to="/home"
              style={{ textDecoration: "none", color: "whitesmoke" }}
            >
              <Button color="inherit">Home</Button>
            </NavLink>

            <NavLink
                to="/apartments"
                style={{ textDecoration: "none", color: "whitesmoke" }}
              >
                <Button color="inherit">Apartments</Button>
              </NavLink>
            {user?.email && <NavLink
                to="/dashboard"
                style={{ textDecoration: "none", color: "whitesmoke" }}
              >
                <Button color="inherit">DashBoard</Button>
            </NavLink>}
            {user?.email ? (
              <Box sx={{ display: { xs: "none", md: "flex" },alignItems:'center' }}>
                <Button onClick={logOut} color="inherit">
                  Logout
                </Button>
                <Typography sx={{color:'white'}} >
                  {user.email}
                </Typography>
              </Box>
            ) : (
              <NavLink
                to="/login"
                style={{ textDecoration: "none", color: "whitesmoke" }}
              >
                <Button color="inherit">Login</Button>
              </NavLink>
            )}
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </Box>
  );
}
