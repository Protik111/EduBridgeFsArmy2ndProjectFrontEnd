import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import Category from '../src/components/category/Category';
import Layout from '../src/components/global/Layout';
import Group from '../src/components/group/Group';
import Hero from '../src/components/hero/Hero';

const Home = () => {
  return (
    <Layout>
      <Hero></Hero>
      <Category></Category>
      <Group></Group>
    </Layout>
  );
};

export default Home;