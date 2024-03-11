import React, { useState } from 'react';
import ReDeepCP from '../../buisnessLogik/ReDeepCP';
import ChoseCheckDetails from './ChoseCheckDetails';

export default function ChoseCheckbox({ setPersons, activeName, persons}) {
    const {index} = ReDeepCP(activeName.name, persons);

    return (
    <div>
        <ul>
            {
                persons[index].checkBoxes.map((elem, indexMap) => {
                    return (
                        <li key={elem.titel}>
                            {elem.titel}:{" "}
                            {persons[index].checkBoxes[indexMap].chosenIndex !== -1 && 
                            persons[index].checkBoxes[indexMap].boxes[persons[index].checkBoxes[indexMap].chosenIndex]}
                            <details>
                                <ChoseCheckDetails setPersons={setPersons} activeName={activeName} persons={persons} indexMap={indexMap} elem={elem}/>
                            </details>
                        </li>
                    );
                })
            }
        </ul>
    </div>
    )
}