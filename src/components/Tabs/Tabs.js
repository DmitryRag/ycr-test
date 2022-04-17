import React from 'react'
import classNames from 'classnames';
import './Tabs.css';

function Tabs({tabs, setTabs}) {

    const btnCheap = classNames(
        'btn', {
          btn_active: tabs === 'cheap',
    })

    const btnFast = classNames(
        'btn', {
          btn_active: tabs === 'fast',
    })

    const btnOptimal = classNames(
        'btn', {
          btn_active: tabs === 'optimal',
    })

    return (
        <section className='tabs'>
            <button className={btnCheap} onClick={() => {setTabs('cheap')}}>Самый дешевый</button>
            <button className={btnFast} onClick={() => {setTabs('fast')}}>Самый быстрый</button>
            <button className={btnOptimal} onClick={() => {setTabs('optimal')}}>Оптимальный</button>
        </section>
    )
}

export default Tabs