import React, {useState} from 'react'
import './FilterCompany.css'

function FilterCompany() {
    const [checked, setChecked] = useState(false)
    const [sSeven, setSSeven] = useState(false)
    const [xiamen, setXiamen] = useState(false)
    

    function handleClick() {
        if (sSeven === true) {
            setSSeven(true)
        } if (sSeven === false) {
            setSSeven(true)
        } if (xiamen === true) {
            setXiamen(true)
        } if (xiamen === false) {
            setXiamen(true)
        }
        setChecked(!checked)
    }

    function handleClickSeven() {
        setSSeven(!sSeven)
    }

    function handleClickXiamen() {
        setXiamen(!xiamen)
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
                    <div className={`radio__indicator ${sSeven ? 'checked' : ''}`}/>
                </div>
                <div className='radio__label'>S7 Airlines</div>
            </div>
            <div className='radio'>
                <div className='radio__border' onClick={handleClickXiamen}>
                    <div className={`radio__indicator ${xiamen ? 'checked' : ''}`}/>
                </div>
                <div className='radio__label'>XiamenAir</div>
            </div>
        </div>
    )
}

export default FilterCompany