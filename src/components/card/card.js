import React, {useState, useEffect} from 'react'
import { Card, Col, Row } from 'antd';
import {Link} from 'react-router-dom'


const CardPeople = ({people, match})=>{

    

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
        <h5 className="text-center">{people.name}</h5>
        <p>id: {findPeopleId(people.url)}</p>
        <p >Height: {people.height}</p>
        <p >Mass: {people.mass}</p>
        <p >Birth Year: {people.birth_year}</p>
        <p >Home World: <Link to={`/planets/${findPlanetId(people.homeworld)}`}> Visit</Link></p>
        <p>Count Films: {people.films.length}</p>

    </Card>
    )

}
export default CardPeople