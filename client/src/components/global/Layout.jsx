import Head from 'next/head';
import React from 'react';
import Navbar from '../navbar/navbar';

const Layout = ({ title, keywords, description, children }) => {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name='description' content={description}></meta>
                <meta name='keywords' content={keywords}></meta>
            </Head>
            <Navbar></Navbar>
            {children}
        </div>
    );
};

Layout.defaultProps = {
    title: 'EduBridge - A centralized platform where students can easily connect with their peers.',
    description: 'our website application aims to provide students with a well-rounded educational experience, addressing the challenges they face in the classroom and beyond. ',
    keywords: 'platform, educational, classroom, connect, peers'
}

export default Layout;