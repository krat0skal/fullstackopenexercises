const Persons = ({ person, removePerson }) => {
    return (
        <div>
            {person.name} {person.phone}
            <button onClick={removePerson}>
                Delete
            </button>
        </div>
    )
}

export default Persons