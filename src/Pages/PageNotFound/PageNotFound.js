import React from 'react';
import { Link } from 'react-router-dom';
import ApartmentButton from '../../StyledComponent/ApartmentButton';
import notFound from '../../images/404.png'
const PageNotFound = () => {
    return (
        <div sx={{textAlign:'center'}}>
            <img style={{width:'100%'}} src={notFound} alt="" />
            <br />
            <Link to='/home' style={{textDecoration:'none'}}>
            <ApartmentButton>Go Home</ApartmentButton>
            </Link>     
        </div>
    );
};

export default PageNotFound;