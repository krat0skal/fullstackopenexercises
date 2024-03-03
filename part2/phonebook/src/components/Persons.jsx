const Persons = ({ dspPersons }) => {
    return (
        <div>
            {dspPersons.map(person => <div key={person.name}>{person.name} {person.phone}</div>)}
        </div>
    )
}

export default Persons