import React from 'react'

const Footer = () => {
    const today = new Date();
    return (
        <section>
            <p className='date'>{today.getDate()} / {today.getMonth()} / {today.getFullYear()}</p>
        </section>
    )
}

export default Footer