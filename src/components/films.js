import React, {useState, useEffect} from 'react'
import axios from 'axios'
import CardFilms from './card/CardFilms'

const Films = ({match}) =>{

    const[films, setFilms] = useState([])

    useEffect(()=>{
        loadAllFilms()
      },[])
      
      const loadAllFilms = async () => {
        const allFetchedFilms = await axios.get("https://swapi.dev/api/films")
        .then((res) => {
          console.log("allFetchedFilms", res.data.results)
          setFilms(res.data.results)
        //   console.log("match",match)
        })
        
    }

    return(
        <>
        <div className="text-center">
            <h3 className="mb-3">Films</h3>
        </div>

        <div className="row ">
            
            {films.map((f, i)=>(
                <div className="col m-2" key={i}>
                    <CardFilms films={f}/>
                    <hr />

                </div>
            ))}
        </div> 
        { JSON.stringify(films, null, 9)}
        </>
    )

}
export default Films
