export class OnePerson {
    constructor(name) {
        this.name = name;
        this.textFields = [];
        this.checkBoxes = [];
        this.countFields = [];
        this.dates = [];
        this.isTemplate = false;
    }
}

export let onePersonsFun = {
    addTextField(obj, textName) {
        let checkIfDouble = false;
        obj.textFields.forEach((elem) => {
            if (textName === String(Object.keys(elem)[0])) {
                checkIfDouble = true
            }
        });
        if (!checkIfDouble) {
            obj.textFields.push({[textName]: ""});
        }
    },

    addCheckboxHeader(obj, textName) {
        let checkIfDouble = false;
        obj.checkBoxes.forEach((elem) => {
            if (textName === String(Object.keys(elem)[0])) {
                checkIfDouble = true
            }
        });
        if (!checkIfDouble) {
            obj.checkBoxes.push({titel: textName, boxes: [], chosenIndex: -1});
        }
    },

    addCountFields(obj, textName) {
        let checkIfDouble = false;
        obj.countFields.forEach((elem) => {
            if (textName === String(Object.keys(elem)[0])) {
                checkIfDouble = true
            }
        });
        if (!checkIfDouble) {
            obj.countFields.push({[textName]: 0});
        }
    }
}