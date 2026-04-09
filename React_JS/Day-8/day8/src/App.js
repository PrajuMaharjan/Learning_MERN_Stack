import Header from './Header';
import SearchName from './SearchName';
import AddName from './AddName';
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
    
    const [newName,setNewName]=useState("");
    const [search,setSearch]=useState("");

    const [name,setName]=useState(()=>{
        const storedNames=localStorage.getItem("Names");
        return storedNames ? JSON.parse(storedNames):names;
        });

    const setAndSaveNames=(newNames)=>{
      setName(newNames);
      localStorage.setItem("Names",JSON.stringify(newNames));
    }

    const addName=(newName)=>{
          const id=name.length ? name[name.length-1].id + 1 : 1;
          const addedName={id,name:newName};
          const listNames=[...name,addedName];
           setAndSaveNames(listNames);
    }
        
        const handleDelete=(id)=>{
            const updatedNames=name.filter((name)=>name.id!==id);
            setAndSaveNames(updatedNames);
        }
    
        const handleAdd=(e)=>{
            e.preventDefault(); 
            if(!newName) return;
          
            addName(newName);
            setNewName("");
      }

      const handleReset=()=>{
        setAndSaveNames(names);
      }
      

  return (
    <div className="App">
      <Header title="
        Day 7 of Learning MERN Stack(Chapter 1:React JS)"
        />
        <AddName 
            newName={newName}
            setNewName={setNewName}
            handleAdd={handleAdd}
        />
        <SearchName
            search={search}
            setSearch={setSearch}
        />
      <Content 
        name={name.filter(names=>((names.name).toLowerCase()).includes(search.toLowerCase()))}
        handleDelete={handleDelete}
        handleReset={handleReset}
      />
      <Footer length={names.length}/>
    </div>
  );
}

export default App;