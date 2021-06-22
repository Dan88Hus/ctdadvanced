import React, {useState, useEffect} from 'react'
import { Card} from 'antd';
import {Link} from 'react-router-dom'


const CardFilms = ({films, match})=>{

    

    const findPlanetId = (homeworld)=>{
        const slicedHomeworld = homeworld.slice(30,-1)
        return slicedHomeworld
    }
    const findPeopleId = (people)=>{
        const slicedPeople = people.slice(29,-1)
        return slicedPeople
    }

    return(
    <Card bordered style={{ width: 300 }}>
        <h5 className="text-center">{films.title}</h5>
        {/* <p>id: {findPeopleId(people.url)}</p> */}
        <p >Episode ID: {films.episode_id}</p>
        <p >Director: {films.director}</p>
        <p >Release Date: {films.release_date}</p>
        {/* <p >Home World: <Link to={`/planets/${findPlanetId(people.homeworld)}`}> Visit</Link></p> */}
        {/* <p>Count Films: {people.films.length}</p> */}

    </Card>
    )

}
export default CardFilms