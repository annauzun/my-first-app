function Button(props) {
    
    const {title, changeCount} = props
    
    return (
        <button onClick={changeCount} className="mx-10 bg-blue-400 rounded-lg text-xl text-white font-semibold px-4 py-2 shadow-md">
        {title}
    </button>
    )
}

export default Button