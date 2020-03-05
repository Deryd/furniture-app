import React from 'react';
import './App.css';
import { NavMenu } from './components/NavMenu'
import { FurnitureList } from './components/FurnitureList'
import { Footer } from './components/Footer'
import { Admin } from './components/Admin';
 import { IFurnitureList, IFurniture } from "./components/Interfaces";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link as RouterLink,
  useRouteMatch,
  useParams
} from "react-router-dom";

function App() {
  let furnitureArray: IFurniture[] = [
    {
      id: "string", 
      header: "string", 
      text: "string",
      cardheader: {
        title: "string",
        subheader: "string"
      }
    }
  ];

  let state = {
    furnitureList: furnitureArray
  };

  fetch("/furniture")
    .then(res => res.json())
    .then(
      (result) => {
        //console.log(result);
        //state = result;
        // this.setState({
        //   isLoaded: true,
        //   items: result.items
        // });
      },
      (error) => {
        // this.setState({
        //   isLoaded: true,
        //   error
        // });
      }
    )

  return (
    <div className="App">
      <Router>
        <NavMenu />
        <div style={{ height: 250, backgroundColor: 'gray' }}></div>
        <Footer />

        <Switch>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/">
            <FurnitureList furniture={state.furnitureList}/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
