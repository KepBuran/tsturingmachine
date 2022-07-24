import React, {FC} from 'react';
import {TapeFunctions} from "../../models/tape/TapeFunctions";
import {Decoder} from "../../models/Decoder";
import {Tape} from "../../models/tape/Tape";
import {Machine} from "../../models/machine/Machine";

interface DecoderProps {
    machine: Machine;
    setMachine: (machine: Machine) => void;
}

const DecoderComponent: FC<DecoderProps>  = ({machine, setMachine}) => {

    const decodeFile = async (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log("Got file to decode");
        if(event.target.files)
            setMachine(await Decoder.decodeDikarev(event.target.files.item(0)));
        event.target.value = "";
        console.log("File was decoded");
    }


    return (
        <li className="menuElement">Decoder
            <ul className="subMenu decoderSubMenu">
                <li>
                    <label>
                        <input type="file" className="fileInput" onInput={decodeFile} accept=".txt"/>
                        Import Dikarev
                    </label>
                </li>
                <li>Export Dikarev</li>
            </ul>
        </li>
    );
};

export default DecoderComponent;