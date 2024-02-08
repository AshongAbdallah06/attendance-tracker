import React from 'react'

const Input = ({ 
    firstName, lastName, indexNumber, setFirstName, setLastName, setIndexNumber
 }) => {

    return (
        <section>
            <li>
                <label htmlFor="first-name">First Name</label>
                <input 
                    type="text"
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />                
            </li>

            <li>
                <label htmlFor="last-name">Last Name</label>
                <input 
                    type="text"
                    required
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />                
            </li>

            <li>
                <label htmlFor="last-name">Index No.</label>
                <input 
                    type="text"
                    required
                    value={indexNumber}
                    onChange={(e) => setIndexNumber(e.target.value)}
                />                
            </li>

        </section>
  )
}

export default Input