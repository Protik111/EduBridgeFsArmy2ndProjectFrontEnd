import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import Layout from '../../src/components/global/Layout';
import Group from '../../src/components/group/Group';
import GroupList from '../../src/components/group/GroupList';
import { GridTemplateColumnGroup } from '../../src/components/styles/Grid';

const GroupDiscussion = () => {
    return (
        <Layout>
            <Container>
                <Box sx={{ pt: 20 }}>
                    <Typography variant='h1' textAlign='center'>
                        Managing Conflicts and Resolving <br />
                        Differences in Group Studies
                    </Typography>
                </Box>
                <GridTemplateColumnGroup>
                {
                    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(category => <GroupList />)
                }
            </GridTemplateColumnGroup>
            </Container>
        </Layout>
    );
};

export default GroupDiscussion;