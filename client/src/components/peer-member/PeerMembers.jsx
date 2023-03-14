import { Container } from '@mui/material';
import React from 'react';
import { GridTemplateColumnMember } from '../styles/Grid';
import Member from './Member';

const members = new Array(5);

const PeerMembers = () => {
    return (
        <Container>
            <GridTemplateColumnMember>
                {
                    [1,2,3,4,5,6,7,8].map((member, i) => <Member key={i} member={member}></Member>)
                }
            </GridTemplateColumnMember>
        </Container>
    );
};

export default PeerMembers;