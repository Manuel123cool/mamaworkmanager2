import './App.css';
import CreatePerson from './components/CreatePerson';
import PersonsList from './components/PersonsList';
import Admin from './components/Admin/Admin'; 
import ShowData from './components/ShowData/ShowData';

import { useState, useEffect } from "react";

import { sendJSON, getJSON } from "./buisnessLogik/HTTP"

/*
  
*/

function App() {
  const [persons, setPersons] = useState([]);
  const [activeName, setActiveName] = useState({name: undefined, isShowData: undefined});

  useEffect(() => {
    if (persons.length > 0) {
      sendJSON(persons);
    } else {
      getJSON(setPersons);
    }
  }, [persons]);

  let usedElem;
  if (activeName.name === undefined && activeName.isShowData === undefined) {
    usedElem = (<>
      <CreatePerson setPersons={setPersons}/>
      <PersonsList persons={persons} setActiveName={setActiveName} />
    </>);
  } else if (activeName.name !== undefined && activeName.isShowData === undefined) {
    usedElem = <Admin activeName={activeName} setActiveName={setActiveName} setPersons={setPersons} persons={persons} />;
  } else {
    usedElem = <ShowData activeName={activeName} setPersons={setPersons} persons={persons} setActiveName={setActiveName} />;
  }

  return usedElem;
}

export default App;
