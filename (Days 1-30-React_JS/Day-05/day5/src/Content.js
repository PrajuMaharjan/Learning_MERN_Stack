import NameList from './NameList';

const Content=({name,handleAdd,handleDelete})=>{
    return(
        <main className="App-content">
         {name.length ? (
            <NameList 
                name={name}
                handleAdd={handleAdd}
                handleDelete={handleDelete}
                />
         ) :(
            <p>There are no names</p>
         )}
                    <button onClick={handleAdd}>Add Name</button>
        </main>
    )
};

export default Content;