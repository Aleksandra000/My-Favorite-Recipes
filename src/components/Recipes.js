import React, { Component } from 'react';

class Recipes extends Component {
    state = {
        recipes: [],
        favorites: [],
        ingeredient:[],
        checked:false
    };
    getRecipe = (e) => {
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
        this.state={
            checked: false,
            ingeredient:[]}

    };

    render() {
        return (
            <div >
                <div >
                    Type ingredients:
                    <input type="text" value={this.state.ingeredient} onChange={this.getRecipe}/>
                        <button type="button" className="btn btn-success" onClick={this.getRecipe}>Select</button>
                </div>

                {/*<div className="col">*/}
                    {/*<p>Or choose one:</p>*/}
                    {/*<select multiple="" value={this.state.ingeredient} onChange={this.getRecipe} >*/}

                    {/*   <option value="">Choose</option>*/}
                    {/*    <option value="bean">bean</option>*/}
                    {/*    <option value="chicken">chicken</option>*/}
                    {/*    <option value="courgette">courgette</option>*/}
                    {/*    <option value="egg">egg</option>*/}
                    {/*    <option value="paprika">paprika</option>*/}
                    {/*    <option value="pasta">pasta</option>*/}
                    {/*    <option value="potatoes">potatoes</option>*/}
                    {/*    <option value="salat">salat</option>*/}
                    {/*</select>*/}
<div>
                    <form className="checkbox-form">
                        <p>Or choose ingredients:</p>
                        <div>
                        {/*<button type="button" className="btn btn-success" onClick={this.getRecipe}>Submit</button>*/}
                           <div>
                                <input type="checkbox" id="bean" value="bean" checked={true} onChange={this.getRecipe}/>
                                    <label for="bean"> bean</label>
                            </div>
                            <div>
                                <input type="checkbox" id="butter" value="butter" checked={this.state.ingeredient} onChange={this.getRecipe}/>
                                    <label htmlFor="butter"> butter</label>
                            </div>
                            <div>
                                <input type="checkbox" id="cheese" value="cheese" checked={this.state.ingeredient} onChange={this.getRecipe}/>
                                    <label htmlFor="cheese"> cheese</label>
                            </div>
                            <div>
                                <input type="checkbox" id="chicken" value="chicken" checked={this.state.ingeredient} onChange={this.getRecipe}/>
                                    <label for="chicken"> chicken</label>
                            </div>
                            <div>
                                <input type="checkbox" id="courgette" value="courgette" checked={this.state.ingeredient} onChange={this.getRecipe}/>
                                    <label for="courgette"> courgette</label>
                            </div>
                            <div>
                                <input type="checkbox" id="egg" value="egg" checked={this.state.ingeredient} onChange={this.getRecipe}/>
                                     <label for="egg"> egg</label>
                            </div>
                            <div>
                                <input type="checkbox" id="milk" value="milk" checked={this.state.ingeredient}  onChange={this.getRecipe}/>
                                    <label htmlFor="milk"> milk</label>
                            </div>
                            <div>
                                <input type="checkbox" id="paprika" value="paprika" checked={this.state.ingeredient} onChange={this.getRecipe}/>
                                      <label for="paprika"> paprika</label>
                            </div>
                            <div>
                                <input type="checkbox" id="pasta" value="pasta" checked={this.state.ingeredient} onChange={this.getRecipe}/>
                                       <label for="pasta"> pasta</label>
                            </div>
                            <div>
                                <input type="checkbox" id="potatoes" value="potatoes" checked={this.state.ingeredient} onChange={this.getRecipe}/>
                                       <label htmlFor="potatoes"> potatoes</label>
                            </div>
                            <div>
                                <input type="checkbox" id="tomatoe" value="tomatoe" checked={this.state.ingeredient}  onChange={this.getRecipe}/>
                                    <label htmlFor="tomatoe"> tomatoe</label>
                            </div>
                        </div>


                    </form>
</div>
                    <div>
                            <button type="button" className="btn btn-success" onClick={this.delete}>Clear all</button>
                    </div>


                {/*</div>*/}
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
