import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Card, Col, Row } from 'antd';
import {Link} from 'react-router-dom'

const Planets = ({match}) =>{

    const[planet, setPlanet] = useState([])
    


    useEffect(()=>{
        loadPlanet()
      },[])
      

        const loadPlanet = async () => {
        const FetchedPlanet = await axios.get(`https://swapi.dev/api/planets/${match.params.planetId}`)
        .then((res) => {
        //   console.log("FetchedPlanet", res.data)
          setPlanet(res.data)
            // console.log("match.url",match.params.planetId)
        })
        
        }

    return(
        <>
        <div className="text-center">
            <h3 className="mb-3">{planet.name}</h3>
        </div>

        <div className="row m-1">
            
        <Card bordered style={{ width: 300 }}>
        {/* <p>id: {findPeopleId(people.url)}</p> */}
        <p >Rotation Period: {planet.rotation_period}</p>
        <p >Orbital Period: {planet.orbital_period}</p>
        <p >Diameter: {planet.diameter}</p>
        <p >Population: {planet.population}</p>
        {/* <p >Home World: <Link to={`/planets/${findPlanetId(people.homeworld)}`}> Visit</Link></p> */}
        {/* <p>Count Films: {people.films.length}</p> */}
        </Card>

        </div>
        {/* {JSON.stringify(planet)} */}
        </>
    )

}
export default Planets
