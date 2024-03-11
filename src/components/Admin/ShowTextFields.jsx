import React, { useState } from 'react';
import ReDeepCP from '../../buisnessLogik/ReDeepCP';

export default function ShowTextFields({ setPersons, activeName, persons}) {
    let calcObject;
    let overAllIndex;

    persons.forEach((element, index) => {
        if (element.name === activeName.name) {
            calcObject = element.textFields;
            overAllIndex = index;
        }
    });

    let newArray = [];
    calcObject.forEach((elem) => {
        newArray.push(...Object.keys(elem));
    });
    
    return (
    <div>
        <ul>
            {newArray.map((elem, index) => {
                return (
                <li key={index}>{elem} <button onClick={(event) => {
                    setPersons((prevData) => {
                        const {copy} = ReDeepCP(activeName.name, prevData);
                        if (copy[overAllIndex].textFields[index][elem] === "") {
                            copy[overAllIndex].textFields.splice(index, 1);
                        } else {
                            alert("Erst die daten Löschen, dann kann man das Feld Löschen");
                        }
                        return copy;
                    });
                }}>Löschen</button></li>
                )
            })}
        </ul>
    </div>
    )
}