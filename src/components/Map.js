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
            currentCard: 0,
            courtLocation: "",
            courtImage: null,
            courtEmail: "",
            courtIG: "",
            courtFree: false,
            courtGameTime: "",
            courtAbout: ""
        }

        this.mapElement = React.createRef()
    }

    updateCard = (cardNum) => {
        this.setState({currentCard:cardNum})
    }

    updateCourtLocation = (Location) => {
        this.setState({courtLocation: Location})
    }

    updateCourtImage = (Image) => {
        this.setState({courtImage: Image})
    }

    updateCourtEmail = (Email) => {
        this.setState({courtEmail: Email})
        console.log(Email)
    }

    updateCourtIG = (IG) => {
        this.setState({courtIG: IG})
        console.log(IG)
    }

    updateCourtFree = (Free) => {
        this.setState({courtFree: Free})
        console.log(Free)
    }

    updateCourtGameTime = (GameTime) => {
        this.setState({courtGameTime: GameTime})
        console.log(GameTime)
    }

    updateCourtAbout = (About) => {
        this.setState({courtAbout: About})
        console.log(About)
    }

    displayCard = () => {
        const num = this.state.currentCard
        switch(true){
            case (num===1):
                return <CardOne updateCard={this.updateCard} updateLocation={this.updateCourtLocation}></CardOne>
            case (num===2):
                return <CardTwo updateCard={this.updateCard}
                                updateCourtImage={this.updateCourtImage}
                                updateCourtEmail={this.updateCourtEmail}
                                updateCourtIG={this.updateCourtIG}
                                updateCourtFree={this.updateCourtFree}
                                updateCourtGameTime={this.updateCourtGameTime}
                       >
                       </CardTwo>
            case (num===3):
                return <CardThree updateCard={this.updateCard} updateCourtAbout={this.updateCourtAbout}></CardThree>
            default:
                break;
        }
    }

    componentDidMount(){
        const {latitude,longitude,zoom} = this.state

        this.map = new mapboxgl.Map({
            container: this.mapElement.current,
            style: "mapbox://styles/mapbox/light-v10",
            center: [-96, 37.8],
            zoom: 3
            // center: [longitude,latitude],
            // zoom: zoom
        })
    }

    render(){
        const {latitude,longitude,zoom} = this.state

        var geojson = {
            type: 'FeatureCollection',
            features: [{
              type: 'Feature',
              geometry: {
                type: 'Point',
                coordinates: [-77.032, 38.913]
              },
              properties: {
                title: 'Mapbox',
                description: 'Washington, D.C.'
              }
            },
            {
              type: 'Feature',
              geometry: {
                type: 'Point',
                coordinates: [-122.414, 37.776]
              },
              properties: {
                title: 'Mapbox',
                description: 'San Francisco, California'
              }
            }]
        };

        // geojson.features.forEach(function (marker) {
        //     // create a HTML element for each feature
        //     var el = document.createElement('div');
        //     el.className = 'marker';
             
        //     // make a marker for each feature and add it to the map
        //     new mapboxgl.Marker(el)
        //     .setLngLat(marker.geometry.coordinates)
        //     .setPopup(
        //     new mapboxgl.Popup({ offset: 25 }) // add popups
        //     .setHTML(
        //     '<h3>' +
        //     marker.properties.title +
        //     '</h3><p>' +
        //     marker.properties.description +
        //     '</p>'
        //     )
        //     )
        //     .addTo(this.mapElement);
        // });
            

        return (
            <div>
                <div ref={this.mapElement} className={`${MapCss.map}`}>

                </div>

                <div className={`${MapCss.button} d-flex justify-content-center`}>
                    {this.state.currentCard === 0 ? <Button onClick={()=>this.updateCard(1)}>Add Court</Button> : <div></div>}
                </div>    

                <br/>

                <div className={`${MapCss.card} d-flex justify-content-center`}>
                    {this.displayCard()}
                </div>    

                {/* <div className="d-flex justify-content-center">
                    <CardInfo></CardInfo>
                </div>     */}

            </div>
        )
    }
}
  
export default Map;
