export class RandomThingList {
  things: Array<string> = [
    'packing peanuts',
    'shirt',
    'model car',
    'toothbrush',
    'purse',
    'vase',
    'stop sign',
    'chalk',
    'coasters',
    'controller',
    'screw',
    'flag',
    'couch',
    'drill press',
    'key chain',
    'monitor',
    'needle',
    'bed',
    'washing machine',
    'box',
    'bottle',
    'hair brush',
    'sailboat',
    'sharpie',
    'fridge',
    'white out',
    'lip gloss',
    'thread',
    'hanger',
    'photo album',
    'USB drive',
    'tweezers',
    'shampoo',
    'radio',
    'truck',
    'sponge',
    'perfume',
    'ice cube tray',
    'glasses',
    'bag',
    'button',
    'clay pot',
    'television',
    'piano',
    'bow',
    'canvas',
    'magnet',
    'thermometer',
    'window',
    'glow stick',
    'door',
    'sofa',
    'mop',
    'deodorant',
    'toilet',
    'keyboard',
    'mirror',
    'car',
    'shovel',
    'desk',
    'eye liner',
    'candy wrapper',
    'chocolate',
    'blouse',
    'paint brush',
    'face wash',
    'buckel',
    'slipper',
    'plastic fork',
    'ring',
    'doll',
    'stockings',
    'tissue box',
    'playing card',
    'clamp',
    'chapter book',
    'bookmark',
    'eraser',
    'balloon',
    'clothes',
    'credit card',
    'camera',
    'shawl',
    'pool stick',
    'cinder block',
    'computer',
    'zipper',
    'pillow',
    'glass',
    'helmet',
    'newspaper',
    'scotch tape',
    'thermometer',
    'cup',
    'head phones',
    'lego',
    'transformer',
    'backpack',
    'moon landing'
  ];

  public getRandom(): string
  {
    return this.things[Math.floor(Math.random() * this.things.length)];
  }
}
