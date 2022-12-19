import React from 'react';
import axios from 'axios';
// import Table from 'react-boostrap/Table'
import { Person } from './Person';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

export function PersonList () {
  
  const [person, setPerson] = useState([]);
  const [sortState, setSortState] = useState("none");

  const sortMethods = {
    none: { method: (a, b) => null },
    descending: { method: (a, b) => a.name.localeCompare(b.name) },
  };

  useEffect(() => {
    axios.get("https://localhost:7184/api/react")
    .then(result => setPerson(result.data))
  },[]);

  return (
    <div className="container">
      {console.log(person)}
      <table striped bordered hover size="sm">
          <thead>
              <tr>
                  <th>Name</th>
                  <th>Phone</th>
                  <th></th>
              </tr>
          </thead>
          <tbody>
            {person.sort(sortMethods[sortState].method).map((person) => (
              <Person key={person.id} person={person} />
            ))
            }
          </tbody>
      </table>
      <button className='btn' onClick={() => setSortState("descending")}>Sort by name</button>
      <Link to="/Create">
        <button>Create new person</button>
      </Link>
    </div>
  )
}