
function copyFun(aObject) {
    // Prevent undefined objects
    // if (!aObject) return aObject;

    let bObject = Array.isArray(aObject) ? [] : {};

    let value;
    for (const key in aObject) {

        // Prevent self-references to parent object
        // if (Object.is(aObject[key], aObject)) continue;
        
        value = aObject[key];

        bObject[key] = (typeof value === "object") ? copyFun(value) : value;
    }

    return bObject;
}

export default function ReDeepCP(name, prevPersons) {
    let indexObj;
    prevPersons.forEach((element, index) => {
        if (element.name === name) {
            indexObj = index;
        }
    });
    
    const copy = structuredClone(prevPersons);
                    
    return {copy: copy, index: indexObj};
}
