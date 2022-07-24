export class Tape {
    constructor(
        readonly tape: { [key: string]: string } = {},
        readonly tapePointer: number = 0) {}
}

