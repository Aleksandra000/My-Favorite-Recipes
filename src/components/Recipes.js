import React, { Component } from 'react';
// import './App.scss';

const API = "https://api.edamam.com/search?app_id=adc033bb&app_key=fc993cc15fd9f03e3804ba73c5ade9b3&q=chicken,paprika";
// fetch(`https://restcountries.eu/rest/v2/name/${this.props.countryName}

class Recipes extends Component {
    state = {
        recipes: []
    }
    componentDidMount(){
        fetch(API)
            .then(response => {
                return response.json()
            })
            .then(data => {
                console.log(data);
                this.setState({recipes: data.hits});
            })
    }
    render() {
        return (
            <div >
                {
                    this.state.recipes.map(
                        (item) => (
                            <ul >
                                <li>
                                    <h2 >Przepis: {item.recipe.label}  </h2>
                                    <h3 >Składniki: {item.recipe.ingredientLines}  </h3>
                                    <div className="person__img">
                                        <img src={item.recipe.image} />
                                    </div>
                                </li>
                            </ul>
                        ))}
            </div>
        );
    }
}
export default Recipes;
