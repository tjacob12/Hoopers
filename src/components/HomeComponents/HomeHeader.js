import React, { Component } from 'react'
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

            <video>
              <div className={`${LinkAndMenuCss.HeaderShopLink}`}>
                  SHOP |
                top:'50%',
                height:'100vh',
                objectFit:'cover',
                transform:'translate(-50%,-50%)',
                zIndex:'-1'
            }}>
              </div>
                <source src={Video} type='video/mp4' />
            </video>

            <div className = "text-center position-relative">
                <Button className= {`${HomeHeaderCss.vidButton} btnColor`}>WATCH VIDEO</Button>
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
    </Container>
    )
  }
}

export default HomeHeader
