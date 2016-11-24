export class MmrBracket {
    prevThreshold: number
    threshold: number
    name: string
    label: string

    constructor(prevThreshold: number, threshold: number, name: string, label: string) {
        this.prevThreshold = prevThreshold;
        this.threshold = threshold;
        this.name = name;
        this.label = label;
    }
}
