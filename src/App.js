import NavigationBar from "./components/Navigation/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import LandingPage from './components/Landing/Landing';
import Simulator from './components/Simulator/Simulator';
import Dashboard from './components/Dashboard/Dashboard';
import "./App.css";


function App() {  
    
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Router>
        <NavigationBar/>
        <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/dashboard" exact component={Dashboard} />
            <Route path="/simulator" exact component={Simulator} />
        </Switch>
          
      </Router>
      
    </div>
  );
}

export default App;
