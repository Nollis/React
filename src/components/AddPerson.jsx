import { useState } from 'react';
import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import CountryListDropdown from './CountryListDropdown';

export default function AddPerson(){
    const navigate = useNavigate();
    const[person, setPerson] = useState({
        name: "",
        phone: "",
        cityid: 1
    });

    const handleChange = (event)=>{
        setPerson({...person, [event.target.name]: event.target.value});
    }

    const handleSubmit =(event)=>{
        event.preventDefault();
        setPerson({
            name: this.state.name,
            phone: this.state.phone,
            cityid: this.state.cityid
        });
    }

    function CreatePerson(){
        axios.post(`https://localhost:7184/api/react/create`,person)
        .then(result=>result.status)

        navigate('/');
    }

    return(
        <div>
            <h3>Create new person:</h3>
            <form onSubmit={handleSubmit}>
               <label>Name:</label>
               <input type="text" name="name" onChange={handleChange}></input>
               <label>Phonenumber:</label>
               <input type="text" name="phone" onChange={handleChange}></input>
               <label>City Id:</label>
               <input type="number" name="cityid" onChange={handleChange}></input>
               <button type="submit" onClick={()=>CreatePerson()}>Create person</button>
               <CountryListDropdown />
            </form>
        </div>
        )
}