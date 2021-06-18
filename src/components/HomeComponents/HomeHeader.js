import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
// import Container from 'react-bootstrap/Container';
//  import  Row from 'react-bootstrap/Row';
//  import Col from 'react-bootstrap/Col';
import Video from '../../assets/backgroundvideo.mp4';

import HomeHeaderCss from '../../css/HomeHeader.module.css';



class HomeHeader extends Component {
  render() {
    return (
        <div className = {`${HomeHeaderCss.HomeHeader}`}>
            <video autoPlay loop muted
            style= {{
                position:'absolute',
                width:'100vw',
                left:'50%',
                top:'50%',
                height:'100vh',
                objectFit:'cover',
                transform:'translate(-50%,-50%)',
                zIndex:'-1'
            }}>
                <source src={Video} type='video/mp4' />
            </video>

            <div className = {`${HomeHeaderCss.VideoButton}`}>
                <button type="button" className="btn btn-warning btn-lg">WATCH VIDEO</button>
            </div>

            <div className={`${HomeHeaderCss.ShopLink}`}>
                <a href="#" className="link">SHOP</a>
            </div>

            <div className = {`${HomeHeaderCss.PTLink}`}>
                <a href="#" className="link">PT</a>
            </div>

            <div className = 'container'>
            {/* <form>
                <div className= 'input-group'>
                <input type ='text' className='box' placeholder='Search'></input>
                    <button className='btn btn-dark' type = 'button'>
                    Button
                    </button>
                
                
                </div>
            </form> */}
            {/* <div className='search'>
                
            </div> */}
            </div>  
    </div>
    )
  }
}

export default HomeHeader