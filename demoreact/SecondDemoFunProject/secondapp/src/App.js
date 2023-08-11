import React from 'react';
import NewForm from './components/NewForm';
import './App.css';
import Products from './components/Products';

function App() {

  const date=[
    {
      date : new Date(2021, 8, 10),
    },
    {
      date : new Date(2021, 8, 10), 
    },
    {
      date : new Date(2021, 12, 20),
    },
    {
      date : new Date(2021, 5, 5),
    }
  ]
   
  const products = [
    {
      id:'p1',
      title:'Nirma',
      amount:100,
      data : {
        month  : date[0].date.toLocaleString('en-EN', { month: "long" }),
        day : date[0].date.getDate(),
        year : date[0].date.getFullYear(),
      },
    },
    {
      id:'p2',
      title:'Surf Excel',
      amount:200,
      data : {
        month  : date[1].date.toLocaleString('en-EN', { month: "long" }),
        day : date[1].date.getDate(),
        year : date[1].date.getFullYear(),
      }, 
    },
    {
      id:'p3',
      title:'Tide',
      amount:130,
      data : {
        month  : date[2].date.toLocaleString('en-EN', { month: "long" }),
        day : date[2].date.getDate(),
        year : date[2].date.getFullYear(),
      },
    },
    {
      id:'p4',
      title:'Ariel',
      amount:450,
      data : {
        month  : date[3].date.toLocaleString('en-EN', { month: "long" }),
        day : date[3].date.getDate(),
        year : date[3].date.getFullYear(),
      },
    }
  ]
  

  function newProductDate(data){
    console.log('I am in App.js');
    console.log(data);
  }

  return (
    <div className="App">
      <NewForm newProductDate={newProductDate}></NewForm>
      <Products items={products}/>
    </div>
  );
}

export default App;
