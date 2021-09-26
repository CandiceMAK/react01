import logo from './logo.svg';
//IMPORT CSS AND BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

//Import components
import User from './components/User';
import Search from './components/Search';
import Header from "./components/Header";
import AddLink from './components/AddLink';
import List from './components/List';
import { useState } from "react";

function App() {

  const addTask = (item) => {
    const id = Math.floor(Math.random() * 100 +1);
    const newItem = {id, ...item};
    setItems([...listItems, newItem]);
  }

  //Global state of links to pass into List function later
  const [listItems, setItems] = useState([
    {id:1, text:"yoyoyo"},
    {id:2, text:"hdfdello"},
    {id:3, text:"aysfsado"},
]);

  return (
    <div className="container">
      <User name="Candice"/>
      <Search />
      <Header />
      <AddLink onAdd={addTask}/>
      <List listItems={listItems}/>
    </div>
  );
}

export default App;
