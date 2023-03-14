import { Box, Container, Input, Typography } from '@mui/material';
import React from 'react';
import { FlexAlignCenterDC } from '../styles/Flex';
import FindItems from './findItems';
const FindPeer = () => {
    return (
        <Container sx={{ py: 15 }}>

            <FlexAlignCenterDC sx={{ background: 'rgba(47, 185, 123, 0.1)', py: 20, px: 5, borderRadius: '10px' }}>
                <Typography variant='h2' textAlign='center'>
                    Create Post To Find your perfect peer <br />
                    for your study Problem
                </Typography>

                <Input
                    // color="success"
                    disabled={false}
                    placeholder="Find you peer"
                    size="lg"
                    variant="plain"
                    sx={{ background: '#FFFFFF', py: 2, mt: 3, width: "60%" }}

                />
                <FindItems></FindItems>
            </FlexAlignCenterDC>

        </Container>
    );
};

export default FindPeer;