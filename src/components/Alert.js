import React from 'react'

const Alert = ({ activity, content }) => {
    return (
        <div className={`alert ${activity == 'active' ? activity : ''}`}>{content} تومان پس انداز شد</div>
    )
}

export default Alert