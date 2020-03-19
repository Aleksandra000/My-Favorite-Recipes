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
    del = () => {
        localStorage.clear();
        this.setState({
            favorites:[]
        });
    };
    delOneFav = index => {
        console.log(index);
        console.log(this.state.favorites)
        // let fav1 = this.state.favorites.map(item => {
        //     return item
        // });
        let fav2 = this.state.favorites.filter(item => {
            return item !== index;
        });
        // console.log(fav1)///4 przepisy
        console.log(fav2)
        localStorage.removeItem('fav2');

                this.setState({
            favorites:fav2.slice(index)
        });
        console.log(this.state.favorites)
    };

    render() {
        return (
            <div className="background">
                <div className="fav">
                    <h1> Favorite recipes:</h1>
                    <button type="button" className="btn btn-success" onClick={this.del}>Clear all</button>
                </div>
                <div>
                    {this.state.favorites && this.state.favorites.map(
                        (fav,index) => {
                        return (
                            <div className="row recipes" key={index}>

                                <div className="col-recipe-t">
                                    <img src={fav.recipe.image} alt="danie"/>
                                </div>
                                <div className="col-recipe-w">
                                    <h2 >{fav.recipe.label}  <button type="button" className="btn btn-success" onClick={() => this.delOneFav(fav)}> <img src="https://img.icons8.com/android/24/000000/trash.png"/></button></h2>
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
