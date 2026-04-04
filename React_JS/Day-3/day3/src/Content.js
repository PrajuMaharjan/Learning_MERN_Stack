import { useState } from "react"; 

const Content=()=>{
    const [name,setName]=useState('praju');
    const[count,setCount]=useState(0);

    const handleClick=()=>{
        if (name==="praju"){
         setName("PRAJU");
        }else{
         setName("praju");
        }
        setCount(count+1);
    }

    return(
        <main className="App-header">
        <p >
        Day 1 of Learning MERN Stack(Chapter 1:React JS)
        </p>
        
        <p >
            Hello {name}!
        </p>
        <button onClick={handleClick}>Click me to capitalize/decapitalize your name</button>
        <p>Button clicked {count} times.</p>
        </main>
    )
}
export default Content;
