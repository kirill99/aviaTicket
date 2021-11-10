class CurrncyUI{
    constructor() {
        this.currency = document.getElementById('currency');
    }


    get currencyValue() {
        return this.currency.value;
    }
}

const currency = new CurrncyUI();

export default currency;