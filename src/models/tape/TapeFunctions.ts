import {Tape} from "./Tape";

export class TapeFunctions{
    public static createEmptyTape(): Tape {
        let tape : {[key: string]: string} = {};
        for (let i: number = -25; i <= 25; i++) {
            tape[i.toString()] = ' ';
        }
        return new Tape(tape, 0);
    }

    static readonly renderDistance = 25; //amount of cells to render on one side

    public static goLeft(tape: Tape) : Tape {
        if (!tape.tape[tape.tapePointer-25]) tape.tape[tape.tapePointer-this.renderDistance] = '';
        return new Tape(tape.tape, tape.tapePointer-1);
    }

    public static goRight(tape: Tape) : Tape {
        if (!tape.tape[tape.tapePointer-25]) tape.tape[tape.tapePointer+this.renderDistance] = '';
        return new Tape(tape.tape, tape.tapePointer+1);
    }

    public static changeCell(index: string|null, value: string, tape: Tape) {
        value = value === '' ? ' ' : value;

        let newTape = tape.tape;
        if (index) newTape[index] = value;

        return new Tape(newTape, tape.tapePointer);
    }

}