import React, { Component } from 'react';
import {HashRouter as Router, Switch,Route,NavLink} from "react-router-dom";
import './App.scss';
import Main from "./components/Main";
import Recipes from "./components/Recipes";
import Favourites from "./components/Favourites";

const Navigation = ()=>(
    <nav>
      <ul>
        <li><NavLink activeStyle={{fontWeight: "bold"}} exact to="/" >Home</NavLink></li>
        <li><NavLink activeStyle={{fontWeight: "bold"}} to="/recipes/">Przepisy</NavLink></li>
        <li><NavLink activeStyle={{fontWeight: "bold"}} to="/favourites">Ulubione</NavLink></li>
      </ul>
    </nav>
);

class App extends Component {

//
// constructor(props){
//         super(props);
//         this.state = {
//             recipes: []
//         };
//         console.log(this.state.recipes);
//     }
//
//     componentDidMount() {
//         fetch("https://api.edamam.com/search?app_id=adc033bb&app_key=fc993cc15fd9f03e3804ba73c5ade9b3&q=chicken,paprika")
//             .then(res => res.json())
//             .then(json => this.setState({ recipes: json.hits }));
//
//         //     .then(response=>{
//         //         if(response.ok){
//         //             return response.json();
//         //         }else{
//         //             throw new Error("error, nie wyszło..");
//         //         }
//         //     })
//         //     .then(json => this.setState({
//         //     recipes:[...json.q]
//         // }));
//         console.log(this.recipes);
//     }

  render() {
    return (
        <div>
          <Router>
            <Navigation />
            <Switch>
              <Route exact path="/" component={Main} />
              <Route path="/recipes/" component={Recipes} />
              <Route path="/favourites/" component={Favourites} />
            </Switch>
          </Router>
        </div>
    );
  }
}
export default App;