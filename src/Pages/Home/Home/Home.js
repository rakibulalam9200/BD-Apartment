import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import HomeAparments from '../HomeApartments/HomeAparments';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
           <HomeAparments></HomeAparments>
           <Reviews></Reviews>
           <Contact></Contact>
        </div>
    );
};

export default Home;