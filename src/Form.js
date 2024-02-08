import React from 'react';
import Input from './Input';
import MyButton from './MyButton';

const Form = ({ 
    firstName, lastName, indexNumber, list, setFirstName, setLastName, setIndexNumber, setList, handleSubmit, handleAddClick
 }) => {


    return (
        <form onSubmit={handleSubmit}>
            <Input 
                firstName={firstName}
                setFirstName={setFirstName}
                lastName={lastName}
                setLastName={setLastName}
                indexNumber={indexNumber}
                setIndexNumber={setIndexNumber}
            />

            <MyButton 
                list={list}
                setList={setList}
                handleAddClick={handleAddClick}
            />
        </form>
    )
}

export default Form