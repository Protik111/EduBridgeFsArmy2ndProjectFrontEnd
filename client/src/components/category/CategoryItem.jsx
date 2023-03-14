import { Box, Typography } from '@mui/material';
import React from 'react';
import { CategoryItemBox } from '../ui/CategoryItemBox';

const CategoryItem = (props) => {
    const { slug, title, post } = props.category;
    return (
        <CategoryItemBox>
            <Box sx={{ margin: '0' }}>
                <img src='/cat-logo.svg' alt="category image" style={{ width: "50px", height: '50px' }}></img>
            </Box>
            <Box>
                <Typography sx={{ color: '#3D4442', fontSize: '22px', fontWeight: 400, fontFamily: 'Heebo, sans-serif' }}>{title}</Typography>
                <Typography>{post}</Typography>
            </Box>
        </CategoryItemBox>
    );
};

export default CategoryItem;