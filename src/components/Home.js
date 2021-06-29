import img1 from '../assets/img1.png'
import ballislife from '../assets/ballislife.png'
import HomeHeader from './HomeComponents/HomeHeader';
import HomeCourtSection from './HomeComponents/HomeCourtSection';
import HomeArticleSection from './HomeComponents/HomeArticleSection';
import Footer from './Footer';
import ReactPageScroller from 'react-page-scroller';
import ReactFullpage from '@fullpage/react-fullpage';
import React, { Component } from 'react';
import useInView from "react-cool-inview";

const Fullpage = () => (
    <ReactFullpage
      scrollingSpeed = {1000}
  
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <div className="section">
                <HomeCourtSection img={img1} heading="Courts" to="/Courts" btnText="Our Courts"/>
            </div>

            <div className="section">
                <HomeArticleSection to="/Shop" btnText="More Articles"/>
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
);
  

function Home(props) {

    return (
        <ReactFullpage
            scrollingSpeed = {1000}
        
            render={({ state, fullpageApi }) => {
                return (
                <ReactFullpage.Wrapper>
                    <div className="section">
                        <HomeHeader/>
                    </div>

                    <div className="section">
                        <HomeCourtSection img={img1} heading="Courts" to="/Courts" btnText="Our Courts"/>
                    </div>

                    <div className="section">
                        <HomeArticleSection to="/Shop" btnText="More Articles"/>
                    </div>

                    <div className="section">
                        <HomeCourtSection img={ballislife} heading="Products" to="/Shop" btnText="Shop Now"/>
                    </div>

                    <div className="section">
                        <Footer/>
                    </div>
                </ReactFullpage.Wrapper>
                );
            }}
        />

        // <ReactPageScroller>
        //         <HomeHeader/>
                
        //         <HomeCourtSection img={img1} heading="Courts" to="/Courts" btnText="Our Courts"/>
                
        //         <HomeArticleSection to="/Shop" btnText="More Articles"/>
                
        //         {/* <HomeCourtSection img={ballislife} heading="Products" to="/Shop" btnText="Shop Now"/> */}
        // </ReactPageScroller>
    );
}

export default Home
