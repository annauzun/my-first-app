function Button(props) {
    
    const {title, handleClick, type} = props
    
    return (
        <button type={type} onClick={event => handleClick(event)} className="border border-solid border-color-white bg-blue-400 rounded-lg text-xl text-white font-semibold px-4 py-2 shadow-md">
        {title}
    </button>
    )
}

/*function Button({title, handleClick, type}) {
    
    return (
        <button type={type} onClick={handleClick} className="border border-solid border-color-white bg-blue-400 rounded-lg text-xl text-white font-semibold px-4 py-2 shadow-md">
        {title}
    </button>
    )
}*/

export default Button