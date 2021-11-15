import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import BookedApartments from "../BookedApartments/BookedApartments";
import BookmarkIcon from '@mui/icons-material/Bookmark';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import ApartmentIcon from '@mui/icons-material/Apartment';
import PaymentsIcon from '@mui/icons-material/Payments';
import ReviewsIcon from '@mui/icons-material/Reviews';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import BusinessIcon from '@mui/icons-material/Business';
import LogoutIcon from '@mui/icons-material/Logout';
import {
  Switch,
  Route,
  useRouteMatch,
  NavLink
} from "react-router-dom";
import { Button } from "@mui/material";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import MakePayment from "../MakePayment/MakePayment";
import AddApartment from "../AddApartment/AddApartment";
import Review from "../Review/Review";
import ManageBookings from "../MangeBookings/ManageBookings";
import ManageApartment from "../ManageApartment/ManageApartment";
import useAuth from "../../../hooks/useAuth";
import DashBoardHome from "../DashBoardHome/DashBoardHome";
import UpdateApartment from "../UpdateApartment/UpdateApartment";
import AdminRoute from "../../Login/AdminRoute/AdminRoute";
const drawerWidth = 240;

function Dashboard(props) {
  const { admin, logOut } = useAuth();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  let { path, url } = useRouteMatch();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar sx={{ bgcolor:'lightblue'}}/>
      <Divider />
    {!admin && <List>
      <ListItem>
          <NavLink to={`${url}`} style={{textDecoration:'none'}}><Button> <DashboardIcon sx={{mr:1}}/>DashBoard</Button></NavLink>
        </ListItem>

        <ListItem>
          <NavLink to={`${url}/bookedApartment`} style={{textDecoration:'none'}}><Button><BookmarkIcon sx={{mr:1}}/>My Bookings</Button></NavLink>
        </ListItem>

        <ListItem>
            <NavLink to={`${url}/makePayment`} style={{textDecoration:'none'}}><Button> <PaymentsIcon sx={{mr:1}}/>Make Payment</Button></NavLink>
        </ListItem>

        <ListItem>
            <NavLink to={`${url}/review`} style={{textDecoration:'none'}}><Button> <ReviewsIcon sx={{mr:1}}/>Review</Button></NavLink>
        </ListItem>
      </List>}
        
        {admin && <List>
        <ListItem>
            <NavLink to={`${url}/makeAdmin`} style={{textDecoration:'none'}}><Button> <AdminPanelSettingsIcon sx={{mr:1}}/>Make Admin</Button></NavLink>
        </ListItem>

        <ListItem>
            <NavLink to={`${url}/addApartment`} style={{textDecoration:'none'}}><Button> <ApartmentIcon sx={{mr:1}}/>Add Apartment</Button></NavLink>
        </ListItem>
        
        <ListItem>
            <NavLink to={`${url}/manageBookings`} style={{textDecoration:'none'}}><Button> <BookmarkAddIcon sx={{mr:1}}/>Manage Bookings</Button></NavLink>
        </ListItem>

        <ListItem>
            <NavLink to={`${url}/manageApartments`} style={{textDecoration:'none'}}><Button> <BusinessIcon sx={{mr:1}}/>Manage Apartments</Button></NavLink>
        </ListItem>
      </List>}

      <List>
      <ListItem>
            <NavLink to='/login' style={{textDecoration:'none'}}><Button onClick={logOut}> <LogoutIcon sx={{mr:1}}/>Log out</Button></NavLink>
        </ListItem>
        
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="fixed"
        sx={{
          bgcolor:'lightblue',
          marginTop: "60px",
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mt: 2, mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{color:'black',textAlign:'center'}}>
            DashBoard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{bgColor:"lightblue", width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{

            bgColor: "lightblue",
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            bgColor: "lightblue",
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
            mt:5,
        bgColor: "lightblue",
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Switch>
        <Route exact path={path}>
          <DashBoardHome></DashBoardHome>
        </Route>
        <AdminRoute path={`${path}/makeAdmin`}>
          <MakeAdmin></MakeAdmin>
        </AdminRoute>
        <AdminRoute path={`${path}/UpdateApartment/:id`}>
          <UpdateApartment></UpdateApartment>
        </AdminRoute>
        <Route path={`${path}/bookedApartment`}>
          <BookedApartments></BookedApartments>
        </Route>
        <AdminRoute path={`${path}/addApartment`}>
          <AddApartment></AddApartment>
        </AdminRoute>
        <Route path={`${path}/makePayment`}>
          <MakePayment></MakePayment>
        </Route>
        <Route path={`${path}/review`}>
          <Review></Review>
        </Route>
        <AdminRoute path={`${path}/manageBookings`}>
          <ManageBookings></ManageBookings>
        </AdminRoute>
        <AdminRoute path={`${path}/manageApartments`}>
          <ManageApartment></ManageApartment>
        </AdminRoute>
      </Switch>
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
