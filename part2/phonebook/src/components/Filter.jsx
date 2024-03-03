const Filter = (props) => {
    return (
        <div>filter shown with <input value={props.filterName} onChange={props.handlefilterNameChange} /></div>
    )
}

export default Filter