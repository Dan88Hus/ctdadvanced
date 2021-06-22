import React, {useState, useEffect} from 'react'
import axios from 'axios'
import CardPeople from './card/card'

const Peoples = ({match}) =>{

    const[people, setPeople] = useState([])

    useEffect(()=>{
        loadAllPeoples()
      },[])
      
      const loadAllPeoples = async () => {
        const allFetchedPeoples = await axios.get("https://swapi.dev/api/people")
        .then((res) => {
        //   console.log("allFetchedPeoples", res.data)
          setPeople(res.data.results)
        //   console.log("match",match)
        })
        
    }

    return(
        <>
        <div className="text-center">
            <h3 className="mb-3">Peoples</h3>
        </div>

        <div className="row ">
            
            {people.map((p, i)=>(
                <div className="col m-2" key={i}>
                    <CardPeople people={p}/>
                    <hr />

                </div>
            ))}
        </div>
        {/* {JSON.stringify(people)} */}
        </>
    )

}
export default Peoples
