import {Weight} from "./Weight";
import {Injectable} from "@angular/core";
import {PokemonType} from "./PokemonType";
import {Abilities} from "./Abilities";
import {Statistics} from "./Statistics";
import {Region} from "./Region";
import {Inspirations} from "./Inspirations";

@Injectable({
  providedIn: 'root'
})
export class Fakemon {
  private _weight: Weight;
  private _type: PokemonType;
  private _numEvolutions: number = 0;
  private _abilities: Abilities;
  private _stats: Statistics;
  private _region: Region;
  private _inspiration: any;

  constructor() {
    this._weight = Weight.random();
    this._type = PokemonType.random();
    this._numEvolutions = Math.floor(Math.random() * 2.9);
    this._abilities = Abilities.random();
    this._stats = Statistics.random();
    this._region = Region.random();
    this._inspiration = Inspirations.random();
  }

  get weight(): Weight {
    return this._weight;
  }

  get type(): PokemonType {
    return this._type;
  }

  get numEvolutions(): number {
    return this._numEvolutions;
  }

  get abilities(): Abilities {
    return this._abilities;
  }

  get stats(): Statistics {
    return this._stats;
  }

  get region(): Region {
    return this._region;
  }

  get inspiration(): any {
    return this._inspiration;
  }
}
