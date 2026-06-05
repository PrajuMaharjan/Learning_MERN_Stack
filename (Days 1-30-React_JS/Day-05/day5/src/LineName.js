import {FaTrashAlt} from 'react-icons/fa';

const LineName=({name,handleDelete})=>{
    return (
                    <li className="name" key={name.id}>
                        <label>Hello {name.name}!   </label>
                        <FaTrashAlt 
                            role="button"
                            tabIndex="0"
                            onClick={()=>handleDelete(name.id)}
                        />
                    </li>
                )}

export default LineName;