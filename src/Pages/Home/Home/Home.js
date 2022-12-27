import React from 'react';
import Banner from './Banner/Banner';
import HowItWorks from './HowItWorks/HowItWorks';
import WriteBlog from './WriteBlog/WriteBlog';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <WriteBlog></WriteBlog>
            <HowItWorks></HowItWorks>
        </div>
    );
};

export default Home;