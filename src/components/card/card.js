import { Card, Col, Row } from 'antd';
import {Link} from 'react-router-dom'


const CardPeople = ({people, match})=>{

    const findId = (url)=>{
        const slicedUrl = url.slice(29,-1)
        return slicedUrl
    }

    return(
    <Card bordered style={{ width: 300 }}>
        <h5 className="text-center">{people.name}</h5>
        <p>id: {findId(people.url)}</p>
        <p >Height: {people.height}</p>
        <p >Mass: {people.mass}</p>
        <p >Birth Year: {people.birth_year}</p>
        <p >Home World: <Link to={`/planets/${findId(people.url)}`}> Visit</Link></p>
        <p>Count Films: {people.films.length}</p>

    </Card>
    )

}
export default CardPeople