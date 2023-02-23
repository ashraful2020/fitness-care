import React from 'react';
import { Exercises, HeroBanner, Navbar, SearchExercise } from '../components';

const Home = () => {
    return (
        <div>
          
            <HeroBanner /> 
            <SearchExercise />
            <Exercises />
        </div>
    );
};

export default Home;