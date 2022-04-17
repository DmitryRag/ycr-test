import React from 'react'
import Ticket from '../Ticket/Ticket'
import './TicketsList.css'

function TicketsList() {
    return (
        <section>
            <Ticket />
            <button className='btn-more'>Показать еще 5 билетов!</button>
        </section>
    )
}

export default TicketsList