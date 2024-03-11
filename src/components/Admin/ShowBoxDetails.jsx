import OnePerson from "../../buisnessLogik/OnePerson"
import React, { useState } from 'react';
import ReDeepCP from "../../buisnessLogik/ReDeepCP";

export default function ShowBoxDetails({ setPersons, activeName, persons, indexPar}) {
    const [checkboxName, setCheckboxName] = useState("");

    const {index} = ReDeepCP(activeName.name, persons);

    return (
    <div>
        <label label="name">Checkbox Option angeben:</label>
        <input type="text" name="name" onChange={(event) => {setCheckboxName(event.target.value)}}></input>
        <button onClick={(event) => {
            setPersons((prevPersons) => {
                const {copy, index} = ReDeepCP(activeName.name, prevPersons);
                console.log(copy);
                copy[index].checkBoxes[indexPar].boxes.push(checkboxName);
                return copy;
            });
        }} autoComplete="off">Neue Option eingeben</button>
        <br></br>

        <ul>
            {persons[index].checkBoxes[indexPar].boxes.map((elem, indexMap) => {
                return (
                    <li key={indexMap}>{elem}
                        <button onClick={(event) => {
                            setPersons((prevData) => {
                                const {copy} = ReDeepCP(activeName.name, prevData);
                                copy[index].checkBoxes[indexPar].boxes.splice(indexMap, 1);
                                copy[index].checkBoxes[indexPar].chosenIndex = -1;
                                return copy;
                            });
                        }}>Löschen</button>
                    </li>
                );
            })}
        </ul>
    </div>
    )
}