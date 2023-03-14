import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { ButtonComp } from '../ui/Button';

const Hero = () => {
    return (
        <Container sx={{ py: 15}}>
            <Grid container spacing={2}>
                <Grid xs={12} md={6} sx={{ margin: 'auto' }}>
                    <Typography variant='h1'>
                        A Blueprint for a Collaborative Learning Platform
                    </Typography>
                    <Typography variant='subtitle1'>
                        Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit.
                    </Typography>
                    <ButtonComp sx={{ mt: 2 }} myWidth='150px'>
                        Learn More
                    </ButtonComp>
                </Grid>
                <Grid xs={12} md={6}>
                    <img src='hero.svg' alt="heo"></img>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Hero;