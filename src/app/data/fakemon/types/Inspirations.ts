import {Animal} from "./Animal.list";
import {Dinsoaur} from "./Dinosaur.list";
import {Food} from "./Food.list";
import {RandomThingListList} from "./RandomThingList.list";
import {MythicalCreatures} from "./MythicalCreatures.list";

export class Inspirations {
  list: Array<string>;

  constructor(list: Array<string>) {
    this.list = list;
  }

  public static random() {
    return new this([
        (new Animal()).getRandom(),
        (new Dinsoaur()).getRandom(),
        (new Food()).getRandom(),
        (new RandomThingListList()).getRandom(),
        (new MythicalCreatures()).getRandom()
      ]);
  }
}
