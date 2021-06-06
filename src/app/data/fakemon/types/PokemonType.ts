export class PokemonType {
  private _primary: string = "";
  private _secondary: string = "";

  private static types = [
    'Normal', 'Fire', 'Water', 'Grass', 'Electric', 'Ice', 'Fighting', 'Poison', 'Ground', 'Flying', 'Psychic', 'Bug', 'Rock', 'Ghost', 'Dark', 'Dragon', 'Steel', 'Fairy'
  ];


  constructor(primary: string, secondary: string) {
    this._primary = primary;
    this._secondary = secondary;
  }

  public static random() {
   let getRandom = function() {
      return PokemonType.types[Math.floor(Math.random() * PokemonType.types.length)];
    };

    return new this( getRandom(), getRandom() );
  }

  public isMonoType(): boolean {
    return this.primary === this.secondary;
  }

  get primary(): string {
    return this._primary;
  }

  get secondary(): string {
    return this._secondary;
  }
}
