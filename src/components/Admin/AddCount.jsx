import { onePersonsFun } from "../../buisnessLogik/OnePerson"
import React, { useState } from 'react';
import structuredClone from '@ungap/structured-clone';
import ReDeepCP from "../../buisnessLogik/ReDeepCP";

export default function AddCount({ setPersons, activeName}) {
    const [textFieldName, setTextFieldName] = useState("");
    return (
    <div>
        <label label="name">Neues Zählfeld eingeben:</label>
        <input type="text" id="countField" name="name" onChange={(event) => {setTextFieldName(event.target.value)}}></input>
        <button onClick={(event) => {
            setPersons((prevPersons) => {
                const {copy, index} = ReDeepCP(activeName.name, prevPersons);
                onePersonsFun.addCountFields(copy[index], textFieldName);

                return copy;
            });
        }} autoComplete="off">Neues Zählfeld einfügen</button>
    </div>
    )
}