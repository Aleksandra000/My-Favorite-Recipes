import React, { Component } from 'react';

class Recipes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: [],
            favorites: [],
            ingeredient:[],
            checkboxChecked: false
        };
    }


    getRecipeSubmit = (e) => {
        e.preventDefault();
        this.setState({
            ingeredient:[...this.state.ingeredient,e.target.value]
        });
        fetch(`https://api.edamam.com/search?app_id=adc033bb&app_key=fc993cc15fd9f03e3804ba73c5ade9b3&q=${this.state.ingeredient}`)
            .then(response => {
                return response.json()
            })
            .then(data => {
                console.log(data);
                this.setState({recipes: data.hits});
            })
        console.log(this.state.ingeredient);
    };
    getRecipe = (e) => {
        e.preventDefault();
        this.setState({
            ingeredient:[...this.state.ingeredient,e.target.value]
        });
    };

    addToFav = label => {
        let recipefav = this.state.recipes.map(item => {
            return item
        });
        let recipefav2 = recipefav.filter(item => {
            return item.recipe.label === label;
        });
        const myFavs = JSON.stringify(recipefav2);
        localStorage.setItem("favorites", myFavs);
        console.log(recipefav);
        console.log(recipefav2);
        console.log(myFavs);
    };


    delete = () => {
        this.setState({
            checked: false,
            ingeredient:[]
        });
    };

    changeBox = e => {
        this.setState({
            checkboxChecked: !this.state.checkboxChecked
        });
    };


    render() {
        return (
            <div>
                <div className="row">
                    <div className="col">
                        Type ingredients:
                        <input type="text" value={this.state.ingeredient} onChange={this.getRecipeSubmit}/>
                            <button type="button" className="btn btn-success" onClick={this.getRecipeSubmit}>Select</button>
                    </div>
                    <div className="col right-side">
                        <button type="button" className="btn btn-success" onClick={this.delete}>Clear all</button>
                    </div>
                </div>
            <div>
                {/*<form>*/}
                    <p>Or choose ingredients:</p>
                    <div className="row">
                        <div className="col-sm">
                            <div>
                                <input onClick={e => this.changeBox(e)} type="checkbox" id="bean" value="bean"
                                       checked={this.state.checkboxChecked} onChange={this.getRecipe}/>
                                <label htmlFor="bean"> bean</label>
                            </div>
                            <div>
                                <input onClick={e => this.changeBox(e)} type="checkbox" id="butter"
                                       value="butter" checked={this.state.checkboxChecked}
                                       onChange={this.getRecipe}/>
                                <label htmlFor="butter"> butter</label>
                            </div>
                            <div>
                                <input onClick={e => this.changeBox(e)} type="checkbox" id="cheese"
                                       value="cheese" checked={this.state.checkboxChecked}
                                       onChange={this.getRecipe}/>
                                <label htmlFor="cheese"> cheese</label>
                            </div>
                            <div>
                                <input onClick={e => this.changeBox(e)} type="checkbox" id="chicken"
                                       value="chicken" checked={this.state.checkboxChecked}
                                       onChange={this.getRecipe}/>
                                <label htmlFor="chicken"> chicken</label>
                            </div>
                        </div>
                        <div className="col-sm">
                            <div>
                                <input onClick={e => this.changeBox(e)} type="checkbox" id="courgette"
                                       value="courgette" checked={this.state.checkboxChecked}
                                       onChange={this.getRecipe}/>
                                <label htmlFor="courgette"> courgette</label>
                            </div>
                            <div>
                                <input onClick={e => this.changeBox(e)} type="checkbox" id="egg" value="egg"
                                       checked={this.state.checkboxChecked} onChange={this.getRecipe}/>
                                <label htmlFor="egg"> egg</label>
                            </div>
                            <div>
                                <input onClick={e => this.changeBox(e)} type="checkbox" id="milk" value="milk"
                                       checked={this.state.checkboxChecked} onChange={this.getRecipe}/>
                                <label htmlFor="milk"> milk</label>
                            </div>
                        </div>
                        <div className="col-sm">
                            <div>
                                <input onClick={e => this.changeBox(e)} type="checkbox" id="paprika" value="paprika"
                                       checked={this.state.checkboxChecked} onChange={this.getRecipe}/>
                                <label htmlFor="paprika"> paprika</label>
                            </div>
                            <div>
                                <input onClick={e => this.changeBox(e)} type="checkbox" id="pasta" value="pasta"
                                       checked={this.state.checkboxChecked} onChange={this.getRecipe}/>
                                <label htmlFor="pasta"> pasta</label>
                            </div>
                            <div>
                                <input onClick={e => this.changeBox(e)} type="checkbox" id="potatoes"
                                       value="potatoes" checked={this.state.checkboxChecked}
                                       onChange={this.getRecipe}/>
                                <label htmlFor="potatoes"> potatoes</label>
                            </div>
                            <div>
                                <input onClick={e => this.changeBox(e)} type="checkbox" id="tomatoe"
                                       value="tomatoe" checked={this.state.checkboxChecked}
                                       onChange={this.getRecipe}/>
                                <label htmlFor="tomatoe"> tomatoe</label>
                            </div>
                        </div>
                    </div>
                {/*</form>  */}
        </div>

        <div>
            {
                this.state.recipes.map(
                    (item) => (
                        <div className="row recipes">
                            <div className="col-recipe-t">
                                <img src={item.recipe.image} alt="danie"/>
                            </div>
                            <div className="col-recipe-w">
                                <h2 >{item.recipe.label}   <button type="button" className="btn btn-success" onClick={() => this.addToFav(item.recipe.label)} >❤ </button> </h2>
                                <h3 >Ingredients: {item.recipe.ingredientLines}  </h3>
                                <a className="btn btn-success" href={item.recipe.url}>See how to make it!</a>
                            </div>
                        </div>
            ))}
       </div>

    </div>
    );
}
}
export default Recipes;
