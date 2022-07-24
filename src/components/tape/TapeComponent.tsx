import React, {FC, ReactComponentElement} from 'react';
import '../../styles/Tape.css';
import {Tape} from "../../models/tape/Tape";
import {TapeFunctions} from "../../models/tape/TapeFunctions";

import leftButtonIcon from '../../assets/img/tape/left_button2.png';
import rightButtonIcon from '../../assets/img/tape/right_button2.png';
import pointerIcon from '../../assets/img/tape/pointer4.png'

interface TapeProps {
    tape : Tape;
    setTape : (tape: Tape) => void;
}

const TapeComponent: FC<TapeProps>  = ({tape, setTape}) => {

    //TODO Make amount of amount responsible
    const cellsAmount = 31

    function cellsInit()  {
        //console.log("cellsInit");
        const cells = [];
        let firstCellIndex = -(Math.floor((cellsAmount)/2)-tape.tapePointer);
        for (let i: number = firstCellIndex; i < firstCellIndex+cellsAmount; i++) {
            cells.push(<input className="tapeCell" key={i} data-key={i} type="text" maxLength={1} onChange={handleCellChange}
                              value={tape.tape[i] === ' ' ? '' : tape.tape[i]}/>);
        }
        return cells;
    }

    const handleCellChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTape(TapeFunctions.changeCell(event.target.getAttribute('data-key'), event.target.value, tape))
    }

    function goLeft() {
        console.log("Moving tape to Left");
        setTape(TapeFunctions.goLeft(tape));
    }

    function goRight() {
        console.log("Moving tape to Right");
        setTape(TapeFunctions.goRight(tape));
    }


    return (
        <div className="tape">
            <input type="image" onClick={goLeft} src={leftButtonIcon} className="tapeButton"/>
            <div className="cellsBlock">
                {cellsInit()}
            </div>
            <input  type="image" onClick={goRight} src={rightButtonIcon} className="tapeButton"/>
            <br/>
            <img src={pointerIcon}/>
        </div>
    );
};

export default TapeComponent;