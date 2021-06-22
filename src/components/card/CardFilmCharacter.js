import React, {useState, useEffect} from 'react'
import { Card, Col, Row } from 'antd';
import {Link} from 'react-router-dom'
import axios from 'axios';


const CardFilmCharacter = ({match})=>{

    const [charState, setCharState] = useState([])

    
    useEffect(()=>{
        fetchchar()
    },[])

    const fetchchar = async ()=>{
        let charArray =[]
        for(let i=0; i<JSON.parse(window.localStorage.getItem("SelectedFilmCharacters")).length; i++){
            const eachGet = await axios.get(`${JSON.parse(window.localStorage.getItem("SelectedFilmCharacters"))[i]}`)
            .then(({data})=>{
                charArray.push(data)
            })
        }
        setCharState(charArray)
    }


    return(
        <div className="m-3">
            <br />
        <div className="text-center">
            <h3 className="mb-3">Characters</h3>
        </div>

        <div className="row ml-2">
            {charState.map((c,i)=>(
            <div key={i}>

            <Card bordered style={{ width: 300 }}> 
            
            <h5 className="text-center">{c.name}</h5>
            <p >Height: {c.height}</p>
            <p >Mass: {c.mass}</p>
            <p >Birth Year: {c.birth_year}</p>
            <p>Count Films: {c.films.length}</p>
            </Card>
            </div>
            ))
            }

        </div>
    </div>
    )

}
export default CardFilmCharacter