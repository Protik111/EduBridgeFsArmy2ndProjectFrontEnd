import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import { GridTemplateColumnGroup } from '../styles/Grid';
import GroupList from './GroupList';


const Group = () => {
    return (
        <Container>
            <Box sx={{ py: 5 }} textAlign='center'>
                <Typography variant='h2'>
                    Unlocking the Power of Group Study for
                    <br></br>
                    Improved Outcomes
                </Typography>
                <Typography sx={{ mt: 2 }}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been <br></br> the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of <br></br> type and scrambled it to make a type specimen book.
                </Typography>
            </Box>

            <GridTemplateColumnGroup>
                {
                    [1, 2, 3, 4, 5, 6].map(category => <GroupList />)
                }
            </GridTemplateColumnGroup>
        </Container>
    );
};

export default Group;