import React, {FC} from "react";
import {Animations} from "../../utils/Animations";
import {TapeFunctions} from "../../models/tape/TapeFunctions";
import {AssetsHelper} from "../../utils/AssetsHelper";
import {Tape} from "../../models/tape/Tape";
import {Emulator} from "../../models/Emulator";
import {Machine} from "../../models/machine/Machine";

interface RunToolsProps {
    tape: Tape;
    setTape : (tape: Tape) => void;
    machine: Machine;
    setMachine: (machine: Machine) => void;
}


const RunToolsComponent:  FC<RunToolsProps>  = ({tape, setTape, machine, setMachine})=> {
    const runMachine = async (event: React.MouseEvent<HTMLInputElement>) => {
        console.log("Run machine")
        let element: HTMLInputElement = event.target as HTMLInputElement;
        let originalImage : string | null = element.getAttribute('src');
        if (originalImage)
            if (AssetsHelper.activatedIconsDictionary[originalImage])
                element.setAttribute('src', AssetsHelper.activatedIconsDictionary[originalImage]);

        setTape(Emulator.emulate(machine, tape));

        if (originalImage) element.setAttribute('src', originalImage);
    }

    const pauseMachine = (event: React.MouseEvent<HTMLInputElement>) => {
        Animations.clickAnimation(event.target as HTMLInputElement, 100, 0.5, 0.6);
        console.log("Pause machine")
    }

    const stopMachine = (event: React.MouseEvent<HTMLInputElement>) => {
        Animations.clickAnimation(event.target as HTMLInputElement);
        console.log("Stop machine")
    }


    return (
        <span className="toolsBlock">
            <div className="buttonWrapper"> <input type="image" className="toolBarButton" src={AssetsHelper.iconsDictionary.runIcon} onClick={runMachine}/> </div>
            <div className="buttonWrapper"> <input type="image" className="toolBarButton" src={AssetsHelper.iconsDictionary.pauseIcon} onClick={pauseMachine}/> </div>
            <div className="buttonWrapper"> <input type="image" className="toolBarButton" src={AssetsHelper.iconsDictionary.stopIcon} onClick={stopMachine}/> </div>
        </span>
    );
};

export default RunToolsComponent;