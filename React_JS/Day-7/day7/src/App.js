import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { useState } from "react";
import './App.css';

function App() {
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
      

  return (
    <div className="App">
      <Header title="
        Day 5 of Learning MERN Stack(Chapter 1:React JS)"
        />
      <Content 
        name={name}
        handleAdd={handleAdd}
        handleDelete={handleDelete}
      />
      <Footer length={names.length}/>
    </div>
  );
}

export default App;