import 'materialize-css/dist/js/materialize.min.js'
import 'materialize-css/dist/css/materialize.min.css'


// Init select
var select = document.querySelectorAll('select');
M.FormSelect.init(select);

export function getSelectInstance(elem){
    return M.FormSelect.getInstance(elem)
}


// Init autocomplete
const autocomplete = document.querySelectorAll('.autocomplete');
M.Autocomplete.init(autocomplete);

export function getAutocompliteInstance(elem){
    return M.Autocomplete.getInstance(elem)
}



// Init datepickers
const datepicker = document.querySelectorAll('.datepicker');
M.Datepicker.init(datepicker, {
    showClearBtn: true,
    format: 'yyyy-mm',
});

export function getDatepickerInstance(elem){
    return M.Datepicker.getInstance(elem)
}