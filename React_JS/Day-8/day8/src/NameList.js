import LineName from "./LineName";

const NameList=({name,handleDelete})=>{
    return (
        <ul>
                {name.map((name)=>(
                    <LineName
                    key={name.id}
                    name={name}
                    handleDelete={handleDelete}
                    />
            ))}    
        </ul>
    )
}

export default NameList;