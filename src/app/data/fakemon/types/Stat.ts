export class Stat {
  name: string;
  value: number;
  maxvalue: number;


  constructor(name: string, value: number, maxvalue: number = 255) {
    this.name = name;
    this.value = value;
    this.maxvalue = maxvalue;
  }

  public static random( name: string ) {
    return new this( name, Math.floor(Math.random() * 250) + 5)
  }

  public percentage(): number {
    return this.value / this.maxvalue * 100;
  }

  public judge(): number {
    let verdict = 0; //no good
    if (this.value >= 1 && this.value <= 123) {
      verdict = 1; //decent
    } else if (this.value >= 124 && this.value <= 205) {
      verdict = 2; //pretty good
    } else if (this.value >= 206 && this.value <= 238) {
      verdict = 3; //very good
    } else if (this.value >= 239 && this.value <= 246) {
      verdict = 4; //fantastic
    } else if (this.value >= 274) {
      verdict = 5; //best
    }

    return verdict;
  }

}
