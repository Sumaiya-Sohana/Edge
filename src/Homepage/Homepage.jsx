import React from 'react';
import Slider from '../Pages/Slider/Slider';
import Accordion from '../Pages/Accordio/Accordion';
import Card from '../Pages/Card/Card';
import Stat from '../Pages/Stat/Stat';

const Homepage = () => {
    return (
        <div>
            <Slider></Slider>
            <Accordion></Accordion>
            <Card></Card>
            <Stat></Stat>
        </div>
    );
};

export default Homepage;