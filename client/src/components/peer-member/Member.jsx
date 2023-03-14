import { Avatar, Box, Stack, Typography } from '@mui/material';
import React from 'react';
import { FlexBeetwen } from '../styles/Flex';
import { ButtonComp } from '../ui/Button';

const Member = ({ member }) => {
    return (
        <Box sx={{ py: 3, px: 2, border: '0.3px solid rgba(1, 1, 1, 0.4)', borderRadius: '10px', background: '#FFFFFF' }}>
            <Stack direction="row" alignItems='center' spacing={2}>
                <Avatar
                    alt="Remy Sharp"
                    src="/member.png"
                    sx={{ width: 56, height: 56 }}
                />
                <Box>
                    <Typography variant='h4'>React Learning</Typography>
                    <Typography variant='subtitle2'>Education</Typography>
                </Box>
            </Stack>
            <Box sx={{ mt: 1 }}>
                <Typography variant='subtitle2'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that</Typography>
            </Box>
            <FlexBeetwen sx={{ pt: 3 }}>
                <Box>
                    <Typography variant='h4'>21.05.22023</Typography>
                    <Typography variant='subtitle2'>9:30 AM - 11:30 AM</Typography>
                </Box>
                <Box>
                    <ButtonComp>Reseponse &rarr;</ButtonComp>
                </Box>
            </FlexBeetwen>
        </Box>
    );
};

export default Member;