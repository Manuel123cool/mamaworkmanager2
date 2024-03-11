import React, { useState } from 'react';
import ReDeepCP from '../../buisnessLogik/ReDeepCP';


let dateFunctions = {
    dateInDays(date) {
        let days = Number(date.substring(0, 2)) 
        let months = Number(date.substring(3, 5))
        let years = Number(date.substring(6, 11))
    
        return (years - 2000) * 365 + months * 30.4167 + days
    },

    reverseDate(date) {
        let years = date.substring(0, 4)
        let months = date.substring(5, 7)
        let days = date.substring(8, 11)

        let newDate = days + "-" + months + "-" + years
        return newDate
    },

    bubbleSort(array) {
        let n = array.length
        let swapped = false;
        do {
            swapped = false;
            for (let i = 0; i < n - 1; ++i) {
                if (this.dateInDays(array[i]) > 
                        this.dateInDays(array[i + 1])) {
                    let tempArray = array[i];
                    array[i] = array[i + 1];
                    array[i + 1] = tempArray;
                    swapped = true;
                }
            }
        } while (swapped);
        return array;
    }
}

export default function AttendanceDates({ setPersons, activeName, persons}) {
    const {index} = ReDeepCP(activeName.name, persons);

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd;

    const [trackDate, setTrackDate] = useState(today);

    return (
    <div>
        <ul>
            {
                persons[index].dates.map((elem, indexMap) => {
                        return (
                            <li key={elem}>
                                {elem}
                            </li>
                        );
                    })
            }
        </ul>

        <button onClick={(event) => {
                    setPersons((prevData) => {
                        const {copy, index} = ReDeepCP(activeName.name, prevData);
                        copy[index].dates.push(dateFunctions.reverseDate(trackDate));

                        dateFunctions.bubbleSort(copy[index].dates);
                        return copy;
                    });
                }
            }>Anwesenehits-Datum hinzufügen</button>

        <input type="date" value={trackDate} onChange={(event) => {
            setTrackDate(event.target.value);
        }}></input> 

    </div>
    )
}