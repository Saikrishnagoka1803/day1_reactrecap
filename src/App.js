import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Link } from "react-router-dom";
import Details from './components/Details'
import { useState } from "react";
import Favourites from "./components/Favourites"

function App() {

  const [jobdetail, setjobdetail] = useState({})

  return (
    <div className="App">
      <Router>
        <NavBar />
       
        <Route path="/" exact render = {() => <Home setjobdetail= {setjobdetail}/>} />
        <Route path="/details" exact render = {() => <Details job ={jobdetail}/>}  />
        <Route path="/favourites" exact component={Favourites} />
      </Router>
    </div>
  );
}

export default App;
