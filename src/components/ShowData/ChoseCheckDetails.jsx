import React, { useState } from 'react';
import ReDeepCP from '../../buisnessLogik/ReDeepCP';

export default function ChoseCheckDetails({ setPersons, activeName, persons, elem, indexMap }) {
    const {index} = ReDeepCP(activeName.name, persons);

    return (
        <form>
            {
                elem.boxes.map(
                    (elem2, indexMap2) => {
                        return (
                            <div key={elem2}>
                            <input type="radio" id={elem2} value={indexMap2} name={elem.titel} onClick={
                                (event) => {
                                    setPersons((prevData) => {
                                        const {copy} = ReDeepCP(activeName.name, prevData);
                                        copy[index].checkBoxes[indexMap].chosenIndex = Number(event.target.value);
                                        return copy;
                                    });
                                }
                            } defaultChecked={persons[index].checkBoxes[indexMap].chosenIndex === indexMap2}></input>
                            <label htmlFor={elem2}>{elem2}</label><br></br>
                            </div>
                        )
                    }
                )
            }
            
        </form>
                           
    )
}