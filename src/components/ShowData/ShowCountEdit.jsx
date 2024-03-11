import React, { useState } from 'react';
import ReDeepCP from '../../buisnessLogik/ReDeepCP';

export default function ShowCountEdit({ setPersons, activeName, persons}) {
    const {index} = ReDeepCP(activeName.name, persons);

    let keyArray = [];
    persons[index].countFields.forEach((elem) => {
        for(var i in elem){
            keyArray.push(i);
        }
    });

    return (
    <div>
        <ul>
            {
                persons[index].countFields.map((elem, indexMap) => {
                    return (
                        <li key={keyArray[indexMap]}>
                            {keyArray[indexMap] + " :" + elem[keyArray[indexMap]]} 
                            <button onClick={(event) => {
                                
                                setPersons((prevData) => {
                                    const {copy} = ReDeepCP(activeName.name, prevData);
                                    copy[index].countFields[indexMap][keyArray[indexMap]] += 1;
                                    return copy;
                                });
                            }}>Plus</button>

                            <button onClick={(event) => {
                                
                                setPersons((prevData) => {
                                    const {copy} = ReDeepCP(activeName.name, prevData);
                                    if (copy[index].countFields[indexMap][keyArray[indexMap]] -1 >= 0) {
                                        copy[index].countFields[indexMap][keyArray[indexMap]] -= 1;
                                    }
                                    return copy;
                                });
                            }}>Minues</button>
                        </li>
                    );
                })
            }
        </ul>
    </div>
    )
}