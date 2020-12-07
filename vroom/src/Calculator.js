import React, { Component } from 'react';
import Geocode from 'react-geocode';
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css';
import './Calculator.css'
 
const Calculator = () => {
    return (
       <div>
         <h1>Carbon Emissions Calculator</h1>
         <div className="calc">
            <CalcForm />
         </div>
       </div>
    );
}

class CalcForm extends Component {
   constructor(props) {
      super(props);
      this.state = {start: '', end: '', slat: '', slong: '', elat: '', elong: '', dist: '', type: 'car'}
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      // normally i would not do this, but i couldnt figure out a reasonable 
      // and secure solution
      Geocode.setApiKey('AIzaSyBVh2Zz0zBa6FiVhKIr_zaimbKpbJTCbVA')
      Geocode.setLanguage("en");
      Geocode.enableDebug();
   }
   handleChange(event) {
      const value = event.target.value;
      this.setState({
         ...this.state,
         [event.target.name]: value
      });
   }
   handleSubmit(event) {
      if (this.start === ''|| this.end === '') {
         event.preventDefault();
         return;
      }
      Geocode.fromAddress(this.state.start).then(
         response => {
           const { lat, lng } = response.results[0].geometry.location;
           console.log("start: " + lat + ', ' + lng)
           this.setState({slat: lat, slong: lng})
           Geocode.fromAddress(this.state.end).then(
               response => {
                  const { lat, lng } = response.results[0].geometry.location;
                  console.log("end: " + lat + ', ' + lng)
                  this.setState({elat: lat, elong: lng})
                  this.setState({dist: this.distance(this.state.slat, this.state.slong, this.state.elat, this.state.elong) })
               },
               error => {
               console.error(error);
               }
            );
         },
         error => {
           console.error(error);
         }
       );

      event.preventDefault();
   }
   render() {
      const options = [
         { label: 'Car', value: 'car' },
         { label: 'Hybrid', value: 'hybrid' },
         { label: 'Train', value: 'train' },
         { label: 'Plane', value: 'plane' },
         { label: 'Bus', value: 'bus' },
      ];
      return(
         <div>
            <form onSubmit={this.handleSubmit}>
               <label>
                  Start Address:
                  <input className="inputBox" id="si" type="text" name="start" value={this.state.start} onChange={this.handleChange} />
               </label>
               <label>
                  End Address:&nbsp;
                  <input className="inputBox" id="ei" type="text" name="end" value={this.state.end} onChange={this.handleChange} />
               </label>
               <label>
                  Method:
                  <div id="ddbox"><Dropdown id="dd" options={options} onChange={this.onSelect} value={this.state.type} /></div>
               </label>
               <input id="btn" type="submit" value="Submit" />
            </form>
            <p>
                  Total route length: <span style={{color: 'blue'}}>{(this.state.dist === '' ? 0 : this.state.dist).toFixed(2)}</span> <span style={{color: 'black'}}> miles</span>
            </p>
            <p>You would generate <span style={{color: 'red'}}>{this.emissions(this.state.dist, this.state.type).toFixed(2)}</span><span style={{color: 'black'}}> grams of CO2 on this trip.</span></p>
         </div>
      );
   }
   onSelect = (e) => {
      this.setState({type: e.value});
   }
   distance(lat1, lon1, lat2, lon2) {
      var p = 0.017453292519943295;    // Math.PI / 180
      var c = Math.cos;
      var a = 0.5 - c((lat2 - lat1) * p)/2 + 
              c(lat1 * p) * c(lat2 * p) * 
              (1 - c((lon2 - lon1) * p))/2;
    
      return (12742 * Math.asin(Math.sqrt(a))) * 0.62137; //convert to miles
   }
   emissions(distance, type="car") {
      var coeff = type === "car" ? 158 : type === "hybrid" ? 122 : type === "train" ? 14 : type === "plane" ? 285 : type === "bus" ? 16 : 0;
      return coeff * distance
   }
}

// couldnt get this to work :(
// class GoogleMap extends Component {
//    constructor(props) {
//       super(props);
//       this.googleMapRef = createRef()
//       //this.sPos = props.sPos;
//       //this.ePos = props.ePos;
//    }
//    componentDidMount() {
//       window.google = { }
//       const gmscript = document.createElement('script');
//       gmscript.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyBVh2Zz0zBa6FiVhKIr_zaimbKpbJTCbVA&v=3.exp&libraries=geometry,drawing,places";
//       window.document.body.appendChild(gmscript);
      
//       gmscript.addEventListener('load', () => {
//          this.googleMap = this.createGoogleMap();
//       })
//    }

//    createGoogleMap = () => {
//       new window.google.maps.Map(this.googleMapRef.current, {
//          zoom: 16,
//          center: {
//             lat: 43.642567,
//             lng: -79.387054,
//          },
//          disableDefaultUI: true
//       })
//    }

//    createMarker = () => {
//       new window.google.maps.Marker({
//          position: { lat: 43.642567, lng: -79.387054 },
//          map: this.googleMap,
//       })
//    }

//    render() {
//       return(
//          <div id="google-map" ref={this.googleMapRef} style={{ width: '640px', height: '480', color: 'black'}}/>
//       );
//    }
// }
 
export default Calculator;