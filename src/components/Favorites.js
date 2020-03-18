import React, {Component} from 'react';


class Favorites extends Component {

    state = {
        favorites: null,
    };

    componentDidMount() {
        const myFavs = JSON.parse(localStorage.getItem('favorites'));

        console.log(myFavs);

        this.setState({
            favorites: myFavs,
        })
    }

    render() {
        return (
            <div className="background">
                <h1> Favorite recipes:</h1>
                <div>
                    {this.state.favorites && this.state.favorites.map(fav => {
                        return (
                            <div className="row recipes" key={fav.recipe.label}>
                                <div className="col-recipe-t">
                                    <img src={fav.recipe.image} alt="danie"/>
                                </div>
                                <div className="col-recipe-w">
                                    <h2 >{fav.recipe.label}  </h2>
                                    <h3 >Ingredients: {fav.recipe.ingredientLines}  </h3>
                                    <a className="btn btn-success" href={fav.recipe.url}>See how to make it!</a>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}
export default Favorites;
