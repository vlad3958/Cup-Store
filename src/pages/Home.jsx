import React from 'react';
import Banner from '../components/Banner/Banner';
import Categories from '../components/Categories/Categories';
import About from '../components/About/About';
import Products from '../components/Products/Products';
import Design from '../components/Design/Design';
import Contacts from '../components/Contacts/Contacts';

const Home = () => {
  return (
    <>
      <Banner />
      <Categories />
      <About />
      <Design />
      <Contacts />
    </>
  );
};

export default Home;
