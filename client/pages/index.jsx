import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import Layout from '../src/components/global/Layout';
import Hero from '../src/components/hero/Hero';
import Navbar from '../src/components/navbar/navbar';
import Category from '../src/components/shared/Category';

const Home = () => {
  return (
    <Layout>
      <Hero></Hero>
      <Category></Category>
    </Layout>
  );
};

export default Home;