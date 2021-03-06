import React, { Component } from 'react';
import {HashRouter as Router, Switch,Route,NavLink} from "react-router-dom";
import './App.scss';

import Main from "./components/Main";
import Recipes from "./components/Recipes";
import Favorites from "./components/Favorites";
import Contact from "./components/Contact";
import Articles from "./components/Articles";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";

const Navigation = ()=>(
    <nav className="NavMenu main-nav">
        <header className="NavHeader">My Favorite Recipes</header>
      <ul className="NavUl main-nav-list" id="menu">
        <li><NavLink className="Nav" activeStyle={{fontWeight: "bold"}} exact to="/" >Home</NavLink></li>
        <li><NavLink className="Nav" activeStyle={{fontWeight: "bold"}} to="/recipes/">Recipes</NavLink></li>
        <li><NavLink className="Nav" activeStyle={{fontWeight: "bold"}} to="/favorites">Favorites</NavLink></li>
        <li><NavLink className="Nav" activeStyle={{fontWeight: "bold"}} to="/articles">Articles</NavLink></li>
        <li><NavLink className="Nav" activeStyle={{fontWeight: "bold"}} to="/contact">Contact</NavLink></li>
      </ul>
      <button className="main-nav-toggle" aria-label="menu">
            <span></span>
            <span></span>
            <span></span>
      </button>
    </nav>
);

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            recipes:[],
            favorites: []
        };
    }
    handleAddToFavorite = (recipe)=> {
        this.setState((prevState) => ({
            favourites: [...prevState, recipe],
        }))

    };
  render() {
    return (
        <div className="container" >

          <Router>
            <Navigation />

              <div className="background1" >
                <Switch>
                  <Route exact path="/" component={Main} />
                  <Route path="/recipes/" component={Recipes} />
                  <Route path="/favorites/" component={Favorites} />
                  <Route path="/articles/" component={Articles} />
                  <Route path="/contact/" component={Contact} />
                  <Route component={NotFound}/>
                </Switch>
              </div>

              <Footer></Footer>
          </Router>

        </div>
    );
  }
}
export default App;