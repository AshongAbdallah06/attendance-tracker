import { useState, useEffect } from "react";
import Form from "./Form";
import List from "./List";

function App() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [indexNumber, setIndexNumber] = useState('');

    const [list, setList] = useState([{
        name: 'Ashong',
        indexNo: '42112311199',
        id: '1'
    }])



    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleAddClick = () => {
        const nameRegex = /^[a-z]{3,}$/i;
        const indexNoRegex = /^[0-9]{10}$/;
        if ((firstName && lastName && indexNumber) !== '') {
        const newItem = { name: `${firstName + ' ' + lastName}`, indexNo: indexNumber, id: list.length + 1 };
        const updatedList = [...list, newItem];
        
        setList(updatedList);

        localStorage.setItem('list', JSON.stringify(updatedList));
        setFirstName('');
        setLastName('');
        setIndexNumber('');
        }

    }
    
    const [search, setSearch] = useState('');

    const handleSearch = (e) => {
        const searchText = e.target.value;
        setSearch(searchText);
    

    
        // If the search text is empty, revert to the original list
        if (searchText === '') {
            const storedList = JSON.parse(localStorage.getItem('list')) || [];
            setList(storedList);
        } else {
            // Filter the original list based on the search input
            const filteredList = list.filter(item => item.name.toLowerCase().includes(searchText.toLowerCase()));
            
            // Update the list state with the filtered items
            setList(filteredList);
        }
    }

    useEffect(() => {
        console.log(list);
    }, [list]);
    
    
    
    

    return (
        <main className="App">
            <Form 
                firstName={firstName}
                setFirstName={setFirstName}
                lastName={lastName}
                setLastName={setLastName}
                indexNumber={indexNumber}
                setIndexNumber={setIndexNumber}
                handleSubmit={handleSubmit}
                handleAddClick={handleAddClick}
                list={list}
                setList={setList}
            />

            <List 
                list={list}
                setList={setList}
                search={search}
                setSearch={setSearch}
                handleSearch={handleSearch}
            />  
        </main>
  );
}

export default App;
