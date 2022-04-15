import React, {useState} from 'react'
import classNames from 'classnames';
import './FilterTransfer.css'

function FilterTransfer() {
    const [checkedZero, setCheckedZero] = useState(false)
    const [checkedOne, setCheckedOne] = useState(false)
    const [checkedTwo, setCheckedTwo] = useState(false)
    const [checkedThree, setCheckedThree] = useState(false)


    function handleClickZero() {
        setCheckedZero(!checkedZero)
    }
    function handleClickOne() {
        setCheckedOne(!checkedOne)
    }
    function handleClickTwo() {
        setCheckedTwo(!checkedTwo)
    }
    function handleClickThree() {
        setCheckedThree(!checkedThree)
    }

    return (
        <div className='filter-transfer'>
            <h2 className='filter-transfer__title'>Количество пересадок</h2>
            <div className='checkbox' onClick={handleClickZero}>
                <div className='checkbox__border' >
                    <div className={`checkbox__indicator ${checkedZero ? 'checked' : ''}`}/>
                </div>
                <div className='checkbox__label'>Без пересадок</div>
            </div>
            <div className='checkbox' onClick={handleClickOne}>
                <div className='checkbox__border' >
                    <div className={`checkbox__indicator ${checkedOne ? 'checked' : ''}`}/>
                </div>
                <div className='checkbox__label'>1 пересадка</div>
            </div>
            <div className='checkbox' onClick={handleClickTwo}>
                <div className='checkbox__border' >
                    <div className={`checkbox__indicator ${checkedTwo ? 'checked' : ''}`}/>
                </div>
                <div className='checkbox__label'>2 пересадки</div>
            </div>
            <div className='checkbox' onClick={handleClickThree}>
                <div className='checkbox__border' >
                    <div className={`checkbox__indicator ${checkedThree ? 'checked' : ''}`}/>
                </div>
                <div className='checkbox__label'>3 пересадки</div>
            </div>
        </div>
    )
}

export default FilterTransfer