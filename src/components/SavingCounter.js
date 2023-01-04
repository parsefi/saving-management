import React from 'react'

const SavingCounter = ({ totalSave }) => {
    return (
        <div className='saving-counter'>
            <span>
                پس انداز :
                &nbsp;
                {totalSave}
                &nbsp;
                تومان
            </span>

        </div>
    )
}

export default SavingCounter