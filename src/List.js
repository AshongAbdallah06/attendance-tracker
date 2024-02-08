import React, { useState, useEffect } from 'react';
import Search from './Search';

const List = ({ list, setList, search, setSearch, handleSearch }) => {
    // Use useEffect to retrieve data from localStorage on component mount
    useEffect(() => {
        const storedList = JSON.parse(localStorage.getItem('list')) || [];
        if (storedList.length > 0) {
            setList(storedList);
        }
    }, [setList]);

    return (
        <section>
            <div className="container">
                <h1>Names</h1>
                <Search
                    search={search}
                    setSearch={setSearch}
                    handleSearch={handleSearch}
                />

                <ul>
                    {list.map((item) => (
                        <li
                            key={item.id}
                            className='list'
                        >
                            {list.length === 1 ? '' : <p>{item.id}. {item.name} - {item.indexNo}</p>}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default List;
