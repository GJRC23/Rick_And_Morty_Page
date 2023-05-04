import './Detail.css'
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

// const URL_BASE = 'https://be-a-rym.up.railway.app/api/character';
// const API_KEY = 'ee5cc2e16969.6f7908ce64e58ade4e29';

const Detail = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState({});

    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`)
        .then(response => response.data)
        .then((data) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
    }, [id]);


    return(
        <div className="detail-container">
            <div className="detail-titles">
                <h1 id="detailH1">{character?.name}</h1>
                <div className="detailH1">
                    <h2 className="detailH2">STATUS : {character?.status}</h2>
                    <h2 className="detailH2">SPECIES : {character?.species}</h2>
                    <h2 className="detailH2">GENDER : {character?.gender}</h2>
                    <h2 className="detailH2">ORIGIN : {character?.origin?.name}</h2>
                </div>
            </div>
            <div className="image-container">
                <img className="imgDetail" src={character?.image} alt={character?.name} />
            </div>
        </div>
    )
}

export default Detail;