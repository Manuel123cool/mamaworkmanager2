import { onePersonsFun } from "../../buisnessLogik/OnePerson"
import React, { useState } from 'react';
import structuredClone from '@ungap/structured-clone';
import ReDeepCP from "../../buisnessLogik/ReDeepCP";

export default function AddTextField({ setPersons, activeName}) {
    const [textFieldName, setTextFieldName] = useState("");
    return (
    <div>
        <label label="name">Textfeld Name eingeben:</label>
        <input type="text" id="nameFeld" name="name" onChange={(event) => {setTextFieldName(event.target.value)}}></input>
        <button onClick={(event) => {
            setPersons((prevPersons) => {
                const {copy, index} = ReDeepCP(activeName.name, prevPersons);
                onePersonsFun.addTextField(copy[index], textFieldName);

                return copy;
            });
        }} autoComplete="off">Neues Textfeld einfügen</button>
    </div>
    )
}