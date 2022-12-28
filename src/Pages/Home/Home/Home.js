import React from 'react';
import Banner from './Banner/Banner';
import HowItWorks from './HowItWorks/HowItWorks';
import MostPopularBlogs from './MostPopularBlogs/MostPopularBlogs';
import Statistics from './Statistics/Statistics';
import WriteBlog from './WriteBlog/WriteBlog';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Statistics></Statistics>
            <WriteBlog></WriteBlog>
            <HowItWorks></HowItWorks>
            <MostPopularBlogs></MostPopularBlogs>
        </div>
    );
};

export default Home;