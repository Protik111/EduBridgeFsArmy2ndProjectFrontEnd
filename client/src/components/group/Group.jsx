import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import { GridTemplateColumnGroup } from '../styles/Grid';
import GroupHero from './GroupHero';
import GroupList from './GroupList';


const Group = () => {
    return (
        <Container>
            <GroupHero></GroupHero>

            <GridTemplateColumnGroup>
                {
                    [1, 2, 3, 4, 5, 6].map(category => <GroupList />)
                }
            </GridTemplateColumnGroup>
        </Container>
    );
};

export default Group;