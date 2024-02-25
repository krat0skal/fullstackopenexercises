const Course = ({ course }) => {
    const parts = [...course.parts]
    return (
        <div>
            <h1>{course.name}</h1>
            {parts.map(
                part =>
                    <p key={part.id}>
                        {part.name} {part.exercises}
                    </p>
            )}
        </div>
    )
}

export default Course