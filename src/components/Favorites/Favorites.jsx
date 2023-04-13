import './Favorites.css'
import Card from "../Card/Card";
import { connect, useDispatch } from 'react-redux';
import { filterCards, orderCards } from "../../redux/actions";
import { useState } from "react";

const Favorites = ({ myFavorites }) => {
    const dispatch = useDispatch();
    const [aux, setAux] = useState(false);
    
    const handleOrder = (event) => {
        dispatch(orderCards(event.target.value));
        setAux(true);
    }

    const handleFilter = (event) => {
        dispatch(filterCards(event.target.value))
    }

    return (
        <div>
            <select className='select' onChange={handleOrder}>
                <option value="A">Ascendente</option>
                <option value="D">Descendente</option>
            </select>

            <select className='select' onChange={handleFilter}>
                <option value="allCharacters">All Characters</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">unknown</option>
            </select>
            <div>
              {
                myFavorites?.map(fav => {
                    return (
                        <Card
                            key={fav.id}
                            id={fav.id}
                            name={fav.name}
                            species={fav.species}
                            gender={fav.gender}
                            image={fav.image}
                            onClose={fav.onClose}
                        />
                    )
                })
            }  
            </div>
            
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
}

export default connect(
    mapStateToProps,
    null
)(Favorites);