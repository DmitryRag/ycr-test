import React, {useState} from 'react'
import './Main.css'
import FilterTransfer from '../FilterTransfer/FilterTransfer'
import FilterCompany from '../FilterCompany/FilterCompany'
import Tabs from '../Tabs/Tabs'
import TicketsList from '../TicketsList/TicketsList'

function Main() {
    const [tabs, setTabs] = useState(null)

    return (
        <main className='main'>
            <div className='main__filters'>
                <FilterTransfer />
                <FilterCompany />
            </div>
            <div className='main__content'>
                <Tabs tabs={tabs} setTabs={setTabs}/>
                <TicketsList />
            </div>
        </main>
    )
}

export default Main