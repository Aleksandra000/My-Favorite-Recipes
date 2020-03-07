import React, { Component } from 'react';
// import './App.scss';

   // const API = `https://api.edamam.com/search?app_id=adc033bb&app_key=fc993cc15fd9f03e3804ba73c5ade9b3&q=${this.state.ingeredient}`;
        // "https://api.edamam.com/search?app_id=adc033bb&app_key=fc993cc15fd9f03e3804ba73c5ade9b3&q=chicken,paprika";
//`${this.state.ingredient}`

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

    // addFav = () => {
    //     this.setState({
    //         favorites:[...this.state.recipes]
    //     });
    //     console.log(this.state.recipes);
    //     console.log(this.state.favorites);
    // };
    addFav = () => {
        const { favorites } = this.state;
        localStorage.setItem('favorites', favorites);
        // localStorage.setItem('user', favorites ? user : '');
    };

    render() {
        return (
            <div>
                <label>
                    Select an ingredient:
                    <input type="text" value={this.state.ingeredient} onChange={this.getRecipe}/>
                    <button onClick={this.getRecipe}>Select</button>
                </label>
            <div >
                {
                    this.state.recipes.map(
                        (item) => (
                            <ul >
                                <li key={item.recipe.id}>
                                    <h2 >Recipe: {item.recipe.label}  </h2>
                                    <button onClick={this.addFav}>Add to favorites</button>
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
