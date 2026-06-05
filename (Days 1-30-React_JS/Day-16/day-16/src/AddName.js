import {FaPlus} from "react-icons/fa";

const AddName=({newName,setNewName,handleAdd})=>{
    return(
    <form className="addForm" onSubmit={handleAdd}>
        <label htmlFor="addName">Add Name</label>
        <input
        autoFocus
            id="addName"
            type="text"
            placeholder="Add Name"
            required
            value={newName}
            onChange={(e)=>setNewName(e.target.value)}
        />
    <button 
        type="submit"
        aria-label="Add Name">
            <FaPlus />
        </button>
    </form>
    )
}

export default AddName