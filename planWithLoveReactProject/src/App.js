import React, { useState } from "react";
import data from "./data";
import Tour from "./components/Tour";

const App = () => {

  const [tours,setToure] = useState(data);

  function removeTour(id){

    const newTour = tours.filter(tour => tour.id !== id);

    setToure(newTour);
  }

  if(tours.length === 0){
    return(
      <div className="refresh-wrapper">
        <div className="refresh-text">
          No Tour Left
        </div>
        <button className="refresh-btn" onClick={()=>setToure(data)}>refresh</button>
      </div>
    ); 
  }

  return (
    <div className="App">
      <Tour tours={tours} removeTour={removeTour}></Tour>
    </div>
  );
};

export default App;
