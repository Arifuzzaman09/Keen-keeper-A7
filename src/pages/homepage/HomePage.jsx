import React from 'react';
import Banner from '../../components/HomePage/Banner';
import CountCarts from '../../components/HomePage/CountCarts';
import Carts from '../../components/HomePage/Carts';

const HomePage = () => {
    return (
        <>
           <Banner></Banner>
           <CountCarts></CountCarts>
           <Carts></Carts>
        </>
    );
};

export default HomePage;HomePage