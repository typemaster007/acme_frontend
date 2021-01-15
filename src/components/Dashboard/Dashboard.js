import React from 'react';
import { Container, Jumbotron } from "react-bootstrap";
//import {Link} from 'react-router-dom';
//import Popup from "reactjs-popup";
import axios from 'axios';
import "./Dashboard.css"

class Dashboard extends React.Component {

    constructor(props) {
        super(props)
        this.inputRef = React.createRef();
    
        this.state = {
          feedtime: null,
          food: null,
          number: null,
          location: null,

          sensordata: [],

          errors: {
              
          },       

        };
    
      }

      componentDidMount() 
      {        
        this.inputRef.current.focus();

        axios
          .get('http://localhost:5000/getdevices')
          .then(response => {
            console.log("Response =" ,response.data)
            this.setState({ sensordata: response.data })
          })
          .catch(error => {
            console.log("Error = ", error)
          })
      }


      
      

  render() {

    const displaySensor = this.state.sensordata;

    return (
        <>              
        <Jumbotron fluid >
          <Container  ref={this.inputRef}>
              <h1>ACME IOT Sensor Data</h1>
              <p>
                Dashboard that shows sensor data from various cloud connected intelligent devices:
              </p>
              <div className="container " style= {{height: 'auto',width: 'auto', overflowY: 'scroll', margin: '0px'}}>
              {
                    // console.log(displayCountry)
                    displaySensor.map(sensor => {
                        let newColor = ""
                        switch(sensor.id % 9) {
                            case 1:
                              newColor="#36a3f9"; 
                              break;
                            case 2:
                              newColor="#0FF8FC"; 
                              break;

                            case 3:
                              newColor="#ff929c"; 
                              break;
                            
                            case 4:
                              newColor="#D3EACE"; 
                              break;
                            case 5:
                              newColor="#f1e50e"; 
                              break;
                            case 6:
                              newColor="#a8cdff"; 
                              break;
                            case 7:
                              newColor="#0099CC"; 
                              break;
                            case 8:
                              newColor="#F3AE9A"; 
                              break;
                            
                            default:
                                newColor="#00F5FE";
                                break
                        }
                        return (
                            <div key={sensor.id} className="col col-sm-4 " 
                                style={{width: "400px", float:"left", marginLeft:"0px",marginTop: "20px"}} >
                                <div className={"card "} style= {{width: "auto",height: "300px", backgroundColor: newColor}}>
                                    <div className="card-body" key={sensor.id} style={{ backgroundColor: newColor}}  >                                      
                                        
                                        <h5><p className="card-text">
                                           Name:{" "} {sensor.name} 
                                        </p></h5>
                                        <hr />
                                        <p className="card-text">
                                            Sensor Status: {" "} <b>{sensor.status}</b>
                                        </p>
                                        <hr />
                                        <p className="card-text">
                                            Device ID: {" "} {sensor.id}
                                        </p>
                                        <p className="card-text">
                                            Device Type: {" "} {sensor.type}
                                        </p>
                                        <p className="card-text">
                                            Industry: {" "} {sensor.industry}
                                        </p>
                                        <hr />
                                    </div>
                                </div>
                            </div>
                        )
                    } )
                }   
                </div>                               
                                            
              
          </Container>
          </Jumbotron>
        
      </>
    )
  }
}

export default Dashboard;