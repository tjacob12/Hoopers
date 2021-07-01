import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
//  import  Row from 'react-bootstrap/Row';
//  import Col from 'react-bootstrap/Col';
import Video from '../../assets/backgroundvideo.mp4';
import logo from '../../assets/hooperslogo.png';
import Button from 'react-bootstrap/Button';
import HomeHeaderCss from '../../css/HomeHeader.module.css';
import LinkAndMenuCss from '../../css/LinkAndMenu.module.css';
import BurgerMenu from '../BurgerMenu.js'

class HomeHeader extends Component {
  render() {
    return (
        <Container fluid className="vh-100">

            <BurgerMenu/>

            <div>
              <div className={`${LinkAndMenuCss.HeaderShopLink}`}>
                  SHOP |
              </div>

              <div className = {`${LinkAndMenuCss.HeaderPTLink}`}>
                  PT
              </div>
            </div>

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


            <div className = "text-center position-relative">
                <Link to="/Video">
                    <Button className= {`${HomeHeaderCss.vidButton} btnColor`}>WATCH VIDEO</Button>
                </Link>
            </div>

            <div className={`${HomeHeaderCss.animations}`} >
                <b className={`${HomeHeaderCss.bHomeHeader}`}>NEW COURT</b>
                <p className={`${HomeHeaderCss.pHomeHeader}`}>AMEIOXERIA-PORTUGAL</p>
            </div>

            <div className = {`${HomeHeaderCss.searchbox}`}>
                <input className={`${HomeHeaderCss.searchtxt}`} type='text'  placeholder='WHAT ARE YOU LOOOKING FOR HOOPER?' />
                <a className= {`${HomeHeaderCss.searchbtn}`} href='#'/>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#D48832" className="bi bi-search" viewBox="0 0 16 16"  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </svg>
            </div>

    </Container>
    )
  }
}

export default HomeHeader
