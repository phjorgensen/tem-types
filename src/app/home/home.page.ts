import { Component } from '@angular/core';
import { TypeService } from '@services/type/type/type.service';
import { Comparison } from '@models/comparison.model';
import { DisplayKind } from '@enums/display-kind.enum';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public types: Comparison[];

  constructor(
    private readonly typeService: TypeService,
  ) {
    this.types = this.typeService.getTypes();
  }

  public display(kind: any, type: Comparison) {
    if(type.isDisplayed(kind)) {
      type.hide();
    } else {
      this.hideAll();
      type.display(kind);
    }
  }

  public hideAll() {
    this.types.forEach(type => type.hide());
  }
}
