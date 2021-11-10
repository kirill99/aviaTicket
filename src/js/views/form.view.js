import {getAutocompliteInstance, getDatepickerInstance} from '../plugins/materialze'

class FormUI{
    constructor(autocompliteInstance, datepickerInstance) {
        this._form = document.forms['locationControls'];
        this.origin = document.getElementById('autocomplete-origin');
        this.destination = document.getElementById('autocomplete-destination');
        this.depart = document.getElementById('datepicker-depart');
        this.return = document.getElementById('datepicker-return');

        this.originAutoComplite = autocompliteInstance(this.origin);
        this.destinationAutoComplite = autocompliteInstance(this.destination);

        this.departDataPicker = datepickerInstance(this.depart);
        this.returnDataPicker = datepickerInstance(this.return);
    }


    get form() {
        return this._form;
    }

    get originValue() {
        return this.origin.value;
    }

    get destinationValue() {
        return this.destination.value;
    }

    get departDateValue() {
        return this.departDataPicker.toString();
    }

    get returnDateValue() {
        return this.returnDataPicker.toString();
    }



    setAutoCompliteData(data){
        this.originAutoComplite.updateData(data);
        this.destinationAutoComplite.updateData(data);
    }
}

const formUI = new FormUI(getAutocompliteInstance, getDatepickerInstance);

export default formUI;