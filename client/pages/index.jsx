import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import Layout from '../src/components/global/Layout';
import Hero from '../src/components/hero/Hero';
import Navbar from '../src/components/navbar/navbar';

const Home = () => {
  return (
    <Layout>
      <Hero></Hero>
    </Layout>
  );
};

export default Home;