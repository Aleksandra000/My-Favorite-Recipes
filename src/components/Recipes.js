import React, { Component } from 'react';
// import './App.scss';

class Recipes extends Component {
    state = {
        recipes: [],
        favorites: [],
        ingeredient:[]
    }
    getRecipe = (e) => {
        e.preventDefault();
        this.setState({
            ingeredient:e.target.value
        });
        fetch(`https://api.edamam.com/search?app_id=adc033bb&app_key=fc993cc15fd9f03e3804ba73c5ade9b3&q=${this.state.ingeredient}`)
            .then(response => {
                return response.json()
            })
            .then(data => {
                console.log(data);
                this.setState({recipes: data.hits});
            })
    }

    addToFav = () => {

        this.setState({ favorites: this.state.recipes });
        localStorage.setItem('favorites', this.state.favorites);
    };

    // componentDidMount() {
    //     const favorites = favorites ? localStorage.getItem('favorites') : '';
    //     this.setState({ favorites});
    // }

    render() {
        return (
            <div >
            <label>
                Type an ingredient:
                <input type="text" value={this.state.ingeredient} onChange={this.getRecipe}/>

                <button onClick={this.getRecipe}>Select</button>
                <p>Or choose one:</p>
                <select value={this.state.ingeredient} onChange={this.getRecipe} >
                   <option value="">Choose</option>
                    <option value="bean">bean</option>
                    <option value="chicken">chicken</option>
                    <option value="courgette">courgette</option>
                    <option value="egg">egg</option>
                    <option value="paprika">paprika</option>
                    <option value="pasta">pasta</option>
                    <option value="potatoes">potatoes</option>
                    <option value="salat">salat</option>
                </select>
            </label>

        <div >
            {
                this.state.recipes.map(
                    (item) => (
                        <ul >
                            <li key={item.recipe.id}>
                                <h2 >Recipe: {item.recipe.label}  </h2>
                                <button onClick={this.addToFav} >Add to favorites</button>
                                <h3 >Ingredients: {item.recipe.ingredientLines}  </h3>
                                <a href={item.recipe.url}>See how to make it!</a>
                                <div>
                                    <img src={item.recipe.image} alt="meal"/>
                               </div>
                            </li>
                        </ul>
                    ))}
       </div>
       </div>
    );
}
}
export default Recipes;
