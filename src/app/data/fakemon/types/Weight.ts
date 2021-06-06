export class Weight {
  /**
   * The weight in gram
   * @private
   */
  private _metric: number;

  constructor(metric: number) {
    this._metric = metric;
  }

  public static random() {
    let max_gram = 100000;
    let min_gram = 100;
    return new this( (Math.random() * max_gram) + min_gram );
  }

  get value(): number {
    return this._metric;
  }

  public toGram(): string {
    return this._metric + " g";
  }

  public toKg(): string {
    return (this._metric / 1000).toFixed(1) + " kg";
  }

  public toLbs(): string {
    let weight_imperial = this._metric / 453.6 //lbs
    return weight_imperial.toFixed(2) + " lbs";
  }
}
