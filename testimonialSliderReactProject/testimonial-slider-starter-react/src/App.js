import React from "react";
import Cards from "./components/Cards";
import reviews from "./data"

const App = () => {
  return (
    <div className="flex justify-center items-center h-[100vh] bg-slate-100">
        <div className="max-w-[500px] flex flex-col relative items-center m-2">
          <div className="flex flex-col items-center p-8">
            <h2 className="text-[24px] font-bold">Our Testimonials</h2>
            <div className="w-[100px] h-0.5 bg-violet-600"></div>
          </div>
          <Cards testimonials={reviews}></Cards>
        </div>
    </div>
    
  );
};

export default App;
