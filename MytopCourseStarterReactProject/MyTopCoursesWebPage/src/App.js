import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Crads from "./components/Cards"
import Spinner from "./components/Spinner";
import {filterData,apiUrl} from "./data"
import { toast } from "react-toastify";

const App = () => {

  const [courses,setCourses] = useState(null);
  const [loading,setSpinnner] = useState(true);
  const [catogery,setCatogery] = useState(filterData[0].title);

  async function fetchData(){
    setSpinnner(true);
    try {
      let res = await fetch(apiUrl);
      let output = await res.json();
      setCourses(output.data);
    }
    catch (error) {
      toast.error("some problem in network");
    }
    setSpinnner(false);
  }

  useEffect(()=>{
    fetchData();
    console.log(courses);
  },[]);

  return (
    <div className="flex flex-col min-h-[100vh] bg-slate-500">
      <div className="bg-bgDark w-full flex justify-center">
        <Navbar/>
      </div>

      <div className="bg-slate-500 w-full">
        <Filter filterData={filterData} catogery={catogery} setCatogery={setCatogery}/>
          {
            loading ? (<Spinner/>):(<Crads courses={courses} catogery={catogery} ></Crads>)
          }
      </div>
    </div>
  );
  
};

export default App;
