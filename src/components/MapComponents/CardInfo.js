import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardInfoCss from '../../css/CardInfo.module.css';
import leftarrow from '../../assets/left-arrow.png'
import rightarrow from '../../assets/right-arrow.png'
import x from '../../assets/x.png'

class CardInfo extends Component{

    constructor(props){
        super(props)

        this.state = {
            imgs:[]
        }
    }

    async componentDidMount(){
        let storageRef = await this.props.storage.ref(`${this.props.location}`)

        console.log(this.state.imgs)
        
        storageRef.listAll().then(function(result) {
            result.items.forEach(function(imageRef) {
              // And finally display them
              console.log(imageRef)
              this.displayImage(imageRef);
              console.log(this.state.imgs)
            });
          }).catch(function(error) {
            // Handle any errors
          });
    }

    displayImage = (imageRef) => {
        console.log("download start2")
        imageRef.getDownloadURL().then((url) => {
            this.setState({
                imgs:this.state.imgs.push(url)
            })
          // TODO: Display the image on the UI
        }).catch(function(error) {
          // Handle any errors
        });
      }

    render(){
        return (
            <Card className={`${CardInfoCss.card} text-white`} >
                <img src={x} alt="x" className={`${CardInfoCss.x}`} onClick={() => this.props.updateCard(0)}/>   

                <Row>
                    <Col xs={6} className={`${CardInfoCss.left}`}>

                    </Col>

                    <Col xs={6} className={`${CardInfoCss.right}`}>
                        <p>Court by hoopers</p>
                        <h1 className={`${CardInfoCss.hoopersOrange}`}>Filler</h1>

                        <h3 className={`${CardInfoCss.hoopersOrange} mt-3`}>Location:</h3>
                        <h3 className={`mb-3`}>{this.props.location}</h3>

                        <h3 className={`${CardInfoCss.hoopersOrange} mt-3`}>Gametime:</h3>
                        <h3 className={`mb-3`}>{this.props.gametime}</h3>

                        <h3 className={`${CardInfoCss.hoopersOrange} mt-3`}>Free:</h3>
                        <h3 className={`mb-3`}>{this.props.free ? "Yes": "No"}</h3>

                        <h3 className={`${CardInfoCss.hoopersOrange} mt-3`}>About:</h3>
                        <h3 className={`mb-3`}>{this.props.about}</h3>

                        <Button>More info</Button>
                    </Col>
                </Row>

            </Card>
        )
    }
}
  
export default CardInfo;
