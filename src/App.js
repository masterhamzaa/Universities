import "./App.css";
import React from "react";
import ListCountries from "./components/ListeCountries";
import DetailCountry from "./components/DetailCountry";
import DetailUnvier from "./components/DetailUnvier";
function App() {
  return (
    <React.Fragment>
      
      <div className="bt"></div>
      <div className="container">
        <ListCountries />
        <br />
        <DetailCountry />
        <br />
        <DetailUnvier />
      </div>
    </React.Fragment>
  );
}

export default App;
