import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Peoples = () =>{

    const[people, setPeople] = useState([])

    useEffect(()=>{
        loadAllPeoples()
      },[])
      
      const loadAllPeoples = async () => {
        const allFetchedCities = await axios.get("https://swapi.dev/api/people")
        .then((res) => {
          console.log("allFetchedCities", res.data)
          setPeople(res.data)
        })
        
    }

    return(
        <>
        {JSON.stringify(people)}
        </>
    )

}
export default Peoples
