import {Tape} from "../../models/tape/Tape";
import React, {FC} from 'react';
import {Animations} from "../../utils/Animations";
import {TapeFunctions} from "../../models/tape/TapeFunctions";
import {AssetsHelper} from "../../utils/AssetsHelper";

interface TapeToolsProps {
    tape: Tape;
    setTape : (tape: Tape) => void;
    savedTape : Tape;
    setSavedTape : (tape: Tape) => void;
}



const TapeToolsComponent:  FC<TapeToolsProps>  = ({tape, setTape, savedTape, setSavedTape}) => {
    const saveTape = (event: React.MouseEvent<HTMLInputElement>) => {
        Animations.clickAnimation(event.target as HTMLInputElement);
        setSavedTape(JSON.parse(JSON.stringify(tape)));
        console.log("Tape saved");
    }

    const resetTape = (event: React.MouseEvent<HTMLInputElement>) => {
        Animations.clickAnimation(event.target as HTMLInputElement);
        setTape(JSON.parse(JSON.stringify(savedTape)));
        console.log("Tape reset");
    }

    const clearTape = (event: React.MouseEvent<HTMLInputElement>) => {
        Animations.clickAnimation(event.target as HTMLInputElement);
        setTape(TapeFunctions.createEmptyTape());
        console.log("Tape cleared");
    }

    return (
        <span className="toolsBlock">
            <div className="buttonWrapper"> <input type="image" className="toolBarButton" src={AssetsHelper.iconsDictionary.saveIcon} onClick={saveTape}/> </div>
            <div className="buttonWrapper"> <input type="image" className="toolBarButton" src={AssetsHelper.iconsDictionary.resetIcon} onClick={resetTape}/> </div>
            <div className="buttonWrapper"> <input type="image" className="toolBarButton" src={AssetsHelper.iconsDictionary.clearIcon} onClick={clearTape}/> </div>
        </span>
    );
};

export default TapeToolsComponent;
