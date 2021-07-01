import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Card from 'react-bootstrap/Card';
import CardInfoCss from '../../css/CardInfo.module.css';
import x from '../../assets/x.png'
import leftarrow from '../../assets/left-arrow.png'
import rightarrow from '../../assets/right-arrow.png'

class CardInfo extends Component{

    constructor(props){
        super(props)
    }

    render(){
        return (
            <Card className={`${CardInfoCss.card}`}>
                <Card.Body className={`text-white vw-75 p-4`}>
                    <img src={x} alt="upload" className={`${CardInfoCss.x}`}/>   

                    {/* <Container fluid>
                        <div classname={`${CardInfoCss.background}`}>
                            FILLER
                        </div>
                    </Container> */}

                    {/* <Row>
                        <Col xs={6} className={`${CardInfoCss.background}`}>
                            hi
                        </Col>

                        <Col>
                        
                        </Col>
                    </Row> */}

                </Card.Body>
            </Card>
        )
    }
}
  
export default CardInfo;
