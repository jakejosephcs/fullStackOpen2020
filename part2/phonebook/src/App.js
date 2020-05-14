import React, { useState } from 'react'

const App = (props) => {
    const [ persons, setPersons ] = useState(props.persons) 
    const [ newName, setNewName ] = useState('')

    const addName = (event) => {
        event.preventDefault()
        if (persons.some(person => person.name === newName)) {
            alert(`${newName} is already in the Phonebook`)
        } else {
            const personObject = {
                name: newName
            }
            setPersons(persons.concat(personObject))
            setNewName("")
        }
    }

    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={addName}>
                <div>
                    name: <input value={newName} onChange={handleNameChange}/>
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            <div>
                {persons.map(person => <p key={person.name}>{person.name}</p>)}
            </div>
        </div>
    )
}


export default App