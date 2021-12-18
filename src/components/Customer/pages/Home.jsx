import React from 'react';
import Slider from '../partials/home/slider/Slider'
import Sale from '../partials/home/sale/Sale'
import Questions from '../partials/home/questions/Questions'
import About from '../partials/home/about/About'

function Home(props) {
    return (
        <div>
            <Slider></Slider>
            <Sale></Sale>
            <About></About>
            <Questions></Questions>
            
        </div>
    );
}

export default Home;