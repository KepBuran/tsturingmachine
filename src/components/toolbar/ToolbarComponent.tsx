import React, {FC} from 'react';
import '../../styles/Toolbar.css';

import {Tape} from "../../models/tape/Tape";
import RunToolsComponent from './RunToolsComponent';
import TapeToolsComponent from "./TapeToolsComponent";
import OtherToolsComponent from "./OtherToolsComponent";
import {Machine} from "../../models/machine/Machine";


interface ToolbarProps {
    tape: Tape;
    setTape: (tape: Tape) => void;
    savedTape: Tape;
    setSavedTape: (tape: Tape) => void;
    machine: Machine;
    setMachine: (machine: Machine) => void;
}


const ToolbarComponent: FC<ToolbarProps>  = ({tape, setTape, savedTape, setSavedTape, machine, setMachine}) => {
    return (
        <div className="toolBar">
            <RunToolsComponent tape={tape} setTape={setTape} machine={machine} setMachine={setMachine}></RunToolsComponent>
            <TapeToolsComponent tape={tape} setTape={setTape} savedTape={savedTape} setSavedTape={setSavedTape}></TapeToolsComponent>
            <OtherToolsComponent></OtherToolsComponent>
        </div>
    );
};

export default ToolbarComponent;