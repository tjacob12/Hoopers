import img1 from '../assets/img1.png'
import ballislife from '../assets/ballislife.png'
import Section from './Section';
import ReactPageScroller from 'react-page-scroller';
import React, { Component } from 'react';
import VisibilitySensor from 'react-visibility-sensor';

function Home(props) {
    return (
        <ReactPageScroller>
                <Section img={img1} heading="Courts" to="/Courts" btnText="Our Courts"/>
                <Section img={ballislife} heading="Products" to="/Shop" btnText="Shop Now"/>
        </ReactPageScroller>
    );
}

export default Home
