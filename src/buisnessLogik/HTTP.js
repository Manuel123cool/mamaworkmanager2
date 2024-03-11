export function sendJSON(dataRef) {
    fetch("http://localhost:4000/json",
    {
        method: "POST",
        body: JSON.stringify( dataRef ),
        headers: {
            "Content-Type": "application/json",
          }
    })
    .then(function(res){ return res.text(); })
    .then(function(text){ console.log( JSON.stringify( text ) ) })
}

export function getJSON(setPersons) {
    fetch("http://localhost:4000/json")
    .then(r =>  r.json().then(data => ({status: r.status, body: data})))
    .then(obj => {
        setPersons((prevPerson) => {
            console.log( prevPerson );
            return obj.body
        });
    });
}