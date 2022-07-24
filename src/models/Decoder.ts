import {Machine} from "./machine/Machine";

async function readFileToString(inputFile: File) : Promise<string> {
    const fileReader = new FileReader();
    return await new Promise((resolve, reject) => {
        fileReader.onerror = () => {
            fileReader.abort();
            reject("Error");
        };
        fileReader.onload = () => {
            if (fileReader.result)
                resolve(fileReader.result.toString());
            reject("Error");
        };
        fileReader.readAsText(inputFile);
    });
}

export class Decoder {

    public static async decodeDikarev(inputFile: File | null): Promise<Machine> {
        //TODO make states without q (.split("q")[1])
        const table: {[key: string]: {[key: string]: string[]}}  = {};
        let alphabet: string[] = [];

        if (!inputFile) {
            alert("Couldn't decode file...")
            return new Machine();
        }
        let fileData: string = await readFileToString(inputFile);

        fileData.split("\n").forEach(row => {
            if (row === '') return;
            //Row example: q1,0:q2,1,L;

            let state = row.split(':')[0].split(',');
            let command = row.split(':')[1].split(',');
            let direction = command[2][0];
            direction = direction === 'L' ? '<' : direction === 'R' ? '>' : '.';

            if (!(state[1] in alphabet)) alphabet.push(state[1]);
            if (!(command[1] in alphabet)) alphabet.push(command[1]);

            if(!table[state[0]]) table[state[0]] = {};
            table[state[0]][state[1]] = [command[1],direction,command[0]];


        })

        return new Machine(table, alphabet);
    }



}