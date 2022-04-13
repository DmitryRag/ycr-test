import React from 'react'
import './Ticket.css'
import LogoS7 from '../../images/S7 Logo.svg'

function Ticket() {
    return (
        <div className='ticket'>
            <div className='ticket__title'>
                <p className='ticket__price'>13 400 P</p>
                <img src={LogoS7} className='ticket__airline-logo'/>
            </div>
            <div className='ticket__info'>
                <div className='ticket__date ticket__column'>
                    <div className='ticket__departure'>
                        <p className='ticket__title-info'>MOW – HKT</p>
                        <p className='ticket__description'>10:45 – 08:00</p>
                    </div>
                    <div className='ticket__arrival'>
                        <p className='ticket__title-info'>MOW – HKT</p>
                        <p className='ticket__description'>11:20 – 00:50</p>
                    </div>
                </div>
                <div className='ticket__duration ticket__column'>
                    <div className='ticket__departure'>
                        <p className='ticket__title-info'>В пути</p>
                        <p className='ticket__description'>13ч 30м</p>
                    </div>
                    <div className='ticket__arrival'>
                        <p className='ticket__title-info'>В пути</p>
                        <p className='ticket__description'>21ч 15м</p>
                    </div>
                </div>
                <div className='ticket__segments ticket__column'>
                    <div className='ticket__departure'>
                        <p className='ticket__title-info'>2 пересадки</p>
                        <p className='ticket__description'>HKG, JNB</p>
                    </div>
                    <div className='ticket__arrival'>
                        <p className='ticket__title-info'>1 пересадка</p>
                        <p className='ticket__description'>HKG</p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Ticket