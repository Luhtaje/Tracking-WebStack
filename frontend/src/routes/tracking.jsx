import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet'

const limeOptions = {
    color:'lime'
}

class Tracking extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            dog:[],
            dogNow:{
                lat:0,
                lon:0,
            },
        };
    }

    async getDogs(){
        const response = await fetch(`http://localhost:3000/dogs`);
        const data = await response.json();
        console.log(data);

        this.setState({
            dog: data,
            dogNow: {
                lat: data[data.length - 1].lat,
                lon: data[data.length - 1].lon
                }
        })

       
       return data;
    }

    componentDidMount(){
        this.timerID = setInterval(()=>{
            this.getDogs();
            console.log("Interval running");
        },3000)
    }

    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    render(){
        return(
            <MapContainer center={[62.505, 28.8811322]} zoom={8} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[62.505522, 28.887488]}>
                    <Popup>
                        Start
                    </Popup>
                </Marker>
                <Marker position={[this.state.dogNow.lat, this.state.dogNow.lon]}>
                    <Popup>
                        Dog is here 
                    </Popup>
                </Marker>
                <Polyline pathOptions={limeOptions} positions={this.state.dog} />
            </MapContainer>
        )}
}

export default Tracking;