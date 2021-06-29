import MapCss from '../css/Map.module.css';
import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css'
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import CardOne from './MapComponents/CardOne';
import CardTwo from './MapComponents/CardTwo';
import CardThree from './MapComponents/CardThree';
import CardInfo from './MapComponents/CardInfo';

mapboxgl.accessToken = 'pk.eyJ1IjoiamFzb25qaWFuZzY5NjYiLCJhIjoiY2txZW12bGU5MWVhYzJ4czczN3Nybzh1cyJ9.tn_f2bp6mikg48g-nMZOzA'

class Map extends Component{

    constructor(props){
        super(props)

        this.state = {
            latitude: -26.07,
            longitude: 28,
            zoom: 15,
            currentCard: 0
        }

        this.mapElement = React.createRef()
    }

    updateCard = (cardNum) => {
        // console.log(cardNum)
        this.setState({currentCard:cardNum})
    }

    displayCard = () => {
        const num = this.state.currentCard
        switch(true){
            case (num===1):
                return <CardOne updateCard={this.updateCard}></CardOne>
            case (num===2):
                return <CardTwo updateCard={this.updateCard}></CardTwo>
            case (num===3):
                return <CardThree updateCard={this.updateCard}></CardThree>
            default:
                break;
        }
    }

    componentDidMount(){
        const {latitude,longitude,zoom} = this.state

        this.map = new mapboxgl.Map({
            container: this.mapElement.current,
            style: "mapbox://styles/mapbox/light-v10",
            center: [longitude,latitude],
            zoom: zoom
        })
    }

    render(){
        const {latitude,longitude,zoom} = this.state

        return (
            <div>
                <div ref={this.mapElement} className={`${MapCss.map}`}>

                </div>

                <div className={`${MapCss.button} d-flex justify-content-center`}>
                    <Button onClick={()=>this.updateCard(1)}>Add Court</Button>
                </div>    

                <br/>

                <div className="d-flex justify-content-center">
                    {this.displayCard()}
                </div>    

                {/* <div className="d-flex justify-content-center">
                    <CardInfo></CardInfo>
                </div>     */}


                {/* <div className="d-flex justify-content-center">
                    <CardTwo updateCard={this.updateCard}></CardTwo>
                </div>    

                <br/>

                <div className="d-flex justify-content-center">
                    <CardThree updateCard={this.updateCard}></CardThree>
                </div>                  */}
            </div>
        )
    }
}
  
export default Map;
