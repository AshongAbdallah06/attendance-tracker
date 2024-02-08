import React, { useState } from 'react'

const Search = ({ search, setSearch, handleSearch }) => {
    // const onChange = () => {
    //     (e) => {setSearch(e.target.value)}
    // }
    return (
        <section>
            <input 
                type="text"
                placeholder='Search'
                className='search'
                value={search}
                onChange={handleSearch}
            />

        </section>
    )
}

export default Search;