import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Card from 'react-bootstrap/Card';
import CardOneCss from '../../css/CardOne.module.css';
import x from '../../assets/x.PNG'
import leftarrow from '../../assets/left-arrow.png'
import rightarrow from '../../assets/right-arrow.png'

class CardOne extends Component{

    constructor(props){
        super(props)

        this.state = {
            searchValue: ""
        };

        this.search = this.search.bind(this)

        this.foundRef = React.createRef();

        console.log(this.props)
    }

    search(){
        this.foundRef.current.style.display = ""
        this.foundRef.current.innerHTML = this.state.searchValue
    }

    render(){
        return (
            <Card className={`${CardOneCss.card}`}>
                <Card.Body className={`text-white vw-75 p-4`}>
                    <img src={x} alt="upload" className={`${CardOneCss.x}`} onClick={() => this.props.updateCard(0)}/>   

                    <div className="h2">Where is this court located?</div>

                    <div className={`${CardOneCss.background}`}>
                        <div className={`${CardOneCss.found}`} ref={node=> this.foundRef.current = node} 
                            style={{display:"none"}}>
                                Filler
                        </div>
                        
                        <InputGroup className={`${CardOneCss.search}`}>
                            <FormControl 
                            placeholder="Search Location"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                            value={this.state.searchValue}
                            onChange={e => this.setState({searchValue: e.target.value})}
                            type="text"
                            />
                            <InputGroup.Append>
                            <Button onClick={this.search}>Button</Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </div>

                    <div className={`d-flex justify-content-center mt-4 text-center ${CardOneCss.text} ${CardOneCss.steps}`}>
                        <img src={leftarrow} alt="leftarrow" className={`${CardOneCss.leftarrow}`}/>

                        Step 
                        <br/>
                        1/3

                        <img src={rightarrow} alt="rightarrow" 
                            className={`${CardOneCss.rightarrow}`} 
                            onClick={() => this.props.updateCard(2)}
                        />

                    </div>       
                </Card.Body>
            </Card>
        )
    }
}
  
export default CardOne;
