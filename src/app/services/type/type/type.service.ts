import { Injectable } from '@angular/core';
import { Type } from '@enums/type.enum';
import { Comparison } from '@models/comparison.model';

@Injectable({
  providedIn: 'root'
})
export class TypeService {

  constructor() { }

  public getTypes() {
    const types: Comparison[] = [
      new Comparison(Type.Neutral, 'assets/icon/type/neutral.png', '#e7f7f7', [], [Type.Mental]),
      new Comparison(Type.Fire, 'assets/icon/type/fire.png', '#e95c4d', [Type.Nature, Type.Crystal], [Type.Fire, Type.Water, Type.Earth]),
      new Comparison(Type.Water, 'assets/icon/type/water.png', '#43ccff', [Type.Fire, Type.Earth, Type.Digital], [Type.Water, Type.Nature, Type.Toxic]),
      new Comparison(Type.Nature, 'assets/icon/type/nature.png', '#aedf77', [Type.Water, Type.Earth], [Type.Fire, Type.Nature, Type.Toxic]),
      new Comparison(Type.Electric, 'assets/icon/type/electric.png', '#ffe275', [Type.Water, Type.Mental, Type.Wind, Type.Digital], [Type.Nature, Type.Electric, Type.Earth, Type.Crystal]),
      new Comparison(Type.Earth, 'assets/icon/type/earth.png', '#bb7a5c', [Type.Fire, Type.Electric, Type.Crystal], [Type.Water, Type.Nature, Type.Wind]),
      new Comparison(Type.Mental, 'assets/icon/type/mental.png', '#c469a4', [Type.Neutral, Type.Melee], [Type.Crystal]),
      new Comparison(Type.Wind, 'assets/icon/type/wind.png', '#01fab5', [Type.Toxic], [Type.Electric, Type.Wind]),
      new Comparison(Type.Digital, 'assets/icon/type/digital.png', '#a5c1c2', [Type.Mental, Type.Digital, Type.Melee], []),
      new Comparison(Type.Melee, 'assets/icon/type/melee.png', '#fa9360', [Type.Earth, Type.Crystal], [Type.Mental, Type.Melee]),
      new Comparison(Type.Crystal, 'assets/icon/type/crystal.png', '#eb4868', [Type.Electric, Type.Mental], [Type.Fire, Type.Earth]),
      new Comparison(Type.Toxic, 'assets/icon/type/toxic.png', '#5b555b', [Type.Water, Type.Nature], [Type.Earth, Type.Digital, Type.Crystal, Type.Toxic]),
    ];

    return types;
  }
}
