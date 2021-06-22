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
          setPlanet(res.data)
        })
        
        }

    return(
        <div className="m-3">
            <br />
        <div className="text-center">
            <h3 className="mb-3">{planet.name}</h3>
        </div>

        <div className="row m-1">
            
        <Card bordered style={{ width: 300 }}>
        <p >Rotation Period: {planet.rotation_period}</p>
        <p >Orbital Period: {planet.orbital_period}</p>
        <p >Diameter: {planet.diameter}</p>
        <p >Population: {planet.population}</p>
        </Card>

        </div>
        </div>
    )

}
export default Planets
