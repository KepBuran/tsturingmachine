import React, {useEffect, useState} from 'react';
import './styles/App.css';
import MenuComponent from "./components/menu/MenuComponent";
import ToolbarComponent from "./components/toolbar/ToolbarComponent";
import TapeComponent from "./components/tape/TapeComponent";
import {Tape} from "./models/tape/Tape";
import {TapeFunctions} from "./models/tape/TapeFunctions";
import {Machine} from "./models/machine/Machine";


function App() {

    const [tape, setTape] = useState(new Tape());
    const [savedTape, setSavedTape] = useState(new Tape());
    const [machine, setMachine] = useState(new Machine());


    useEffect(() => {
        initApp()
    }, [])

    function initApp() {
        setTape(TapeFunctions.createEmptyTape());
        setSavedTape(TapeFunctions.createEmptyTape());
        setMachine(new Machine());
    }

    return (
        <div className="App">
            <MenuComponent tape={tape} setTape={setTape} savedTape={savedTape} setSavedTape={setSavedTape}  machine={machine} setMachine={setMachine}/>
            <ToolbarComponent tape={tape} setTape={setTape} savedTape={savedTape} setSavedTape={setSavedTape}  machine={machine} setMachine={setMachine}></ToolbarComponent>
            <TapeComponent tape={tape} setTape={setTape}></TapeComponent>
        </div>
    );
}

export default App;
