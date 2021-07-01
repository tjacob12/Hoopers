import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardThreeCss from '../../css/CardThree.module.css';
import leftarrow from '../../assets/left-arrow.png'
import rightarrow from '../../assets/right-arrow.png'
import x from '../../assets/x.png'

class CardThree extends Component{

    constructor(props){
        super(props)
    }

    render(){
        return (
            <Card className={`${CardThreeCss.card}`} >
                <Card.Body className={`text-white vw-75 p-4`}>
                    <img src={x} alt="upload" className={`${CardThreeCss.x}`} onClick={() => this.props.updateCard(0)}/>   

                    <div className="h2">What else do you know about this court?</div>

                    <div className="form-group">
                        <textarea className={`${CardThreeCss.textarea}`} onChange={e => this.props.updateCourtAbout(e.target.value)}></textarea>
                    </div>

                    <div className="d-flex justify-content-center">
                        <Button onClick={() => this.props.uploadToFirebase()}>Send court to review</Button>
                    </div>    

                    <div className={`d-flex justify-content-center mt-4 text-center ${CardThreeCss.text} ${CardThreeCss.steps}`}>
                        <img src={leftarrow} alt="leftarrow" className={`${CardThreeCss.leftarrow}`} onClick={() => this.props.updateCard(2)}/>

                        Step 
                        <br/>
                        3/3

                        <img src={rightarrow} alt="rightarrow" className={`${CardThreeCss.rightarrow}`}/>

                    </div>       
                </Card.Body>
            </Card>
        )
    }
}
  
export default CardThree;
