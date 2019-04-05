import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorComponent } from './editor/editor.component';

import { MathquillService } from './mathquill.service';
import {FormsModule} from "@angular/forms";
import {MathButtonComponent} from "./math-button/math-button.component";

export { MathquillService } from './mathquill.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [EditorComponent, MathButtonComponent],
  exports: [EditorComponent]
})
export class MathquillAngular2Module {
  static forRoot() {
    return {
      ngModule: MathquillAngular2Module,
      providers: [MathquillService]
    }
  }
}
