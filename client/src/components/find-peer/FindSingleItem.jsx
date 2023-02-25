import { Box, Stack, Typography } from '@mui/material';
import React from 'react';

const FindSingleItem = ({ item }) => {
    const { image, title } = item;
    return (
        <Stack alignItems='center' direction="row" sx={{ background: "#E5F5EE", py:1, px:2, m: 2 }}>
            <Box sx={{ margin: '0 8px' }}>
                <img src={image} alt={title}></img>
            </Box>
            <Box>
                <Typography variant='subtitle1'>{title}</Typography>
            </Box>
        </Stack>
    );
};

export default FindSingleItem;