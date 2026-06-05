const Input=({colorValue,setColorValue,isDarkText,setIsDarkText})=>{
    return(
        <form onSubmit={(e)=>e.preventDefault()}>
            <input className="colorInput"
                   autoFocus
                   type="text"
                   placeholder="Add Color Name"
                   required
                   value={colorValue}
                   onChange={(e)=>setColorValue(e.target.value)}
            />
            <button type="button"
                    onClick={()=>setIsDarkText(!isDarkText)}>
                        Change Text Color
            </button>
        </form>
    )
}
export default Input;