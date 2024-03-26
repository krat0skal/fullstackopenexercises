const Notification = ({ message, errorInd }) => {
    console.log('Error in d is '+errorInd)
    const successStyle = {
        color: 'green',
        background: 'lightgrey',
        fontSize: 20,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10
    }

    const errStyle = {
        color: 'red',
        background: 'lightgrey',
        fontSize: 20,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10
    }
    if (message === null) {
        return null
    }
    if (errorInd ==0){
        return (
            <div style={successStyle}>
                {message}
            </div>
        ) 
    } else {
        return (
            <div style={errStyle}>
                {message}
            </div>
        )
    }
}

export default Notification