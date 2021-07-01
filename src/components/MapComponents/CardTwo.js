import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardTwoCss from '../../css/CardTwo.module.css';
import leftarrow from '../../assets/left-arrow.png'
import rightarrow from '../../assets/right-arrow.png'
import upload from '../../assets/upload.png'
import x from '../../assets/x.png'
import Dropzone from 'react-dropzone'

class CardTwo extends Component{

    constructor(props){
        super(props)
    }

    render(){

        return (
            <Card className={`${CardTwoCss.card}`}>
                <Card.Body className={`text-white vw-75 p-4`}>
                    <img src={x} alt="upload" className={`${CardTwoCss.x}`} onClick={() => this.props.updateCard(0)}/>   

                    <div className="h2">Upload Images*</div>

                    <div className={`${CardTwoCss.dropzone} mt-3 mb-3`}>
                        <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
                            {({getRootProps, getInputProps}) => (
                                <section>
                                <div className={`text-center`} {...getRootProps()}>
                                    <input {...getInputProps()} />
                                    <img src={upload} alt="upload" className={`${CardTwoCss.upload}`}/>
                                    <br/>
                                    <div className="m-1">
                                        Click to select or drag to drop...
                                    </div>
                                </div>
                                </section>
                            )}
                        </Dropzone>
                    </div>

                    <Row>
                        <Col className={`${CardTwoCss.subheaders}`}>
                            Email*
                            <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="Your email" onChange={e => this.props.updateCourtEmail(e.target.value)}></input>
                        </Col>

                        <Col className={`${CardTwoCss.subheaders}`}>
                            Instagram
                            <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="Instagram Handle" onChange={e => this.props.updateCourtIG(e.target.value)}></input>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <div className={`${CardTwoCss.subheaders}`}>
                                Free to use?
                            </div>
    
                            <div className="form-check inline-block">
                                <input className="form-check-input" type="radio" name="exampleRadios" value={true} onChange={e => this.props.updateCourtFree(e.target.value)}/>
                                <label className="form-check-label">
                                    Yes
                                </label>
                            </div>    

                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="exampleRadios" value={false} defaultChecked onChange={e => this.props.updateCourtFree(e.target.value)}/>
                                <label className="form-check-label">
                                    No
                                </label>
                            </div>   
                        </Col>

                        <Col className={`${CardTwoCss.subheaders}`}>
                            Gametime*
                            <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="Do you know when court is open?" onChange={e => this.props.updateCourtGameTime(e.target.value)}></input>
                        </Col>
                    </Row>

                    {/* <div className={`${CardTwoCss.email}`}>
                        Email*
                    </div> */}

                    <div className={`d-flex justify-content-center mt-4 text-center ${CardTwoCss.text} ${CardTwoCss.steps}`}>
                        <img src={leftarrow} alt="leftarrow" className={`${CardTwoCss.leftarrow}`} onClick={() => this.props.updateCard(1)}/>

                        Step 
                        <br/>
                        2/3

                        <img src={rightarrow} alt="rightarrow" className={`${CardTwoCss.rightarrow}`} onClick={() => this.props.updateCard(3)}/>

                    </div>       
                </Card.Body>
            </Card>
        )
    }
}
  
export default CardTwo;
