import React, { useState } from 'react';
import ReDeepCP from '../../buisnessLogik/ReDeepCP';
import ShowBoxDetails from './ShowBoxDetails';


export default function ShowCheckBoxes({ setPersons, activeName, persons}) {
    let calcObject;
    let overAllIndex;

    persons.forEach((element, index) => {
        if (element.name === activeName.name) {
            calcObject = element.checkBoxes;
            overAllIndex = index;
        }
    });

    return (
    <div>
        <ul>
            {calcObject.map((elem, index) => {
                return (
                    <li key={index}>{elem.titel}
                        <button onClick={(event) => {
                            setPersons((prevData) => {
                                const {copy} = ReDeepCP(activeName.name, prevData);
                                if (copy[overAllIndex].checkBoxes[index].boxes.length === 0) {
                                    copy[overAllIndex].checkBoxes.splice(index, 1);
                                } else {
                                    alert("Erst die daten Löschen, dann kann man die Checkbox Löschen");
                                }
                                return copy;
                            });
                        }}>Löschen</button>
                        <details>
                            <ShowBoxDetails setPersons={setPersons} activeName={activeName} persons={persons} indexPar={index}/>
                        </details>
                    </li>
                );
            })}
        </ul>
    </div>
    )
}