import { useState } from "react";
import Form from "./Form";
import List from "./List";

function App() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [indexNumber, setIndexNumber] = useState('');
    
    const [search, setSearch] = useState('');

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
    
    const handleSearch = (e, item) => {
        console.log('ji')
        setSearch(e.target.value)
        let myArrayRegex = /[0-9]/;
        const listItems = list.filter(item => search.includes(list));
        setList(listItems)

        // const listItems = list.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))
        // setList(listItems);
    }

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
