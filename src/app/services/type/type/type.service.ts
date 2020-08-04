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
      new Comparison(Type.Neutral, [], [Type.Mental]),
      new Comparison(Type.Fire, [Type.Nature, Type.Crystal], [Type.Fire, Type.Water, Type.Earth]),
      new Comparison(Type.Water, [Type.Fire, Type.Earth, Type.Digital], [Type.Water, Type.Nature, Type.Toxic]),
      new Comparison(Type.Nature, [Type.Water, Type.Earth], [Type.Fire, Type.Nature, Type.Toxic]),
      new Comparison(Type.Electric, [Type.Water, Type.Mental, Type.Wind, Type.Digital], [Type.Nature, Type.Electric, Type.Earth, Type.Crystal]),
      new Comparison(Type.Earth, [Type.Fire, Type.Electric, Type.Crystal], [Type.Water, Type.Nature, Type.Wind]),
      new Comparison(Type.Mental, [Type.Neutral, Type.Melee], [Type.Crystal]),
      new Comparison(Type.Wind, [Type.Toxic], [Type.Electric, Type.Wind]),
      new Comparison(Type.Digital, [Type.Mental, Type.Digital, Type.Melee], []),
      new Comparison(Type.Melee, [Type.Earth, Type.Crystal], [Type.Mental, Type.Melee]),
      new Comparison(Type.Crystal, [Type.Electric, Type.Mental], [Type.Fire, Type.Earth]),
      new Comparison(Type.Toxic, [Type.Water, Type.Nature], [Type.Earth, Type.Digital, Type.Crystal, Type.Toxic]),
    ];

    return types;
  }
}
