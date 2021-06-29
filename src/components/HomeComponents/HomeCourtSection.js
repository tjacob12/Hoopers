import { React, useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';
import HomeCourtSectionCss from '../../css/HomeCourtSection.module.css';
import LinkAndMenuCss from '../../css/LinkAndMenu.module.css';
import {Link} from 'react-router-dom'
import useInView from "react-cool-inview";
import BurgerMenu from '../BurgerMenu.js'

function HomeCourtSection(props) {
    const { observe, inView } = useInView({
      // Track the actual visibility of the target
      trackVisibility: true,
      // Set a minimum delay between notifications, it must be set to 100 (ms) or greater
      // For performance perspective, use the largest tolerable value as much as possible
      delay: 100,
    });
  
    return (
      <Container ref={observe} fluid className="vh-100 p-5 hoopersBlack">
        <div>
            <div className={`${LinkAndMenuCss.SectionShopLink}`}>
                SHOP |
            </div>

            <div className = {`${LinkAndMenuCss.SectionPTLink}`}>
                PT
            </div>
        </div>

        <Row>
          <Col xs={8}><hr className={`mt-5 ${HomeCourtSectionCss.sectionhr} ${inView ? HomeCourtSectionCss.slideLeft : "none"}`}/></Col>
          <Col></Col>
          <Col className={`${inView ? HomeCourtSectionCss.slideRight : "None"}`}><h1 className={`${HomeCourtSectionCss.courth1}`}>{props.heading}</h1></Col>
          <Col></Col>
        </Row>
        
        <Row className="p-2 h-100">
          <Col xs={1}></Col>
          <Col xs={5} className="h-100">
            <div className={`h-100 ${inView ? HomeCourtSectionCss.slideUp : "None"}`}>
              <img src={props.img} alt="img1"/>
            </div>
          </Col>
          <Col className="d-flex align-items-center">
            <div className={`text-white ${inView ? HomeCourtSectionCss.slideUp : "None"}`}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
              It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
              It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              <br/>
              <Link to={props.to}>
                <Button className="mt-3 pr-3 pl-3 btnColor">{props.btnText}</Button>
              </Link>
            </div>
          </Col>
          <Col xs={1}></Col>
        </Row>

        <div className={`${LinkAndMenuCss.Burger}`}>
          <BurgerMenu/>
        </div>
      </Container>
    );
  }
  
  export default HomeCourtSection;