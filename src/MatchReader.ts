interface DataReader {
    read(): void;
    data: string[][];
}
// New
export class MatchReader {
    constructor(public reader: DataReader) {

    }
}