import React, {FC} from 'react';
import '../../styles/Menu.css';
import FileComponent from "./FileComponent";
import SpeedComponent from "./SpeedComponent";
import DecoderComponent from "./DecoderComponent";
import {Tape} from "../../models/tape/Tape";
import {Machine} from "../../models/machine/Machine";

interface MenuProps {
    tape: Tape;
    setTape: (tape: Tape) => void;
    savedTape: Tape;
    setSavedTape: (tape: Tape) => void;
    machine: Machine;
    setMachine: (machine: Machine) => void;
}


const MenuComponent: FC<MenuProps>  = ({tape, setTape, savedTape, setSavedTape, machine, setMachine}) => {
    return (
        <menu className="mainMenu">
            <ul>
                <FileComponent></FileComponent>
                <SpeedComponent></SpeedComponent>
                <DecoderComponent machine={machine} setMachine={setMachine}></DecoderComponent>
            </ul>
        </menu>
    );
};

export default MenuComponent;