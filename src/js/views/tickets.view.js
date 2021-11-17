class TicketsUI {
    constructor() {
        this.container = document.querySelector('.tickets');
    }


    renderTickets(tickets) {
        this.clearContainer();

        if (!tickets.length){
            this.showEmptyMsg();
            return;
        }

        let fragment = '';

        tickets.forEach(ticket => {
            const template = TicketsUI.ticketTemplate(ticket);
            fragment += template;
        });

        this.container.insertAdjacentHTML('afterbegin', fragment)
    }

    clearContainer() {
        this.container.innerHTML = '';
    }

    showEmptyMsg() {
        const template = TicketsUI.emptyMsgTemplate();
        this.container.insertAdjacentHTML('afterbegin', template);
    }

    static emptyMsgTemplate() {
        return `
            <div>У нас для вас билетов</div>
        `;
    }


    static ticketTemplate(ticket) {
        return `
            <div class="ticket">
                <div class=header>
                    <div class="logo">
                        <img src="${ticket.airline_logo}" alt="" width="100px" height="100px">
                    </div>
                    <div class="title">${ticket.airline_name}</div>
                </div>
                <div class="departure">
                    <div class="from">${ticket.origin_name}</div>
                    <div class="to">${ticket.destination_name}</div>
                </div>
                <div class="detail">
                    <div class="information">
                        <div class="date">${ticket.departure_at}</div>
                        <div class="info">${ticket.flight_number}</div>
                    </div>
                    <div class="price">
                        <span>$${ticket.price}</span>
                    </div>
                </div>
            </div>
        
        ` ;
    }
}


const ticketsUi = new TicketsUI();

export default ticketsUi;