import axios from 'axios';
import { Link } from 'react-router-dom';

export function Person(props){
    const person = props.person

    async function DeletePerson(props){
        console.log(props)
        await axios.delete(`https://localhost:7184/api/react/${this.state.id}`)
        .then(result =>result.data)
    }

    return(
        <tr>
            <td>
                <p><Link to={person.id} state={{person: person}}>{person.name}</Link></p>
            </td>
            <td>
                <p>{person.phone}</p>
            </td>
            <td>
                <button onClick={()=> DeletePerson(person.id)}>X</button>
            </td>
        </tr>
    )
}

