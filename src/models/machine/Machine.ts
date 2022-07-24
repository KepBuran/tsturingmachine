export class Machine {
    constructor(
        readonly table: {[key: string]: { [key: string]: string[]}} = {},
        readonly alphabet: string[] = ['0', '1']) {}
}