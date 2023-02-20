import Head from 'next/head';
import React from 'react';

const Layout = ({ title, keywords, description, children }) => {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name='description' content={description}></meta>
                <meta name='keywords' content={keywords}></meta>
            </Head>
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