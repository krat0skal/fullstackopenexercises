const Header = ({ props }) => {
    return (
        <>
            <h1 key={props.id}>
                {props.name}
            </h1>
            <Parts props={props.parts} />
        </>
    )

}

const Parts = ({ props }) => {
    const exercises = props.map(prop => prop.exercises)
    const total = exercises.reduce((exercise,sumValue) => exercise+sumValue,0)
    console.log("parts array",props)
    console.log("exercises array",exercises)
    console.log("total",total)
    return (
        <>
            {props.map(
                prop =>
                    <p key={prop.id}>
                        {prop.name} {prop.exercises}
                    </p>
            )}
            <b>Total of {total} exercises</b>
        </>
    )
}

const Course = ({ courses }) => {
    const coursesArr = [...courses]
    console.log("courses ", coursesArr)
    return (
        <div>
            {coursesArr.map(course =>
                <Header key={course.id} props={course} />
            )}
        </div>
    )
}

export default Course