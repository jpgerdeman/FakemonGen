export class Height {
    height: number;

    constructor(height_in_cm: number) {
        this.height = height_in_cm;
    }

    public static random() {
        let max_cm = 2000;
        let min_cm = 10;
        return new this( (Math.random() * (max_cm - min_cm)) + min_cm );
    }

    public value(): number {
        return this.height;
    }

    public toCm(): string {
        return this.height + " cm";
    }

    public toMeter(): string {
        return (this.height / 100).toFixed(2) + " m";
    }

    public toFeet(): string {
        let inches = Math.round( this.height / 2.54 );
        return Math.floor( inches / 12 ) + "\'" + (inches % 12) + "\"";
    }
}