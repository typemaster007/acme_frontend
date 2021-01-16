import React from "react";
import device1 from "../../assets/images/device1.jpg";
import device2 from "../../assets/images/device2.jpg";
import "./Landing.css"



function LandingPage(props) {
  
  return(
    <div id='body' style={{backgroundColor:"#c9d6d6"}}>
        <div className="card text-center"  style={{marginLeft:'80px',marginRight:'80px',backgroundColor:"#f6f6f6"}}>
          <div className="card-header">
            <h2 style={{textAlign:"center"}}>ACME Sensor data visualization</h2>
          </div>
          
          <div className="card-body" >
          <div className="row">
            <div className="column"> <img src={device1} alt="Trulli" width="100%" height="320" ></img> </div>
            <div className="column"> <img src={device2} alt="Trulli" width="100%" height="320" ></img> </div>
          </div>
            <blockquote className="blockquote mb-0">
              <p style={{padding:'10px',justifyContent:'center', margin: 'auto',width:'65%'}}>This application 
              allows users to Simulate incoming IOT data as well as view the live dashboard for device status .</p>
                
            </blockquote>
          </div>
        </div>

        <div className="card text-center" style={{marginLeft:'80px',marginRight:'80px',backgroundColor:"#f6f6f6"}}>
          <div className="card-header">
            <h3>Are you here to submit Sensor data?</h3>
          </div>
          <div className="card-body">
            <h5 className="card-title">Sensor Data Simulation</h5>
            <p className="card-text">Create, update and delete sensor devices</p>
            <a href="/users" className="btn btn-primary">Submit data</a>
          </div>
        </div>

        <div className="card text-center" style={{marginLeft:'80px',marginRight:'80px',backgroundColor:"#f6f6f6"}}>
          <div className="card-header">
            <h3>Are you here to view the Sensor data dashboard?</h3>
          </div>
          <div className="card-body">
            <h5 className="card-title">Live Sensor data dashboard</h5>
            <p className="card-text">Dynamic visualization of sensor status</p>
            <a href="/scientists" className="btn btn-primary">View Sensor data</a>
          </div>
        </div>        
    </div>
);
}



export default LandingPage;
