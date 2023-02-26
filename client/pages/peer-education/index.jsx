import React from 'react';
import Category from '../../src/components/category/Category';
import FindPeer from '../../src/components/find-peer/FindPeer';
import Layout from '../../src/components/global/Layout';
import PeerMembers from '../../src/components/peer-member/PeerMembers';

const PeerEducation = () => {
    return (
        <Layout>
            <FindPeer></FindPeer>
            <Category></Category>
            <PeerMembers></PeerMembers>
        </Layout>
    );
};

export default PeerEducation;