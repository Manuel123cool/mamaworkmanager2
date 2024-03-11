import { onePersonsFun } from "../../buisnessLogik/OnePerson"
import React, { useState } from 'react';
import ReDeepCP from "../../buisnessLogik/ReDeepCP";

export default function AddCheckbox({ setPersons, activeName}) {
    const [checkBoxHeader, setCheckBoxHeader] = useState("");
    return (
    <div>
        <label label="name">Checkbox Überschift angeben:</label>
        <input type="text" id="nameCheckBox" name="name" onChange={(event) => {setCheckBoxHeader(event.target.value)}}></input>
        <button onClick={(event) => {
            setPersons((prevPersons) => {
                const {copy, index} = ReDeepCP(activeName.name, prevPersons);
                onePersonsFun.addCheckboxHeader(copy[index], checkBoxHeader);
                return copy;
            });
        }} autoComplete="off">Neues Checkbox Überschift einfügen</button>
    </div>
    )
}