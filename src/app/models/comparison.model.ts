import { Type } from '@enums/type.enum';
import { DisplayKind } from '@enums/display-kind.enum';

export class Comparison {
  public name: Type;
  public strongAgainst: Type[];
  public weakAgainst: Type[];
  public displayStrong: boolean;
  public displayWeak: boolean;

  constructor(name: Type, strongAgainst: Type[] = [], weakAgainst: Type[] = []) {
    this.name = name;
    this.strongAgainst = strongAgainst;
    this.weakAgainst = weakAgainst;
    this.displayStrong = false;
    this.displayWeak = false;
  }

  public isDisplayed(kind: DisplayKind) {
    if(kind === DisplayKind.Strong) {
      return this.displayStrong;
    } else if (kind === DisplayKind.Weak) {
      return this.displayWeak;
    }
  }

  public display(kind: DisplayKind) {
    if(kind === DisplayKind.Strong) {
      this.displayStrong = true;
      this.displayWeak = false;
    } else if(kind === DisplayKind.Weak) {
      this.displayWeak = true;
      this.displayStrong = false;
    }
  }

  public hide() {
    this.displayStrong = false;
    this.displayWeak = false;
  }
}