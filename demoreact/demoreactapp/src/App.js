import logo from './logo.svg';
import './App.css';
import Item from './components/Item';
import ItemDate from './components/ItemDate';

function App() {
  const response = [
    {
      itemName:'Nirma',
      date:'20',
      month:'july',
      year:'1998'
    },
    {
      itemName:'SurfExcel',
      date:'28',
      month:'april',
      year:'2003'
    },
    {
      itemName:'XXX',
      date:'12',
      month:'may',
      year:'2000'
    }
  ];
  return (
    <div>
      <Item name = {response[0].itemName}>
        hello I am first item getting printed using props.childern in item.js
      </Item>
      <ItemDate date = {response[0].date} month = {response[0].month} year = {response[0].year} ></ItemDate>

      <Item name = {response[1].itemName}></Item>
      <ItemDate date = {response[1].date} month = {response[1].month} year = {response[1].year}></ItemDate>

      <Item name = {response[2].itemName}></Item>
      <ItemDate date = {response[2].date} month = {response[2].month} year = {response[2].year}></ItemDate>
      <div className="App">
        hello bro
      </div>
    </div>
    
  );
}

export default App;
