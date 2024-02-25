const Course = ({ course }) => {
    const parts = [...course.parts]
    const exercises = parts.map(part => part.exercises)
    const total = exercises.reduce((exercise,sumvalue) => exercise+sumvalue,0)
    console.log('Exercises',exercises)
    console.log('Total',total)
    return (
        <div>
            <h1>{course.name}</h1>
            {parts.map(
                part =>
                    <p key={part.id}>
                        {part.name} {part.exercises}
                    </p>
            )}
            <b>Total of {total} exercises</b>
        </div>
    )
}

export default Course