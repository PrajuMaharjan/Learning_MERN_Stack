import Square from './Square';
import Input from "./Input";
import {useState} from "react";
import "./App.css"

function App(){
    const [colorValue,setColorValue]=useState("");
    const [isDarkText,setIsDarkText]=useState(true);

    return(
        <div className="App">
            <Square 
                    colorValue={colorValue}
                    isDarkText={isDarkText}
            />
            <Input 
                colorValue={colorValue}
                setColorValue={setColorValue}
                isDarkText={isDarkText}
                setIsDarkText={setIsDarkText}
            />
        </div>
    )
}

export default App;