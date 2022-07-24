import {Machine} from "./machine/Machine";
import {Tape} from "./tape/Tape";

export class Emulator {

    static emulate(machine: Machine, tape: Tape): Tape  {
        console.log("Starting emulation");
        console.log(machine.table);
        let stepsAmount = 0;

        let logger: string = "";
        let emulationTape: {[key: string]: string} = JSON.parse(JSON.stringify(tape.tape));
        let emulationPointer: number = tape.tapePointer;
        let currentState = "q1";

        //TODO Remove commands amount limit on emulate
        for (let i = 0; i<50000000; i++) {
            stepsAmount += 1;
            if(!emulationTape[emulationPointer.toString()]) emulationTape[emulationPointer.toString()] = '';
            let currentSymbol = emulationTape[emulationPointer.toString()];

            if (!machine.table[currentState]) {
                alert("There is no state "+currentState);
                break;
            }
            let command: string[] | undefined = machine.table[currentState][currentSymbol === '' ? ' ' : currentSymbol];
            if(!command) {
                alert("No command for "+currentState+":"+currentSymbol);
                break;
            }

            logger += command[0]+command[1]+command[2]+" ";

            emulationTape[emulationPointer] = command[0];
            emulationPointer += command[1] === '<' ? -1 :  command[1] === '>' ? 1 : 0;
            currentState = command[2];

            if (currentState === "!") break;
        }

        console.log(logger);
        if (stepsAmount === 1)
            alert("Emulator ended it work in 1 step");
        else
            alert("Emulator ended it work in "+stepsAmount+" steps");

        return new Tape(emulationTape, emulationPointer);
    }
}