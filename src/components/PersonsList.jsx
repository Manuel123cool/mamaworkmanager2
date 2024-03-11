export default function PersonsList({ persons, setActiveName}) {
    return (
        <ul>
            {persons.map((elem, index) => {
                return (
                <li key={index}><span>{elem.name}</span>
                    <button id={index + "data"} onClick={(event) => {setActiveName({name: elem.name, isShowData: true})}}>Zeige Daten</button> 
                    <button id={index + "admin"} onClick={(event) => {setActiveName({name: elem.name, isShowData: undefined})}}>Zu Admin</button>
                </li>
                )
            })}
        </ul>
    )
}