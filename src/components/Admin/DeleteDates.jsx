import OnePerson from "../../buisnessLogik/OnePerson"
import React, { useState } from 'react';
import ReDeepCP from "../../buisnessLogik/ReDeepCP";

export default function DeleteDates({ setPersons, activeName, persons}) {
    const {index} = ReDeepCP(activeName.name, persons);

    return (
    <div>
        <ul>
            {persons[index].dates.map((elem, indexMap) => {
                return (
                    <li key={elem}>{elem}
                        <button onClick={(event) => {
                            if (window.confirm("Wollen sie wirklich dieses Datum löschen: " + elem + " ?")) {
                                setPersons((prevData) => {
                                    const {copy} = ReDeepCP(activeName.name, prevData);
                                    copy[index].dates.splice(indexMap, 1);
                                    return copy;
                                });
                            }

                        }}>Löschen</button>
                    </li>
                );
            })}
        </ul>
    </div>
    )
}