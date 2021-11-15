import { Typography } from '@mui/material';
import React from 'react';
import useAuth from '../../../hooks/useAuth';

const DashBoardHome = () => {
    const {admin} = useAuth();
    return (
        <div>
            {!admin &&<Typography variant="h2" gutterBottom component="div">
                This is User DashBaord
             </Typography>}
            {admin && <Typography variant="h2" gutterBottom component="div">
                This is Admin DashBaord
             </Typography>}
        </div>
    );
};

export default DashBoardHome;