import "../css/style.css";
import "./plugins";
import locations from './store/location.store';
import formUI from './views/form.view';
import currencyUI from './views/currency.view'
import ticketsUI from './views/tickets.view'


document.addEventListener('DOMContentLoaded', () => {
    initApp();
    const form = formUI.form;

    // Events
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        onFormSubmit();
    })

    // Handlers
    async function initApp() {
        await locations.init();
        formUI.setAutoCompliteData(locations.shortCitiesList);
    }

    async function onFormSubmit() {
        // 
        const origin = locations.getCityCodeByKey(formUI.originValue);
        const destination =locations.getCityCodeByKey(formUI.destinationValue);
        const depart_date = formUI.departDateValue;
        const return_date = formUI.returnDateValue;

        const currency = currencyUI.currency.value;


        // Code, Code, 2019-09, 2019-10
        await locations.fetchTickets({
            origin,
            destination,
            depart_date,
            return_date,
            currency,
        })
        console.log(locations.lastSearch);
        
        ticketsUI.renderTickets(locations.lastSearch)
    }
})