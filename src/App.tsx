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

interface Props {
}

interface State {
  furnitureList: IFurniture[]
}

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { furnitureList: []};
  }

  componentWillMount() {
    fetch("/furniture")
    .then(res => res.json())
    .then(
    (result) => {
      //console.log(result);
      //state = result;
      this.setState({
        furnitureList: result
      });
    },
    (error) => {
      // this.setState({
      //   isLoaded: true,
      //   error
      // });
    }
  )
  }
  

  render() {
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
              <FurnitureList furniture={this.state.furnitureList} />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
