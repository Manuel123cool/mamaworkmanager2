import AddTextField from "./AddTextField"
import ShowTextFields from "./ShowTextFields"
import ReDeepCP from '../../buisnessLogik/ReDeepCP';
import AddCheckbox from "./AddCheckbox";
import ShowCheckBoxes from "./ShowCheckBoxes";
import AddCount from "./AddCount";
import ShowCount from "./ShowCounts";
import DeleteDates from "./DeleteDates";

export default function Admin({ activeName, setActiveName, setPersons, persons}) {
    const {index: indexTempletUse} = ReDeepCP(activeName.name, persons);
    return (
        <div>
            <h1>Admin: {activeName.name}</h1>
            <h1>{persons[indexTempletUse].isTemplate && "Das hier ist template"}</h1>
            <button onClick={(event) => setActiveName({name: undefined, isShowData: undefined})}>Zurück gehen</button>
            <button onClick={(event) => {
                
                if (window.confirm("Wollen sie wirklich Person: " + activeName.name + ", löschen ?")) {
                    setPersons((prevData) => {
                        const {copy, index} = ReDeepCP(activeName.name, prevData);
                        if (copy[index].textFields.length === 0 && 
                            copy[index].checkBoxes.length === 0 && 
                            copy[index].countFields.length === 0 && 
                            copy[index].dates.length === 0 ){

                            copy.splice(index, 1);
                            setActiveName({name: undefined, isShowData: undefined});
                        } else {
                            alert("Sie müssen erst alle Textfelder löschen");
                        }
                        return copy;
                    });
                    
                }
            }}>Person Löschen</button>

            <button onClick={(event) => {
                    setPersons((prevData) => {
                        let {copy, index} = ReDeepCP(activeName.name, prevData);
                        copy = copy.map((elem) => {
                            elem.isTemplate = false;
                            return elem;
                        });
                        copy[index].isTemplate = true;
                        return copy;
                    });
                }
            }>Diese Person zu Template machen</button>

            <button onClick={(event) => {
                    setPersons((prevData) => {
                        const {copy, index} = ReDeepCP(activeName.name, prevData);
                        if (copy[index].textFields.length === 0 && copy[index].checkBoxes.length === 0 && copy[index].countFields.length === 0) {
                            let indexTemplate = -1
                            prevData.forEach((elem, indexIntern) => {
                                if (elem.isTemplate)  {
                                    indexTemplate = indexIntern;
                                }
                            })
                            if (indexTemplate !== -1) {
                                prevData[indexTemplate].textFields.forEach((element, indexFor) => {
                                    const elementClone = structuredClone(element);
                                    copy[index].textFields.push(elementClone);
                                    copy[index].textFields.at(-1)[String(Object.keys(elementClone)[0])] = "";
                                });
                                prevData[indexTemplate].checkBoxes.forEach((element, indexFor) => {
                                    const elementClone = structuredClone(element);
                                    copy[index].checkBoxes.push(elementClone);
                                    copy[index].checkBoxes.at(-1).chosenIndex = -1;
                                });
                                prevData[indexTemplate].countFields.forEach((element, indexFor) => {
                                    const elementClone = structuredClone(element);
                                    copy[index].countFields.push(elementClone);
                                    copy[index].countFields.at(-1)[String(Object.keys(elementClone)[0])] = 0;
                                });
                            }
                        } else {
                            alert("Sie müssen erst alles löschen bevor das Template benutzt werden kann");
                        }
                        return copy;
                    });
                }
            }>Das Template hier benutzen</button>
            <br></br>

            <AddTextField setPersons={setPersons} activeName={activeName} />
            <ShowTextFields setPersons={setPersons} activeName={activeName} persons={persons}/>

            <hr></hr>

            <AddCheckbox setPersons={setPersons} activeName={activeName}/>
            <ShowCheckBoxes setPersons={setPersons} activeName={activeName} persons={persons} />

            <hr></hr>
            <AddCount setPersons={setPersons} activeName={activeName} />
            <ShowCount setPersons={setPersons} activeName={activeName} persons={persons} />

            <hr></hr>
            <DeleteDates setPersons={setPersons} activeName={activeName} persons={persons}/>
        </div>
    )
}