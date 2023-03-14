import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import { categoryList } from '../../staticData/category';
import { GridTemplateColumnCat } from '../styles/Grid';
import CategoryItem from './CategoryItem';

const Category = () => {
    return (
        <Container>
            <Box sx={{ py: 5 }} textAlign='center'>
                <Typography variant='h2'>
                    The Power of Peer Education for
                    <br></br>
                    Improved Outcomes
                </Typography>
                <Typography sx={{ mt: 2 }}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been <br></br> the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of <br></br> type and scrambled it to make a type specimen book.
                </Typography>
            </Box>

            <GridTemplateColumnCat>
                { 
                    categoryList?.map(category => <CategoryItem key={category?.id} category={category}/>)
                }
            </GridTemplateColumnCat>
        </Container>
    );
};

export default Category;