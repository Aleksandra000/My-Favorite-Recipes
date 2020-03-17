import React, { Component } from 'react';

class Recipes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: [],
            favorites: [],
            ingeredient:[],
            checked:false,
            tempArr : [],
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
        //e.preventDefault();
        this.setState({
            ingeredient:[...this.state.ingeredient,e.target.value],
            //checkboxChecked: !!this.state.checkboxChecked
        });
    };

    // addToFav = label => {
    //     let recipefav = this.state.recipes.map(item => {
    //         return item
    //     });
    //     let recipefav2 = recipefav.filter(item => {
    //         return item.recipe.label === label;
    //     });
    //     const myFavs = JSON.stringify(recipefav2);
    //     localStorage.setItem("favorites", myFavs);
    //     console.log(recipefav);
    //     console.log(recipefav2);
    //     console.log(myFavs);
    // };
    // addToFav = indexToAdd => {
    //
    //     let recipefav = this.state.recipes.map(item => {
    //                 return item
    //             });
    //     let recipefav3 = recipefav.filter(
    //         (item, index) => index === indexToAdd
    //     );
    //
    //     let myFavs = JSON.stringify(recipefav3);
    //     localStorage.setItem("favorites", myFavs);
    //
    //     console.log(recipefav3);
    // };
    // addToFav = label => {
    //     let recipefav = this.state.recipes.map(item => {
    //         return item
    //     });
    //     let recipefav2 = recipefav.filter(item => {
    //         return item.recipe.label === label;
    //     });
    //     this.setState({
    //         tempArr:[...this.state.tempArr,recipefav2]
    //     });
    //     let recipefav3=this.state.tempArr;
    //     const myFavs = JSON.stringify(recipefav3);
    //     localStorage.setItem("favorites", myFavs);
    //
    //     console.log(myFavs);
    // };

    delete = () => {
        this.setState({
            ingeredient:[],
            checked:false
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
                                <input
                                       type="checkbox" id="apple"
                                       value="apple"
                                       //checked={this.state.checkboxChecked}
                                       onChange={this.getRecipe}
                                />
                                <label htmlFor="apple"> apple</label>
                            </div>
                            <div>
                                <input type="checkbox" id="bean" value="bean"
                                        onChange={this.getRecipe}/>
                                <label htmlFor="bean"> bean</label>
                            </div>
                            <div>
                                <input  type="checkbox" id="beetroot"
                                       value="beetroot"
                                       onChange={this.getRecipe}/>
                                <label htmlFor="beetroot"> beetroot</label>
                            </div>
                            <div>
                                <input  type="checkbox" id="butter"
                                       value="butter"
                                       onChange={this.getRecipe}/>
                                <label htmlFor="butter"> butter</label>
                            </div>
                        </div>
                        <div className="col-sm">
                            <div>
                                <input type="checkbox" id="carrot"
                                       value="carrot"
                                       onChange={this.getRecipe}/>
                                <label htmlFor="carrot"> carrot</label>
                            </div>
                            <div>
                                <input  type="checkbox" id="cheese"
                                       value="cheese"
                                       onChange={this.getRecipe}/>
                                <label htmlFor="cheese"> cheese</label>
                            </div>
                            <div>
                                <input type="checkbox" id="chicken"
                                       value="chicken"
                                       onChange={this.getRecipe}/>
                                <label htmlFor="chicken"> chicken</label>
                            </div>
                            <div>
                                <input type="checkbox" id="coconut" value="coconut"
                                       onChange={this.getRecipe}/>
                                <label htmlFor="coconut"> coconut</label>
                            </div>
                        </div>
                        <div className="col-sm">
                            <div>
                                <input  type="checkbox" id="courgette"
                                       value="courgette"
                                       onChange={this.getRecipe}/>
                                <label htmlFor="courgette"> courgette</label>
                            </div>
                            <div>
                                <input type="checkbox" id="egg" value="egg"
                                       onChange={this.getRecipe}/>
                                <label htmlFor="egg"> egg</label>
                            </div>
                            <div>
                                <input type="checkbox" id="fish" value="fish"
                                       onChange={this.getRecipe}/>
                                <label htmlFor="fish"> fish</label>
                            </div>
                            <div>
                                <input type="checkbox" id="milk" value="milk"
                                       onChange={this.getRecipe}/>
                                <label htmlFor="milk"> milk</label>
                            </div>
                        </div>
                        <div className="col-sm">
                            <div>
                                <input type="checkbox" id="paprika" value="paprika"
                                       onChange={this.getRecipe}/>
                                <label htmlFor="paprika"> paprika</label>
                            </div>
                            <div>
                                <input type="checkbox" id="pasta" value="pasta"
                                       onChange={this.getRecipe}/>
                                <label htmlFor="pasta"> pasta</label>
                            </div>
                            <div>
                                <input type="checkbox" id="potatoes"
                                       value="potatoes"
                                       onChange={this.getRecipe}/>
                                <label htmlFor="potatoes"> potato</label>
                            </div>
                            <div>
                                <input type="checkbox" id="tomato"
                                       value="tomato"
                                       onChange={this.getRecipe}/>
                                <label htmlFor="tomato"> tomato</label>
                            </div>
                        </div>
                    </div>
                {/*</form>  */}
        </div>

        <div>
            {
                this.state.recipes.map(
                    (item,index) => (
                        <div className="row recipes"  key={index}>
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
