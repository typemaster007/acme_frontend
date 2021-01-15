import React from "react";
import duck1 from "../../assets/images/duck1.jpg";
import duck2 from "../../assets/images/duck2.jpg";
import "./Landing.css"



function LandingPage(props) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return(
    <div id='body' style={{backgroundColor:"#c9d6d6"}}>
        <div className="card text-center"  style={{marginLeft:'80px',marginRight:'80px',backgroundColor:"#f6f6f6"}}>
          <div className="card-header">
            <h2 style={{textAlign:"center"}}>Duck Feeding habits research</h2>
          </div>
          
          <div className="card-body" >
          <div className="row">
            <div className="column"> <img src={duck1} alt="Trulli" width="100%" height="320" ></img> </div>
            <div className="column"> <img src={duck2} alt="Trulli" width="100%" height="320" ></img> </div>
          </div>
            <blockquote className="blockquote mb-0">
              <p style={{padding:'10px',justifyContent:'center', margin: 'auto',width:'65%'}}>Scientists are trying to understand how ducks are being fed in parks around the world. We need
                to collect the following information for our research.</p>
                
            </blockquote>
          </div>
        </div>

        <div className="card text-center" style={{marginLeft:'80px',marginRight:'80px',backgroundColor:"#f6f6f6"}}>
          <div className="card-header">
            <h3>Are you here to submit Duck Feed data from around the world?</h3>
          </div>
          <div className="card-body">
            <h5 className="card-title">Duck feeding habits research</h5>
            <p className="card-text">Your data on how you have fed the ducks allows scientists to obtain valuable research data.</p>
            <a href="/users" className="btn btn-primary">Submit data</a>
          </div>
        </div>

        <div className="card text-center" style={{marginLeft:'80px',marginRight:'80px',backgroundColor:"#f6f6f6"}}>
          <div className="card-header">
            <h3>Are you a Scientist here to view submitted duck data?</h3>
          </div>
          <div className="card-body">
            <h5 className="card-title">Crowdfunded Duck data from around the world</h5>
            <p className="card-text">Data from multiple sources and locations allows for a dynamice visualization for your research.</p>
            <a href="/scientists" className="btn btn-primary">View Duck data</a>
          </div>
        </div>

        
        
    </div>
);
}



export default LandingPage;
