import React, {Component} from 'react';


class Favorites extends Component {

    state = {
        favorites:[]
    };


    componentDidMount() {
        // const favorites = favorites ? localStorage.getItem('favorites') : '';
        // this.setState({ favorites});
    }

    render() {
        return (
            <div>
                {/*<h1> Favorite recipes</h1>*/}

                <p>{this.state.user}</p>

                {/*<div >*/}
                {/*    {*/}
                {/*        favorites.map(*/}
                {/*            (fav) => (*/}
                {/*                <ul >*/}
                {/*                    <li >*/}
                {/*                        <h2 >Przepis: {fav.recipe.label}  </h2>*/}
                {/*                        <h3 >Składniki: {fav.recipe.ingredientLines}  </h3>*/}
                {/*                        <div>*/}
                {/*                            <img src={fav.recipe.image} alt="danie"/>*/}
                {/*                        </div>*/}
                {/*                    </li>*/}
                {/*                </ul>*/}
                {/*            ))}*/}
                {/*</div>*/}
            </div>
        )
    }
}
export default Favorites;

