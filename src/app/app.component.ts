import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Equation Editor for Matlab';

  mScriptLines: string[];
  eScriptLines: any[];
  envLines: any[];

  generateMScriptLine(eScriptLine:any){}
  generateEScriptLine(mScriptLine:string, lineEnv:any) {}
  importMScript() {};
  importEScript() {};

  exportMScript() {};
  saveEScript() {};

  addLine() {};
  removeLine() {};
  openEquationDialog() {};
  submitEquation() {};
  iconClickHandler() {};

  validation() {};
}
