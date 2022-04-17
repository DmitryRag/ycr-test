import React, {useState} from 'react'
import './FilterCompany.css'

function FilterCompany() {
    const [checked, setChecked] = useState(false)
    const [isS7Selected, setS7Selected] = useState(false)
    const [isXiamenSelected, setIsXiamenSelected] = useState(false)
    

    function handleClick() {
        if (!isS7Selected) {
            setS7Selected(true)
        } if (!isXiamenSelected) {
            setIsXiamenSelected(true)
        }
        setChecked(!checked)
    }

    function handleClickSeven() {
        setS7Selected(!isS7Selected)
    }

    function handleClickXiamen() {
        setIsXiamenSelected(!isXiamenSelected)
    }

    return (
        <div className='filter-company'>
            <h2 className='filter-company__title'>Компания</h2>
            <div className='radio'>
                <div className='radio__border' onClick={handleClick}>
                    <div className={`radio__indicator ${checked ? 'checked' : ''}`}/>
                </div>
                <div className='radio__label'>Все</div>
            </div>
            <div className='radio'>
                <div className='radio__border' onClick={handleClickSeven}>
                    <div className={`radio__indicator ${isS7Selected ? 'checked' : ''}`}/>
                </div>
                <div className='radio__label'>S7 Airlines</div>
            </div>
            <div className='radio'>
                <div className='radio__border' onClick={handleClickXiamen}>
                    <div className={`radio__indicator ${isXiamenSelected ? 'checked' : ''}`}/>
                </div>
                <div className='radio__label'>XiamenAir</div>
            </div>
        </div>
    )
}

export default FilterCompany