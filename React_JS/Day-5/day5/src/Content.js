import { useState } from "react"; 
import {FaTrashAlt} from 'react-icons/fa'; 

const Content=()=>{
    const names=[
        {
            id:1,
            name:"John",

        },
        {
            id:2,
            name:"Arthur",
        },
        {
            id:3,
            name:"Susan",
        },
        {
            id:4,
            name:"Karen",
        }
    ];

    const [name,setName]=useState(()=>{
        const storedNames=localStorage.getItem("Names");
        return storedNames ? JSON.parse(storedNames):names;
    });
    const handleDelete=(id)=>{
        const updatedNames=name.filter(name=>name.id!==id);
        setName(updatedNames);
        localStorage.setItem("Names",JSON.stringify(updatedNames));
    }

    const handleAdd=()=>{
        const missingNames=names.filter((person)=>!name.some((current)=>current.id===person.id)
    );
    if (!missingNames.length) return;

    const updatedNames=[...name,missingNames[0]];
    setName(updatedNames);
    localStorage.setItem("Names",JSON.stringify(updatedNames));
    }

    return(
        <main className="Content">
        <p >
        Day 5 of Learning MERN Stack(Chapter 1:React JS)
        </p>
         {name.length ? (
            <ul>
                {name.map((name)=>(
                    <li className="name" key={name.id}>
                        <label>Hello {name.name}!   </label>
                        <FaTrashAlt 
                            role="button"
                            tabIndex="0"
                            onClick={()=>handleDelete(name.id)}
                        />
                    </li>
                ))}
            </ul>
         ) :(
            <p>There are no names</p>
         )}
                    <button onClick={handleAdd}>Add Name</button>
        </main>
    )
}

export default Content;