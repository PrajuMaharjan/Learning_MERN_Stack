const Content=()=>{
    const name="Praju Maharjan";

    const handleClick=(name)=>{
        console.log(`${name} clicked the button.`);
    }

    return(
        <main className="App-header">
        <p >
        Day 1 of Learning MERN Stack(Chapter 1:React JS)
        </p>
        
        <button onClick={()=>handleClick(name)}>Click this button</button>
        </main>
    )
}
export default Content;
