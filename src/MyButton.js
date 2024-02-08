import React from 'react'

const MyButton = ({ list, setList, handleAddClick }) => {


    return (
        <section>
            <button 
                type="submit"
                className="add"
                onClick={handleAddClick}
            >Add</button>
        </section>
    )
}

export default MyButton