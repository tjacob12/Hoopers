import img1 from '../assets/img1.png'
import ballislife from '../assets/ballislife.png'
import HomeHeader from './HomeComponents/HomeHeader';
import HomeCourtSection from './HomeComponents/HomeCourtSection';
import HomeArticleSection from './HomeComponents/HomeArticleSection';
import ReactPageScroller from 'react-page-scroller';
import React, { Component } from 'react';
import VisibilitySensor from 'react-visibility-sensor';

// import { InView } from 'react-intersection-observer';
// // import IntersectionObserver from ''

// class Home extends Component {
//     constructor(props){
//         super(props)

//         // this.NodeOne = 
//         //     <InView>
//         //         {({ inView, ref, entry }) => (
//         //             <Section img={img1} heading="Courts" to="/Courts" btnText="Our Courts" ref={ref} onChange={(inView, entry) => console.log('Inview:', inView)}/>
//         //         )}
//         //     </InView>
        

//     }

//     addObservers(){
//         this.NodeOne = <VisibilitySensor
//                         onChange={(isVisible) => {
//                             this.setState({visibility: isVisible})
//                         }}>
//                             <Section img={img1} heading="Courts" to="/Courts" btnText="Our Courts"/>
//                        </VisibilitySensor>

//         this.NodeTwo = <VisibilitySensor
//                         onChange={(isVisible) => {
//                             this.setState({visibility: isVisible})
//                         }}>
//                             <Section img={ballislife} heading="Products" to="/Shop" btnText="Shop Now"/>
//                         </VisibilitySensor>

//         console.log(this.NodeOne)
//         // this.NodeOne = <InView onChange={(inView, entry) => console.log('Inview:', inView)}>
//         //     {({ inView, ref, entry }) => (
//         //         <div ref={ref}>
//         //             <Section img={img1} heading="Courts" to="/Courts" btnText="Our Courts"/>
//         //         </div>
//         //     )}
//         // </InView>

//         // this.NodeTwo = <InView onChange={(inView, entry) => console.log('Inview:', inView)}>
//         //     <Section img={ballislife} heading="Products" to="/Shop" btnText="Shop Now"/>
//         // </InView>
//         // this.NodeOne = <Section img={img1} heading="Courts" to="/Courts" btnText="Our Courts"/>
//         // return () => {
//         //     const { ref, inView, entry } = useInView({
//         //       /* Optional options */
//         //       threshold: 0,
//         //     });
          
//         //     return (
//         //       <div ref={ref}>
//         //         <h2>"Hi"</h2>
//         //       </div>
//         //     );
//         // };
//         // this.NodeOne=NodeOne
//         // console.log(this.NodeOne)
//     }

//     // NodeOne(){
//     //     return <Section img={img1} heading="Courts" to="/Courts" btnText="Our Courts"/>
//     // }

//     render() {
//         this.addObservers()

//         return (
//             // <div>{this.NodeOne}</div>
         
//             <ReactPageScroller>
//                 {this.NodeOne}
//                 {this.NodeTwo}
//             </ReactPageScroller>
//         );
//     }
//   }

// function Home(props) {
//     function NodeOne(){
//         return <div>Hi</div>
//         // return <Section img={img1} heading="Courts" to="/Courts" btnText="Our Courts"/>
//     }
//     // const Map = {
//     //     "NodeOne":<Section img={img1} heading="Courts" to="/Courts" btnText="Our Courts"/>,
//     //     "NodeTwo":<Section img={ballislife} heading="Products" to="/Shop" btnText="Shop Now"/>
//     // }

//     // var NodeOne = <Section img={img1} heading="Courts" to="/Courts" btnText="Our Courts"/>
//     // var NodeTwo = <Section img={ballislife} heading="Products" to="/Shop" btnText="Shop Now"/>

// }

{/* <ReactPageScroller>
{NodeOne}
<NodeOne/>
<Section img={img1} heading="Courts" to="/Courts" btnText="Our Courts"/>
<Section img={ballislife} heading="Products" to="/Shop" btnText="Shop Now"/>
</ReactPageScroller> */}

function Home(props) {
    return (
        <ReactPageScroller>
                <HomeHeader/>
                <HomeCourtSection img={img1} heading="Courts" to="/Courts" btnText="Our Courts"/>
                <HomeArticleSection to="/Shop" btnText="More Articles"/>
                <HomeCourtSection img={ballislife} heading="Products" to="/Shop" btnText="Shop Now"/>
        </ReactPageScroller>
    );
}

export default Home
