import React, {useState, useEffect} from 'react'
import { Card} from 'antd';
import {Link} from 'react-router-dom'
import CardFilmCharacter from './CardFilmCharacter'


const CardFilms = ({films, match})=>{

    // const [filmCharacters, setFilmCharacters] =useState([])


    const listAllCharacters = (characters)=>{
        // console.log("film char",characters)
       window.localStorage.setItem("SelectedFilmCharacters",JSON.stringify(characters))
    }
    const findPeopleId = (people)=>{
        const slicedPeople = people.slice(29,-1)
        return slicedPeople
    }

    return(
    <Card bordered style={{ width: 300 }}>
        <h5 className="text-center">{films.title}</h5>
        <p >Episode ID: {films.episode_id}</p>
        <p >Director: {films.director}</p>
        <p >Release Date: {films.release_date}</p>
        <p>Count characters: <Link 
        onClick={()=> listAllCharacters(films.characters)}
        to={`/films/characters`}>{films.characters.length}
        </Link></p>

    </Card>
    )

}
export default CardFilms