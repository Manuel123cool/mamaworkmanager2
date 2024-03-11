import React, { useState } from 'react';
import ReDeepCP from '../../buisnessLogik/ReDeepCP';

export default function ShowEditData({ setPersons, activeName, persons}) {
    const {index} = ReDeepCP(activeName.name, persons);

    let keyArray = [];
    persons[index].textFields.forEach((elem) => {
        for(var i in elem){
            keyArray.push(i);
        }
    });

    return (
    <div>
        <ul>
            {
                persons[index].textFields.map((elem, indexMap) => {
                    return (
                        <li key={keyArray[indexMap]}>
                            {keyArray[indexMap]}
                            <input onChange={(event) => {
                                
                                setPersons((prevData) => {
                                    const {copy} = ReDeepCP(activeName.name, prevData);
                                    copy[index].textFields[indexMap][keyArray[indexMap]] = event.target.value;
                                    return copy;
                                });
                            }} value={elem ? elem[keyArray[indexMap]] : ""}></input>
                        </li>
                    );
                })
            }
        </ul>
    </div>
    )
}