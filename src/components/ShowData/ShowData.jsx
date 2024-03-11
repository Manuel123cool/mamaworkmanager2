import ShowEditData from "./ShowEditData";
import ChoseCheckbox from "./ChoseCheckbox";
import ShowCountEdit from "./ShowCountEdit";
import AttendanceDates from "./AttendanceDates";

export default function ShowData({ activeName, setPersons, persons, setActiveName }) {
    return (
        <div>
            <h1>Daten Anzeige: {activeName.name}</h1>
            <button onClick={(event) => {setActiveName({name: undefined, isShowData: undefined})}}>Zurück gehen</button>
            <br></br>
            <ShowEditData setPersons={setPersons} activeName={activeName} persons={persons}/> 
            <hr></hr>
            <ChoseCheckbox setPersons={setPersons} activeName={activeName} persons={persons} />
            <hr></hr>
            <ShowCountEdit setPersons={setPersons} activeName={activeName} persons={persons} />
            <hr></hr>
            <AttendanceDates setPersons={setPersons} activeName={activeName} persons={persons}  />
        </div>
    );
}