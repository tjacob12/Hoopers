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
import firebase from '../firebase/firebase';
import Geocode from "react-geocode";
import markerimg from '../assets/marker.png'

Geocode.setApiKey("AIzaSyDfOLH2NquwD8PxuLKGLumRQCETj46emOE");

Geocode.setLanguage("en");

Geocode.setRegion("us");

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
            courtAbout: "",
        }

        this.mapElement = React.createRef()

        this.db = firebase.instance().db
        this.storage = firebase.instance().storage
    }

    updateCard = (cardNum) => {
        this.setState({currentCard:cardNum})
    }

    updateCourtLocation = (Location) => {
        this.setState({courtLocation: Location})
    }

    updateCourtImage = (Images) => {
        this.setState({courtImage: Images})
    }

    updateCourtEmail = (Email) => {
        this.setState({courtEmail: Email})
    }

    updateCourtIG = (IG) => {
        this.setState({courtIG: IG})
    }

    updateCourtFree = (Free) => {
        this.setState({courtFree: Free})
    }

    updateCourtGameTime = (GameTime) => {
        this.setState({courtGameTime: GameTime})
    }

    updateCourtAbout = (About) => {
        this.setState({courtAbout: About})
    }

    uploadToFirebase = async () => {
        console.log(this.state)

        console.log(this.state.courtImage)

        this.state.courtImage.forEach(async (file) => {
            let filepath = `${this.state.courtLocation}/${file.name}`
            await this.storage.ref(filepath).put(file);
        })

        let response = await Geocode.fromAddress(this.state.courtLocation)
        const { lat, lng } = response.results[0].geometry.location

        await this.db.collection("Courts").add({
            courtLocation: this.state.courtLocation,
            courtEmail: this.state.courtEmail,
            courtIG: this.state.courtIG,
            courtFree: this.state.courtFree,
            courtGameTime: this.state.courtGameTime,
            courtAbout: this.state.courtAbout,
            courtLngLat: [lng,lat]
            // courtLngLat: {
            //     lng:lng,
            //     lat:lat
            // }
        })

        this.addMarker([lng,lat])
        console.log("uploaded")
    }

    addMarker = (lngLat) => {
        const el = document.createElement('div')
        el.className = 'marker'
        el.style.backgroundImage = `url(${markerimg})`
        el.style.backgroundRepeat = 'no-repeat'
        el.style.backgroundPosition = 'center'
        el.style.backgroundSize = 'cover'
        el.style.width = '50px'
        el.style.height = '50px'
        el.addEventListener('click', async (e) => {
            // Prevent the `map.on('click')` from being triggered
            e.stopPropagation();
            let response = await this.db.collection("Courts").where("courtLngLat", "array-contains", lngLat[0]).get()
            response.forEach(doc => {
                if(doc.data().courtLngLat[1] === lngLat[1]){
                    this.setState({
                        currentCard: 4,
                        data: doc.data()
                    })
                }
            })
        });
        el.style.cursor = 'pointer'

        const marker = new mapboxgl.Marker({
            element: el,
        })
        .setLngLat(lngLat)
        .addTo(this.map)
    }

    showCourt = (data) => {
        return <CardInfo 
            updateCard={this.updateCard}
            location={data.courtLocation} 
            gametime={data.courtGameTime}
            free={data.courtFree}
            about={data.courtAbout}
            storage={this.storage}>
        </CardInfo>
    }

    displayCard = (data) => {
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
                return <CardThree updateCard={this.updateCard} updateCourtAbout={this.updateCourtAbout} uploadToFirebase={this.uploadToFirebase}></CardThree>
            default:
                break;
        }
    }

    async componentDidMount(){
        const {latitude,longitude,zoom} = this.state

        this.map = new mapboxgl.Map({
            container: this.mapElement.current,
            style: "mapbox://styles/mapbox/light-v10",
            center: [-96, 37.8],
            zoom: 3
            // center: [longitude,latitude],
            // zoom: zoom
        })

        const snapshot = await this.db.collection('Courts').get()
        snapshot.docs.forEach(doc => {
            // console.log(doc.data().courtLngLat)
            this.addMarker([doc.data().courtLngLat[0],doc.data().courtLngLat[1]])
            // this.addMarker([doc.data().courtLngLat.lng,doc.data().courtLngLat.lat])
        })

    }

    render(){
        const {latitude,longitude,zoom} = this.state

        return (
            <div>
                <div ref={this.mapElement} className={`${MapCss.map}`}>

                </div>

                <div className={`${MapCss.button} d-flex justify-content-center`}>
                    {this.state.currentCard === 0 ? <Button onClick={()=>this.updateCard(1)}>Add Court</Button> : <div></div>}
                </div>     

                <br/>

                <div className={`${MapCss.card} d-flex justify-content-center`}>
                    {this.state.currentCard < 4 ?  this.displayCard() : this.showCourt(this.state.data)}
                </div>     
            </div>
        )
    }
}
  
export default Map;
