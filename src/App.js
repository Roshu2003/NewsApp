import React, { Component } from 'react'

import News from './components/News';
import NavBar from './components/NavBar';

import{ 
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
      <BrowserRouter>
       <NavBar/>
       <Switch>
          <Route exact path="/"><News key="general" pageSize = {6} country = "in" category = "general"/></Route>
          <Route exact path="/business"><News key= "business" pageSize = {6} country = "in" category = 'business'/></Route>
          <Route exact path="/entertainment"><News key="entertainment" pageSize = {6} country = "in" category = "entertainment"/></Route>
          <Route exact path="/health"><News  key="health" pageSize = {6} country = "in" category = 'health'/></Route>
          <Route exact path="/science"><News  key="science" pageSize = {6} country = "in" category = 'science'/></Route>
          <Route exact path="/sports"><News key="sports" pageSize = {6} country = "in" category = 'sports'/></Route>
          <Route exact path="/technology"><News  pageSize = {6} country = "in" category = 'technology'/></Route>
        </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

