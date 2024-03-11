import { useState } from "react";
import { OnePerson } from '../buisnessLogik/OnePerson';

export default function CreatePerson({ setPersons }) {
    const [person, setPerson] = useState("");

    function setPersonsIntern(prevPersons) {
        if (prevPersons) {
            for (let i = 0; i < prevPersons.length; i++) {
                if (prevPersons[i].name === person) {
                    alert("Name exestiert bereits."); 
                    return prevPersons;
                }
            }
            return [...prevPersons, new OnePerson(person)];
        } else {
            return [new OnePerson(person)];
        }
    }
    return (
    <div>
        <label label="name" id="labelId">Name eingeben:</label>
        <input type="text" id="name" name="name" onChange={(event) => {setPerson(event.target.value)}}></input>
        <button onClick={() => setPersons((prevPersons) => {return setPersonsIntern(prevPersons)})}>Person herstellen</button>
    </div>)
}