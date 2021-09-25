import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CardPeople from './card/card'

const Peoples = ({ match }) => {

    const [people, setPeople] = useState([])

    useEffect(() => {
        loadAllPeoples()
    }, [])

    const loadAllPeoples = async () => {
        const allFetchedPeoples = await axios.get("https://swapi.dev/api/people")
            .then((res) => {
                setPeople(res.data.results)
            })

    }

    return (
        <div className="m-3">
            <br />
            <div className="text-center">
                <h3 className="mb-3">Peoples</h3>
            </div>

            <div className="row ">

                {people.map((p, i) => (
                    <div className="col m-2" key={i}>
                        <CardPeople people={p} />
                        <hr />

                    </div>
                ))}
            </div>
        </div>
    )

}
export default Peoples
